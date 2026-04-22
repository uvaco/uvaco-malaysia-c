'use client';

import React, { createContext, useContext, useState } from 'react';
import { i18n, Lang, Translations } from '@/lib/i18n';

interface LanguageContextType {
  currentLang: Lang;
  t: Translations;
  changeLanguage: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: 'zh-Hant',
  t: i18n['zh-Hant'],
  changeLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Lang>('zh-Hant');

  function changeLanguage(lang: Lang) {
    setCurrentLang(lang);
    document.documentElement.lang = lang;
  }

  return (
    <LanguageContext.Provider value={{ currentLang, t: i18n[currentLang], changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
