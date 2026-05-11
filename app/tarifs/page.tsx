import { Metadata } from 'next'
import TarifsPageClient from './TarifsPageClient'

export const metadata: Metadata = {
  title: 'Tarifs — Création de Site Web à Troyes',
  description:
    'Découvrez nos formules de création de sites web à Troyes. Abonnement dès 79€/mois ou paiement unique dès 1 490€. Livraison en 7 jours. Devis gratuit sous 2h.',
  alternates: {
    canonical: '/tarifs',
  },
  openGraph: {
    title: 'Tarifs Création de Site Web | L-BOOST Digitalweb Troyes',
    description:
      'Formules claires sans mauvaise surprise. Abonnement ou paiement unique. Agence web à Troyes.',
    url: '/tarifs',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function TarifsPage() {
  return <TarifsPageClient />
}
