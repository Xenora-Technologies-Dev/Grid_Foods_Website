'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Camera } from 'lucide-react';
import { categories } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&auto=format&fit=crop', alt: 'Premium frozen seafood selection', category: 'Seafood' },
  { src: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&auto=format&fit=crop', alt: 'Halal certified poultry products', category: 'Poultry' },
  { src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop', alt: 'Premium meat cuts', category: 'Meat' },
  { src: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop', alt: 'Dairy products range', category: 'Dairy' },
  { src: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop', alt: 'Frozen snacks and appetizers', category: 'Snacks' },
  { src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop', alt: 'Premium rice and grains', category: 'Rice & Grains' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop', alt: 'Warehouse operations', category: 'Operations' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop', alt: 'Dubai food distribution', category: 'Distribution' },
  { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop', alt: 'Export shipping containers', category: 'Export' },
];

export default function GalleryPage() {
  return (
    <main className="bg-primary text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dark-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20 mb-6">
              <Camera className="w-4 h-4" /> Visual Showcase
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Product <span className="text-accent">Gallery</span>
            </h1>
            <p className="text-lg text-gray-400">
              Explore our product range, warehouse facilities, and operations through our visual showcase.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 hover:border-accent/20 transition-all"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-accent text-xs font-medium bg-accent/20 px-2.5 py-0.5 rounded-full">{image.category}</span>
                  <p className="text-white font-medium mt-2 text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Product <span className="text-accent">Categories</span>
            </h2>
            <p className="text-gray-400">Click on a category to explore our full product range.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={`/products/${cat.slug}`} className="group block">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 hover:border-accent/20 transition-all">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{cat.icon}</span>
                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{cat.name}</h3>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">{cat.items.length} products available</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Like What You <span className="text-accent">See</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Contact us for product samples, wholesale pricing, or a custom product catalog for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Request Catalog <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
