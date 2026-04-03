'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const rotatingWords = ['HORECA', 'Supermarkets', 'Distributors', 'Exporters', 'Caterers', 'Bakeries'];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-dark-gradient">
      {/* Background pattern */}
      <div className="grid-pattern absolute inset-0" />

      {/* Floating food elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { emoji: '🐟', top: '15%', left: '80%', delay: 0, duration: 12, size: 'text-4xl md:text-5xl', opacity: 0.15 },
          { emoji: '🦐', top: '60%', left: '85%', delay: 2, duration: 10, size: 'text-3xl md:text-4xl', opacity: 0.12 },
          { emoji: '🍗', top: '25%', left: '90%', delay: 4, duration: 14, size: 'text-3xl md:text-4xl', opacity: 0.13 },
          { emoji: '🐔', top: '70%', left: '75%', delay: 1, duration: 11, size: 'text-4xl md:text-5xl', opacity: 0.14 },
          { emoji: '🐟', top: '45%', left: '92%', delay: 3, duration: 13, size: 'text-2xl md:text-3xl', opacity: 0.1 },
          { emoji: '🦀', top: '80%', left: '88%', delay: 5, duration: 9, size: 'text-3xl md:text-4xl', opacity: 0.11 },
          { emoji: '🍤', top: '10%', left: '70%', delay: 6, duration: 15, size: 'text-2xl md:text-3xl', opacity: 0.1 },
          { emoji: '🥩', top: '50%', left: '78%', delay: 2.5, duration: 12, size: 'text-3xl', opacity: 0.1 },
        ].map((item, i) => (
          <motion.span
            key={i}
            className={`absolute ${item.size} select-none`}
            style={{ top: item.top, left: item.left, opacity: item.opacity }}
            animate={{
              y: [0, -30, 10, -20, 0],
              x: [0, 15, -10, 20, 0],
              rotate: [0, 10, -5, 8, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {item.emoji}
          </motion.span>
        ))}
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[16%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge bg-accent/10 text-accent border border-accent/20 mb-6">
              🇦🇪 Dubai&apos;s Premium Food Distributor &amp; Exporter — Est. 2023
            </span>
          </motion.div>

          {/* H1 with rotating word */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Premium Frozen Food
            <br />
            <span className="text-gradient">Solutions for{' '}</span>
            <span className="relative inline-block min-w-[180px] sm:min-w-[240px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                  transition={{ duration: 0.3 }}
                  className="inline-block text-gradient"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-white/50 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Grid Foods LLC imports, distributes, and exports premium frozen seafood, poultry, meat, dairy, snacks, and rice across the UAE and GCC. 100% Halal. Cold chain maintained. Competitive bulk pricing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact" className="btn-primary text-base px-7 sm:px-8 py-3.5 sm:py-4 justify-center sm:justify-start">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/products" className="btn-secondary text-base px-7 sm:px-8 py-3.5 sm:py-4 justify-center sm:justify-start">
              Browse Products
            </Link>
            <Link href="/export" className="btn-ghost text-base px-6 py-3.5 justify-center sm:justify-start">
              <Globe className="w-5 h-5 text-accent" />
              Export Services
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap gap-3 md:gap-4 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { icon: '☪️', label: '100% Halal' },
              { icon: '❄️', label: 'Cold Chain Verified' },
              { icon: '🏆', label: 'Premium Quality' },
              { icon: '🚚', label: 'UAE-Wide Delivery' },
              { icon: '🌍', label: 'GCC Export Ready' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-2 glass rounded-full px-3 md:px-4 py-1.5 md:py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.08 }}
              >
                <span className="text-sm md:text-base">{item.icon}</span>
                <span className="text-white/60 text-xs md:text-sm font-medium whitespace-nowrap">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}
