'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { companyInfo } from '@/lib/data';

/**
 * Call-to-action banner section on the homepage.
 */
export default function CTASection() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Order? Let's Talk Bulk Pricing.
          </h2>
          <p className="text-white/85 text-lg mb-10 leading-relaxed">
            Whether you're a restaurant, supermarket, or distributor — Grid Foods has the products and capacity to meet your demands. Get in touch for a custom quote.
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
