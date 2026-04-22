'use client';

import { useLanguage } from '@/context/LanguageContext';
import CountdownTimer from '@/components/ui/CountdownTimer';

export default function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-emerald-900 text-white py-3 px-4 text-center z-[60] relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <div className="flex items-center space-x-2 text-sm font-bold">
          <span className="bg-yellow-400 text-emerald-900 px-2 py-0.5 rounded text-xs uppercase tracking-tighter">
            {t.newMarket}
          </span>
          <p>{t.announcementText}</p>
        </div>
        <CountdownTimer dark />
      </div>
    </div>
  );
}
