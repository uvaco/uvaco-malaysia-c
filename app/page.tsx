import HeroSection from '@/components/sections/HeroSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import SystemSummarySection from '@/components/sections/SystemSummarySection';
import FounderPerksSection from '@/components/sections/FounderPerksSection';
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection';
import NewsSection from '@/components/sections/NewsSection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <BenefitsSection />
      <SystemSummarySection />
      <FounderPerksSection />
      <FeaturedProductsSection />
      <NewsSection />
      <ResourcesSection />
      <ContactSection />
    </main>
  );
}
