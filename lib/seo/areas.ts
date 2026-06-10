import { njLocations } from "@/lib/data/nj-locations";

export type CityLocation = {
  name: string;
  slug: string;
};

export type CountyArea = {
  type: "county";
  slug: string;
  name: string;
  headline: string;
  description: string;
  intro: string;
  highlights: string[];
  keywords: string[];
  cities: CityLocation[];
};

export type CityArea = {
  type: "city";
  slug: string;
  countySlug: string;
  countyName: string;
  name: string;
  headline: string;
  description: string;
  intro: string;
  highlights: string[];
  keywords: string[];
};

export type ServiceArea = CountyArea | CityArea;

type NjCountyData = {
  name: string;
  cities: string[];
};

export function toLocationSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/,?\s*nj$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildCityLocation(cityName: string): CityLocation {
  return {
    name: cityName,
    slug: toLocationSlug(cityName),
  };
}

function buildCountyArea(countyData: NjCountyData): CountyArea {
  const cities = countyData.cities.map(buildCityLocation);
  const countyName = countyData.name;
  const slug = toLocationSlug(countyName);
  const topCities = cities
    .slice(0, 5)
    .map((city) => city.name)
    .join(", ");

  return {
    type: "county",
    slug,
    name: `${countyName}, NJ`,
    headline: `ROOFING SERVICES IN ${countyName.toUpperCase()}, NJ`,
    description: `Licensed roofing and construction contractor serving ${countyName}, NJ. Roof installation, replacement, gutters, chimney, masonry, and siding. Free estimates across ${topCities}, and more.`,
    intro: `Creative Pro Construction provides complete roofing and exterior services throughout ${countyName}. From roof replacements and storm damage repairs to gutters, chimneys, and siding, our licensed crews deliver durable systems built for New Jersey weather with clear estimates and warranty-backed work.`,
    highlights: [
      `Serving ${topCities}, and all of ${countyName}`,
      "Roof installation, replacement, and storm damage repair",
      "Gutters, chimney, masonry, siding, and exterior stairs",
      "Free on-site estimates and written warranties",
    ],
    keywords: [
      `roofing contractor ${countyName}`,
      `roof replacement ${countyName} NJ`,
      `${countyName} roofer`,
      `roof installation ${countyName}`,
    ],
    cities,
  };
}

function buildCityArea(county: CountyArea, city: CityLocation): CityArea {
  const cityName = city.name;
  const countyName = county.name.replace(/, NJ$/, "");

  return {
    type: "city",
    slug: city.slug,
    countySlug: county.slug,
    countyName,
    name: `${cityName}, NJ`,
    headline: `ROOFING & CONSTRUCTION IN ${cityName.toUpperCase()}, NJ`,
    description: `Professional roofing contractor in ${cityName}, NJ — roof installation, replacement, gutters, chimney services, and exterior work in ${countyName}. Licensed Creative Pro Construction. Free estimates.`,
    intro: `${cityName} homeowners and businesses trust Creative Pro Construction for reliable roofing systems, responsive scheduling, and workmanship built for ${countyName} weather. We handle tear-offs, re-roofs, storm damage, and full exterior services with transparent pricing.`,
    highlights: [
      `${cityName} roof installation and full replacement`,
      `Serving ${countyName} with fast response times`,
      "Storm damage inspections and insurance documentation",
      "Gutters, chimney, masonry, and siding services",
    ],
    keywords: [
      `roofer ${cityName} NJ`,
      `roof replacement ${cityName} New Jersey`,
      `${cityName} roofing contractor`,
      `${countyName} roofing company`,
    ],
  };
}

const countyAreas: CountyArea[] = (njLocations.counties as NjCountyData[]).map(
  buildCountyArea,
);

const cityAreas: CityArea[] = countyAreas.flatMap((county) =>
  county.cities.map((city) => buildCityArea(county, city)),
);

/** All 21 NJ counties — primary service areas. */
export const serviceAreas: CountyArea[] = countyAreas;

export function getCountyBySlug(slug: string): CountyArea | undefined {
  return countyAreas.find((county) => county.slug === slug);
}

export function getCityBySlugs(
  countySlug: string,
  citySlug: string,
): CityArea | undefined {
  return cityAreas.find(
    (city) => city.countySlug === countySlug && city.slug === citySlug,
  );
}

export function getAreaBySlug(slug: string): CountyArea | undefined {
  return getCountyBySlug(slug);
}

export function getNavCounties(): CountyArea[] {
  return [...countyAreas];
}

/** @deprecated Use getNavCounties() — kept for compatibility. */
export function getNavServiceAreas(): CountyArea[] {
  return getNavCounties();
}

export function getCitiesByCountySlug(countySlug: string): CityLocation[] {
  return getCountyBySlug(countySlug)?.cities ?? [];
}

export function getFeaturedCities(
  county: CountyArea,
  limit = 5,
): CityLocation[] {
  return county.cities.slice(0, limit);
}

export function getAllCountySlugs(): string[] {
  return countyAreas.map((county) => county.slug);
}

export function getAllCityPaths(): { countySlug: string; citySlug: string }[] {
  return cityAreas.map((city) => ({
    countySlug: city.countySlug,
    citySlug: city.slug,
  }));
}

export function getAllAreaSlugs(): string[] {
  return getAllCountySlugs();
}

export function getAreaKeywords(slug: string): string[] {
  const county = getCountyBySlug(slug);
  if (county) return county.keywords;
  return [];
}

export function getCityKeywords(countySlug: string, citySlug: string): string[] {
  const city = getCityBySlugs(countySlug, citySlug);
  if (!city) return [];
  return city.keywords;
}

export function getCityPagePath(countySlug: string, citySlug: string): string {
  return `/areas/${countySlug}/${citySlug}`;
}

export function getCountyPagePath(countySlug: string): string {
  return `/areas/${countySlug}`;
}

export function getBookingLocationValue(
  countySlug: string,
  citySlug?: string,
): string {
  return citySlug ? `${countySlug}/${citySlug}` : countySlug;
}

export function parseBookingLocationValue(value: string): {
  countySlug: string;
  citySlug?: string;
} | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const [countySlug, citySlug] = trimmed.split("/");
  if (!countySlug) return null;

  if (citySlug) {
    return getCityBySlugs(countySlug, citySlug)
      ? { countySlug, citySlug }
      : null;
  }

  return getCountyBySlug(countySlug) ? { countySlug } : null;
}

export function getLocationLabel(value: string): string | undefined {
  const parsed = parseBookingLocationValue(value);
  if (!parsed) return undefined;

  if (parsed.citySlug) {
    return getCityBySlugs(parsed.countySlug, parsed.citySlug)?.name;
  }

  return getCountyBySlug(parsed.countySlug)?.name;
}
