'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="bg-primary text-white min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4 relative z-10"
      >
        <div className="text-8xl md:text-9xl font-bold text-accent mb-4">404</div>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Home className="w-5 h-5" /> Go Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-surface border border-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:border-accent/30 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
