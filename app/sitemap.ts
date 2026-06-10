import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo/constants";
import { getAllCityPaths, getAllCountySlugs } from "@/lib/seo/areas";
import { getAllLocalServicePaths } from "@/lib/seo/local-service-pages";
import { getAllBlogSlugs } from "@/lib/blog/posts";
import { getAllServiceSlugs } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const serviceSlugs = getAllServiceSlugs();
  const countySlugs = getAllCountySlugs();
  const cityPaths = getAllCityPaths();
  const localServicePaths = getAllLocalServicePaths();
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
      url: absoluteUrl("/about-us"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/reviews"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/gallery"),
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
    ...countySlugs.map((slug) => ({
      url: absoluteUrl(`/areas/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...cityPaths.map(({ countySlug, citySlug }) => ({
      url: absoluteUrl(`/areas/${countySlug}/${citySlug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...localServicePaths.map(({ slug, countySlug, citySlug }) => ({
      url: absoluteUrl(`/services/${slug}/${countySlug}/${citySlug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    ...blogSlugs.map((slug) => ({
      url: absoluteUrl(`/blog/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
