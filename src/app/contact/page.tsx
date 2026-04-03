'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe, MessageCircle } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

const contactDetails = [
  { icon: Phone, label: 'Phone', value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
  { icon: Mail, label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${companyInfo.whatsapp}` },
  { icon: MapPin, label: 'Location', value: companyInfo.address, href: '#' },
  { icon: Clock, label: 'Working Hours', value: 'Sun–Thu: 8AM–6PM', href: '#' },
  { icon: Globe, label: 'Export Inquiries', value: 'export@gridfoods.ae', href: 'mailto:export@gridfoods.ae' },
];

export default function ContactPage() {
  return (
    <main className="bg-primary text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dark-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-lg text-gray-400">
              Whether you need wholesale pricing, export documentation, or a custom product catalog — our team is ready to help.
              Reach out and we&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-8"
              >
                Contact <span className="text-accent">Details</span>
              </motion.h2>
              <div className="space-y-4">
                {contactDetails.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-surface border border-white/5 rounded-xl p-4 hover:border-accent/20 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                      <div className="font-medium group-hover:text-accent transition-colors">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-surface border border-white/5 rounded-2xl p-6 text-center"
              >
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-bold mb-1">Dubai, UAE</h3>
                <p className="text-gray-400 text-sm">Serving the entire UAE and exporting to 15+ international markets</p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface border border-white/5 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-2">
                  Send Us an <span className="text-accent">Inquiry</span>
                </h2>
                <p className="text-gray-400 text-sm mb-8">
                  Fill out the form below and our team will get back to you within 24 hours with pricing and product information.
                </p>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.a
              href="/products"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark-950 border border-white/5 rounded-2xl p-8 text-center hover:border-accent/20 transition-colors group"
            >
              <span className="text-4xl mb-4 block">📦</span>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Browse Products</h3>
              <p className="text-gray-400 text-sm">Explore our 6 product categories with 60+ items</p>
            </motion.a>
            <motion.a
              href="/export"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-dark-950 border border-white/5 rounded-2xl p-8 text-center hover:border-accent/20 transition-colors group"
            >
              <span className="text-4xl mb-4 block">🌍</span>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Export Services</h3>
              <p className="text-gray-400 text-sm">Learn about our international export capabilities</p>
            </motion.a>
            <motion.a
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark-950 border border-white/5 rounded-2xl p-8 text-center hover:border-accent/20 transition-colors group"
            >
              <span className="text-4xl mb-4 block">💬</span>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">WhatsApp Us</h3>
              <p className="text-gray-400 text-sm">Get instant responses for urgent inquiries</p>
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}
