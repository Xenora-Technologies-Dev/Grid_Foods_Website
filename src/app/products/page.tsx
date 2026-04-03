'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Globe, Search } from 'lucide-react';
import { categories } from '@/lib/data';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function ProductsPage() {
  const [search, setSearch] = useState('');

  const filtered = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(search.toLowerCase()) ||
      cat.items.some((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  );

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Explore our comprehensive range of premium frozen food products — sourced from certified international suppliers and available for wholesale distribution and GCC export.
            </p>
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search products or categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-surface border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((cat, i) => (
              <motion.div
                key={cat.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={`/products/${cat.slug}`} className="group block">
                  <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="text-2xl">{cat.icon}</span>
                        {cat.exportAvailable && (
                          <span className="bg-accent/90 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                            <Globe className="w-3 h-3" /> Export Ready
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="text-2xl font-bold text-white">{cat.name}</h2>
                        <p className="text-white/70 text-sm mt-1">{cat.items.length} products</p>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{cat.description}</p>
                      {/* Sample items */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cat.items.slice(0, 4).map((item) => (
                          <span key={item.name} className="text-xs bg-white/5 text-gray-300 px-2.5 py-1 rounded-full">
                            {item.name}
                          </span>
                        ))}
                        {cat.items.length > 4 && (
                          <span className="text-xs text-accent font-medium px-2.5 py-1">+{cat.items.length - 4} more</span>
                        )}
                      </div>
                      <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                        View All Products <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-gray-400 text-lg">No products found matching &quot;{search}&quot;</p>
              <button onClick={() => setSearch('')} className="text-accent mt-2 hover:underline">
                Clear search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a <span className="text-accent">Custom Quote</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Contact our team for wholesale pricing, bulk orders, or export inquiries. We respond within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
