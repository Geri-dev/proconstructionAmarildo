import {
  getAllCityPaths,
  type CityArea,
  type CountyArea,
} from "@/lib/seo/areas";
import { getLocalizedServiceDetailContent } from "@/lib/service-content";
import {
  formatServiceTitle,
  getAllServiceSlugs,
  getServiceNameLower,
  type ServiceItem,
} from "@/lib/services";

export type LocalServicePageContext = {
  service: ServiceItem;
  city: CityArea;
  county: CountyArea;
};

export function getLocalServicePagePath(
  serviceSlug: string,
  countySlug: string,
  citySlug: string,
): string {
  return `/services/${serviceSlug}/${countySlug}/${citySlug}`;
}

export function getAllLocalServicePaths(): {
  slug: string;
  countySlug: string;
  citySlug: string;
}[] {
  const serviceSlugs = getAllServiceSlugs();
  const cityPaths = getAllCityPaths();

  return serviceSlugs.flatMap((slug) =>
    cityPaths.map(({ countySlug, citySlug }) => ({
      slug,
      countySlug,
      citySlug,
    })),
  );
}

function stripNjSuffix(name: string): string {
  return name.replace(/, NJ$/i, "").trim();
}

export function getLocalServiceHeroTitle(context: LocalServicePageContext): string {
  const cityName = stripNjSuffix(context.city.name).toUpperCase();
  return `${context.service.title} IN ${cityName}, NJ`;
}

export function getLocalServiceHeroDescription(
  context: LocalServicePageContext,
): string {
  const cityName = stripNjSuffix(context.city.name);
  const countyName = stripNjSuffix(context.county.name);
  const serviceName = getServiceNameLower(context.service.title);

  return `${formatServiceTitle(context.service.title)} in ${cityName}, NJ — ${context.service.description} Licensed Creative Pro Construction crews serving ${cityName} and ${countyName}. Free estimates for local ${serviceName}.`;
}

export function getLocalServicePageContent(context: LocalServicePageContext) {
  return getLocalizedServiceDetailContent(context.service.slug, {
    cityName: stripNjSuffix(context.city.name),
    countyName: stripNjSuffix(context.county.name),
  });
}

export function getLocalServiceKeywords(
  context: LocalServicePageContext,
): string[] {
  const cityName = stripNjSuffix(context.city.name);
  const countyName = stripNjSuffix(context.county.name);
  const serviceName = getServiceNameLower(context.service.title);

  return [
    `${serviceName} ${cityName} nj`,
    `${serviceName} ${cityName} new jersey`,
    `${cityName} ${serviceName} contractor`,
    `${serviceName} ${countyName}`,
    `${serviceName} near ${cityName}`,
    "Creative Pro Construction",
  ];
}

export function getLocalServiceMetadataTitle(
  context: LocalServicePageContext,
): string {
  const cityName = stripNjSuffix(context.city.name);
  const serviceTitle = formatServiceTitle(context.service.title);
  return `${serviceTitle} in ${cityName}, NJ`;
}

export function getLocalServiceMetadataDescription(
  context: LocalServicePageContext,
): string {
  const cityName = stripNjSuffix(context.city.name);
  const countyName = stripNjSuffix(context.county.name);
  const serviceTitle = formatServiceTitle(context.service.title);

  return `Professional ${serviceTitle.toLowerCase()} in ${cityName}, NJ. ${context.service.description} Serving ${cityName} and ${countyName}. Licensed & insured. Free estimates.`;
}
