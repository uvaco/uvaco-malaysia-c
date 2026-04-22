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
  title: 'UVACO (葡眾) | Pro-Partner Malaysia 2026',
  description:
    'UVACO (葡眾) Pro-Partner Malaysia 2026 Official Launch. 葡眾馬來西亞 2026 正式啟動。',
  keywords: 'UVACO, 葡眾, UVACO Malaysia, 葡眾馬來西亞, Pro-Partner Malaysia, 創業機會',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
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
