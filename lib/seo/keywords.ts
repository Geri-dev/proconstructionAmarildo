/**
 * SEO keyword map for Creative Pro Construction (New Jersey roofing & exterior).
 * Use primary + local on homepage; service keys on each /services/[slug] page.
 */
export const SEO_KEYWORDS = {
  brand: [
    "Creative Pro Construction",
    "Creative Pro Construction NJ",
    "CPC roofing New Jersey",
  ],

  primary: [
    "roofing contractor New Jersey",
    "roofing company NJ",
    "construction company New Jersey",
    "licensed roofer NJ",
    "insured roofing contractor NJ",
    "residential roofing New Jersey",
    "commercial roofing New Jersey",
    "free roof estimate NJ",
    "roof repair New Jersey",
    "exterior contractor NJ",
  ],

  local: [
    "roofer Clifton NJ",
    "roofing contractor Bergen County",
    "roof replacement Bergen County NJ",
    "roof installation Passaic County",
    "roofing company Essex County NJ",
    "roofing services Hudson County",
    "roofing contractor Morris County NJ",
    "roof replacement Newark NJ",
    "roofer Jersey City NJ",
    "roofer Paramus NJ",
    "roofer Fort Lee NJ",
    "roofer Wayne NJ",
    "Union County roofing contractor",
    "Middlesex County roofer",
    "New Jersey roof contractor near me",
    "roofing contractor North Jersey",
    "roofing contractor Central Jersey",
  ],

  services: {
    "roof-installation": [
      "roof installation New Jersey",
      "new roof installation NJ",
      "architectural shingle installation NJ",
      "residential roof installation Bergen County",
      "roof installation contractor Clifton NJ",
      "ice and water shield installation NJ",
      "complete roofing system installation",
    ],
    "roof-replacement": [
      "roof replacement New Jersey",
      "full roof replacement NJ",
      "roof tear off and replacement NJ",
      "storm damage roof replacement NJ",
      "roof replacement cost New Jersey",
      "emergency roof replacement NJ",
      "asphalt shingle roof replacement NJ",
    ],
    "roof-fitting": [
      "roof fitting New Jersey",
      "custom roof fitting NJ",
      "dormer roof fitting contractor",
      "roof addition fitting NJ",
      "complex pitch roof fitting",
      "roof plane alignment contractor NJ",
    ],
    "gutter-installation-repair": [
      "gutter installation New Jersey",
      "gutter repair NJ",
      "seamless gutter installation NJ",
      "gutter replacement Bergen County",
      "downspout installation NJ",
      "gutter contractor Clifton NJ",
    ],
    "chimney-services": [
      "chimney repair New Jersey",
      "chimney flashing repair NJ",
      "chimney cap installation NJ",
      "chimney masonry repair Bergen County",
      "chimney leak repair NJ",
      "chimney restoration contractor NJ",
    ],
    stairs: [
      "exterior stairs construction NJ",
      "entry steps builder New Jersey",
      "stair construction contractor NJ",
      "code compliant stairs NJ",
      "exterior stair replacement NJ",
    ],
    masonry: [
      "masonry contractor New Jersey",
      "brick repair NJ",
      "repointing contractor Bergen County",
      "stone masonry NJ",
      "block wall repair NJ",
      "chimney masonry NJ",
    ],
    siding: [
      "siding installation New Jersey",
      "siding replacement NJ",
      "vinyl siding contractor NJ",
      "fiber cement siding NJ",
      "exterior siding Bergen County",
      "house siding installation NJ",
    ],
  },

  longTail: [
    "how long does roof replacement take in NJ",
    "roof replacement cost New Jersey 2025",
    "best roofing contractor Bergen County reviews",
    "insurance claim roof repair New Jersey",
    "hail damage roof repair NJ",
    "GAF certified roofer New Jersey",
    "architectural shingles NJ weather",
    "free roof inspection Clifton NJ",
    "roof ventilation upgrade New Jersey",
    "flat roof repair NJ commercial",
  ],

  intent: {
    commercial: [
      "hire roofing contractor NJ",
      "get free roof estimate New Jersey",
      "schedule roof inspection NJ",
      "licensed insured roofer near me",
    ],
    informational: [
      "roof warranty New Jersey",
      "roof installation process",
      "when to replace roof NJ",
      "storm damage roof inspection",
    ],
  },
} as const;

export type ServiceSlug = keyof typeof SEO_KEYWORDS.services;

export function getKeywordsForService(slug: string): string[] {
  const serviceKeywords =
    SEO_KEYWORDS.services[slug as ServiceSlug] ?? [];
  return dedupeKeywords([
    ...SEO_KEYWORDS.primary.slice(0, 5),
    ...serviceKeywords,
    ...SEO_KEYWORDS.local.slice(0, 4),
    ...SEO_KEYWORDS.brand,
  ]);
}

export function getHomeKeywords(): string[] {
  return dedupeKeywords([
    ...SEO_KEYWORDS.brand,
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.local,
    ...SEO_KEYWORDS.longTail.slice(0, 6),
    ...SEO_KEYWORDS.intent.commercial,
  ]);
}

export function getServicesPageKeywords(): string[] {
  return dedupeKeywords([
    ...SEO_KEYWORDS.brand,
    ...SEO_KEYWORDS.primary,
    ...Object.values(SEO_KEYWORDS.services).flat(),
    ...SEO_KEYWORDS.local.slice(0, 6),
  ]);
}

function dedupeKeywords(keywords: string[]): string[] {
  return [...new Set(keywords.map((keyword) => keyword.trim()))];
}

/** Flat export for audits, ad campaigns, and content planning. */
export const ALL_SEO_KEYWORDS = dedupeKeywords([
  ...SEO_KEYWORDS.brand,
  ...SEO_KEYWORDS.primary,
  ...SEO_KEYWORDS.local,
  ...Object.values(SEO_KEYWORDS.services).flat(),
  ...SEO_KEYWORDS.longTail,
  ...SEO_KEYWORDS.intent.commercial,
  ...SEO_KEYWORDS.intent.informational,
]);
