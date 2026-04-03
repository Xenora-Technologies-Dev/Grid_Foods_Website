'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, type ProductCategory } from '@/lib/data';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products', hasDropdown: true },
  { label: 'Export Services', href: '/export' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/95 backdrop-blur-xl shadow-xl shadow-black/20 py-2'
          : 'bg-primary/80 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 bg-white/90 rounded-xl border border-white/20 shadow-lg shadow-black/10 p-1.5">
              <Image
                src="/assets/Grid_Foods_Logo.png"
                alt="Grid Foods LLC Logo"
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="text-white font-bold text-lg md:text-xl leading-none group-hover:text-accent transition-colors">Grid Foods</span>
              <span className="text-accent text-[10px] font-semibold tracking-widest block uppercase">LLC</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname.startsWith('/products')
                        ? 'text-accent'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] bg-dark-950/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/40 overflow-hidden border border-white/10"
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                      >
                        <div className="p-2">
                          <Link
                            href="/products"
                            className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-white hover:bg-accent/10 hover:text-accent rounded-xl transition-colors"
                          >
                            <span>All Products</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                        <div className="border-t border-white/5" />
                        <div className="p-2 grid grid-cols-2 gap-1">
                          {categories.map((cat: ProductCategory) => (
                            <Link
                              key={cat.id}
                              href={`/products/${cat.slug}`}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/70 hover:bg-accent/10 hover:text-accent transition-colors group/item"
                            >
                              <span className="text-lg">{cat.icon}</span>
                              <div>
                                <div className="font-medium text-white group-hover/item:text-accent transition-colors">{cat.name}</div>
                                <div className="text-xs text-white/40 line-clamp-1">{cat.items.length} products</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-white/5 p-3">
                          <Link
                            href="/export"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
                          >
                            <Globe className="w-4 h-4" />
                            Export Services — Ship Worldwide
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-accent'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-dark-950/98 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    onClick={() => { setIsOpen(false); setProductsOpen(false); }}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href || (link.hasDropdown && pathname.startsWith('/products'))
                        ? 'text-accent bg-accent/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 mt-1 flex flex-col gap-0.5">
                      {categories.map((cat: ProductCategory) => (
                        <Link
                          key={cat.id}
                          href={`/products/${cat.slug}`}
                          prefetch={true}
                          onClick={() => { setIsOpen(false); setProductsOpen(false); }}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs text-white/50 hover:text-accent hover:bg-white/5 transition-colors"
                        >
                          <span>{cat.icon}</span>
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" className="btn-primary text-sm mt-3 justify-center">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
