import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { RaisingStandardSection } from "@/components/sections/RaisingStandardSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WorkingProcessSection } from "@/components/sections/WorkingProcessSection";
import { BrandsCarouselSection } from "@/components/sections/BrandsCarouselSection";
import { BookingFormSection } from "@/components/sections/BookingFormSection";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getAboutPageSeo, getPageKeywords } from "@/lib/seo/page-map";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

const seo = getAboutPageSeo();

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  keywords: getPageKeywords(seo),
});

export default function AboutPage() {
  return (
    <main className="relative bg-white">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: seo.path },
          ]),
        ]}
      />
      <ServicesPageHero
        eyebrow="About us"
        title={seo.h1.toUpperCase()}
        description={seo.description}
        headingId="about-page-heading"
        overlapLayout
      />

      <div className="relative z-20 -mt-24 sm:-mt-32 lg:-mt-44">
        <RaisingStandardSection />
        <StatsSection />
        <WorkingProcessSection />
        <BrandsCarouselSection />
        <BookingFormSection />
      </div>
    </main>
  );
}
