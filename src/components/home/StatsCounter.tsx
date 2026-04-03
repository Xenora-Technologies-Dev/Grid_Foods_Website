'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Products Available', icon: '📦' },
  { value: 150, suffix: '+', label: 'Trusted Clients', icon: '🤝' },
  { value: 6, suffix: '', label: 'Product Categories', icon: '📋' },
  { value: 15, suffix: '+', label: 'Export Markets', icon: '🌍' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-accent tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-14 md:py-20 bg-surface relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/3 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <motion.span
                className="text-3xl block mb-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.icon}
              </motion.span>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-white/40 text-sm mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
