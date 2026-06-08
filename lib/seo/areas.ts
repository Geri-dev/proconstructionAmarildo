export type ServiceArea = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  intro: string;
  highlights: string[];
  keywords: string[];
  nearby: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "clifton-nj",
    name: "Clifton, NJ",
    headline: "ROOFING & CONSTRUCTION IN CLIFTON, NJ",
    description:
      "Licensed roofing and construction contractor serving Clifton, NJ with roof installation, replacement, gutters, chimney, masonry, and siding. Free estimates from our local team.",
    intro:
      "Creative Pro Construction is headquartered in Clifton and proudly serves homeowners and businesses throughout the city. From aging shingle roofs and storm damage to gutters, chimneys, and exterior upgrades, our licensed crews deliver code-compliant work with clear estimates and strong warranties.",
    highlights: [
      "Local Clifton contractor with fast response times",
      "Roof installation, replacement, and storm damage repair",
      "Gutters, chimney, masonry, siding, and exterior stairs",
      "Free on-site estimates and written warranties",
    ],
    keywords: [
      "roofer Clifton NJ",
      "roof replacement Clifton New Jersey",
      "roofing contractor Clifton NJ",
      "construction company Clifton NJ",
    ],
    nearby: ["Passaic", "Paterson", "Montclair", "Nutley"],
  },
  {
    slug: "bergen-county",
    name: "Bergen County, NJ",
    headline: "ROOFING SERVICES IN BERGEN COUNTY, NJ",
    description:
      "Top-rated roofing and exterior contractor for Bergen County, NJ. Roof installation, replacement, fitting, gutters, chimney services, and more. Licensed & insured.",
    intro:
      "We serve Bergen County communities with complete roofing systems built for New Jersey weather — wind, rain, snow, and freeze-thaw cycles. Whether you need a full roof replacement in Hackensack, new gutters in Paramus, or chimney flashing in Fort Lee, Creative Pro Construction delivers premium materials and professional workmanship.",
    highlights: [
      "Serving Hackensack, Paramus, Fort Lee, and all of Bergen County",
      "Architectural shingles, ice-and-water shield, and precision flashing",
      "Insurance claim support for storm and hail damage",
      "Manufacturer-backed material and labor warranties",
    ],
    keywords: [
      "roofing contractor Bergen County",
      "roof replacement Bergen County NJ",
      "Bergen County roofer",
      "roof installation Bergen County",
    ],
    nearby: ["Hackensack", "Paramus", "Fort Lee", "Teaneck"],
  },
  {
    slug: "passaic-county",
    name: "Passaic County, NJ",
    headline: "ROOFING & EXTERIOR WORK IN PASSAIC COUNTY",
    description:
      "Professional roofing and construction services across Passaic County, NJ. Free estimates for roof replacement, installation, gutters, and exterior projects.",
    intro:
      "From Paterson to Wayne and beyond, our Passaic County clients trust Creative Pro Construction for reliable scheduling, clean job sites, and durable roofing systems. We handle tear-offs, re-roofs, roof fitting for additions, and full exterior services.",
    highlights: [
      "Passaic County roof installation and replacement",
      "Paterson, Wayne, and surrounding communities",
      "Storm damage inspections and repair estimates",
      "Licensed, insured, and warranty-backed work",
    ],
    keywords: [
      "roofing contractor Passaic County",
      "roof replacement Paterson NJ",
      "Passaic County roofer",
    ],
    nearby: ["Paterson", "Wayne", "Clifton", "Passaic"],
  },
  {
    slug: "essex-county",
    name: "Essex County, NJ",
    headline: "ROOFING CONTRACTOR FOR ESSEX COUNTY, NJ",
    description:
      "Essex County roofing and construction services — installation, replacement, chimney repair, masonry, and siding. Creative Pro Construction. Free estimates.",
    intro:
      "Essex County homeowners choose us for transparent pricing, quality materials, and crews that respect your property. We install and replace roofs, repair chimneys, build stairs, and upgrade siding across Newark, Montclair, Bloomfield, and neighboring towns.",
    highlights: [
      "Residential and commercial roofing in Essex County",
      "Chimney, masonry, and siding specialists",
      "Detailed written estimates before work begins",
      "Serving Newark, Montclair, and nearby towns",
    ],
    keywords: [
      "roofing company Essex County NJ",
      "roof replacement Newark NJ",
      "Essex County roofing contractor",
    ],
    nearby: ["Newark", "Montclair", "Bloomfield", "East Orange"],
  },
  {
    slug: "paterson-nj",
    name: "Paterson, NJ",
    headline: "ROOFING & CONSTRUCTION IN PATERSON, NJ",
    description:
      "Paterson, NJ roofing contractor for installation, replacement, gutters, chimney services, and exterior construction. Licensed Creative Pro Construction.",
    intro:
      "Paterson properties face heavy rainfall, aging housing stock, and seasonal weather stress. Our team provides thorough inspections, honest recommendations, and durable roofing solutions tailored to your home's structure and budget.",
    highlights: [
      "Paterson roof repair and full replacement",
      "Gutter and chimney leak prevention",
      "Free estimates with itemized scope of work",
      "Fast scheduling across Passaic County",
    ],
    keywords: [
      "roofer Paterson NJ",
      "roof replacement Paterson New Jersey",
      "Paterson roofing contractor",
    ],
    nearby: ["Clifton", "Passaic", "Wayne", "Haledon"],
  },
  {
    slug: "hackensack-nj",
    name: "Hackensack, NJ",
    headline: "HACKENSACK, NJ ROOFING & EXTERIOR SERVICES",
    description:
      "Hackensack roofing company for installation, replacement, and exterior work. Serving Bergen County with licensed, insured Creative Pro Construction crews.",
    intro:
      "Hackensack homeowners rely on Creative Pro Construction for complete roof systems, seamless gutters, chimney flashing, and exterior upgrades that stand up to Bergen County weather. We provide free consultations and clear project timelines.",
    highlights: [
      "Hackensack roof installation and re-roofing",
      "Bergen County's trusted exterior contractor",
      "Storm and hail damage documentation support",
      "Premium shingles and ventilation upgrades",
    ],
    keywords: [
      "roofer Hackensack NJ",
      "roof replacement Hackensack",
      "Hackensack roofing company",
    ],
    nearby: ["Paramus", "Teaneck", "Fort Lee", "Ridgefield Park"],
  },
  {
    slug: "morris-county",
    name: "Morris County, NJ",
    headline: "ROOFING SERVICES IN MORRIS COUNTY, NJ",
    description:
      "Morris County roofing and construction — installation, replacement, gutters, chimney, and exterior work. Licensed Creative Pro Construction with free estimates.",
    intro:
      "Morris County homes range from historic properties to new construction, each with unique roofing needs. Creative Pro Construction delivers durable shingle systems, proper ventilation, and exterior services built for Morris County's hills, tree cover, and seasonal weather swings.",
    highlights: [
      "Roof replacement and installation across Morris County",
      "Morristown, Parsippany, and surrounding townships",
      "Storm damage inspections and insurance documentation",
      "Gutters, chimney, masonry, and siding available",
    ],
    keywords: [
      "roofing contractor Morris County NJ",
      "roof replacement Morris County",
      "Morris County roofer",
    ],
    nearby: ["Morristown", "Parsippany", "Dover", "Randolph"],
  },
  {
    slug: "hudson-county",
    name: "Hudson County, NJ",
    headline: "HUDSON COUNTY, NJ ROOFING & CONSTRUCTION",
    description:
      "Roofing contractor serving Hudson County, NJ including Jersey City and Bayonne. Residential and commercial roof installation, repair, and exterior services.",
    intro:
      "Hudson County properties face urban weather exposure, flat and pitched roofs, and strict building requirements. Our crews handle row homes, multi-family properties, and commercial roofs with code-compliant installations and responsive scheduling.",
    highlights: [
      "Jersey City, Bayonne, Hoboken, and Hudson County service",
      "Flat and pitched roof expertise",
      "Chimney, gutter, and masonry repair",
      "Free estimates with clear written scope",
    ],
    keywords: [
      "roofing contractor Hudson County NJ",
      "roofer Jersey City NJ",
      "Hudson County roof replacement",
    ],
    nearby: ["Jersey City", "Bayonne", "Hoboken", "Union City"],
  },
  {
    slug: "union-county",
    name: "Union County, NJ",
    headline: "ROOFING & EXTERIOR WORK IN UNION COUNTY",
    description:
      "Union County, NJ roofing company for installation, replacement, and full exterior services. Creative Pro Construction — licensed, insured, free estimates.",
    intro:
      "From Elizabeth to Westfield, Union County homeowners trust us for honest inspections, quality materials, and professional crews. We replace aging roofs, repair storm damage, and upgrade gutters, chimneys, and siding for long-term protection.",
    highlights: [
      "Union County roof installation and tear-offs",
      "Elizabeth, Cranford, Summit, and nearby towns",
      "Architectural shingles and ventilation upgrades",
      "Written warranties on qualifying projects",
    ],
    keywords: [
      "roofing company Union County NJ",
      "roof replacement Union County",
      "Union County roofing contractor",
    ],
    nearby: ["Elizabeth", "Cranford", "Westfield", "Summit"],
  },
  {
    slug: "middlesex-county",
    name: "Middlesex County, NJ",
    headline: "MIDDLESEX COUNTY, NJ ROOFING SERVICES",
    description:
      "Middlesex County roofing and construction contractor. Roof replacement, fitting, gutters, and exterior work for New Brunswick, Edison, and surrounding communities.",
    intro:
      "Middlesex County's mix of suburban neighborhoods and commercial corridors requires versatile roofing expertise. Creative Pro Construction installs complete systems with ice-and-water shield, flashing, and drainage solutions suited to Central New Jersey conditions.",
    highlights: [
      "Serving New Brunswick, Edison, Woodbridge, and more",
      "Residential roof replacement specialists",
      "Gutter, chimney, and siding services",
      "Transparent pricing and project timelines",
    ],
    keywords: [
      "roofing contractor Middlesex County NJ",
      "roof replacement Edison NJ",
      "Middlesex County roofer",
    ],
    nearby: ["New Brunswick", "Edison", "Woodbridge", "Piscataway"],
  },
  {
    slug: "newark-nj",
    name: "Newark, NJ",
    headline: "ROOFING & CONSTRUCTION IN NEWARK, NJ",
    description:
      "Newark, NJ roofing contractor for installation, replacement, and exterior repairs. Serving Essex County with licensed Creative Pro Construction crews.",
    intro:
      "Newark properties need reliable roofing that handles heavy rainfall, urban heat, and aging building stock. We provide thorough assessments, competitive estimates, and workmanship that protects your investment from the roof deck up.",
    highlights: [
      "Newark roof repair and full replacement",
      "Commercial and residential experience",
      "Chimney, masonry, and gutter services",
      "Essex County scheduling and support",
    ],
    keywords: [
      "roofing contractor newark nj",
      "roof repair newark new jersey",
      "newark roofing company",
      "emergency roofer newark nj",
    ],
    nearby: ["East Orange", "Bloomfield", "Irvington", "Bayonne"],
  },
  {
    slug: "jersey-city-nj",
    name: "Jersey City, NJ",
    headline: "JERSEY CITY, NJ ROOFING & EXTERIOR",
    description:
      "Jersey City roofing company for installation, replacement, gutters, and chimney services. Hudson County contractor with free on-site estimates.",
    intro:
      "Jersey City homeowners and property managers choose Creative Pro Construction for responsive service and durable roofing systems. We work on brownstones, condos, and single-family homes with attention to flashing, drainage, and local code requirements.",
    highlights: [
      "Jersey City roof installation and re-roofing",
      "Hudson County's trusted contractor",
      "Flat and pitched roof solutions",
      "Insurance claim support when applicable",
    ],
    keywords: [
      "roofing company jersey city nj",
      "roof installation jersey city",
      "jersey city roof repair",
      "hudson county roofing contractor",
    ],
    nearby: ["Hoboken", "Bayonne", "Newark", "Union City"],
  },
  {
    slug: "edison-nj",
    name: "Edison, NJ",
    headline: "ROOF REPLACEMENT & ROOFING IN EDISON, NJ",
    description:
      "Roof replacement and installation in Edison, NJ — Middlesex County specialists for tear-offs, storm damage, gutters, and full exterior services. Free estimates.",
    intro:
      "Edison's suburban neighborhoods and mixed housing stock need roofing systems built for Central New Jersey rainfall, tree cover, and seasonal weather swings. Creative Pro Construction provides thorough inspections, competitive estimates, and durable installations across Edison and Middlesex County.",
    highlights: [
      "Edison roof replacement and new installation",
      "Middlesex County scheduling with fast response",
      "Storm damage inspections and insurance documentation",
      "Gutters, chimney, masonry, and siding services",
    ],
    keywords: [
      "roof replacement edison nj",
      "roofing contractor edison nj",
      "edison nj roof repair",
      "middlesex county roofing",
    ],
    nearby: ["Woodbridge", "Piscataway", "New Brunswick", "Metuchen"],
  },
  {
    slug: "paramus-nj",
    name: "Paramus, NJ",
    headline: "PARAMUS, NJ ROOFING & CONSTRUCTION",
    description:
      "Paramus roofing contractor for replacement, installation, and exterior upgrades. Serving Bergen County with premium materials and licensed crews.",
    intro:
      "Paramus homes deserve roofing that matches the community's standards for quality and curb appeal. We install architectural shingles, seamless gutters, and complete exterior packages with manufacturer-backed warranties and professional cleanup.",
    highlights: [
      "Paramus roof replacement and new installation",
      "Bergen County service with fast estimates",
      "Storm and hail damage evaluations",
      "Siding, masonry, and chimney work available",
    ],
    keywords: [
      "roofer Paramus NJ",
      "roof replacement Paramus",
      "Paramus roofing contractor",
    ],
    nearby: ["Hackensack", "Ridgewood", "Fair Lawn", "River Edge"],
  },
  {
    slug: "fort-lee-nj",
    name: "Fort Lee, NJ",
    headline: "FORT LEE, NJ ROOFING & EXTERIOR SERVICES",
    description:
      "Fort Lee, NJ roofing and construction — installation, replacement, chimneys, and gutters. Bergen County specialists. Free estimates.",
    intro:
      "Fort Lee's elevation, wind exposure, and premium housing stock call for precise roofing craftsmanship. Creative Pro Construction delivers secure flashing, quality underlayment, and finished work that protects high-value properties year-round.",
    highlights: [
      "Fort Lee roof installation and replacement",
      "Wind-rated shingle systems and flashing detail",
      "Chimney and gutter leak prevention",
      "Serving Bergen County and nearby communities",
    ],
    keywords: [
      "roofer Fort Lee NJ",
      "roof replacement Fort Lee",
      "Fort Lee roofing company",
    ],
    nearby: ["Edgewater", "Leonia", "Palisades Park", "Hackensack"],
  },
  {
    slug: "wayne-nj",
    name: "Wayne, NJ",
    headline: "ROOFING & CONSTRUCTION IN WAYNE, NJ",
    description:
      "Wayne, NJ roofing contractor for installation, replacement, gutters, chimney, and exterior work. Passaic County specialists with free estimates.",
    intro:
      "Wayne's suburban neighborhoods and larger homes need roofing systems built for tree debris, heavy rain, and seasonal freeze-thaw cycles. Creative Pro Construction provides detailed inspections, premium materials, and professional installation across Wayne and Passaic County.",
    highlights: [
      "Wayne roof installation and full replacement",
      "Passaic County scheduling with fast response",
      "Storm damage inspections and repair estimates",
      "Gutters, chimney, masonry, and siding services",
    ],
    keywords: [
      "roofer Wayne NJ",
      "roof replacement Wayne New Jersey",
      "Wayne NJ roofing contractor",
    ],
    nearby: ["Paterson", "Clifton", "Totowa", "Pompton Lakes"],
  },
];

/** Nav order: major NJ cities by population & prominence, then counties by population. */
const NAV_AREA_ORDER = [
  "newark-nj",
  "jersey-city-nj",
  "paterson-nj",
  "edison-nj",
  "clifton-nj",
  "hackensack-nj",
  "wayne-nj",
  "paramus-nj",
  "fort-lee-nj",
  "bergen-county",
  "middlesex-county",
  "essex-county",
  "hudson-county",
  "passaic-county",
  "union-county",
  "morris-county",
] as const;

export function getNavServiceAreas(): ServiceArea[] {
  const order = new Map(
    NAV_AREA_ORDER.map((slug, index) => [slug, index]),
  );

  return [...serviceAreas].sort((a, b) => {
    const aIndex = order.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = order.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex;
  });
}

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return serviceAreas.map((area) => area.slug);
}

export function getAreaKeywords(slug: string): string[] {
  const area = getAreaBySlug(slug);
  if (!area) return [];
  return area.keywords;
}
