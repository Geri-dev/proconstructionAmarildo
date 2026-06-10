import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { CityPageContent } from "@/components/sections/CityPageContent";
import {
  getAllCityPaths,
  getCityBySlugs,
  getCityPagePath,
  getCountyBySlug,
} from "@/lib/seo/areas";
import {
  getCityPageKeywords,
  getFeaturedAreaPageSeo,
} from "@/lib/seo/keywords";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  getBreadcrumbSchema,
  getCityServiceSchema,
} from "@/lib/seo/schema";

type CityPageProps = {
  params: Promise<{ slug: string; citySlug: string }>;
};

export function generateStaticParams() {
  return getAllCityPaths().map(({ countySlug, citySlug }) => ({
    slug: countySlug,
    citySlug,
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { slug, citySlug } = await params;
  const city = getCityBySlugs(slug, citySlug);

  if (!city) {
    return createPageMetadata({
      title: "City Not Found",
      path: `/areas/${slug}/${citySlug}`,
      noIndex: true,
    });
  }

  const seoKey = `${slug}/${citySlug}`;
  const seo = getFeaturedAreaPageSeo(seoKey);

  return createPageMetadata({
    title: seo?.title ?? `Roofing Contractor in ${city.name}`,
    description: seo?.description ?? city.description,
    path: getCityPagePath(slug, citySlug),
    keywords: getCityPageKeywords(slug, citySlug),
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug, citySlug } = await params;
  const county = getCountyBySlug(slug);
  const city = getCityBySlugs(slug, citySlug);

  if (!county || !city) {
    notFound();
  }

  const citySchema = getCityServiceSchema(slug, citySlug);

  return (
    <main className="relative bg-white">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/areas" },
            { name: county.name, path: `/areas/${slug}` },
            { name: city.name, path: getCityPagePath(slug, citySlug) },
          ]),
          ...(citySchema ? [citySchema] : []),
        ]}
      />
      <CityPageContent city={city} county={county} />
    </main>
  );
}
