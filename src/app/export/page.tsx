'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, Package, FileText, Truck, Shield, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { categories, exportMarkets, certifications, companyInfo } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const exportFeatures = [
  { icon: Package, title: 'Export Packaging', description: 'Custom packaging solutions designed for international shipping — palletized, containerized, and labelled to destination country standards.' },
  { icon: FileText, title: 'Documentation', description: 'Complete export documentation including certificates of origin, health certificates, halal certificates, and phytosanitary certificates.' },
  { icon: Truck, title: 'Logistics Support', description: 'End-to-end logistics coordination from our Dubai warehouse to your destination — refrigerated containers, freight forwarding, and customs clearance.' },
  { icon: Shield, title: 'Quality Assurance', description: 'Every export shipment undergoes rigorous quality checks, temperature monitoring, and compliance verification before dispatch.' },
];

const exportStats = [
  { value: '15+', label: 'Export Markets' },
  { value: '4', label: 'Regional Zones' },
  { value: '6', label: 'Product Categories' },
  { value: '100%', label: 'Halal Certified' },
];

export default function ExportPage() {
  const exportProducts = categories.filter((cat) => cat.exportAvailable);

  return (
    <main className="bg-primary text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              <Globe className="w-4 h-4" /> International Export Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Export Premium
              <span className="text-accent"> Frozen Foods</span> Worldwide
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              From Dubai to the world — Grid Foods exports halal-certified frozen food products to businesses across the GCC, Africa, South Asia, and CIS regions.
              Full documentation, custom packaging, and reliable cold chain logistics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Export Inquiry <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-surface border border-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:border-accent/30 transition-colors"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {exportStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface border border-white/5 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Export <span className="text-accent">Capabilities</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We handle every aspect of the export process — from sourcing and packaging to documentation and delivery.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {exportFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-accent/20 transition-colors"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Target <span className="text-accent">Markets</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We export to businesses across 4 major regional zones, covering 15+ countries.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportMarkets.map((market, i) => (
              <motion.div
                key={market.region}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-dark-950 border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-3">{market.region}</h3>
                <ul className="space-y-2">
                  {market.countries.map((country) => (
                    <li key={country} className="text-gray-400 text-sm flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                      {country}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Products Available for <span className="text-accent">Export</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              All our product categories are available for international export with proper halal certification and documentation.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportProducts.map((cat, i) => (
              <motion.div
                key={cat.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={`/products/${cat.slug}`} className="group block">
                  <div className="bg-surface border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{cat.icon}</span>
                      <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{cat.name}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{cat.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.filter((item) => item.exportReady).map((item) => (
                        <span key={item.name} className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Export <span className="text-accent">Certifications</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              All export shipments come with complete certification and compliance documentation.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-dark-950 border border-white/5 rounded-xl p-5 flex items-center gap-4"
              >
                <span className="text-2xl">{cert.icon}</span>
                <div>
                  <h3 className="font-bold text-sm">{cert.name}</h3>
                  <p className="text-gray-400 text-xs">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Exporting?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a distributor, wholesaler, or retail chain — we can supply your market with premium halal frozen food products from Dubai.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Contact Export Team
              </Link>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Hi%20Grid%20Foods%2C%20I%27m%20interested%20in%20your%20export%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
              >
                WhatsApp Export Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
