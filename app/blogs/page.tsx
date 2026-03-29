import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/mdx";
import BlogCard from "@/components/blogs/BlogCard";

export const metadata: Metadata = {
  title: "Blogs | India Development Company",
  description:
    "Industry insights, technical guides, and buyer resources from India Development Company — covering hard chrome plating, industrial manufacturing, and more.",
  openGraph: {
    title: "Blogs | India Development Company",
    description:
      "Technical guides and industry insights on chrome plating and industrial manufacturing from IDC, Kolkata.",
  },
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-idc-navy to-idc-blue pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-idc-sky/10 text-idc-sky border border-idc-sky/40 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Knowledge Hub
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-idc-white leading-tight mb-4">
              Industry Insights and Guides
            </h1>
            <p className="text-idc-sky/80 text-lg leading-relaxed">
              Technical education, industry insights, and procurement guides for plant engineers,
              maintenance managers, and industrial buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-400 py-20">No blog posts found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <BlogCard key={blog.frontmatter.slug} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
