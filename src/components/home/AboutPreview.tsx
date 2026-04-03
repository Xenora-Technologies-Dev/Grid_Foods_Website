'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, ShoppingCart, Package, Globe } from 'lucide-react';

const clients = [
  {
    icon: Building2,
    title: 'HORECA',
    subtitle: 'Hotels, Restaurants & Catering',
    description: 'Supply tailored to the volume and variety demands of professional kitchens. Fresh stocks, on-time delivery.',
  },
  {
    icon: ShoppingCart,
    title: 'Supermarkets',
    subtitle: 'Retail & Grocery Chains',
    description: 'Reliable frozen food supply for retail shelves. Consistent packaging, labeling compliance, and shelf-ready products.',
  },
  {
    icon: Package,
    title: 'Bulk Buyers',
    subtitle: 'Distributors & Wholesalers',
    description: 'Large-volume orders with competitive wholesale pricing. Flexible MOQ and dedicated account management.',
  },
  {
    icon: Globe,
    title: 'Export Clients',
    subtitle: 'GCC & International Markets',
    description: 'Export-ready packaging, documentation, and logistics support for clients sourcing from Dubai to ship globally.',
  },
];

export default function AboutPreview() {
  return (
    <section className="section-pad bg-dark-gradient text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge bg-accent/10 text-accent border border-accent/20 mb-6">
              About Grid Foods LLC
            </span>
            {/* Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 bg-white/90 rounded-2xl border border-white/20 shadow-lg p-2 shrink-0">
                <Image
                  src="/assets/Grid_Foods_Logo.png"
                  alt="Grid Foods LLC"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Dubai&apos;s Agile Food Trading &amp; Export Partner — Since 2023
              </h2>
            </div>
            <p className="text-white/50 text-base leading-relaxed mb-5">
              Grid Foods LLC is a Dubai-based food trading, distribution, and export company specializing in premium frozen foods. Founded in 2023, we combine modern supply chain practices with deep industry expertise to serve clients across the UAE and GCC.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Our product range covers frozen seafood, halal poultry, quality meats, dairy products, frozen snacks, and staple grains — everything a modern food business needs from a single trusted partner, now with full export capabilities.
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              {[['500+', 'Products'], ['150+', 'Clients'], ['15+', 'Export Markets'], ['UAE', 'Coverage']].map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-accent">{num}</div>
                  <div className="text-white/40 text-sm">{label}</div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary">
              Learn More About Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right: Client segments */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.title}
                className="glass rounded-2xl p-5 flex gap-4 items-start hover:border-accent/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <client.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-0.5 text-sm">{client.title}</h3>
                  <p className="text-accent text-xs font-medium mb-1.5">{client.subtitle}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{client.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
