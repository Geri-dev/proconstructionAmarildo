import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { GalleryCollageSection } from "@/components/sections/GalleryCollageSection";
import { RoofRepairBeforeAfterSection } from "@/components/sections/RoofRepairBeforeAfterSection";
import { ExcellenceWorkSection } from "@/components/sections/ExcellenceWorkSection";
import { AreasCardsSection } from "@/components/sections/AreasCardsSection";
import { BookingFormSection } from "@/components/sections/BookingFormSection";
import { getGalleryImages } from "@/lib/gallery";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getGalleryPageSeo, getPageKeywords } from "@/lib/seo/keywords";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

const seo = getGalleryPageSeo();

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  keywords: getPageKeywords(seo),
});

export default function GalleryPage() {
  const galleryImages = getGalleryImages();

  return (
    <main className="relative bg-white">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
        ]}
      />
      <ServicesPageHero
        eyebrow="Portfolio"
        title="GALLERY"
        description="Real roofing and construction projects across New Jersey — before and after transformations, aerial footage, and craftsmanship you can trust."
        headingId="gallery-heading"
        overlapLayout
      />

      <div className="relative z-20 -mt-32 sm:-mt-40 lg:-mt-56">
        <ExcellenceWorkSection />
        <GalleryCollageSection images={galleryImages} />
        <RoofRepairBeforeAfterSection />
        <AreasCardsSection />
        <BookingFormSection />
      </div>
    </main>
  );
}
