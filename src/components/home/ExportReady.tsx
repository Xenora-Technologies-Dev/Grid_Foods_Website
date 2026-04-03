'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, ArrowRight, Ship, FileCheck, Package } from 'lucide-react';

const exportFeatures = [
  { icon: Package, title: 'Export Packaging', description: 'Industry-standard packaging designed for international shipping and extended shelf life.' },
  { icon: FileCheck, title: 'Full Documentation', description: 'Certificate of Origin, health certificates, phytosanitary docs, and customs clearance support.' },
  { icon: Ship, title: 'Logistics Support', description: 'End-to-end shipping coordination — sea freight, air cargo, and refrigerated container booking.' },
];

const targetMarkets = ['Saudi Arabia', 'Oman', 'Qatar', 'Bahrain', 'Kuwait', 'Kenya', 'Tanzania', 'India'];

export default function ExportReady() {
  return (
    <section className="section-pad bg-surface relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge bg-accent/10 text-accent border border-accent/20 mb-5">
              <Globe className="w-3.5 h-3.5" />
              Now Exporting
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Export-Ready Frozen Food Supply from Dubai
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Grid Foods now offers comprehensive export services for international buyers. Whether you&apos;re sourcing halal frozen chicken for Saudi Arabia, seafood for African markets, or dairy for the GCC — we handle sourcing, packaging, documentation, and logistics from Dubai.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {exportFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-white/40 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/export" className="btn-primary">
              Explore Export Services <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right: Target markets */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-white font-bold text-lg mb-2">Target Export Markets</h3>
              <p className="text-white/40 text-sm mb-6">We currently export to or accept orders from:</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {targetMarkets.map((market, i) => (
                  <motion.div
                    key={market}
                    className="flex items-center gap-2 text-sm text-white/60"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {market}
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-white/5 pt-6">
                <p className="text-white/30 text-xs mb-4">Products available for export include:</p>
                <div className="flex flex-wrap gap-2">
                  {['Halal Chicken', 'Frozen Seafood', 'Beef & Lamb', 'French Fries', 'Basmati Rice', 'Dairy'].map((product) => (
                    <span key={product} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
