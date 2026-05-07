import { NextResponse } from 'next/server'

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwkYtvO_-65toBky_2Kqoz3MQA2UKsAXoTZUKBJW6_FKLBDBk8Wpf8r6CVrVHFqDcge/exec'

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
