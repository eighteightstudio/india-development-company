import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight } from "lucide-react";
import { BlogFrontmatter } from "@/lib/mdx";

interface BlogContentProps {
  frontmatter: BlogFrontmatter;
  readingTime: number;
  children: React.ReactNode;
}

const BlogContent = ({ frontmatter, readingTime, children }: BlogContentProps) => {
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back button */}
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-idc-blue text-sm font-medium hover:text-idc-orange transition-colors mb-8"
      >
        <ArrowLeft size={15} />
        Back to Blogs
      </Link>

      {/* Category chip */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 bg-idc-orange/10 text-idc-orange border border-idc-orange/30 text-xs font-semibold px-3 py-1 rounded-full">
          <Tag size={10} />
          {frontmatter.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="font-heading font-bold text-idc-navy text-3xl md:text-4xl leading-tight mb-5">
        {frontmatter.title}
      </h1>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-5 text-gray-400 text-sm mb-8 pb-8 border-b border-gray-200">
        <span className="flex items-center gap-2">
          <User size={14} />
          {frontmatter.author}
        </span>
        <span className="flex items-center gap-2">
          <Calendar size={14} />
          {formattedDate}
        </span>
        <span className="flex items-center gap-2">
          <Clock size={14} />
          {readingTime} min read
        </span>
      </div>

      {/* MDX rendered content */}
      <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-idc-navy prose-a:text-idc-blue prose-a:no-underline hover:prose-a:text-idc-orange prose-strong:text-idc-navy prose-li:text-gray-600 prose-p:text-gray-600 prose-p:leading-relaxed">
        {children}
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 p-7 rounded-2xl bg-idc-navy text-center">
        <p className="text-idc-sky/80 text-sm mb-1">Ready to work with us?</p>
        <h3 className="font-heading font-bold text-idc-white text-xl mb-4">
          Need Chrome Plating Services?
        </h3>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-idc-orange text-idc-white font-semibold px-6 py-2.5 rounded-lg hover:bg-orange-500 transition-colors duration-200 text-sm"
        >
          Contact Us
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
};

export default BlogContent;
