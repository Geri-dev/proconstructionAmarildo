import { createOgImageResponse } from "@/lib/seo/og";
import { getBlogPostBySlug } from "@/lib/blog/posts";

export const alt = "Creative Pro Construction blog article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  return createOgImageResponse({
    eyebrow: "NJ Roofing Guide",
    title: post?.title ?? "Roofing Blog",
    subtitle: post?.excerpt.slice(0, 120),
  });
}
