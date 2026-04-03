import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import GridBot from '@/components/GridBot';

export const metadata: Metadata = {
  metadataBase: new URL('https://gridfoods.ae'),
  title: {
    default: 'Grid Foods LLC | Premium Frozen Food Supplier & Exporter Dubai, UAE',
    template: '%s | Grid Foods LLC — Dubai',
  },
  description:
    'Grid Foods LLC — Dubai\'s premium frozen food supplier, distributor & exporter. Halal-certified seafood, poultry, meat, dairy, frozen snacks & rice for HORECA, supermarkets, and bulk buyers. GCC & international export.',
  keywords: [
    'frozen food supplier Dubai',
    'frozen food exporter Dubai',
    'halal frozen food wholesale UAE',
    'seafood supplier UAE',
    'bulk food distributor Dubai',
    'frozen chicken supplier UAE',
    'halal food supplier Dubai',
    'HORECA food supplier UAE',
    'frozen meat supplier Dubai',
    'dairy products wholesale UAE',
    'frozen food export GCC',
    'bulk seafood supplier Dubai',
    'halal frozen chicken wholesale UAE GCC export',
    'cold chain logistics Dubai',
    'frozen food distribution UAE',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://gridfoods.ae',
    siteName: 'Grid Foods LLC',
    title: 'Grid Foods LLC | Premium Frozen Food Solutions — Import, Distribution & Export',
    description:
      'Dubai\'s premium frozen food supplier & exporter. Halal-certified products for HORECA, supermarkets, and bulk buyers. GCC & international export available.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grid Foods LLC — Premium Frozen Food Supplier & Exporter Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grid Foods LLC | Premium Frozen Food Supplier & Exporter Dubai',
    description: 'Premium frozen food import, distribution & export from Dubai, UAE. Halal certified, cold chain maintained.',
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured Data — Organization + LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'LocalBusiness'],
              '@id': 'https://gridfoods.ae/#organization',
              name: 'Grid Foods LLC',
              url: 'https://gridfoods.ae',
              logo: 'https://gridfoods.ae/assets/Grid_Foods_Logo.png',
              image: 'https://gridfoods.ae/og-image.jpg',
              description:
                'Dubai-based premium frozen food supplier, distributor, and exporter. Import, wholesale distribution, and export of halal-certified seafood, poultry, meat, dairy, frozen snacks, and rice.',
              foundingDate: '2023',
              areaServed: [
                { '@type': 'Country', name: 'United Arab Emirates' },
                { '@type': 'Country', name: 'Saudi Arabia' },
                { '@type': 'Country', name: 'Oman' },
                { '@type': 'Country', name: 'Qatar' },
                { '@type': 'Country', name: 'Bahrain' },
                { '@type': 'Country', name: 'Kuwait' },
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dubai',
                addressCountry: 'AE',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+971-50-123-4567',
                contactType: 'sales',
                availableLanguage: ['English', 'Arabic', 'Hindi'],
              },
              sameAs: [
                'https://www.linkedin.com/company/grid-foods-llc',
                'https://www.instagram.com/gridfoods',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Frozen Food Products',
                itemListElement: [
                  { '@type': 'OfferCatalog', name: 'Frozen Seafood' },
                  { '@type': 'OfferCatalog', name: 'Halal Poultry' },
                  { '@type': 'OfferCatalog', name: 'Meat Products' },
                  { '@type': 'OfferCatalog', name: 'Dairy Products' },
                  { '@type': 'OfferCatalog', name: 'Frozen Snacks' },
                  { '@type': 'OfferCatalog', name: 'Rice & Grains' },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="pt-[72px]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
        <GridBot />
      </body>
    </html>
  );
}
