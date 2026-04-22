'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-stone-50 text-center px-6">
      <h2 className="text-3xl md:text-6xl font-bold mb-4 italic text-emerald-900 leading-tight">
        {t.contactTitle}
      </h2>
      <p className="text-stone-500 mb-12 text-lg">{t.contactDesc}</p>

      <div className="max-w-5xl mx-auto relative bg-white rounded-[50px] p-4 md:p-12 shadow-2xl border border-stone-200">
        <div className="rounded-[30px] overflow-hidden min-h-[1000px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSducu1HjFkrxdqGmJoDHCvceWqTczKsU6R8TSlX53mWcsKmzg/viewform?usp=header"
            width="100%"
            height="1000"
            frameBorder="0"
            className="w-full"
          >
            {t.iframeLoading}
          </iframe>
        </div>
      </div>
    </section>
  );
}
