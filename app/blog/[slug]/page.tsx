import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogPostContent } from "@/components/sections/BlogPostContent";
import {
  getAllBlogSlugs,
  getBlogKeywords,
  getBlogPostBySlug,
} from "@/lib/blog/posts";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  getBlogPostSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/schema";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return createPageMetadata({
      title: "Article Not Found",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: getBlogKeywords(slug),
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postSchema = getBlogPostSchema(slug);

  return (
    <main className="relative bg-white">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
          ...(postSchema ? [postSchema] : []),
        ]}
      />
      <BlogPostContent post={post} />
    </main>
  );
}
