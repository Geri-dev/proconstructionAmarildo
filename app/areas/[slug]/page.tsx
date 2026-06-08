import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { AreaPageContent } from "@/components/sections/AreaPageContent";
import {
  getAllAreaSlugs,
  getAreaBySlug,
} from "@/lib/seo/areas";
import { getAreaKeywords, getFeaturedAreaPageSeo } from "@/lib/seo/keywords";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  getAreaServiceSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/schema";

type AreaPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return createPageMetadata({
      title: "Service Area Not Found",
      path: `/areas/${slug}`,
      noIndex: true,
    });
  }

  const seo = getFeaturedAreaPageSeo(slug);

  return createPageMetadata({
    title: seo?.title ?? `Roofing Contractor in ${area.name}`,
    description: seo?.description ?? area.description,
    path: `/areas/${slug}`,
    keywords: getAreaKeywords(slug),
  });
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const areaSchema = getAreaServiceSchema(slug);

  return (
    <main className="relative bg-white">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/areas" },
            { name: area.name, path: `/areas/${slug}` },
          ]),
          ...(areaSchema ? [areaSchema] : []),
        ]}
      />
      <AreaPageContent area={area} />
    </main>
  );
}
