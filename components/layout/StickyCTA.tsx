'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import PulseDot from '@/components/ui/PulseDot';

const COUNTER_URL =
  'https://script.google.com/macros/s/AKfycbz90cYSL43sy7g-HxBMU52BAfqCNJnG829CVVapCvol6Am-ydVDqT4mv-gH0nCCZVGDVg/exec';

export default function StickyCTA() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState<string | number>('--');
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function fetchCount() {
      fetch(COUNTER_URL)
        .then((r) => r.json())
        .then((data) => {
          if (typeof data.count === 'number') setCount(data.count);
        })
        .catch(() => {});
    }
    fetchCount();
    const id = setInterval(fetchCount, 60000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (ctaRef.current) {
      ctaRef.current.classList.toggle('visible', visible);
    }
  }, [visible]);

  return (
    <div
      id="sticky-cta"
      ref={ctaRef}
      className="fixed bottom-0 left-0 right-0 z-80 bg-emerald-900 text-white py-3 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <PulseDot />
          <span className="text-sm font-medium">
            {t.stickyPrefix}
            <strong className="mx-1">{count}</strong>
            {t.stickySuffix}
          </span>
        </div>
        <Link
          href="/#contact"
          className="px-8 py-2 bg-yellow-400 text-emerald-900 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all whitespace-nowrap"
        >
          {t.stickyBtn}
        </Link>
      </div>
    </div>
  );
}
