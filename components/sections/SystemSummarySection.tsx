'use client';

import Link from 'next/link';
import { Infinity as InfinityIcon, ShieldCheck, Users2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SystemSummarySection() {
  const { t } = useLanguage();

  const cards = [
    { Icon: InfinityIcon, title: t.sysSumH1, desc: t.sysSumD1 },
    { Icon: ShieldCheck, title: t.sysSumH2, desc: t.sysSumD2 },
    { Icon: Users2, title: t.sysSumH3, desc: t.sysSumD3 },
  ];

  return (
    <section id="system-summary" className="py-24 bg-stone-100/50 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">{t.sysSumTitle}</h2>
        <p className="text-xl text-stone-600 mb-16 max-w-3xl mx-auto">{t.sysSumDesc}</p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="system-highlight-card bg-white p-10 rounded-[40px] shadow-sm border border-stone-100"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Icon />
              </div>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-stone-500">{desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/system"
          className="px-12 py-4 bg-emerald-800 text-white rounded-full font-bold text-lg hover:shadow-xl transition-all inline-block"
        >
          {t.sysViewMore}
        </Link>
      </div>
    </section>
  );
}
