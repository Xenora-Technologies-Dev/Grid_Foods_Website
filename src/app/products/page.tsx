import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { categories, type ProductCategory } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Products | Frozen Food Wholesale Dubai — Grid Foods LLC',
  description:
    'Browse Grid Foods LLC product range: frozen seafood, halal chicken, meat, dairy, frozen snacks, and rice & grains. Wholesale supply across Dubai and the UAE.',
  keywords: [
    'frozen food wholesale Dubai',
    'food products UAE',
    'HORECA food supply Dubai',
    'bulk frozen food distributor UAE',
  ],
  alternates: {
    canonical: 'https://gridfoods.ae/products',
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy-gradient py-20 md:py-28 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge bg-accent/20 text-accent border border-accent/30 mb-5">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Premium Frozen Food Products for Wholesale
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Explore our comprehensive range of frozen foods sourced from certified global suppliers. Available in bulk quantities for HORECA, supermarkets, and distributors across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title text-center">All Product Categories</h2>
            <p className="section-subtitle mx-auto text-center">
              Click on any category to explore products, specifications, and ordering details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat: ProductCategory) => (
              <div key={cat.id} className="card group">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                  <div className="absolute top-4 left-4 text-4xl">{cat.icon}</div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h2 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Product items list */}
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Available Products
                    </h3>
                    <ul className="grid grid-cols-2 gap-y-1.5 gap-x-2">
                      {cat.items.map((item: string) => (
                        <li key={item} className="flex items-center gap-1.5 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/products/${cat.slug}`}
                    className="btn-primary text-sm w-full justify-center"
                  >
                    View Category <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk ordering CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Bulk Order?</h2>
            <p className="text-white/70 text-lg mb-8">
              Can't find what you're looking for? Contact our sales team for custom sourcing, special pricing, and large volume orders.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
