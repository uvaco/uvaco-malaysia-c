'use client';

import { Award, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function BenefitsSection() {
  const { t } = useLanguage();

  const cards = [
    { Icon: Award, title: t.benefit1Title, desc: t.benefit1Desc },
    { Icon: TrendingUp, title: t.benefit2Title, desc: t.benefit2Desc },
    { Icon: Users, title: t.benefit3Title, desc: t.benefit3Desc },
  ];

  return (
    <section id="benefits" className="py-24 bg-white text-center px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-16 tracking-tight">
        {t.benefitsTitle}
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">
        {cards.map(({ Icon, title, desc }, i) => (
          <div
            key={i}
            className="benefit-card p-10 bg-stone-50 rounded-[40px] border border-stone-100 text-center"
          >
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <Icon />
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-stone-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
