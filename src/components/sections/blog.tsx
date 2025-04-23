import BlogCard from "@/components/blog-card";
import { Section } from "@/components/section";
import { getBlogPosts } from "@/lib/blog";
import Calendar from "@/components/sections/calendar";

export default async function Blog() {
  const articles = await getBlogPosts();

  return (
    <Section id="blog" title="BLOG">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border">
        {articles.map((data, idx) => (
          <div key={data.slug} className="flex flex-col">
            <BlogCard data={data} priority={idx <= 1} />
            
          </div>
        ))}
      </div>
      <Calendar />
    </Section>
  );
}
