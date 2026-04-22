'use client';

import { Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FloatingButtons() {
  const { t } = useLanguage();

  return (
    <div className="contact-float">
      <a
        href="https://t.me/UVACO_2025"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-tg"
      >
        <Send className="w-5 h-5" />
        <span>{t.tgText}</span>
      </a>
      <a
        href="https://wa.me/886908985002?text=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3%20UVACO%20%28%E8%91%A1%E7%9C%BE%29%20%E9%A6%AC%E4%BE%86%E8%A5%BF%E4%BA%9E%E5%89%B5%E6%A5%AD%E6%A9%9F%E6%9C%83"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-wa"
      >
        <MessageCircle className="w-5 h-5" />
        <span>{t.waText}</span>
      </a>
    </div>
  );
}
