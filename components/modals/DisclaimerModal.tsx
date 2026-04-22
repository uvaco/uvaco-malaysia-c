'use client';

import { AlertCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';

export default function DisclaimerModal() {
  const { t } = useLanguage();
  const { disclaimerOpen, closeDisclaimer } = useModal();

  if (!disclaimerOpen) return null;

  return (
    <div className="modal-backdrop" onClick={closeDisclaimer}>
      <div
        className="modal-content text-left"
        style={{ maxWidth: 550 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mb-6 mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 text-center">
          {t.discTitle}
        </h3>
        <div className="space-y-4 text-stone-600 text-sm md:text-base leading-relaxed">
          <p>{t.discBody1}</p>
          <p>{t.discBody2}</p>
          <p>{t.discBody3}</p>
          <p className="font-bold text-emerald-800 text-center">
            👉{' '}
            <a
              href="https://www.uvaco.com.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 underline-offset-4"
            >
              UVACO 官方網站(uvaco.com.tw)
            </a>
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={closeDisclaimer}
            className="flex-1 px-6 py-3 bg-stone-100 text-stone-700 rounded-full font-bold hover:bg-stone-200 transition-all"
          >
            {t.discBtnContinue}
          </button>
          <a
            href="https://www.uvaco.com.tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 bg-emerald-800 text-white rounded-full font-bold text-center hover:bg-emerald-900 transition-all shadow-lg"
          >
            {t.discBtnGoOfficial}
          </a>
        </div>
      </div>
    </div>
  );
}
