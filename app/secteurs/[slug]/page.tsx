import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getSecteurBySlug, SECTEURS } from '@/lib/secteurs-data'
import SecteurPageClient from './SecteurPageClient'

type Props = {
  params: { slug: string }
}

const secteurMetaDescriptions: Record<string, string> = {
  'beaute-bien-etre':
    'Agence web pour salons de beauté, spas et instituts à Troyes. Site web, réservation en ligne, carte fidélité digitale et SEO local. L-BOOST Digitalweb.',
  restauration:
    'Agence web pour restaurants, bars et traiteurs à Troyes. Menu digital, commande en ligne, carte fidélité et visibilité Google. L-BOOST Digitalweb.',
  immobilier:
    'Agence web pour professionnels de l\'immobilier à Troyes. Site vitrine premium, annonces, SEO local et génération de mandats. L-BOOST Digitalweb.',
  'professionnels-locaux':
    'Agence web pour artisans, commerces et professions libérales à Troyes. Site internet, SEO local, Google Business. L-BOOST Digitalweb.',
  'coaching-consulting':
    'Agence web pour coachs et consultants à Troyes. Site vitrine, tunnel de vente, prise de RDV automatisée et personal branding. L-BOOST Digitalweb.',
  ecommerce:
    'Agence web e-commerce à Troyes. Création de boutique en ligne, Shopify, WooCommerce, stratégie digitale et acquisition clients. L-BOOST Digitalweb.',
}

export function generateStaticParams() {
  return SECTEURS.map((secteur) => ({
    slug: secteur.slug,
  }))
}

export function generateMetadata({ params }: Props): Metadata {
  const secteur = getSecteurBySlug(params.slug)

  if (!secteur) {
    return { title: 'Secteur introuvable' }
  }

  const description =
    secteurMetaDescriptions[secteur.slug] ||
    `${secteur.hero.sousTitre} Agence web L-BOOST Digitalweb à Troyes. Devis gratuit sous 2h.`

  return {
    title: `Agence Web ${secteur.nom} à Troyes`,
    description,
    alternates: {
      canonical: `/secteurs/${secteur.slug}`,
    },
    openGraph: {
      title: `${secteur.nom} — Agence Web Troyes | L-BOOST Digitalweb`,
      description,
      url: `/secteurs/${secteur.slug}`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default function SecteurPage({ params }: Props) {
  const secteur = getSecteurBySlug(params.slug)
  if (!secteur) notFound()

  return <SecteurPageClient />
}
