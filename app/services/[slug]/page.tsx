import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";
import { ServiceOtherServicesSection } from "@/components/sections/ServiceOtherServicesSection";
import { getKeywordsForService } from "@/lib/seo/keywords";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  getBreadcrumbSchema,
  getServiceSchema,
} from "@/lib/seo/schema";
import {
  formatServiceTitle,
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createPageMetadata({
      title: "Service Not Found",
      description: "The requested service page could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  const title = formatServiceTitle(service.title);

  return createPageMetadata({
    title: `${title} in New Jersey`,
    description: `${service.description} Licensed & insured. Free estimates from Creative Pro Construction serving NJ and Bergen County.`,
    path: `/services/${slug}`,
    keywords: getKeywordsForService(slug),
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceName = formatServiceTitle(service.title);
  const serviceSchema = getServiceSchema(slug);

  return (
    <main className="relative bg-white">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: serviceName, path: `/services/${slug}` },
          ]),
          ...(serviceSchema ? [serviceSchema] : []),
        ]}
      />
      <ServiceDetailLayout service={service} />
      <ServiceOtherServicesSection currentSlug={service.slug} />
    </main>
  );
}
