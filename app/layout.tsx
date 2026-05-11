import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ContactModalProvider } from '@/context/ContactModalContext'
import SchemaOrg from '@/components/SchemaOrg'
import MetaPixel from '@/components/MetaPixel'
import GoogleAnalytics from '@/components/GoogleAnalytics'

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
  metadataBase: new URL('https://www.lboost-digitalweb.fr'),
  title: {
    default: 'L-BOOST Digitalweb | Agence Web à Troyes — Sites, Branding & SEO',
    template: '%s | L-BOOST Digitalweb Troyes',
  },
  description:
    'Agence web à Troyes — création de sites premium, SEO local, branding et fidélisation client. Livraison en 7 jours. Devis gratuit sous 2h.',
  keywords: [
    'agence web Troyes',
    'création site internet Troyes',
    'SEO Troyes',
    'branding Troyes',
    'agence digitale Aube',
    'site web professionnel Troyes',
    'référencement local Troyes',
    'carte fidélité digitale Troyes',
    'agence digitale Troyes',
    'création site web Troyes',
  ],
  authors: [{ name: 'L-BOOST Digitalweb', url: 'https://www.lboost-digitalweb.fr' }],
  creator: 'L-BOOST Digitalweb',
  publisher: 'L-BOOST Digitalweb',
  alternates: {
    canonical: 'https://www.lboost-digitalweb.fr',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.lboost-digitalweb.fr',
    siteName: 'L-BOOST Digitalweb',
    title: 'L-BOOST Digitalweb | Agence Web à Troyes',
    description:
      'Agence digitale à Troyes. Sites web premium, SEO local, branding et fidélisation. Devis gratuit sous 2h.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'L-BOOST Digitalweb — Agence Web Troyes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L-BOOST Digitalweb | Agence Web Troyes',
    description: 'Création de sites web premium à Troyes. Branding, SEO, fidélisation. Devis gratuit.',
    images: ['/og-image.jpg'],
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="geo.region" content="FR-10" />
        <meta name="geo.placename" content="Troyes" />
        <meta name="geo.position" content="48.2973;4.0744" />
        <meta name="ICBM" content="48.2973, 4.0744" />
        <SchemaOrg />
        <GoogleAnalytics />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1492001085953322');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-inter antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1492001085953322&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <MetaPixel />
        <ContactModalProvider>
          {children}
        </ContactModalProvider>
      </body>
    </html>
  )
}
