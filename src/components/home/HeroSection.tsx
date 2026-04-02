'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { companyInfo } from '@/lib/data';

/**
 * Hero section for the homepage with animated headline and CTA buttons.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-gradient">
      {/* Background pattern overlay */}
      <div className="hero-pattern absolute inset-0 opacity-10" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge bg-accent/20 text-accent border border-accent/30 mb-6">
              🇦🇪 Dubai's Trusted Food Distributor
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Premium Frozen Food
            <span className="block text-gradient mt-1">Supply in Dubai</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Grid Foods LLC supplies premium frozen seafood, poultry, meat, dairy, and snacks to restaurants, supermarkets, and bulk buyers across the UAE. Quality guaranteed, cold chain maintained.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/products" className="btn-secondary text-base px-8 py-4">
              View Products
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-white/80 hover:text-white text-base font-medium transition-colors"
            >
              <Phone className="w-5 h-5 text-accent" />
              {companyInfo.phone}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-14 flex flex-wrap gap-6 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { icon: '✅', label: 'Halal Certified' },
              { icon: '❄️', label: 'Cold Chain Maintained' },
              { icon: '🏆', label: 'Premium Quality' },
              { icon: '🚚', label: 'UAE-Wide Delivery' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 glass rounded-full px-4 py-2">
                <span className="text-base">{item.icon}</span>
                <span className="text-white/80 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
