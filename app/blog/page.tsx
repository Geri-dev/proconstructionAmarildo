import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogIndexSection } from "@/components/sections/BlogIndexSection";
import { createPageMetadata } from "@/lib/seo/metadata";
import { SEO_KEYWORDS } from "@/lib/seo/keywords";
import {
  getBlogIndexSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Roofing Tips & Guides for New Jersey Homeowners",
  description:
    "Read expert guides on roof replacement timelines, costs, insurance claims, materials, and maintenance for New Jersey homeowners from Creative Pro Construction.",
  path: "/blog",
  keywords: [
    ...SEO_KEYWORDS.longTail,
    ...SEO_KEYWORDS.intent.informational,
    "NJ roofing blog",
    "roofing advice New Jersey",
  ],
});

export default function BlogPage() {
  return (
    <main className="relative bg-white">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          getBlogIndexSchema(),
        ]}
      />
      <BlogIndexSection />
    </main>
  );
}
