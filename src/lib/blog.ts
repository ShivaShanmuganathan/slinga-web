import { siteConfig } from "@/lib/config";
import fs from "fs";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type Post = {
  title: string;
  publishedAt: string;
  summary: string;
  slug: string;
  image: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Post> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Post] = value;
  });

  return { data: metadata as Post, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = parseFrontmatter(source);
  const content = await markdownToHTML(rawContent);
  const defaultImage = `${siteConfig.url}/og?title=${encodeURIComponent(
    metadata.title
  )}`;
  return {
    source: content,
    metadata: {
      ...metadata,
      image: metadata.image || defaultImage,
    },
    slug,
  };
}

async function getAllPosts(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const { metadata, source } = await getPost(slug);
      return {
        ...metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts(): Promise<Post[]> {
  // Hardcoded blog posts data since we're using React components
  return [
    {
      title: "Crypto Unicorn Assets",
      publishedAt: "2024-03-23",
      summary: "A comprehensive look into the onchain assets powering the Crypto Unicorns ecosystem — from NFTs to tokens and loot systems.",
      slug: "cu-assets",
      image: "/cu.jpg"
    },
    {
      title: "Twilight Tactics & Shadowforge",
      publishedAt: "2024-03-23",
      summary: "A deep dive into Crypto Unicorns' seasonal PvP system, Twilight Tactics, and the mechanics behind Shadowforge-driven minion warfare.",
      slug: "cu-twilight",
      image: "/cu-twilight-tactics.webp"
    },
    {
      title: "Crypto Unicorns: Expanding the Universe with Casual & 2nd Party Games",
      publishedAt: "2024-03-20",
      summary: "Exploring how Crypto Unicorns created an inclusive gaming ecosystem through casual games and second-party integrations.",
      slug: "cu-2p-loop",
      image: "/cu-2p-games.jpeg"
    },
    {
      title: "Crypto Unicorns: The Evolution of Skill-Based Gaming",
      publishedAt: "2024-03-20",
      summary: "Exploring how Crypto Unicorns revolutionized blockchain gaming with its skill-based competitive modes and PvP systems.",
      slug: "cu-battle-loop",
      image: "/cu-battle-loop.avif"
    },
    {
      title: "Crypto Unicorns: The Revolutionary Farm Economy",
      publishedAt: "2024-03-20",
      summary: "A deep dive into how Crypto Unicorns built a sustainable and engaging farm economy that drives the entire game ecosystem.",
      slug: "cu-farm-loop",
      image: "/cu-farm-loop.webp"
    },
    {
      title: "Crypto Unicorns: Trading & Distribution Systems",
      publishedAt: "2024-03-20",
      summary: "A technical deep dive into Crypto Unicorns' innovative marketplace and AMM-powered land distribution systems.",
      slug: "cu-trading-systems",
      image: "/cu-trading.png"
    }
  ];
}
