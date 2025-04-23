import { Post } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  data,
  priority,
}: {
  data: Post;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/blog/${data.slug}`}
      className="group relative bg-background transition-colors hover:bg-secondary/20 p-6 border-b lg:border-b lg:last:border-b-0 lg:border-r last:lg:border-r-0"
    >
      <div className="aspect-[16/9] relative mb-6 overflow-hidden rounded-lg border">
        <Image
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          src={data.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={data.title}
          priority={priority}
        />
      </div>
      <p className="mb-2">
        <time
          dateTime={data.publishedAt}
          className="text-xs text-muted-foreground"
        >
          {formatDate(data.publishedAt)}
        </time>
      </p>
      <h3 className="text-xl font-medium mb-3 line-clamp-2">{data.title}</h3>
      <p className="text-muted-foreground line-clamp-3">{data.summary}</p>
    </Link>
  );
}
