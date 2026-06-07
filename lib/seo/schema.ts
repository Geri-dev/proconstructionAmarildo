import { blogPosts } from "@/lib/blog/posts";
import { faqItems } from "@/lib/faq";
import { REVIEW_AGGREGATE, reviews } from "@/lib/reviews";
import { getAreaBySlug, serviceAreas } from "@/lib/seo/areas";
import { formatServiceTitle, specializedServices } from "@/lib/services";
import { absoluteUrl, BUSINESS, SITE_NAME, SITE_URL } from "./constants";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo-fix.png"),
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS.address,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    sameAs: BUSINESS.sameAs,
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RoofingContractor", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    url: SITE_URL,
    image: absoluteUrl("/images/logo-fix.png"),
    logo: absoluteUrl("/images/logo-fix.png"),
    description:
      "Licensed and insured roofing and construction contractor serving New Jersey with roof installation, replacement, gutters, chimney, masonry, siding, and exterior services.",
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS.address,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing & Construction Services",
      itemListElement: specializedServices.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: formatServiceTitle(service.title),
          url: absoluteUrl(`/services/${service.slug}`),
          description: service.description,
        },
      })),
    },
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEW_AGGREGATE.ratingValue,
      reviewCount: REVIEW_AGGREGATE.reviewCount,
      bestRating: REVIEW_AGGREGATE.bestRating,
      worstRating: REVIEW_AGGREGATE.worstRating,
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "CommunicateAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl("/#contact"),
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      name: "Request a free estimate",
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getServiceSchema(slug: string) {
  const service = specializedServices.find((entry) => entry.slug === slug);
  if (!service) return null;

  const serviceName = formatServiceTitle(service.title);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/services/${slug}#service`),
    name: serviceName,
    description: service.description,
    url: absoluteUrl(`/services/${slug}`),
    provider: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    serviceType: serviceName,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
      description: "Free estimate and consultation",
      url: absoluteUrl(`/services/${slug}`),
    },
  };
}

export function getServicesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Specialized Roofing & Construction Services",
    itemListElement: specializedServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/services/${service.slug}`),
      name: formatServiceTitle(service.title),
    })),
  };
}

export function getFaqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getReviewsSchema() {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "RoofingContractor",
      "@id": `${SITE_URL}/#localbusiness`,
      name: BUSINESS.name,
    },
    name: review.headline,
    reviewBody: review.text,
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    publisher: {
      "@type": "Organization",
      name: review.platform === "google" ? "Google" : "HomeAdvisor",
    },
  }));
}

export function getGlobalStructuredData() {
  return [
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getWebSiteSchema(),
    getFaqPageSchema(),
    ...getReviewsSchema(),
  ];
}

export function getAreaServiceSchema(slug: string) {
  const area = getAreaBySlug(slug);
  if (!area) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`/areas/${slug}#area-service`),
    name: `Roofing & Construction in ${area.name}`,
    description: area.description,
    url: absoluteUrl(`/areas/${slug}`),
    provider: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: area.name,
    },
    serviceType: "RoofingContractor",
  };
}

export function getAreasItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Creative Pro Construction Service Areas",
    itemListElement: serviceAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/areas/${area.slug}`),
      name: area.name,
    })),
  };
}

export function getBlogIndexSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/blog#blog"),
    name: `${SITE_NAME} Blog`,
    url: absoluteUrl("/blog"),
    description:
      "Roofing tips, cost guides, and New Jersey homeowner resources.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      description: post.excerpt,
    })),
  };
}

export function getBlogPostSchema(slug: string) {
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": absoluteUrl(`/blog/${slug}#article`),
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
    keywords: post.keywords.join(", "),
    articleBody: post.sections
      .flatMap((section) => [...section.paragraphs, ...(section.list ?? [])])
      .join(" "),
  };
}
