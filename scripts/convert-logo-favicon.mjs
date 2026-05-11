import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')
const source = join(publicDir, 'logo-source.png')

async function convert() {
  // Apple Touch Icon 180x180
  await sharp(source)
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'))
  console.log('apple-touch-icon.png (180x180) OK')

  // Favicon 32x32 (saved as .ico but it's PNG — browsers support this)
  await sharp(source)
    .resize(32, 32, { fit: 'cover' })
    .png()
    .toFile(join(publicDir, 'favicon.ico'))
  console.log('favicon.ico (32x32) OK')

  // Favicon 16x16
  await sharp(source)
    .resize(16, 16, { fit: 'cover' })
    .png()
    .toFile(join(publicDir, 'favicon-16x16.png'))
  console.log('favicon-16x16.png (16x16) OK')

  // Logo full size for site (optional, keep original quality)
  await sharp(source)
    .resize(512, 512, { fit: 'cover' })
    .png({ quality: 95 })
    .toFile(join(publicDir, 'logo-512.png'))
  console.log('logo-512.png (512x512) OK')

  console.log('\nDone!')
}

convert().catch(console.error)
