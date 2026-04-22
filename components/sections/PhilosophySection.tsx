'use client';

import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="py-24 vibe-bg px-6 border-t border-stone-200/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-[50px] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
              alt="Healthy Lifestyle"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-6 md:p-8 rounded-[30px] shadow-xl border border-stone-100 text-center">
            <p className="text-emerald-900 font-bold text-2xl md:text-3xl">{t.philDate}</p>
            <p className="text-stone-500 font-medium text-sm">{t.philComing}</p>
          </div>
        </div>

        <div className="space-y-8">
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight text-stone-900"
            dangerouslySetInnerHTML={{ __html: t.philTitle }}
          />
          <p className="text-lg text-stone-600 leading-relaxed">{t.philDesc}</p>
          <ul className="space-y-4">
            {[t.philFeat1, t.philFeat2, t.philFeat3].map((feat, i) => (
              <li key={i} className="flex items-center text-stone-700 font-medium">
                <CheckCircle className="text-emerald-600 mr-3 w-5 h-5 flex-shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
