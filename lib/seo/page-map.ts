/**
 * Local SEO keyword map — one primary keyword per page (no cannibalization).
 * Source of truth for titles, descriptions, and meta keywords sitewide.
 */

export type SearchIntent = "Commercial" | "Transactional" | "Informational";

export type PageSeoEntry = {
  path: string;
  /** SEO-friendly alias slugs that redirect to `path` */
  aliases?: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: SearchIntent;
  title: string;
  description: string;
  h1: string;
};

function allKeywords(entry: PageSeoEntry): string[] {
  return [entry.primaryKeyword, ...entry.secondaryKeywords];
}

export const PAGE_SEO = {
  home: {
    path: "/",
    primaryKeyword: "roofing contractor nj",
    secondaryKeywords: [
      "licensed roofing company new jersey",
      "residential roofing services nj",
      "roof repair contractor nj",
      "emergency roofer nj",
    ],
    intent: "Commercial",
    title: "Roofing Contractor NJ",
    description:
      "Creative Pro Construction — licensed & insured roofing contractor in New Jersey. Roof installation, replacement, gutters, chimney, masonry, and siding. Free estimates statewide.",
    h1: "Roofing & Construction Contractor in New Jersey",
  },

  about: {
    path: "/about-us",
    primaryKeyword: "experienced roofing contractors new jersey",
    secondaryKeywords: [
      "family owned roofing company nj",
      "certified roofers new jersey",
      "local construction company nj",
      "trusted roofing professionals nj",
    ],
    intent: "Informational",
    title: "Experienced Roofing Contractors in New Jersey",
    description:
      "Meet Creative Pro Construction — family-owned, licensed roofing and construction professionals serving New Jersey homeowners since day one. Certified crews, clear estimates, warranty-backed work.",
    h1: "Experienced Roofing Contractors in New Jersey",
  },

  blog: {
    path: "/blog",
    primaryKeyword: "nj roofing tips and guides",
    secondaryKeywords: [
      "new jersey homeowner roofing advice",
      "nj roof maintenance blog",
      "construction tips for nj homes",
    ],
    intent: "Informational",
    title: "NJ Roofing Tips & Guides for Homeowners",
    description:
      "Expert roofing guides for New Jersey homeowners — replacement costs, storm damage, insurance claims, materials, and maintenance from Creative Pro Construction.",
    h1: "NJ Roofing Tips & Guides",
  },

  gallery: {
    path: "/gallery",
    primaryKeyword: "roofing project gallery nj",
    secondaryKeywords: [
      "before and after roof replacement nj",
      "residential roofing projects new jersey",
      "nj roofing portfolio",
      "completed roof installations nj",
    ],
    intent: "Commercial",
    title: "Roofing Project Gallery NJ",
    description:
      "Browse before-and-after roofing projects, aerial footage, and completed construction work by Creative Pro Construction across New Jersey.",
    h1: "Roofing & Construction Project Gallery",
  },

  reviews: {
    path: "/reviews",
    primaryKeyword: "roofing contractor reviews nj",
    secondaryKeywords: [
      "best rated roofer new jersey",
      "nj roofing testimonials",
      "5 star roofing company nj",
      "customer reviews roofing nj",
    ],
    intent: "Commercial",
    title: "Roofing Contractor Reviews NJ",
    description:
      "Read verified Google and HomeAdvisor reviews for Creative Pro Construction — top-rated roofing and construction contractor serving New Jersey homeowners.",
    h1: "Roofing Contractor Reviews & Testimonials",
  },

  services: {
    "roof-installation": {
      path: "/services/roof-installation",
      aliases: ["/roof-installation-nj"],
      primaryKeyword: "new roof installation nj",
      secondaryKeywords: [
        "new roof construction nj",
        "residential roof installation new jersey",
        "new home roofing nj",
        "roof build contractor nj",
      ],
      intent: "Transactional",
      title: "New Roof Installation NJ",
      description:
        "Professional new roof installation in New Jersey — architectural shingles, ice-and-water shield, and precision flashing. Licensed crews, free estimates, warranty-backed systems.",
      h1: "New Roof Installation in New Jersey",
    },
    "roof-replacement": {
      path: "/services/roof-replacement",
      aliases: ["/roof-replacement-nj"],
      primaryKeyword: "roof replacement nj",
      secondaryKeywords: [
        "re-roofing nj",
        "tear off roof replacement new jersey",
        "full roof replacement nj",
        "asphalt shingle roof replacement nj",
      ],
      intent: "Transactional",
      title: "Roof Replacement NJ",
      description:
        "Full roof replacement in New Jersey — safe tear-offs, decking repair, and code-compliant shingle systems. Storm damage, aging roofs, and leak prevention. Free estimates.",
      h1: "Roof Replacement in New Jersey",
    },
    "roof-repair": {
      path: "/services/roof-repair",
      aliases: ["/roof-repair-nj", "/roof-fitting-nj", "/services/roof-fitting"],
      primaryKeyword: "roof repair nj",
      secondaryKeywords: [
        "emergency roof repair new jersey",
        "leak repair roofing nj",
        "storm damage roof repair nj",
        "shingle roof repair nj",
      ],
      intent: "Transactional",
      title: "Roof Repair NJ",
      description:
        "Professional roof repair in New Jersey — leak fixes, storm damage, missing shingles, and flashing repairs. Licensed crews, fast response, free estimates.",
      h1: "Roof Repair in New Jersey",
    },
    "gutter-installation-repair": {
      path: "/services/gutter-installation-repair",
      aliases: ["/gutter-installation-repair-nj"],
      primaryKeyword: "gutter installation nj",
      secondaryKeywords: [
        "gutter repair nj",
        "seamless gutter installation new jersey",
        "downspout installation nj",
        "gutter replacement nj",
      ],
      intent: "Transactional",
      title: "Gutter Installation & Repair NJ",
      description:
        "Seamless gutter installation and repair in New Jersey. Protect siding, foundations, and landscaping from heavy rainfall with properly sized runs and downspouts.",
      h1: "Gutter Installation & Repair in New Jersey",
    },
    "chimney-services": {
      path: "/services/chimney-services",
      aliases: ["/chimney-services-nj"],
      primaryKeyword: "chimney repair nj",
      secondaryKeywords: [
        "chimney flashing repair nj",
        "chimney masonry repair new jersey",
        "chimney cap installation nj",
        "chimney leak repair nj",
      ],
      intent: "Transactional",
      title: "Chimney Repair & Services NJ",
      description:
        "Chimney repair, flashing, caps, and masonry restoration in New Jersey. Stop leaks and preserve structural integrity before interior water damage starts.",
      h1: "Chimney Repair & Services in New Jersey",
    },
    steps: {
      path: "/services/steps",
      aliases: [
        "/exterior-steps-construction-nj",
        "/exterior-stairs-construction-nj",
        "/services/stairs",
      ],
      primaryKeyword: "exterior steps construction nj",
      secondaryKeywords: [
        "concrete steps installation nj",
        "outdoor step building new jersey",
        "front steps replacement nj",
        "porch steps construction nj",
      ],
      intent: "Transactional",
      title: "Exterior Steps Construction NJ",
      description:
        "Exterior and structural step construction in New Jersey — code-compliant treads, railings, and weather-resistant finishes for entry steps and multi-level access.",
      h1: "Exterior Steps Construction in New Jersey",
    },
    masonry: {
      path: "/services/masonry",
      aliases: ["/masonry-contractor-nj"],
      primaryKeyword: "masonry contractor nj",
      secondaryKeywords: [
        "brick steps repair nj",
        "driveway masonry nj",
        "brickwork new jersey",
        "stone masonry services nj",
      ],
      intent: "Commercial",
      title: "Masonry Contractor NJ",
      description:
        "Licensed masonry contractor in New Jersey — brick steps, driveways, repointing, and stone work built for freeze-thaw cycles and New Jersey weather.",
      h1: "Masonry Contractor in New Jersey",
    },
    siding: {
      path: "/services/siding",
      aliases: ["/siding-installation-nj"],
      primaryKeyword: "siding installation nj",
      secondaryKeywords: [
        "vinyl siding installation nj",
        "fiber cement siding nj",
        "siding replacement new jersey",
        "house siding contractor nj",
      ],
      intent: "Transactional",
      title: "Siding Installation NJ",
      description:
        "Vinyl and fiber cement siding installation in New Jersey. Improve insulation, weather resistance, and curb appeal with professional exterior envelope upgrades.",
      h1: "Siding Installation in New Jersey",
    },
  },

  areas: {
    "essex-county/newark": {
      path: "/areas/essex-county/newark",
      aliases: [
        "/areas/newark-nj",
        "/roofing-contractor-newark-nj",
      ],
      primaryKeyword: "roofing contractor newark nj",
      secondaryKeywords: [
        "roof repair newark new jersey",
        "newark roofing company",
        "emergency roofer newark nj",
        "newark roof replacement",
      ],
      intent: "Commercial",
      title: "Roofing Contractor Newark NJ",
      description:
        "Licensed roofing contractor in Newark, NJ — installation, replacement, chimney repair, gutters, and exterior work. Free on-site estimates from Creative Pro Construction.",
      h1: "Roofing & Construction in Newark, NJ",
    },
    "hudson-county/jersey-city": {
      path: "/areas/hudson-county/jersey-city",
      aliases: [
        "/areas/jersey-city-nj",
        "/roofing-company-jersey-city-nj",
      ],
      primaryKeyword: "roofing company jersey city nj",
      secondaryKeywords: [
        "roof installation jersey city",
        "jersey city roof repair",
        "hudson county roofing contractor",
        "jersey city roofers",
      ],
      intent: "Commercial",
      title: "Roofing Company Jersey City NJ",
      description:
        "Jersey City roofing company for installation, replacement, gutters, and chimney services. Hudson County contractor with free on-site estimates.",
      h1: "Roofing & Exterior Services in Jersey City, NJ",
    },
    "middlesex-county/edison": {
      path: "/areas/middlesex-county/edison",
      aliases: [
        "/areas/edison-nj",
        "/roof-replacement-edison-nj",
      ],
      primaryKeyword: "roof replacement edison nj",
      secondaryKeywords: [
        "roofing contractor edison nj",
        "edison nj roof repair",
        "middlesex county roofing",
        "edison new roof installation",
      ],
      intent: "Transactional",
      title: "Roof Replacement Edison NJ",
      description:
        "Roof replacement and installation in Edison, NJ — Middlesex County specialists for tear-offs, storm damage, gutters, and full exterior services. Free estimates.",
      h1: "Roof Replacement & Roofing in Edison, NJ",
    },
  },

  blogPosts: {
    "roof-replacement-cost-nj": {
      path: "/blog/roof-replacement-cost-nj",
      aliases: ["/blog/roof-replacement-cost-new-jersey"],
      primaryKeyword: "roof replacement cost nj",
      secondaryKeywords: [
        "average cost to replace roof in new jersey",
        "nj roof replacement price per square",
        "asphalt shingle roof cost nj 2026",
      ],
      intent: "Informational",
      title: "Roof Replacement Cost NJ (2026 Guide)",
      description:
        "How much does roof replacement cost in NJ? Typical ranges, pricing factors, and how to compare estimates from licensed New Jersey roofing contractors.",
      h1: "Roof Replacement Cost in New Jersey",
    },
    "storm-damage-roof-repair-nj": {
      path: "/blog/storm-damage-roof-repair-nj",
      primaryKeyword: "storm damage roof repair nj",
      secondaryKeywords: [
        "nor'easter roof damage new jersey",
        "hail damage roof nj",
        "wind damage roof repair nj",
      ],
      intent: "Informational",
      title: "Storm Damage Roof Repair NJ",
      description:
        "Nor'easters, hail, and wind damage in New Jersey — how to spot roof damage, document it, and schedule professional storm damage roof repair.",
      h1: "Storm Damage Roof Repair in New Jersey",
    },
    "roof-insurance-claim-nj": {
      path: "/blog/roof-insurance-claim-nj",
      aliases: ["/blog/insurance-claim-roof-repair-new-jersey"],
      primaryKeyword: "roof insurance claim new jersey",
      secondaryKeywords: [
        "filing homeowners insurance roof claim nj",
        "storm damage insurance roof nj",
        "roof damage documentation nj",
      ],
      intent: "Informational",
      title: "Roof Insurance Claim New Jersey",
      description:
        "Step-by-step guide to filing a roof insurance claim in New Jersey — documentation, adjuster visits, and working with a licensed contractor.",
      h1: "How to File a Roof Insurance Claim in New Jersey",
    },
  },
} as const satisfies Record<string, PageSeoEntry | Record<string, PageSeoEntry>>;

export type ServiceSlug = keyof typeof PAGE_SEO.services;
export type FeaturedAreaSlug = keyof typeof PAGE_SEO.areas;
export type FeaturedBlogSlug = keyof typeof PAGE_SEO.blogPosts;

export function getPageKeywords(entry: PageSeoEntry): string[] {
  return [...new Set([entry.primaryKeyword, ...entry.secondaryKeywords])];
}

export function getHomePageSeo(): PageSeoEntry {
  return PAGE_SEO.home;
}

export function getAboutPageSeo(): PageSeoEntry {
  return PAGE_SEO.about;
}

export function getBlogIndexSeo(): PageSeoEntry {
  return PAGE_SEO.blog;
}

export function getGalleryPageSeo(): PageSeoEntry {
  return PAGE_SEO.gallery;
}

export function getReviewsPageSeo(): PageSeoEntry {
  return PAGE_SEO.reviews;
}

export function getServicePageSeo(slug: string): PageSeoEntry | undefined {
  return PAGE_SEO.services[slug as ServiceSlug];
}

export function getFeaturedAreaPageSeo(
  slug: string,
): PageSeoEntry | undefined {
  return PAGE_SEO.areas[slug as FeaturedAreaSlug];
}

export function getFeaturedBlogSeo(slug: string): PageSeoEntry | undefined {
  return PAGE_SEO.blogPosts[slug as FeaturedBlogSlug];
}

export function getServiceKeywords(slug: string): string[] {
  const entry = getServicePageSeo(slug);
  if (!entry) return [];
  return getPageKeywords(entry);
}

export function getFeaturedAreaKeywords(slug: string): string[] {
  const entry = getFeaturedAreaPageSeo(slug);
  if (!entry) return [];
  return getPageKeywords(entry);
}

/** All SEO alias paths → canonical paths (for next.config redirects). */
export function getSeoRedirects(): { source: string; destination: string }[] {
  const redirects: { source: string; destination: string }[] = [];

  const collect = (entry: PageSeoEntry) => {
    for (const alias of entry.aliases ?? []) {
      redirects.push({ source: alias, destination: entry.path });
    }
  };

  collect(PAGE_SEO.home);
  collect(PAGE_SEO.about);
  collect(PAGE_SEO.blog);
  collect(PAGE_SEO.gallery);
  collect(PAGE_SEO.reviews);

  for (const entry of Object.values(PAGE_SEO.services)) collect(entry);
  for (const entry of Object.values(PAGE_SEO.areas)) collect(entry);
  for (const entry of Object.values(PAGE_SEO.blogPosts)) collect(entry);

  return redirects;
}
