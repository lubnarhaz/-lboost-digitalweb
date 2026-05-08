import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WalKin — Carte de Fidélité Digitale | L-BOOST Troyes',
  description:
    'WalKin : la carte de fidélité digitale pour commerçants à Troyes. Compatible Apple Wallet & Google Wallet, push notifications, dashboard temps réel. Essai gratuit.',
  keywords: [
    'carte fidélité digitale Troyes',
    'fidélisation client Troyes',
    'Apple Wallet commerçant Troyes',
    'Google Wallet fidélité',
    'programme fidélité Aube',
    'WalKin carte fidélité',
    'fidélisation numérique Troyes',
  ],
  alternates: {
    canonical: 'https://lboost-digitalweb.fr/walkin',
  },
  openGraph: {
    title: 'WalKin — Carte de Fidélité Digitale | L-BOOST Troyes',
    description:
      'Solution de fidélisation pour commerces à Troyes. Carte digitale Apple/Google Wallet, push notifications, analytics temps réel.',
    url: 'https://lboost-digitalweb.fr/walkin',
    images: [
      {
        url: '/og-walkin.jpg',
        width: 1200,
        height: 630,
        alt: 'WalKin — Carte de fidélité digitale pour commerçants à Troyes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WalKin — Fidélisation Digitale | L-BOOST Troyes',
    description: 'Carte de fidélité digitale pour commerçants à Troyes. Apple Wallet, push notifs, zéro app.',
    images: ['/og-walkin.jpg'],
  },
}

export default function WalkinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
