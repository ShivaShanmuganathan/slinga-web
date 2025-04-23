import BlogCard from "@/components/blog-card";
import { getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/config";
import { constructMetadata } from "@/lib/utils";
import { Section } from "@/components/section";
import Calendar from "@/components/sections/calendar";
import CaseStudies from "@/components/sections/CaseStudies";

export const metadata = constructMetadata({
  title: "Blog",
  description: `Latest news and updates from ${siteConfig.name}.`,
});

export default async function Blog() {
  const allPosts = await getBlogPosts();

  const articles = await Promise.all(
    allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  );

  return (
    <>

    <Section id="blog" title="BLOG" subtitle="Projects Explained" className="w-full max-w-[2000px] mx-auto">
      <div className="min-h-[50vh] border-b  bg-black">
        <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 px-2.5 py-10 lg:px-20 lg:grid-cols-3">
          {articles.map((data, idx) => (
            <BlogCard key={data.slug} data={data} priority={idx <= 1} />
          ))}
        </div>
      </div>
    </Section>

    <CaseStudies />
    <Calendar />
    </>
  );
}
