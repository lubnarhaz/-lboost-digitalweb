import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lboost-digitalweb.fr'),
  title: 'L-BOOST DigitalWeb | Agence Digitale Premium France',
  description:
    'L-BOOST DigitalWeb — Agence digitale haut de gamme spécialisée dans la création de sites web Next.js, branding, automatisations IA, chatbots et community management pour TPE/PME françaises.',
  keywords: [
    'agence digitale',
    'création site web',
    'Next.js',
    'branding',
    'community management',
    'chatbot IA',
    'automatisation',
    'carte fidélité digitale',
    'TPE PME',
    'France',
    'L-BOOST',
  ],
  authors: [{ name: 'L-BOOST DigitalWeb', url: 'https://lboost-digitalweb.fr' }],
  creator: 'L-BOOST DigitalWeb',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://lboost-digitalweb.fr',
    siteName: 'L-BOOST DigitalWeb',
    title: 'L-BOOST DigitalWeb | Agence Digitale Premium France',
    description:
      'Transformez votre présence digitale avec L-BOOST : sites web Next.js, branding premium, IA & chatbots, community management.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'L-BOOST DigitalWeb — Agence Digitale Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L-BOOST DigitalWeb | Agence Digitale Premium France',
    description: 'Transformez votre présence digitale avec L-BOOST.',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
