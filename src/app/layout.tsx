import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://gridfoods.ae'),
  title: {
    default: 'Grid Foods LLC | Frozen Food Supplier Dubai, UAE',
    template: '%s | Grid Foods LLC',
  },
  description:
    'Grid Foods LLC is Dubai\'s trusted frozen food trading and distribution company. Supplying premium seafood, poultry, meat, dairy, frozen snacks and rice to HORECA, supermarkets and bulk buyers across the UAE.',
  keywords: [
    'frozen food supplier Dubai',
    'seafood supplier UAE',
    'bulk food distributor Dubai',
    'frozen chicken supplier UAE',
    'halal food supplier Dubai',
    'HORECA food supplier UAE',
    'frozen meat supplier Dubai',
    'dairy products wholesale UAE',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://gridfoods.ae',
    siteName: 'Grid Foods LLC',
    title: 'Grid Foods LLC | Frozen Food Supplier Dubai, UAE',
    description:
      'Dubai\'s trusted frozen food trading and distribution company. Premium seafood, poultry, meat, dairy, and frozen snacks for HORECA and bulk buyers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grid Foods LLC — Frozen Food Supplier Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grid Foods LLC | Frozen Food Supplier Dubai',
    description: 'Premium frozen food trading and distribution in Dubai, UAE.',
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
    <html lang="en">
      <head>
        {/* Structured Data — Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Grid Foods LLC',
              url: 'https://gridfoods.ae',
              logo: 'https://gridfoods.ae/assets/Grid_Foods_Logo.png',
              description:
                'Dubai-based frozen food trading and distribution company supplying seafood, poultry, meat, dairy, and frozen snacks.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dubai',
                addressCountry: 'AE',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+971-50-123-4567',
                contactType: 'sales',
                availableLanguage: ['English', 'Arabic'],
              },
              sameAs: [
                'https://www.linkedin.com/company/grid-foods-llc',
                'https://www.instagram.com/gridfoods',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
