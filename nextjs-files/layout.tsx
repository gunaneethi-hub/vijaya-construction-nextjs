import './globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vijayaconstructionpblr.com'),
  title: {
    default: 'Vijaya Construction | Building Contractors in Perambalur',
    template: '%s | Vijaya Construction',
  },
  description:
    'Vijaya Construction provides house construction, interior design, renovation and turnkey civil works across Perambalur. Trusted workmanship, transparent pricing and timely delivery.',
  keywords: [
    'Vijaya Construction',
    'building construction Perambalur',
    'house construction Perambalur',
    'interior designers Perambalur',
    'civil contractors Perambalur',
  ],
  authors: [{ name: 'Vijaya Construction' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Vijaya Construction | Building Construction in Perambalur',
    description:
      'House construction, interior design, renovation and turnkey civil works in Perambalur.',
    url: 'https://www.vijayaconstructionpblr.com',
    siteName: 'Vijaya Construction',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vijaya Construction - Perambalur',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijaya Construction | Building Construction in Perambalur',
    description:
      'House construction, interior design, renovation and turnkey civil works in Perambalur.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.vijayaconstructionpblr.com',
  },
  // If you have a Search Console verification token, paste it below (replace the placeholder)
  // Example: verification: { google: 'abc123xyz' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Vijaya Construction',
    image: 'https://www.vijayaconstructionpblr.com/og-image.jpg',
    url: 'https://www.vijayaconstructionpblr.com',
    telephone: '+919952128231',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Elambalur',
      addressLocality: 'Perambalur',
      addressRegion: 'Tamil Nadu',
      postalCode: '621212',
      addressCountry: 'IN',
    },
    description:
      'Vijaya Construction provides building construction, interior design, renovation and turnkey civil works in Perambalur.',
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  } as const;

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />

        {/* Favicon (ensure public/favicon.ico exists) */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics - replace G-XXXX with your GA4 ID if different */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X58DD0B397"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-X58DD0B397');`}
        </Script>
      </head>
      <body className="font-sans text-slate-900">
        {children}
      </body>
    </html>
  );
}
