import { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services-data'
import { SECTEURS } from '@/lib/secteurs-data'
import { articles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lboost-digitalweb.fr'
  const lastModified = new Date()

  const serviceUrls: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const secteurUrls: MetadataRoute.Sitemap = SECTEURS.map((secteur) => ({
    url: `${baseUrl}/secteurs/${secteur.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/walkin`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...serviceUrls,
    ...secteurUrls,
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...articles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-de-confidentialite`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
