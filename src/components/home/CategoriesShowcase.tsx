'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { categories, type ProductCategory } from '@/lib/data';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * Product categories showcase grid on the homepage.
 */
export default function CategoriesShowcase() {
  return (
    <section className="section-pad bg-gray-50" id="products">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.span
            className="badge bg-accent/10 text-accent border border-accent/20 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What We Supply
          </motion.span>
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our Product Categories
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From frozen seafood to staple grains — we supply it all with quality assurance and reliable cold-chain logistics.
          </motion.p>
        </div>

        {/* Category Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categories.map((cat: ProductCategory) => (
            <motion.div key={cat.id} variants={cardVariants}>
              <Link href={`/products/${cat.slug}`} className="card group block h-full">
                {/* Category Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-3xl">{cat.icon}</span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Sample items */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cat.items.slice(0, 3).map((item: string) => (
                      <span key={item} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                    {cat.items.length > 3 && (
                      <span className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                        +{cat.items.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                    View Products <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/products" className="btn-outline text-base px-8 py-4">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
