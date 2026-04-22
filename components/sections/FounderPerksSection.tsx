'use client';

import Link from 'next/link';
import {
  Crown,
  MapPin,
  GitBranchPlus,
  Video,
  Infinity as InfinityIcon,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FounderPerksSection() {
  const { t } = useLanguage();

  const perks = [
    { Icon: MapPin, label: t.founderLabel1, title: t.founderH1, desc: t.founderD1 },
    { Icon: GitBranchPlus, label: t.founderLabel2, title: t.founderH2, desc: t.founderD2 },
    { Icon: Video, label: t.founderLabel3, title: t.founderH3, desc: t.founderD3 },
    { Icon: InfinityIcon, label: t.founderLabel4, title: t.founderH4, desc: t.founderD4 },
    { Icon: Sparkles, label: t.founderLabel5, title: t.founderH5, desc: t.founderD5 },
    { Icon: PhoneCall, label: t.founderLabel6, title: t.founderH6, desc: t.founderD6 },
  ];

  return (
    <section
      id="founder-perks"
      className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 text-white px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center py-1 px-4 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-bold tracking-widest mb-8 border border-yellow-400/30">
          <Crown className="w-4 h-4 mr-2" />
          <span>{t.founderBadge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.founderTitle}</h2>
        <p className="text-emerald-200 text-lg max-w-2xl mx-auto mb-16">{t.founderDesc}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {perks.map(({ Icon, label, title, desc }, i) => (
            <div
              key={i}
              className="founder-card bg-white/10 border border-white/20 rounded-[30px] p-8 text-left backdrop-blur-sm"
            >
              <div className="advantage-badge mb-4">{label}</div>
              <div className="w-12 h-12 bg-yellow-400/20 text-yellow-300 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-emerald-200 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 border border-yellow-400/40 rounded-[30px] p-8 max-w-2xl mx-auto">
          <p className="text-yellow-300 font-bold text-lg mb-2">{t.founderCtaTitle}</p>
          <p className="text-emerald-200">{t.founderCtaDesc}</p>
          <Link
            href="#contact"
            className="mt-6 inline-block px-10 py-4 bg-yellow-400 text-emerald-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            {t.founderCtaBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}
