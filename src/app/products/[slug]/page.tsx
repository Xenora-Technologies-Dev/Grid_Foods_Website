'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Globe, CheckCircle, Package, Phone } from 'lucide-react';
import { categories, companyInfo } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const category = categories.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  const exportItems = category.items.filter((item) => item.exportReady);
  const otherCategories = categories.filter((cat) => cat.slug !== params.slug).slice(0, 3);

  return (
    <main className="bg-primary text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Products
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{category.icon}</span>
              {category.exportAvailable && (
                <span className="bg-accent/20 text-accent text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1.5 border border-accent/30">
                  <Globe className="w-4 h-4" /> Export Available
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg text-gray-400 leading-relaxed">{category.longDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-10"
          >
            Available <span className="text-accent">Products</span>
            <span className="text-gray-500 text-lg ml-3">({category.items.length} items)</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {category.items.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface border border-white/5 rounded-xl p-5 hover:border-accent/20 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-accent transition-colors">{item.name}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium ${item.inStock ? 'text-green-400' : 'text-red-400'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${item.inStock ? 'bg-green-400' : 'bg-red-400'}`} />
                        {item.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                      {item.exportReady && (
                        <span className="inline-flex items-center gap-1 text-xs text-accent font-medium">
                          <Globe className="w-3 h-3" /> Export
                        </span>
                      )}
                    </div>
                  </div>
                  <Package className="w-5 h-5 text-gray-600 shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Section */}
      {exportItems.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-accent">Export-Ready</span> {category.name}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                These products are available for international export with full documentation, custom packaging, and logistics support.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {exportItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-dark-950 border border-accent/10 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-medium">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in <span className="text-accent">{category.name}</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Get wholesale pricing, bulk order quotes, or export documentation. Our team responds within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Hi%20Grid%20Foods%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(category.name)}%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface border border-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:border-accent/30 transition-colors"
              >
                <Phone className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8">
            Explore More <span className="text-accent">Categories</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={`/products/${cat.slug}`} className="group block">
                  <div className="bg-dark-950 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/20 transition-all">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span>{cat.icon}</span>
                        <h3 className="font-bold group-hover:text-accent transition-colors">{cat.name}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{cat.items.length} products</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
