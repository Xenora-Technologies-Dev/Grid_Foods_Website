'use client';

import { motion } from 'framer-motion';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, Shield, Truck, Users, Award, Heart, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { companyInfo, certifications, exportMarkets } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const milestones = [
  { year: '2023', title: 'Company Founded', description: 'Grid Foods LLC established in Dubai with a vision to become a leading frozen food distributor.' },
  { year: '2023', title: 'HORECA Partnerships', description: 'Secured first contracts with major hotels, restaurants, and catering companies across Dubai.' },
  { year: '2024', title: 'Product Expansion', description: 'Expanded product portfolio to 6 categories with 60+ SKUs covering seafood, poultry, meat, dairy, snacks, and grains.' },
  { year: '2024', title: 'GCC Export Launch', description: 'Launched export operations to Saudi Arabia, Oman, and other GCC markets with full compliance.' },
  { year: '2025', title: 'Supermarket Partnerships', description: 'Became an approved supplier for multiple retail chains and supermarkets across the UAE.' },
  { year: '2026', title: 'Regional Expansion', description: 'Expanding into Africa, South Asia, and CIS markets with dedicated export logistics infrastructure.' },
];

const values = [
  { icon: Shield, title: 'Quality First', description: 'Every product meets the highest food safety and halal certification standards without compromise.' },
  { icon: Heart, title: 'Client Commitment', description: 'We build lasting partnerships with dedicated account management and personalized service.' },
  { icon: Globe, title: 'Global Sourcing', description: 'Products sourced from certified international suppliers across 15+ countries worldwide.' },
  { icon: Truck, title: 'Reliable Logistics', description: 'Temperature-controlled cold chain from source to delivery — never broken, always on time.' },
  { icon: Target, title: 'Market Expertise', description: 'Deep understanding of UAE and GCC food distribution, regulations, and market demands.' },
  { icon: TrendingUp, title: 'Growth Partnership', description: 'We grow with our clients — scaling supply, expanding SKUs, and adapting to their evolving needs.' },
];

const stats = [
  { value: '150+', label: 'Clients Served' },
  { value: '60+', label: 'Product SKUs' },
  { value: '15+', label: 'Export Markets' },
  { value: '6', label: 'Product Categories' },
];

export default function AboutPage() {
  return (
    <main className="bg-primary text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              <Award className="w-4 h-4" /> About Grid Foods LLC
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Dubai&apos;s Trusted
              <span className="text-accent"> Frozen Food</span> Partner
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Since {companyInfo.established}, Grid Foods LLC has been connecting global food producers with businesses across the UAE and GCC.
              We import, store, distribute, and export premium frozen food products — serving HORECA, supermarkets, and wholesale buyers with reliability and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface border border-white/5 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Grid Foods LLC was founded in 2023 in Dubai with a clear mission: to become the most reliable frozen food partner for businesses in the UAE and beyond.
                  What started as a focused distribution operation has rapidly grown into a comprehensive import, distribution, and export enterprise.
                </p>
                <p>
                  We recognized a gap in the market — businesses needed a supplier that combined product quality, competitive pricing, and consistent reliability.
                  Today, we serve over 150 clients including hotels, restaurants, catering companies, supermarkets, and international distributors across 15+ markets.
                </p>
                <p>
                  Our strength lies in our relationships — with certified international producers across Asia, South America, and Europe,
                  and with our clients who trust us to keep their operations running smoothly, every single day.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop"
                  alt="Grid Foods warehouse operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-bold text-white">Since</div>
                <div className="text-4xl font-bold text-white">{companyInfo.established}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that drive every decision we make and every product we deliver.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-dark-950 border border-white/5 rounded-2xl p-8 hover:border-accent/20 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-accent">Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From a startup in Dubai to a regional frozen food enterprise — growing fast, staying reliable.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="hidden md:block flex-1" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 mt-2 ring-4 ring-primary" />
                <div className="flex-1 ml-12 md:ml-0">
                  <div className="bg-surface border border-white/5 rounded-2xl p-6">
                    <span className="text-accent font-bold text-sm">{milestone.year}</span>
                    <h3 className="font-bold text-lg mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & <span className="text-accent">Compliance</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We maintain the highest standards of food safety, halal certification, and regulatory compliance.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-dark-950 border border-white/5 rounded-2xl p-6 flex items-start gap-4"
              >
                <span className="text-3xl">{cert.icon}</span>
                <div>
                  <h3 className="font-bold mb-1">{cert.name}</h3>
                  <p className="text-gray-400 text-sm">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Markets */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-accent">Export</span> Markets
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We export premium frozen food products to businesses across the GCC and beyond.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportMarkets.map((market, i) => (
              <motion.div
                key={market.region}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface border border-white/5 rounded-2xl p-6"
              >
                <Globe className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-lg mb-3">{market.region}</h3>
                <ul className="space-y-1.5">
                  {market.countries.map((country) => (
                    <li key={country} className="text-gray-400 text-sm flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-accent" />
                      {country}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a hotel, restaurant, supermarket, or international distributor — we&apos;re ready to become your trusted frozen food partner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/products"
                className="bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
