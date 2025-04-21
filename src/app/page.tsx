import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import { GrowthSection } from "@/components/sections/growth-section";
import Logos from "@/components/sections/logos";
import { getBlogPosts } from "@/lib/blog";

export default async function Home() {
  const allPosts = await getBlogPosts();
  const articles = allPosts
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((post) => ({
      title: post.title,
      summary: post.summary,
      image: post.image,
      slug: post.slug,
    }));

  return (
    <main>
      <Hero />
      <Logos />
      <GrowthSection articles={articles} />
      <HowItWorks />
      <CTA />
    </main>
  );
}
