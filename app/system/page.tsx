'use client';

import Link from 'next/link';
import {
  ArrowLeft,
  Check,
  AlertTriangle,
  Infinity as InfinityIcon,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SystemPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-24 pb-32 px-6 vibe-bg">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="mb-12 flex items-center text-emerald-800 font-bold hover:gap-2 transition-all"
        >
          <ArrowLeft className="mr-2" />
          <span>{t.sysBack}</span>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-8">{t.sysDetailTitle}</h1>

        <div className="prose prose-emerald prose-lg text-stone-700 space-y-12">
          {/* One member, two approaches */}
          <div className="bg-white p-8 md:p-12 rounded-[50px] shadow-sm border border-stone-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-emerald-900">
              {t.sysDetailH1}
            </h2>
            <p className="mb-6 leading-relaxed">{t.sysDetailP1}</p>
            <ul className="space-y-4 font-medium">
              {[t.sysDetailL1, t.sysDetailL2].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Numbered system pillars */}
          <div className="space-y-8 text-left">
            {[
              { num: '1', title: t.sysSumH1, desc: t.sysDetailS1 },
              { num: '2', title: t.sysDetailH2, desc: t.sysDetailS2 },
              { num: '3', title: t.sysDetailH3, desc: t.sysDetailS3 },
              { num: '4', title: t.sysSumH3, desc: t.sysDetailS4 },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-emerald-800 text-white rounded-full flex-shrink-0 flex items-center justify-center font-bold">
                  {num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-stone-900">{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Warnings */}
          <div className="p-8 bg-stone-200/50 rounded-3xl text-sm border border-stone-200">
            <h4 className="font-bold text-stone-900 mb-4 flex items-center">
              <AlertTriangle className="mr-2 w-5 h-5 text-amber-600" />
              <span>{t.sysWarnTitle}</span>
            </h4>
            <ul className="space-y-2 text-stone-600 list-disc pl-5">
              <li>{t.sysWarn1}</li>
              <li>{t.sysWarn2}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/#contact"
            className="px-12 py-5 bg-emerald-800 text-white rounded-full font-bold text-xl hover:shadow-2xl transition-all inline-block"
          >
            {t.sysJoinNow}
          </Link>
        </div>
      </div>
    </main>
  );
}
