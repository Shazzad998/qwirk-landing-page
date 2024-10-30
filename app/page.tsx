import Navbar from "@/components/common/Navbar";
import AboutProductSection from "@/components/sections/AboutProductSection";
import AlertSection from "@/components/sections/AlertSection";
import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import FeatureSection from "@/components/sections/FeatureSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import MarqueSection from "@/components/sections/MarqueSection";
import PricingSection from "@/components/sections/PricingSection";

export default function Home() {
  return (
    <main>
      <AlertSection />
      <Navbar />
      <HeroSection />
      <MarqueSection />
      <AboutProductSection />
      <FeatureSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
