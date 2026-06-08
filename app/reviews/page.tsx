import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { BookingFormSection } from "@/components/sections/BookingFormSection";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getPageKeywords, getReviewsPageSeo } from "@/lib/seo/page-map";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

const seo = getReviewsPageSeo();

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  keywords: getPageKeywords(seo),
});

export default function ReviewsPage() {
  return (
    <main className="relative bg-white">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Reviews", path: seo.path },
          ]),
        ]}
      />
      <ServicesPageHero
        eyebrow="Testimonials"
        title={seo.h1.toUpperCase()}
        description={seo.description}
        headingId="reviews-page-heading"
        overlapLayout
      />

      <div className="relative z-20 -mt-32 sm:-mt-40 lg:-mt-56">
        <ReviewsSection />
        <StatsSection />
        <BookingFormSection />
      </div>
    </main>
  );
}
