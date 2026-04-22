'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';

export default function ExitIntentModal() {
  const { t } = useLanguage();
  const { exitOpen, openExit, closeExit } = useModal();
  const shownRef = useRef(false);
  const pageLoadTime = useRef(Date.now());

  useEffect(() => {
    function handleMouseLeave(e: MouseEvent) {
      const onPageLongEnough = Date.now() - pageLoadTime.current > 5000;
      const exitingFromTop = e.clientY <= 0;
      if (!shownRef.current && onPageLongEnough && exitingFromTop) {
        shownRef.current = true;
        openExit();
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [openExit]);

  if (!exitOpen) return null;

  return (
    <div className="modal-backdrop" onClick={closeExit}>
      <div
        className="modal-content"
        style={{ maxWidth: 480 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-4xl mb-4">🇲🇾</div>
        <h3 className="text-2xl font-bold text-stone-900 mb-3">{t.exitTitle}</h3>
        <p className="text-stone-500 mb-6 leading-relaxed">{t.exitDesc}</p>
        <Link
          href="/#contact"
          onClick={closeExit}
          className="px-8 py-3 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-900 transition-all inline-block w-full mb-3"
        >
          {t.exitBtn1}
        </Link>
        <button
          onClick={closeExit}
          className="text-stone-400 text-sm hover:text-stone-600 transition-all"
        >
          {t.exitBtn2}
        </button>
      </div>
    </div>
  );
}
