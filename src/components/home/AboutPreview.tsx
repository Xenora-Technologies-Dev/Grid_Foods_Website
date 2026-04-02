'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Building2, ShoppingCart, Package } from 'lucide-react';

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
];

/**
 * About preview section showing who we serve.
 */
export default function AboutPreview() {
  return (
    <section className="section-pad bg-navy-gradient text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge bg-accent/20 text-accent border border-accent/30 mb-6">
              About Grid Foods LLC
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Dubai's Reliable Food Trading & Distribution Partner
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-5">
              Grid Foods LLC is a Dubai-based food trading and distribution company specializing in premium frozen foods. We source from internationally certified suppliers and deliver directly to your facilities across the UAE.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Our product range covers frozen seafood, halal poultry, quality meats, dairy products, frozen snacks, and staple grains — everything a modern food business needs from a single trusted partner.
            </p>
            <div className="flex flex-wrap gap-6 mb-10">
              {[['500+', 'Products'], ['100+', 'Happy Clients'], ['UAE-Wide', 'Delivery']].map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-accent">{num}</div>
                  <div className="text-white/60 text-sm">{label}</div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary">
              Learn More About Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right: Client segments */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.title}
                className="glass rounded-2xl p-6 flex gap-5 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                  <client.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-0.5">{client.title}</h3>
                  <p className="text-accent text-sm font-medium mb-2">{client.subtitle}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{client.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
