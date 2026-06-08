/** Set NEXT_PUBLIC_SITE_URL in production to your live domain. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://creativeproconstruction.com";

export const SITE_NAME = "Creative Pro Construction";
export const SITE_TAGLINE = "Roofing & Construction in New Jersey";
export const SITE_LOCALE = "en_US";

export const DEFAULT_DESCRIPTION =
  "Licensed & insured roofing contractor in New Jersey. Roof installation, replacement, gutters, chimney, masonry, siding, and exterior work. Free estimates statewide.";

export const DEFAULT_OG_IMAGE_PATH = "/images/logo-fix.png";

export const BUSINESS = {
  name: SITE_NAME,
  email: "creativeproconstruction0@gmail.com",
  phone: "+12018000710",
  phoneDisplay: "201-800-0710",
  address: {
    streetAddress: "14 Sherman Pl",
    addressLocality: "Clifton",
    addressRegion: "NJ",
    postalCode: "07011",
    addressCountry: "US",
  },
  areaServed: [
    "New Jersey",
    "Bergen County",
    "Passaic County",
    "Essex County",
    "Morris County",
    "Hudson County",
    "Union County",
    "Middlesex County",
    "Clifton",
    "Paterson",
    "Newark",
    "Jersey City",
    "Edison",
    "Hackensack",
    "Paramus",
    "Fort Lee",
  ],
  priceRange: "$$",
  sameAs: [] as string[],
} as const;

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL.replace(/\/$/, "")}${normalized}`;
}
