'use client';

import Link from 'next/link';
import { FileDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';

export default function LeadModal() {
  const { t } = useLanguage();
  const { leadOpen, leadResource, closeLead } = useModal();

  if (!leadOpen) return null;

  return (
    <div className="modal-backdrop" onClick={closeLead}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="w-20 h-20 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-6 mx-auto">
          <FileDown className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-stone-900 mb-2">{t.leadModalTitle}</h3>
        <p className="text-emerald-700 font-bold mb-4">{leadResource}</p>
        <p className="text-stone-500 mb-6 text-sm">{t.leadModalDesc}</p>
        <Link
          href="/#contact"
          onClick={closeLead}
          className="px-8 py-3 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-900 transition-all inline-block w-full"
        >
          {t.leadModalBtn}
        </Link>
      </div>
    </div>
  );
}
