import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";
import { ServiceOtherServicesSection } from "@/components/sections/ServiceOtherServicesSection";
import {
  getCityBySlugs,
  getCountyBySlug,
} from "@/lib/seo/areas";
import {
  getAllLocalServicePaths,
  getLocalServiceMetadataDescription,
  getLocalServiceMetadataTitle,
  getLocalServicePagePath,
  getLocalServiceKeywords,
} from "@/lib/seo/local-service-pages";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  getBreadcrumbSchema,
  getLocalServiceSchema,
} from "@/lib/seo/schema";
import {
  formatServiceTitle,
  getServiceBySlug,
} from "@/lib/services";

type LocalServicePageProps = {
  params: Promise<{
    slug: string;
    countySlug: string;
    citySlug: string;
  }>;
};

export function generateStaticParams() {
  return getAllLocalServicePaths();
}

export async function generateMetadata({
  params,
}: LocalServicePageProps): Promise<Metadata> {
  const { slug, countySlug, citySlug } = await params;
  const service = getServiceBySlug(slug);
  const city = getCityBySlugs(countySlug, citySlug);
  const county = getCountyBySlug(countySlug);

  if (!service || !city || !county) {
    return createPageMetadata({
      title: "Service Not Found",
      path: getLocalServicePagePath(slug, countySlug, citySlug),
      noIndex: true,
    });
  }

  const context = { service, city, county };

  return createPageMetadata({
    title: getLocalServiceMetadataTitle(context),
    description: getLocalServiceMetadataDescription(context),
    path: getLocalServicePagePath(slug, countySlug, citySlug),
    keywords: getLocalServiceKeywords(context),
  });
}

export default async function LocalServicePage({ params }: LocalServicePageProps) {
  const { slug, countySlug, citySlug } = await params;
  const service = getServiceBySlug(slug);
  const city = getCityBySlugs(countySlug, citySlug);
  const county = getCountyBySlug(countySlug);

  if (!service || !city || !county) {
    notFound();
  }

  const context = { service, city, county };
  const serviceName = formatServiceTitle(service.title);
  const pagePath = getLocalServicePagePath(slug, countySlug, citySlug);
  const serviceSchema = getLocalServiceSchema(slug, countySlug, citySlug);

  return (
    <main className="relative bg-white">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: serviceName, path: `/services/${slug}` },
            { name: county.name, path: `/areas/${countySlug}` },
            { name: city.name, path: `/areas/${countySlug}/${citySlug}` },
            { name: `${serviceName} in ${city.name}`, path: pagePath },
          ]),
          ...(serviceSchema ? [serviceSchema] : []),
        ]}
      />
      <ServiceDetailLayout service={service} location={context} />
      <ServiceOtherServicesSection
        currentSlug={service.slug}
        countySlug={countySlug}
        citySlug={citySlug}
      />
    </main>
  );
}
