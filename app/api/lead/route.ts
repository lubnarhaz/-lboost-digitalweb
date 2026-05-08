import { NextResponse } from 'next/server'

const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL
const BREVO_API_KEY = process.env.BREVO_API_KEY
const WHATSAPP_WEBHOOK_URL = process.env.WHATSAPP_WEBHOOK_URL
const ADMIN_EMAIL = 'l-boost@hotmail.com'

interface LeadData {
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
    console.warn('GOOGLE_SHEET_URL not configured — skipping sheet')
    return
  }

  const res = await fetch(GOOGLE_SHEET_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  })

  if (!res.ok) {
    console.error('Google Sheet error:', await res.text())
  }
}

// ── Email via Brevo (ex-Sendinblue) ───────────────────────────────────────────
async function sendBrevoEmail(lead: LeadData) {
  if (!BREVO_API_KEY) {
    console.warn('BREVO_API_KEY not configured — skipping email')
    return
  }

  const subject = `[LEAD ${lead.scoring}] ${lead.entreprise} - ${lead.ville}`
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #C9A84C, #6B21A8); padding: 20px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Nouveau Lead ${lead.scoring}</h1>
        <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0;">L-BOOST DigitalWeb — Chatbot Lena</p>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border: 1px solid #eee; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333; width: 140px;">Entreprise</td>
            <td style="padding: 8px 0; color: #555;">${lead.entreprise}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Ville</td>
            <td style="padding: 8px 0; color: #555;">${lead.ville}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Probleme principal</td>
            <td style="padding: 8px 0; color: #555;">${lead.probleme}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Service interesse</td>
            <td style="padding: 8px 0; color: #555;">${lead.service_interesse}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Scoring</td>
            <td style="padding: 8px 0;">
              <span style="background: ${lead.scoring === 'CHAUD' ? '#ef4444' : lead.scoring === 'TIEDE' ? '#f59e0b' : '#6b7280'}; color: white; padding: 3px 10px; border-radius: 12px; font-size: 12px; font-weight: bold;">
                ${lead.scoring}
              </span>
            </td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border-left: 3px solid #C9A84C;">
          <p style="margin: 0; font-weight: bold; color: #333; font-size: 13px;">Resume de la conversation</p>
          <p style="margin: 8px 0 0; color: #555; font-size: 14px; line-height: 1.5;">${lead.resume_conversation}</p>
        </div>
        <div style="margin-top: 20px; text-align: center;">
          <a href="https://lboost-digitalweb.fr/#contact" style="display: inline-block; background: #C9A84C; color: white; padding: 10px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
            Voir le formulaire
          </a>
        </div>
      </div>
    </div>
  `

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: 'Lena — L-BOOST', email: 'contact@lboost-digitalweb.fr' },
      to: [{ email: ADMIN_EMAIL, name: 'Loubna — L-BOOST' }],
      subject,
      htmlContent,
    }),
  })

  if (!res.ok) {
    console.error('Brevo email error:', await res.text())
  }
}

// ── WhatsApp notification via webhook ─────────────────────────────────────────
async function sendWhatsAppNotif(lead: LeadData) {
  if (!WHATSAPP_WEBHOOK_URL) {
    console.warn('WHATSAPP_WEBHOOK_URL not configured — skipping WhatsApp')
    return
  }

  const message = [
    `Nouveau lead ${lead.scoring} — ${lead.entreprise} (${lead.ville})`,
    `Probleme : ${lead.probleme}`,
    `Service : ${lead.service_interesse}`,
    lead.resume_conversation,
  ].join('\n')

  const res = await fetch(WHATSAPP_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: '33756959078',
      message,
      lead,
    }),
  })

  if (!res.ok) {
    console.error('WhatsApp webhook error:', await res.text())
  }
}

// ── POST handler ──────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const lead: LeadData = await req.json()

    // Validate required fields
    if (!lead.entreprise || !lead.ville || !lead.probleme) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Fire all 3 notifications in parallel
    const results = await Promise.allSettled([
      sendToGoogleSheet(lead),
      sendBrevoEmail(lead),
      sendWhatsAppNotif(lead),
    ])

    // Log any failures
    results.forEach((r, i) => {
      if (r.status === 'rejected') {
        const channels = ['Google Sheet', 'Brevo Email', 'WhatsApp']
        console.error(`${channels[i]} failed:`, r.reason)
      }
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Lead route error:', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
