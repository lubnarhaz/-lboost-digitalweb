const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL
const BREVO_API_KEY = process.env.BREVO_API_KEY
const WHATSAPP_WEBHOOK_URL = process.env.WHATSAPP_WEBHOOK_URL
const ADMIN_EMAIL = 'l-boost@hotmail.com'

export interface LeadData {
  entreprise: string
  ville: string
  probleme: string
  service_interesse: string
  scoring: string
  resume_conversation: string
}

// ── Google Sheet via Apps Script ───────────────────────────────────────────────
async function sendToGoogleSheet(lead: LeadData) {
  if (!GOOGLE_SHEET_URL) {
    console.warn('[Lead] GOOGLE_SHEET_URL not configured — skipping')
    return
  }

  console.log('[Lead] Sending to Google Sheet...')
  const res = await fetch(GOOGLE_SHEET_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('[Lead] Google Sheet error:', text)
  } else {
    console.log('[Lead] Google Sheet OK')
  }
}

// ── Email via Brevo ───────────────────────────────────────────────────────────
async function sendBrevoEmail(lead: LeadData) {
  if (!BREVO_API_KEY) {
    console.warn('[Lead] BREVO_API_KEY not configured — skipping')
    return
  }

  const subject = `[LEAD ${lead.scoring}] ${lead.entreprise} - ${lead.ville}`
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #C9A84C, #6B21A8); padding: 20px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Nouveau Lead ${lead.scoring}</h1>
        <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0;">L-BOOST DigitalWeb — Chatbot Léna</p>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border: 1px solid #eee; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333; width: 140px;">Entreprise</td><td style="padding: 8px 0; color: #555;">${lead.entreprise}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Ville</td><td style="padding: 8px 0; color: #555;">${lead.ville}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Problème principal</td><td style="padding: 8px 0; color: #555;">${lead.probleme}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Service intéressé</td><td style="padding: 8px 0; color: #555;">${lead.service_interesse}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold; color: #333;">Scoring</td><td style="padding: 8px 0;"><span style="background: ${lead.scoring === 'CHAUD' ? '#ef4444' : lead.scoring === 'TIEDE' ? '#f59e0b' : '#6b7280'}; color: white; padding: 3px 10px; border-radius: 12px; font-size: 12px; font-weight: bold;">${lead.scoring}</span></td></tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border-left: 3px solid #C9A84C;">
          <p style="margin: 0; font-weight: bold; color: #333; font-size: 13px;">Résumé de la conversation</p>
          <p style="margin: 8px 0 0; color: #555; font-size: 14px; line-height: 1.5;">${lead.resume_conversation}</p>
        </div>
      </div>
    </div>
  `

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'api-key': BREVO_API_KEY },
    body: JSON.stringify({
      sender: { name: 'Léna — L-BOOST', email: 'contact@lboost-digitalweb.fr' },
      to: [{ email: ADMIN_EMAIL, name: 'Loubna — L-BOOST' }],
      subject,
      htmlContent,
    }),
  })

  if (!res.ok) {
    console.error('[Lead] Brevo error:', await res.text())
  } else {
    console.log('[Lead] Brevo email OK')
  }
}

// ── WhatsApp notification ─────────────────────────────────────────────────────
async function sendWhatsAppNotif(lead: LeadData) {
  if (!WHATSAPP_WEBHOOK_URL) {
    console.warn('[Lead] WHATSAPP_WEBHOOK_URL not configured — skipping')
    return
  }

  const message = [
    `Nouveau lead ${lead.scoring} — ${lead.entreprise} (${lead.ville})`,
    `Problème : ${lead.probleme}`,
    `Service : ${lead.service_interesse}`,
    lead.resume_conversation,
  ].join('\n')

  const res = await fetch(WHATSAPP_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone: '33756959078', message, lead }),
  })

  if (!res.ok) {
    console.error('[Lead] WhatsApp error:', await res.text())
  } else {
    console.log('[Lead] WhatsApp OK')
  }
}

// ── Main function — sends lead to all channels ───────────────────────────────
export async function forwardLead(lead: LeadData): Promise<void> {
  console.log('[Lead] Processing lead:', lead.entreprise, lead.ville, lead.scoring)

  const results = await Promise.allSettled([
    sendToGoogleSheet(lead),
    sendBrevoEmail(lead),
    sendWhatsAppNotif(lead),
  ])

  results.forEach((r, i) => {
    if (r.status === 'rejected') {
      const ch = ['Google Sheet', 'Brevo', 'WhatsApp']
      console.error(`[Lead] ${ch[i]} failed:`, r.reason)
    }
  })
}

// ── Parse LEAD_DATA from text and forward ─────────────────────────────────────
export async function extractAndForwardLead(text: string): Promise<string> {
  const match = text.match(/<LEAD_DATA>([\s\S]*?)<\/LEAD_DATA>/)
  if (!match) return text

  try {
    const lead: LeadData = JSON.parse(match[1])
    await forwardLead(lead)
    console.log('[Lead] Successfully forwarded')
  } catch (e) {
    console.error('[Lead] Parse/forward error:', e)
  }

  return text.replace(/<LEAD_DATA>[\s\S]*?<\/LEAD_DATA>/g, '').trim()
}
