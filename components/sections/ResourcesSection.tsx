'use client';

import { FileText, Package, Presentation } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';

export default function ResourcesSection() {
  const { t } = useLanguage();
  const { openLead } = useModal();

  const downloads = [
    { Icon: FileText, title: t.dl1Title, desc: t.dl1Desc },
    { Icon: Package, title: t.dl2Title, desc: t.dl2Desc },
    { Icon: Presentation, title: t.dl3Title, desc: t.dl3Desc },
  ];

  return (
    <section id="downloads" className="py-24 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-stone-900 mb-4">{t.downloadTitle}</h2>
      <p className="text-stone-500 mb-16 max-w-xl mx-auto">{t.downloadSubTitle}</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {downloads.map(({ Icon, title, desc }, i) => (
          <div
            key={i}
            className="download-card p-8 rounded-[40px] bg-stone-50 border border-stone-100 text-center"
          >
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Icon />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-stone-400 text-sm mb-6">{desc}</p>
            <button
              onClick={() => openLead(title)}
              className="w-full py-3 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-700 transition-all"
            >
              {t.dlBtn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
