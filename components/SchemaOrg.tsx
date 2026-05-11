export default function SchemaOrg() {
  const baseUrl = 'https://www.lboost-digitalweb.fr'

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#business`,
        'name': 'L-BOOST Digitalweb',
        'description': 'Agence digitale à Troyes spécialisée en création de sites web premium, branding, SEO local et fidélisation client avec WalKin.',
        'url': baseUrl,
        'telephone': '+33756959078',
        'email': 'contact@lboost-digitalweb.fr',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Troyes',
          'addressLocality': 'Troyes',
          'addressRegion': 'Aube',
          'postalCode': '10000',
          'addressCountry': 'FR',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 48.2973,
          'longitude': 4.0744,
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Troyes' },
          { '@type': 'AdministrativeArea', 'name': 'Aube' },
          { '@type': 'AdministrativeArea', 'name': 'Grand Est' },
        ],
        'priceRange': '€€',
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '09:00',
          'closes': '19:00',
        },
        'sameAs': [
          'https://www.instagram.com/lboostdigitalweb/',
          'https://www.facebook.com/profile.php?id=61589342972841',
          'https://linktr.ee/LBOOSTDigitalweb',
        ],
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '5',
          'reviewCount': '47',
          'bestRating': '5',
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Services L-BOOST Digitalweb',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Création de site web Troyes',
                'description': 'Sites web premium Next.js livrés en 7 jours pour entreprises et commerçants à Troyes',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'SEO Local Troyes',
                'description': 'Référencement local pour commerces et entreprises du département de l\'Aube',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Branding Troyes',
                'description': 'Identité visuelle complète — logo, charte graphique, supports de communication',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'WalKin — Carte de fidélité digitale',
                'description': 'Solution de fidélisation client compatible Apple Wallet et Google Wallet pour commerçants troyens',
              },
            },
          ],
        },
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/og-image.jpg`,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        'url': baseUrl,
        'name': 'L-BOOST Digitalweb',
        'inLanguage': 'fr-FR',
        'publisher': { '@id': `${baseUrl}/#business` },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': `${baseUrl}/blog?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        'name': 'L-BOOST Digitalweb',
        'url': baseUrl,
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/og-image.jpg`,
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+33756959078',
          'contactType': 'customer service',
          'availableLanguage': 'French',
          'areaServed': 'FR',
        },
        'sameAs': [
          'https://www.instagram.com/lboostdigitalweb/',
          'https://www.facebook.com/profile.php?id=61589342972841',
          'https://linktr.ee/LBOOSTDigitalweb',
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
