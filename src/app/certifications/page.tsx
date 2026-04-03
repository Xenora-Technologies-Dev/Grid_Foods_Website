'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';
import { certifications } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const detailedCerts = [
  {
    name: 'Halal Certification',
    icon: '☪️',
    description: 'All products supplied by Grid Foods are halal certified, meeting the strictest Islamic dietary standards. We source exclusively from halal-certified producers and maintain documentation for every product in our catalog.',
    standards: ['Islamic Food and Nutrition Council', 'UAE Halal Standards', 'GCC Halal Framework'],
  },
  {
    name: 'HACCP Compliance',
    icon: '🛡️',
    description: 'Our operations follow HACCP (Hazard Analysis and Critical Control Points) principles to identify, evaluate, and control food safety hazards throughout the supply chain — from sourcing to delivery.',
    standards: ['Codex Alimentarius', 'FDA HACCP Guidelines', 'ISO 22000 Framework'],
  },
  {
    name: 'ISO 22000',
    icon: '📋',
    description: 'We adhere to ISO 22000 food safety management standards, ensuring systematic identification and control of food safety hazards across our import, storage, and distribution operations.',
    standards: ['Food Safety Management Systems', 'Risk-Based Approach', 'Continuous Improvement'],
  },
  {
    name: 'Dubai Municipality',
    icon: '🏛️',
    description: 'Grid Foods is fully licensed and approved by Dubai Municipality, complying with all local food safety regulations, storage requirements, and distribution standards.',
    standards: ['Food Trade License', 'Cold Storage Standards', 'Transport Compliance'],
  },
  {
    name: 'ESMA Certified',
    icon: '✅',
    description: 'Our products meet ESMA (Emirates Authority for Standardization and Metrology) standards, ensuring compliance with UAE national quality and safety benchmarks.',
    standards: ['UAE Product Standards', 'Labeling Requirements', 'Quality Control'],
  },
  {
    name: 'Cold Chain Verified',
    icon: '❄️',
    description: 'We maintain an unbroken cold chain from source to delivery. Temperature-controlled warehousing and refrigerated transport ensure product integrity at every stage.',
    standards: ['-18°C Storage', 'Real-Time Monitoring', 'Temperature Logs'],
  },
];

export default function CertificationsPage() {
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
              <Shield className="w-4 h-4" /> Quality & Compliance
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Certifications & <span className="text-accent">Standards</span>
            </h1>
            <p className="text-lg text-gray-400">
              At Grid Foods, food safety and quality are non-negotiable. We maintain the highest certifications and compliance standards
              to ensure every product we supply meets international benchmarks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Certifications Grid */}
      <section className="relative z-10 -mt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface border border-white/5 rounded-xl p-4 text-center"
              >
                <span className="text-2xl block mb-2">{cert.icon}</span>
                <span className="text-xs font-medium text-gray-300">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {detailedCerts.map((cert, i) => (
              <motion.div
                key={cert.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-accent/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{cert.icon}</span>
                  <h3 className="text-xl font-bold">{cert.name}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-5">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.standards.map((standard) => (
                    <span key={standard} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                      {standard}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Quality <span className="text-accent">Commitment</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We believe that trust is built through consistent quality. Every product in our catalog is sourced from certified producers,
              stored in temperature-controlled facilities, and delivered with complete documentation. When you partner with Grid Foods,
              you partner with a company that never compromises on food safety.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Browse Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-dark-950 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:border-accent/30 transition-colors"
              >
                Request Certificates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
