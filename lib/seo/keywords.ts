/**
 * SEO keyword utilities. Page-level primaries live in page-map.ts (no cannibalization).
 * SEO_KEYWORDS retains brand, long-tail, and legacy fallbacks for audits and ads.
 */
import {
  getFeaturedAreaKeywords,
  getFeaturedBlogSeo,
  getHomePageSeo,
  getPageKeywords,
  getServiceKeywords,
  PAGE_SEO,
} from "./page-map";
import {
  getAreaKeywords as getLegacyAreaKeywordsFromAreas,
  getCityKeywords as getLegacyCityKeywordsFromAreas,
} from "./areas";
import { getBlogKeywords as getLegacyBlogKeywords } from "@/lib/blog/posts";

export {
  getFeaturedAreaKeywords,
  getFeaturedAreaPageSeo,
  getFeaturedBlogSeo,
  getGalleryPageSeo,
  getHomePageSeo,
  getAboutPageSeo,
  getBlogIndexSeo,
  getPageKeywords,
  getReviewsPageSeo,
  getSeoRedirects,
  getServiceKeywords,
  getServicePageSeo,
  PAGE_SEO,
} from "./page-map";
export type {
  FeaturedAreaSlug,
  FeaturedBlogSlug,
  PageSeoEntry,
  SearchIntent,
  ServiceSlug,
} from "./page-map";

export const SEO_KEYWORDS = {
  brand: [
    "Creative Pro Construction",
    "Creative Pro Construction NJ",
    "CPC roofing New Jersey",
  ],

  longTail: [
    "how long does roof replacement take in NJ",
    "roof replacement cost nj 2026",
    "best roofing contractor Bergen County reviews",
    "insurance claim roof repair New Jersey",
    "hail damage roof repair NJ",
    "GAF certified roofer New Jersey",
    "architectural shingles NJ weather",
    "free roof inspection Clifton NJ",
    "roof ventilation upgrade New Jersey",
    "flat roof repair NJ commercial",
  ],

  intent: {
    commercial: [
      "hire roofing contractor NJ",
      "get free roof estimate New Jersey",
      "schedule roof inspection NJ",
      "licensed insured roofer near me",
    ],
    informational: [
      "roof warranty New Jersey",
      "roof installation process",
      "when to replace roof NJ",
      "storm damage roof inspection",
    ],
  },
} as const;

export function getKeywordsForService(slug: string): string[] {
  const mapped = getServiceKeywords(slug);
  if (mapped.length > 0) return mapped;
  return dedupeKeywords([...SEO_KEYWORDS.brand]);
}

export function getHomeKeywords(): string[] {
  return getPageKeywords(getHomePageSeo());
}

export function getServicesPageKeywords(): string[] {
  return dedupeKeywords([
    ...Object.values(PAGE_SEO.services).flatMap((entry) =>
      getPageKeywords(entry),
    ),
    ...SEO_KEYWORDS.brand,
  ]);
}

export function getAreaKeywords(slug: string): string[] {
  const mapped = getFeaturedAreaKeywords(slug);
  if (mapped.length > 0) return mapped;
  return getLegacyAreaKeywordsFromAreas(slug);
}

export function getCityPageKeywords(
  countySlug: string,
  citySlug: string,
): string[] {
  const mapped = getFeaturedAreaKeywords(`${countySlug}/${citySlug}`);
  if (mapped.length > 0) return mapped;
  return getLegacyCityKeywordsFromAreas(countySlug, citySlug);
}

export function getBlogKeywords(slug: string): string[] {
  const mapped = getFeaturedBlogSeo(slug);
  if (mapped) return getPageKeywords(mapped);
  return getLegacyBlogKeywords(slug);
}

function dedupeKeywords(keywords: string[]): string[] {
  return [...new Set(keywords.map((keyword) => keyword.trim()))];
}

export const ALL_SEO_KEYWORDS = dedupeKeywords([
  ...SEO_KEYWORDS.brand,
  ...getPageKeywords(PAGE_SEO.home),
  ...Object.values(PAGE_SEO.services).flatMap((entry) =>
    getPageKeywords(entry),
  ),
  ...Object.values(PAGE_SEO.areas).flatMap((entry) => getPageKeywords(entry)),
  ...Object.values(PAGE_SEO.blogPosts).flatMap((entry) =>
    getPageKeywords(entry),
  ),
  ...SEO_KEYWORDS.longTail,
  ...SEO_KEYWORDS.intent.commercial,
  ...SEO_KEYWORDS.intent.informational,
]);
