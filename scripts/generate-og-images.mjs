import { chromium } from 'playwright'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { mkdirSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

async function generateOgImage() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  // ── OG IMAGE 1200x630 ──
  await page.setViewportSize({ width: 1200, height: 630 })
  await page.setContent(`
    <html>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 1200px; height: 630px;
          background: #0A0A0A;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .glow1 {
          position: absolute; top: -120px; right: -80px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);
          border-radius: 50%;
        }
        .glow2 {
          position: absolute; bottom: -100px; left: -60px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
          border-radius: 50%;
        }
        .line-top {
          position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, transparent, #C9A84C, transparent);
        }
        .line-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, transparent, #C9A84C, transparent);
        }
        .content {
          position: relative; z-index: 2;
          text-align: center; padding: 0 80px;
        }
        .logo {
          font-family: 'Playfair Display', serif;
          font-weight: 800; font-size: 52px;
          color: #C9A84C;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }
        .sub {
          font-family: 'Inter', sans-serif;
          font-weight: 400; font-size: 14px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 6px; text-transform: uppercase;
          margin-bottom: 40px;
        }
        .divider {
          width: 60px; height: 2px;
          background: #C9A84C; margin: 0 auto 36px;
        }
        .title {
          font-family: 'Playfair Display', serif;
          font-weight: 700; font-size: 36px;
          color: white;
          line-height: 1.3;
          margin-bottom: 20px;
        }
        .title span { color: #C9A84C; }
        .tagline {
          font-family: 'Inter', sans-serif;
          font-weight: 500; font-size: 17px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.5px;
        }
        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(201,168,76,0.12);
          border: 1px solid rgba(201,168,76,0.25);
          color: #C9A84C;
          font-family: 'Inter', sans-serif;
          font-weight: 600; font-size: 12px;
          padding: 8px 20px; border-radius: 100px;
          letter-spacing: 2px; text-transform: uppercase;
          margin-bottom: 30px;
        }
        .dot { width: 6px; height: 6px; border-radius: 50%; background: #C9A84C; }
        .url {
          position: absolute; bottom: 28px; left: 0; right: 0;
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-weight: 400; font-size: 14px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 1px;
        }
      </style>
    </head>
    <body>
      <div class="glow1"></div>
      <div class="glow2"></div>
      <div class="line-top"></div>
      <div class="line-bottom"></div>
      <div class="content">
        <div class="badge"><div class="dot"></div>Agence Web Troyes</div>
        <div class="logo">L-BOOST</div>
        <div class="sub">DigitalWeb</div>
        <div class="divider"></div>
        <div class="title">Sites Premium · SEO Local · <span>Branding</span></div>
        <div class="tagline">Livraison en 7 jours · Devis gratuit sous 2h</div>
      </div>
      <div class="url">www.lboost-digitalweb.fr</div>
    </body>
    </html>
  `)
  await page.waitForTimeout(1000)
  await page.screenshot({ path: join(publicDir, 'og-image.jpg'), type: 'jpeg', quality: 92 })
  console.log('✅ og-image.jpg (1200x630)')

  // ── OG WALKIN 1200x630 ──
  await page.setContent(`
    <html>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 1200px; height: 630px;
          background: linear-gradient(135deg, #0A0A0A 0%, #0D1117 50%, #1A1A2E 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 60%);
          border-radius: 50%;
        }
        .line-top {
          position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, transparent, #C9A84C, transparent);
        }
        .content {
          position: relative; z-index: 2;
          text-align: center; padding: 0 80px;
        }
        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(201,168,76,0.12);
          border: 1px solid rgba(201,168,76,0.25);
          color: #C9A84C;
          font-family: 'Inter', sans-serif;
          font-weight: 600; font-size: 12px;
          padding: 8px 20px; border-radius: 100px;
          letter-spacing: 2px; text-transform: uppercase;
          margin-bottom: 30px;
        }
        .walkin {
          font-family: 'Playfair Display', serif;
          font-weight: 800; font-size: 72px;
          color: #C9A84C;
          letter-spacing: 3px;
          margin-bottom: 12px;
        }
        .divider {
          width: 60px; height: 2px;
          background: #C9A84C; margin: 0 auto 28px;
        }
        .title {
          font-family: 'Playfair Display', serif;
          font-weight: 700; font-size: 32px;
          color: white; line-height: 1.3;
          margin-bottom: 18px;
        }
        .features {
          font-family: 'Inter', sans-serif;
          font-weight: 500; font-size: 16px;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.5px;
        }
        .features span { color: rgba(201,168,76,0.7); }
        .by {
          position: absolute; bottom: 28px; left: 0; right: 0;
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-weight: 400; font-size: 13px;
          color: rgba(255,255,255,0.2);
        }
        .by b { color: rgba(201,168,76,0.5); }
      </style>
    </head>
    <body>
      <div class="glow"></div>
      <div class="line-top"></div>
      <div class="content">
        <div class="badge">Carte de fidelite digitale</div>
        <div class="walkin">WalKin</div>
        <div class="divider"></div>
        <div class="title">La fidelisation qui parle a vos clients</div>
        <div class="features">Apple Wallet <span>&</span> Google Wallet · Push Notifications · Dashboard</div>
      </div>
      <div class="by">par <b>L-BOOST Digitalweb</b> · Troyes</div>
    </body>
    </html>
  `)
  await page.waitForTimeout(1000)
  await page.screenshot({ path: join(publicDir, 'og-walkin.jpg'), type: 'jpeg', quality: 92 })
  console.log('✅ og-walkin.jpg (1200x630)')

  // ── APPLE TOUCH ICON 180x180 ──
  await page.setViewportSize({ width: 180, height: 180 })
  await page.setContent(`
    <html>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 180px; height: 180px;
          background: #0A0A0A;
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .letter {
          font-family: 'Playfair Display', serif;
          font-weight: 800; font-size: 100px;
          color: #C9A84C;
          line-height: 1;
        }
        .line {
          position: absolute; bottom: 38px;
          left: 50%; transform: translateX(-50%);
          width: 70px; height: 4px;
          background: rgba(201,168,76,0.5);
          border-radius: 2px;
        }
      </style>
    </head>
    <body>
      <div class="letter">L</div>
      <div class="line"></div>
    </body>
    </html>
  `)
  await page.waitForTimeout(500)
  await page.screenshot({ path: join(publicDir, 'apple-touch-icon.png'), type: 'png' })
  console.log('✅ apple-touch-icon.png (180x180)')

  // ── FAVICON 32x32 → ICO (PNG fallback since playwright can't generate .ico) ──
  await page.setViewportSize({ width: 32, height: 32 })
  await page.setContent(`
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          width: 32px; height: 32px;
          background: #0A0A0A;
          display: flex; align-items: center; justify-content: center;
          border-radius: 6px;
        }
        .letter {
          font-family: Georgia, 'Times New Roman', serif;
          font-weight: bold; font-size: 20px;
          color: #C9A84C;
          line-height: 1;
        }
      </style>
    </head>
    <body>
      <div class="letter">L</div>
    </body>
    </html>
  `)
  await page.waitForTimeout(500)
  // Save as PNG (browsers accept PNG favicons)
  await page.screenshot({ path: join(publicDir, 'favicon.ico'), type: 'png' })
  console.log('✅ favicon.ico (32x32 PNG)')

  await browser.close()
  console.log('\n🎉 Toutes les images ont été générées dans public/')
}

generateOgImage().catch(console.error)
