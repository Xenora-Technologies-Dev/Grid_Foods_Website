import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import CategoriesShowcase from '@/components/home/CategoriesShowcase';

const HowItWorks = dynamic(() => import('@/components/home/HowItWorks'));
const TrustSection = dynamic(() => import('@/components/home/TrustSection'));
const AboutPreview = dynamic(() => import('@/components/home/AboutPreview'));
const ExportReady = dynamic(() => import('@/components/home/ExportReady'));
const BlogTeaser = dynamic(() => import('@/components/home/BlogTeaser'));
const CTASection = dynamic(() => import('@/components/home/CTASection'));

export const metadata: Metadata = {
  title: 'Grid Foods LLC | Premium Frozen Food Supplier & Exporter Dubai, UAE',
  description:
    'Grid Foods LLC — Dubai\'s premium frozen food supplier, distributor & exporter. Halal-certified seafood, poultry, meat, dairy, frozen snacks, and rice for HORECA, supermarkets, and bulk buyers. GCC & international export.',
  alternates: {
    canonical: 'https://gridfoods.ae',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <CategoriesShowcase />
      <HowItWorks />
      <TrustSection />
      <AboutPreview />
      <ExportReady />
      <BlogTeaser />
      <CTASection />
    </>
  );
}
