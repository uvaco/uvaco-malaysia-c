'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const LAUNCH_DATE = new Date('2026-05-29T00:00:00+08:00');

interface CountdownTimerProps {
  dark?: boolean;
}

export default function CountdownTimer({ dark = false }: CountdownTimerProps) {
  const { t } = useLanguage();
  // diff 初始為 null，避免 SSR / client 因 Date.now() 不同而 hydration mismatch
  const [diff, setDiff] = useState<number | null>(null);

  useEffect(() => {
    setDiff(LAUNCH_DATE.getTime() - Date.now());
    const id = setInterval(() => {
      setDiff(LAUNCH_DATE.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (diff !== null && diff <= 0) {
    return (
      <span className={`font-bold ${dark ? 'text-yellow-300' : 'text-emerald-700'}`}>
        {t.countdownLaunched}
      </span>
    );
  }

  // diff 為 null（SSR 與首次 client render）時顯示佔位符 "--"，掛載後立即被真值取代
  const parts = diff === null
    ? [
        { v: '--', l: t.countdownDays },
        { v: '--', l: t.countdownHours },
        { v: '--', l: t.countdownMins },
        { v: '--', l: t.countdownSecs },
      ]
    : [
        { v: String(Math.floor(diff / 86400000)).padStart(2, '0'), l: t.countdownDays },
        { v: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'), l: t.countdownHours },
        { v: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'), l: t.countdownMins },
        { v: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'), l: t.countdownSecs },
      ];

  if (dark) {
    return (
      <div className="flex gap-3">
        {parts.map((p, i) => (
          <div key={i} className="countdown-unit">
            <div className="countdown-number text-white">{p.v}</div>
            <div className="countdown-label text-emerald-200">{p.l}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-4 justify-center">
      {parts.map((p, i) => (
        <div key={i} className="countdown-unit-light">
          <div className="countdown-number-light">{p.v}</div>
          <div className="countdown-label-light">{p.l}</div>
        </div>
      ))}
    </div>
  );
}
