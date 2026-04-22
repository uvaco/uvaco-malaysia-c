'use client';

import { useState } from 'react';
import { Newspaper, ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { newsData, getLangKey } from '@/lib/news-data';

export default function NewsSection() {
  const { t, currentLang } = useLanguage();
  const [view, setView] = useState<'marquee' | 'grid'>('marquee');
  const langKey = getLangKey(currentLang);

  const NewsCard = ({ item, isMarquee }: { item: typeof newsData[0]; isMarquee: boolean }) => (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={
        isMarquee
          ? 'flex flex-col bg-white p-8 rounded-3xl shadow-sm border border-stone-100 min-w-[320px] md:min-w-[450px] transition-transform hover:scale-[1.02]'
          : 'news-card bg-white p-8 rounded-[40px] border border-stone-200 hover:border-emerald-500 shadow-sm block text-left'
      }
    >
      <div className={`flex justify-between items-start ${isMarquee ? 'mb-6' : 'mb-2'}`}>
        <span className={`text-emerald-700 font-bold ${isMarquee ? 'text-lg uppercase' : 'text-xs uppercase'}`}>
          {item.src}
        </span>
        {isMarquee && <ExternalLink className="w-5 h-5 text-stone-300" />}
      </div>
      <h4 className={`font-bold text-left ${isMarquee ? 'text-xl' : 'text-lg mb-4'}`}>
        {item[langKey] || item.hant}
      </h4>
      {!isMarquee && (
        <div className="text-emerald-800 text-sm font-medium flex items-center">
          {t.newsReadMore}
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      )}
    </a>
  );

  return (
    <section id="news" className="py-24 bg-emerald-50 border-y border-emerald-100 px-6">
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
        <div>
          <h2 className="text-3xl font-bold text-stone-900 mb-4 flex items-center">
            <Newspaper className="mr-3 text-emerald-700" />
            <span>{t.newsTitle}</span>
          </h2>
          <p className="text-stone-500 text-lg">{t.newsSubTitle}</p>
        </div>

        <div className="flex bg-white p-1 rounded-full shadow-sm border border-emerald-100 self-start">
          <button
            onClick={() => setView('marquee')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              view === 'marquee'
                ? 'bg-emerald-800 text-white'
                : 'text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            {t.newsToggleMarquee}
          </button>
          <button
            onClick={() => setView('grid')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              view === 'grid'
                ? 'bg-emerald-800 text-white'
                : 'text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            {t.newsToggleGrid}
          </button>
        </div>
      </div>

      {/* Marquee view */}
      {view === 'marquee' && (
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* Doubled for seamless loop */}
            <div className="flex space-x-8 px-4">
              {newsData.map((item, i) => (
                <NewsCard key={i} item={item} isMarquee />
              ))}
            </div>
            <div className="flex space-x-8 px-4">
              {newsData.map((item, i) => (
                <NewsCard key={`dup-${i}`} item={item} isMarquee />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Grid view */}
      {view === 'grid' && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((item, i) => (
            <NewsCard key={i} item={item} isMarquee={false} />
          ))}
        </div>
      )}
    </section>
  );
}
