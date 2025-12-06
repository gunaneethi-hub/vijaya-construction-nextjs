import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Building Construction & Interior Designers in Perambalur | Vijaya Construction",
  description: "House construction and interior design services in Perambalur. Quality building, modern interiors, and trusted civil contractors – Vijaya Construction.",
  keywords: "Vijaya Construction, Building construction in Perambalur, Best Builders in Perambalur, Civil Contractors in Perambalur, House construction Perambalur, Interior designers Perambalur",
  authors: [{ name: "Vijaya Construction" }],
  robots: "index, follow",
  openGraph: {
    title: "Building Construction & Interior Designers in Perambalur | Vijaya Construction",
    description: "House construction and interior design services in Perambalur. Quality building, modern interiors, and trusted civil contractors – Vijaya Construction.",
    url: "https://www.vijayaconstructionpblr.com",
    siteName: "Vijaya Construction",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Construction & Interior Designers in Perambalur | Vijaya Construction",
    description: "House construction and interior design services in Perambalur. Quality building, modern interiors, and trusted civil contractors.",
  },
  alternates: {
    canonical: "https://www.vijayaconstructionpblr.com",
  },
  verification: {
    google: "G-X58DD0B397",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              "name": "Vijaya Construction",
              "image": "https://www.vijayaconstructionpblr.com/og-image.jpg",
              "url": "https://www.vijayaconstructionpblr.com",
              "telephone": "+919952128231",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Perambalur",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "description": "House construction and interior design services in Perambalur. Quality building, modern interiors, and trusted civil contractors – Vijaya Construction.",
              "priceRange": "₹₹",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X58DD0B397"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X58DD0B397');
            `,
          }}
        />
      </head>
      <body className="font-sans text-slate-900">{children}</body>
    </html>
  );
}
