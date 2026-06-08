import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogIndexSection } from "@/components/sections/BlogIndexSection";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getBlogIndexSeo, getPageKeywords } from "@/lib/seo/keywords";
import {
  getBlogIndexSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/schema";

const seo = getBlogIndexSeo();

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  keywords: getPageKeywords(seo),
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
