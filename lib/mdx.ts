import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  coverImage: string;
}

export interface BlogPost {
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: number;
}

export interface BlogMeta {
  frontmatter: BlogFrontmatter;
  readingTime: number;
}

// Calculate estimated reading time (avg 200 words/min)
const calcReadingTime = (content: string): number => {
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / 200);
};

export function getAllBlogSlugs(): string[] {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllBlogs(): BlogMeta[] {
  const slugs = getAllBlogSlugs();
  return slugs
    .map((slug) => {
      const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        frontmatter: data as BlogFrontmatter,
        readingTime: calcReadingTime(content),
      };
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getBlogBySlug(slug: string): BlogPost {
  const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime: calcReadingTime(content),
  };
}
