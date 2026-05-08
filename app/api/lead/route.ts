import { NextResponse } from 'next/server'
import { forwardLead } from '@/lib/lead'
import type { LeadData } from '@/lib/lead'

export async function POST(req: Request) {
  try {
    const lead: LeadData = await req.json()

    if (!lead.entreprise || !lead.ville || !lead.probleme) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await forwardLead(lead)

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Lead route error:', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
