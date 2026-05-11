import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug, SERVICES } from '@/lib/services-data'
import ServicePageClient from './ServicePageClient'

type Props = {
  params: { slug: string }
}

const serviceMetaDescriptions: Record<string, string> = {
  branding:
    'Création de votre identité visuelle complète à Troyes : logo, charte graphique, typographies et supports de communication. Agence L-BOOST Digitalweb.',
  'site-web':
    'Création et refonte de sites web professionnels à Troyes. Sites vitrines, e-commerce, Next.js. Livraison en 7 jours. Devis gratuit sous 2h.',
  'automatisations-ia':
    'Automatisez vos tâches répétitives avec l\'IA à Troyes : emails, relances, facturation, CRM. Gagnez 10h par semaine. Agence L-BOOST Digitalweb.',
  'agents-chatbots':
    'Chatbots IA et agents conversationnels sur-mesure à Troyes. Répondez à vos clients 24h/24, prenez des RDV automatiquement. L-BOOST Digitalweb.',
  'community-management':
    'Community management à Troyes : gestion de vos réseaux sociaux, création de contenu, stratégie Instagram, TikTok et Facebook. L-BOOST Digitalweb.',
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return { title: 'Service introuvable' }
  }

  const description =
    serviceMetaDescriptions[service.slug] ||
    `${service.hero.sousTitre} Agence web L-BOOST Digitalweb à Troyes. Devis gratuit sous 2h.`

  return {
    title: `${service.nom} à Troyes — Agence Web`,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.nom} à Troyes | L-BOOST Digitalweb`,
      description,
      url: `/services/${service.slug}`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  return <ServicePageClient />
}
