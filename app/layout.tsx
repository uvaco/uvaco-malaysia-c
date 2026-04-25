import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ModalProvider } from '@/context/ModalContext';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/layout/StickyCTA';
import FloatingButtons from '@/components/ui/FloatingButtons';
import DisclaimerModal from '@/components/modals/DisclaimerModal';
import LeadModal from '@/components/modals/LeadModal';
import ExitIntentModal from '@/components/modals/ExitIntentModal';
import AutoDisclaimer from '@/components/modals/AutoDisclaimer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.uvacomy.info'),
  title: {
    default: 'UVACO (葡眾) Malaysia | Pro-Partner 2026 馬來西亞啟動',
    template: '%s | UVACO Malaysia',
  },
  description:
    '葡眾馬來西亞 2026/05/29 正式啟動！Pro-Partner Malaysia 首批會員招募中。積分終身累積、職級只升不降、事業可世襲傳承。立即登記搶先佈局馬來西亞市場。',
  keywords: [
    'UVACO', '葡眾', 'Pro-Partner Malaysia', '葡眾馬來西亞', 'UVACO Malaysia 2026',
    '馬來西亞直銷', '馬來西亞創業機會', '葡眾大馬', '葡眾啟動', 'uvacomy.info',
    'direct sales Malaysia', 'MLM Malaysia 2026', 'Grape King Malaysia',
  ],
  authors: [{ name: 'UVACO Malaysia First Wave Team', url: 'https://www.uvacomy.info' }],
  creator: 'UVACO Malaysia First Wave Team',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    alternateLocale: ['zh_CN', 'en_US', 'ms_MY'],
    url: 'https://www.uvacomy.info',
    siteName: 'UVACO Malaysia',
    title: 'UVACO (葡眾) Malaysia | Pro-Partner 2026 馬來西亞啟動',
    description:
      '葡眾馬來西亞 2026/05/29 正式啟動！首批會員招募中。積分終身累積、職級只升不降、事業可世襲傳承。',
    images: [
      {
        url: '/UVACO_products.png',
        width: 1200,
        height: 630,
        alt: 'UVACO (葡眾) Malaysia 首發產品',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UVACO (葡眾) Malaysia | Pro-Partner 2026 馬來西亞啟動',
    description: '葡眾馬來西亞 2026/05/29 正式啟動！首批會員招募中。',
    images: ['/UVACO_products.png'],
  },
  alternates: {
    canonical: 'https://www.uvacomy.info',
    languages: {
      'zh-TW': 'https://www.uvacomy.info',
      'zh-CN': 'https://www.uvacomy.info',
      'en': 'https://www.uvacomy.info',
      'ms': 'https://www.uvacomy.info',
    },
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UVACO Malaysia (葡眾馬來西亞)',
    alternateName: ['Pro-Partner Malaysia', '葡眾', 'UVACO', 'Grape King Malaysia'],
    url: 'https://www.uvacomy.info',
    logo: 'https://www.uvacomy.info/UVACO_products.png',
    description:
      '葡眾（Pro-Partner）馬來西亞分公司，2026年5月29日正式啟動，提供優質健康產品與創業機會。母公司葡萄王上市逾40年，台灣直銷龍頭。',
    foundingDate: '2026',
    areaServed: { '@type': 'Country', name: 'Malaysia' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Chinese', 'English', 'Malay'],
    },
    sameAs: ['https://uvaco-malaysia-c.vercel.app'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'UVACO Pro-Partner Malaysia 2026 Official Launch 葡眾馬來西亞正式啟動',
    startDate: '2026-05-29',
    endDate: '2026-05-29',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: { '@type': 'Country', name: 'Malaysia' },
    description:
      '葡眾（UVACO / Pro-Partner）馬來西亞正式啟動，首批會員招募。掌握市場空白期的黃金機會。',
    organizer: { '@type': 'Organization', name: 'UVACO Malaysia', url: 'https://www.uvacomy.info' },
    url: 'https://www.uvacomy.info',
    image: 'https://www.uvacomy.info/UVACO_products.png',
    offers: {
      '@type': 'Offer',
      description: '加入葡眾馬來西亞首批會員，搶佔市場先機',
      url: 'https://www.uvacomy.info/#contact',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '葡眾馬來西亞什麼時候正式啟動？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '葡眾（UVACO / Pro-Partner）馬來西亞將於 2026 年 5 月 29 日正式啟動，現正招募首批會員。',
        },
      },
      {
        '@type': 'Question',
        name: '如何加入葡眾馬來西亞首批會員？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '請填寫網站上的聯絡表單，台灣核心團隊將在 24 小時內與您聯繫，提供完整的入會資訊。',
        },
      },
      {
        '@type': 'Question',
        name: '葡眾的制度有什麼特點？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '葡眾制度三大特色：(1) 積分終身累積不歸零；(2) 職級只升不降；(3) 事業可世襲傳承給子女（珍珠級以上）。每年僅需消費一次 160 SV（約 700~800 MYR）即可維護資格，無年費月費壓力。',
        },
      },
      {
        '@type': 'Question',
        name: '葡眾是合法的直銷公司嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '是的。葡眾母公司葡萄王在台灣上市逾 40 年，為台灣直銷龍頭企業，依馬來西亞法律合法經營，EPS 高達 NT$6.58。',
        },
      },
      {
        '@type': 'Question',
        name: 'What is UVACO Pro-Partner Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'UVACO (Pro-Partner / 葡眾) is a Taiwan-based direct sales company launching in Malaysia on May 29, 2026. The parent company Grape King has been publicly listed for 40+ years. Members enjoy lifetime PV accumulation, no rank demotion, and an inheritable business network.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah UVACO Pro-Partner Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'UVACO (Pro-Partner) adalah syarikat jualan langsung Taiwan yang dilancarkan di Malaysia pada 29 Mei 2026. Mata terkumpul seumur hidup, pangkat tidak turun, dan rangkaian perniagaan boleh diwarisi.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://www.uvacomy.info',
    name: 'UVACO Malaysia',
    description: '葡眾馬來西亞 2026 正式啟動資訊站',
    inLanguage: ['zh-TW', 'zh-CN', 'en', 'ms'],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="vibe-bg text-stone-800">
        <LanguageProvider>
          <ModalProvider>
            <AnnouncementBar />
            <Navbar />
            {children}
            <Footer />
            <StickyCTA />
            <FloatingButtons />
            {/* Modals */}
            <DisclaimerModal />
            <LeadModal />
            <ExitIntentModal />
            {/* Auto-open disclaimer on first load */}
            <AutoDisclaimer />
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
