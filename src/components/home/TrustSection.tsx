'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Award, Users, ThumbsUp, Snowflake } from 'lucide-react';

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'All products meet international food safety standards. Halal certified with strict quality control at every step.',
  },
  {
    icon: Snowflake,
    title: 'Cold Chain Integrity',
    description: 'Uninterrupted cold chain from source to delivery. Temperature-controlled storage and refrigerated transport.',
  },
  {
    icon: Truck,
    title: 'Reliable Supply',
    description: 'Consistent and on-time deliveries across Dubai and the UAE. Never run out of stock with our planned supply schedules.',
  },
  {
    icon: Award,
    title: 'Certified Products',
    description: 'Sourced from internationally certified producers. Compliant with UAE food regulations, HACCP, and ESMA standards.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'A dedicated account manager for every client. Responsive support for your bulk ordering requirements.',
  },
  {
    icon: ThumbsUp,
    title: 'Competitive Pricing',
    description: 'Best-in-market wholesale pricing with flexible MOQ. Volume discounts for distributors and large HORECA clients.',
  },
];

export default function TrustSection() {
  return (
    <section className="section-pad bg-primary">
      <div className="container-custom">
        <div className="text-center mb-14">
          <motion.span
            className="badge bg-accent/10 text-accent border border-accent/20 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Grid Foods
          </motion.span>
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Trusted by Dubai&apos;s Best Restaurants &amp; Retailers
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We go beyond supply — we become your food sourcing partner with end-to-end quality assurance and logistics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="p-6 md:p-7 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <point.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
