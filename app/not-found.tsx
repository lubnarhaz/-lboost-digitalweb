import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page introuvable',
  description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-[#C9A84C] text-8xl font-playfair font-bold mb-4">404</p>
        <h1 className="text-white text-2xl font-playfair font-bold mb-4">
          Page introuvable
        </h1>
        <p className="text-white/50 font-inter mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-gold px-6 py-3 rounded-xl text-sm font-bold"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/blog"
            className="border border-white/20 hover:border-[#C9A84C]/50 text-white/70 hover:text-[#C9A84C] px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            Lire le blog
          </Link>
          <a
            href="https://wa.me/33756959078?text=Bonjour%2C%20j%27ai%20besoin%20d%27aide..."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#25D366]/30 hover:border-[#25D366] text-[#25D366]/70 hover:text-[#25D366] px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </main>
  )
}
