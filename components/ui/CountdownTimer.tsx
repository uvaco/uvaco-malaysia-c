'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const LAUNCH_DATE = new Date('2026-05-29T00:00:00+08:00');

interface CountdownTimerProps {
  dark?: boolean;
}

export default function CountdownTimer({ dark = false }: CountdownTimerProps) {
  const { t } = useLanguage();
  const [diff, setDiff] = useState(LAUNCH_DATE.getTime() - Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setDiff(LAUNCH_DATE.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (diff <= 0) {
    return (
      <span className={`font-bold ${dark ? 'text-yellow-300' : 'text-emerald-700'}`}>
        {t.countdownLaunched}
      </span>
    );
  }

  const parts = [
    { v: Math.floor(diff / 86400000), l: t.countdownDays },
    { v: Math.floor((diff % 86400000) / 3600000), l: t.countdownHours },
    { v: Math.floor((diff % 3600000) / 60000), l: t.countdownMins },
    { v: Math.floor((diff % 60000) / 1000), l: t.countdownSecs },
  ];

  if (dark) {
    return (
      <div className="flex gap-3">
        {parts.map((p, i) => (
          <div key={i} className="countdown-unit">
            <div className="countdown-number text-white">{String(p.v).padStart(2, '0')}</div>
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
          <div className="countdown-number-light">{String(p.v).padStart(2, '0')}</div>
          <div className="countdown-label-light">{p.l}</div>
        </div>
      ))}
    </div>
  );
}
