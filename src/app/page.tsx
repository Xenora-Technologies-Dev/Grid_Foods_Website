import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import CategoriesShowcase from '@/components/home/CategoriesShowcase';
import TrustSection from '@/components/home/TrustSection';
import AboutPreview from '@/components/home/AboutPreview';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Grid Foods LLC | Frozen Food Supplier Dubai, UAE',
  description:
    'Grid Foods LLC — Dubai\'s trusted frozen food trading and distribution company. Premium seafood, halal chicken, meat, dairy, frozen snacks, and rice for HORECA and bulk buyers across the UAE.',
  alternates: {
    canonical: 'https://gridfoods.ae',
  },
};

/**
 * Homepage — Grid Foods LLC
 * Sections: Hero → Categories → Trust → About Preview → CTA
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesShowcase />
      <TrustSection />
      <AboutPreview />
      <CTASection />
    </>
  );
}
