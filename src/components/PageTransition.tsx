'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * PageTransition — App Router compatible.
 *
 * AnimatePresence mode="wait" breaks Next.js 14 App Router navigation (pages
 * fail to render on back/forward). Instead we use a CSS keyframe fade-slide-in
 * triggered by re-keying the wrapper on route change, and scroll to top.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  // Scroll to top on every navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  // Re-trigger the CSS animation on route change by toggling the class
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove('page-enter');
    // Force reflow so removing + adding the class restarts the animation
    void el.offsetWidth;
    el.classList.add('page-enter');
  }, [pathname]);

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  );
}
