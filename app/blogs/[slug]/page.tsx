import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/mdx";
import BlogContent from "@/components/blogs/BlogContent";

interface BlogPostPageProps {
  params: { slug: string };
}

// Pre-render all blog slugs at build time
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate SEO metadata per blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { frontmatter } = getBlogBySlug(params.slug);
    return {
      title: `${frontmatter.title} | India Development Company`,
      description: frontmatter.excerpt,
      openGraph: {
        title: `${frontmatter.title} | India Development Company`,
        description: frontmatter.excerpt,
        images: frontmatter.coverImage ? [{ url: frontmatter.coverImage }] : [],
      },
    };
  } catch {
    return {
      title: "Blog Post | India Development Company",
    };
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  let post;
  try {
    post = getBlogBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <div className="bg-idc-navy pt-28 pb-8" />
      <div className="bg-white">
        <BlogContent frontmatter={post.frontmatter} readingTime={post.readingTime}>
          <MDXRemote source={post.content} />
        </BlogContent>
      </div>
    </>
  );
}
