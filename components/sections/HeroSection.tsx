'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import CountdownTimer from '@/components/ui/CountdownTimer';
import PulseDot from '@/components/ui/PulseDot';

const COUNTER_URL =
  'https://script.google.com/macros/s/AKfycbz90cYSL43sy7g-HxBMU52BAfqCNJnG829CVVapCvol6Am-ydVDqT4mv-gH0nCCZVGDVg/exec';

export default function HeroSection() {
  const { t } = useLanguage();
  const [count, setCount] = useState<string | number>('--');

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

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden text-center px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-20">
        <div className="inline-flex items-center py-1.5 px-5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-widest mb-8 border border-emerald-500/30 backdrop-blur-md">
          <Globe className="w-4 h-4 mr-2" />
          <span>{t.heroBadge}</span>
        </div>

        <h1
          className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
          dangerouslySetInnerHTML={{ __html: t.heroTitle }}
        />

        <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md">
          {t.heroDesc}
        </p>

        <div className="flex flex-col items-center mb-10">
          <p className="text-emerald-200 text-sm font-medium mb-4 tracking-widest uppercase">
            {t.countdownLabel}
          </p>
          <CountdownTimer dark={false} />
        </div>

        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3 shadow-sm mb-10 backdrop-blur-md">
          <PulseDot className="bg-emerald-400" />
          <span className="text-white text-sm font-medium">
            {t.registerPrefix}
            <span className="text-emerald-400 font-bold text-lg mx-1">{count}</span>
            {t.registerSuffix}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="px-10 py-4 bg-emerald-600 text-white rounded-full text-lg font-bold hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all"
          >
            {t.heroBtnPrimary}
          </Link>
          <Link
            href="/system"
            className="px-10 py-4 bg-white/10 border border-white/30 text-white rounded-full text-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            {t.heroBtnSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
