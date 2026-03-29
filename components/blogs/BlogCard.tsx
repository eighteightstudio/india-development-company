import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogMeta } from "@/lib/mdx";

interface BlogCardProps {
  blog: BlogMeta;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const { frontmatter, readingTime } = blog;

  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-idc-blue/30 transition-all duration-300">
      {/* Cover image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Category chip overlay */}
        <div className="absolute top-4 left-4">
          <span className="bg-idc-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
            {frontmatter.category}
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h2 className="font-heading font-bold text-idc-navy text-lg leading-tight mb-2 group-hover:text-idc-blue transition-colors">
          {frontmatter.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
          {frontmatter.excerpt}
        </p>

        {/* Read more link */}
        <Link
          href={`/blogs/${frontmatter.slug}`}
          className="inline-flex items-center gap-1.5 text-idc-orange font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          Read More
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
