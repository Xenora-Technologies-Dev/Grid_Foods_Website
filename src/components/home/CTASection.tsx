'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { companyInfo } from '@/lib/data';

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-accent relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-36 md:w-48 h-36 md:h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Order? Let&apos;s Talk Bulk Pricing.
          </h2>
          <p className="text-white/85 text-lg mb-10 leading-relaxed">
            Whether you&apos;re a restaurant, supermarket, distributor, or international buyer — Grid Foods has the products and capacity to meet your demands. Get in touch for a custom quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors flex items-center gap-2 shadow-lg">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="border-2 border-white text-white hover:bg-white hover:text-accent font-semibold px-8 py-4 rounded-lg transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
