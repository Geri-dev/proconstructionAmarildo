import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo/constants";
import { getAllAreaSlugs } from "@/lib/seo/areas";
import { getAllBlogSlugs } from "@/lib/blog/posts";
import { getAllServiceSlugs } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const serviceSlugs = getAllServiceSlugs();
  const areaSlugs = getAllAreaSlugs();
  const blogSlugs = getAllBlogSlugs();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/areas"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...serviceSlugs.map((slug) => ({
      url: absoluteUrl(`/services/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...areaSlugs.map((slug) => ({
      url: absoluteUrl(`/areas/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...blogSlugs.map((slug) => ({
      url: absoluteUrl(`/blog/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
