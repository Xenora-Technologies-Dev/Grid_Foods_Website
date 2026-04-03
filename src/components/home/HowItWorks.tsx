'use client';

import { motion } from 'framer-motion';
import { ClipboardList, Search, Truck, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Share Your Requirements',
    description: 'Tell us what products you need, quantities, and delivery schedule. We accept orders via phone, WhatsApp, or email.',
  },
  {
    icon: Search,
    step: '02',
    title: 'We Source & Prepare',
    description: 'Our team sources the best products from certified international suppliers and prepares your order with strict quality checks.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'Cold Chain Delivery',
    description: 'Your order is delivered in temperature-controlled vehicles to maintain freshness. On-time delivery across the UAE or export packaging for GCC.',
  },
  {
    icon: ThumbsUp,
    step: '04',
    title: 'Ongoing Partnership',
    description: 'Enjoy consistent supply, dedicated account management, and flexible reordering. We grow with your business.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.span
            className="badge bg-accent/10 text-accent border border-accent/20 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.span>
          <motion.h2
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Simple Ordering Process
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From inquiry to delivery in 4 easy steps. We make bulk food ordering simple and hassle-free.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Icon circle */}
              <motion.div
                className="w-20 h-20 mx-auto bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center mb-5 relative z-10 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-300"
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <step.icon className="w-8 h-8 text-accent" />
              </motion.div>

              {/* Step number */}
              <span className="text-xs font-bold text-accent/40 uppercase tracking-wider mb-2 block">
                Step {step.step}
              </span>

              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
