'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16 text-center px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-center mb-6">
          <span className="text-xl font-bold text-white uppercase tracking-widest">UVACO</span>
          <span className="ml-2 text-lg font-medium text-emerald-500">{t.brandSub}</span>
        </div>
        <p
          className="text-xs border-t border-stone-800 pt-8"
          dangerouslySetInnerHTML={{ __html: t.footerText }}
        />
      </div>
    </footer>
  );
}
