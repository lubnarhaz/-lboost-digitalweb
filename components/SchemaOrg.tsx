export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://lboost-digitalweb.fr/#business',
        'name': 'L-BOOST Digitalweb',
        'description': 'Agence digitale à Troyes spécialisée en création de sites web premium, branding, SEO local et fidélisation client avec WalKin.',
        'url': 'https://lboost-digitalweb.fr',
        'telephone': '+33756959078',
        'email': 'laalililoubna41@gmail.com',
        'address': {
          '@type': 'PostalAddress',
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
        'sameAs': [],
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
          'url': 'https://lboost-digitalweb.fr/logo.png',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://lboost-digitalweb.fr/#website',
        'url': 'https://lboost-digitalweb.fr',
        'name': 'L-BOOST Digitalweb',
        'inLanguage': 'fr-FR',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://lboost-digitalweb.fr/blog?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
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
