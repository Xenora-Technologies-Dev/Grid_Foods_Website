import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { categories, companyInfo, type ProductCategory } from '@/lib/data';

interface PageProps {
  params: { slug: string };
}

/**
 * Generate static paths for all product categories at build time.
 */
export function generateStaticParams() {
  return categories.map((cat: ProductCategory) => ({ slug: cat.slug }));
}

/**
 * Generate per-category SEO metadata.
 */
export function generateMetadata({ params }: PageProps): Metadata {
  const category = categories.find((c: ProductCategory) => c.slug === params.slug);
  if (!category) return { title: 'Product Not Found' };

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    keywords: category.keywords,
    alternates: {
      canonical: `https://gridfoods.ae/products/${category.slug}`,
    },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      images: [{ url: category.image, alt: category.name }],
    },
  };
}

export default function ProductCategoryPage({ params }: PageProps) {
  const category = categories.find((c: ProductCategory) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  // Get other categories for cross-linking
  const otherCategories = categories.filter((c: ProductCategory) => c.id !== category.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb + Page Hero */}
      <section className="bg-navy-gradient py-20 md:py-28 text-white">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-4">{category.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                {category.name}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {category.longDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Request Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <a href={`tel:${companyInfo.phone}`} className="btn-secondary flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Items Grid */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="mb-10">
            <h2 className="section-title mb-3">Available {category.name} Products</h2>
            <p className="text-gray-600">
              All products are available for wholesale and bulk purchase. Contact us for pricing, MOQ, and custom orders.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.items.map((item: string, index: number) => (
              <div
                key={item}
                className="bg-gray-50 border border-gray-100 hover:border-accent/40 hover:bg-orange-50/50 rounded-xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-200 group cursor-default"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  {item}
                </span>
                <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  In Stock
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features of this category */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">
                Why Source {category.name} from Grid Foods?
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  'Sourced from internationally certified suppliers',
                  '100% Halal certified products',
                  'Maintained cold chain from source to delivery',
                  'Competitive wholesale and bulk pricing',
                  'Flexible minimum order quantities',
                  'UAE-wide delivery with temperature control',
                  'Compliance with UAE food safety regulations',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Pricing <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Request a Quote</h3>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Product Category', value: category.name },
                  { label: 'Order Type', value: 'Wholesale / Bulk' },
                  { label: 'Delivery', value: 'UAE-wide Cold Chain' },
                  { label: 'Certification', value: 'Halal + Food Safety' },
                  { label: 'MOQ', value: 'Flexible — Contact Sales' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-white/60 text-sm">{label}</span>
                    <span className="text-white text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary mt-6 w-full justify-center">
                Send Inquiry <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <h2 className="section-title mb-8">Explore Other Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((cat: ProductCategory) => (
              <Link key={cat.id} href={`/products/${cat.slug}`} className="card group flex gap-4 p-5 items-center">
                <div className="w-14 h-14 relative rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-primary group-hover:text-accent transition-colors">
                    {cat.icon} {cat.name}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5 line-clamp-1">{cat.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-accent ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
