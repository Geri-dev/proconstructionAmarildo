import { createOgImageResponse } from "@/lib/seo/og";
import { getCityBySlugs, getCountyBySlug } from "@/lib/seo/areas";
import {
  getLocalServiceHeroDescription,
  getLocalServiceHeroTitle,
} from "@/lib/seo/local-service-pages";
import { getServiceBySlug } from "@/lib/services";

export const alt = "Creative Pro Construction local service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{
    slug: string;
    countySlug: string;
    citySlug: string;
  }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { slug, countySlug, citySlug } = await params;
  const service = getServiceBySlug(slug);
  const city = getCityBySlugs(countySlug, citySlug);
  const county = getCountyBySlug(countySlug);

  if (!service || !city || !county) {
    return createOgImageResponse({
      eyebrow: "Service",
      title: "New Jersey Roofing & Construction",
    });
  }

  const context = { service, city, county };

  return createOgImageResponse({
    eyebrow: city.name,
    title: getLocalServiceHeroTitle(context),
    subtitle: getLocalServiceHeroDescription(context).slice(0, 120),
  });
}
