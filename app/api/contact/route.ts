import { NextResponse } from 'next/server'

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzg5kLK04NeTW6DmxrdLpmF_ZgpTzOAMmOvxXtImRJ0l_4_5ymKkdawLcyKY0EvkZTJ/exec'

export async function POST(req: Request) {
  const body = await req.json()

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch (e) {
    console.error('Google Apps Script error:', e)
  }

  return NextResponse.json({ ok: true })
}
