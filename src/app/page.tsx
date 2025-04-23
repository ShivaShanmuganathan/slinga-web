import { CTA } from "@/components/sections/cta";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import HeroSection from "@/components/sections/herosection";
import Logos from "@/components/sections/logos";
import Calendar from "@/components/sections/calendar";
import MarqueeGallery from '@/components/MarqueeGallery';
import StickyScrollLayout from '@/components/StickyScrollLayout';
import CaseStudies from '@/components/sections/CaseStudies';
import HowItWorks from '@/components/sections/HowItWorks';
import { Footer } from '@/components/sections/footer';
import { GrowthSection } from '@/components/sections/growth-section';


export default function Home() {
  return (
    <main>
      <Header />
      {/* <Hero /> */}
      <HeroSection />
      <Logos />
      <GrowthSection />
      <MarqueeGallery />
      <StickyScrollLayout />
      <CaseStudies />
      <HowItWorks />
      <Calendar />
      <Footer />
    </main>
  );
}