import { Blog } from "@/components/sections/blog";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Statistics } from "@/components/sections/statistics";
import HowItWorks from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Logos />
      <Statistics />
      <HowItWorks />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
