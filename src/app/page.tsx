import { CTA } from "@/components/sections/cta";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import { GrowthSection } from "@/components/sections/growth-section";
import Logos from "@/components/sections/logos";
import Calendar from "@/components/sections/calendar";
import MarqueeGallery from '@/components/MarqueeGallery';
import StickyScrollLayout from '@/components/StickyScrollLayout';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Logos />
      <MarqueeGallery />
      {/* <GrowthSection /> */}
      {/* <HowItWorks /> */}
      <StickyScrollLayout />
      <CTA />
      <Calendar />
    </main>
  );
}
