import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { AreasCardsSection } from "@/components/sections/AreasCardsSection";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  getAreasItemListSchema,
  getBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Roofing Service Areas in New Jersey",
  description:
    "Creative Pro Construction serves all 21 New Jersey counties — Bergen, Essex, Hudson, Middlesex, Passaic, Morris, Union, Ocean, Monmouth, and statewide. Find your county and city for local roofing services.",
  path: "/areas",
  keywords: [
    "roofing service areas New Jersey",
    "roofer Clifton NJ",
    "roofing contractor Bergen County",
    "Morris County roofer",
    "Hudson County roofing",
    "Essex County roofing company",
  ],
});

export default function AreasIndexPage() {
  return (
    <main className="relative bg-white">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/areas" },
          ]),
          getAreasItemListSchema(),
        ]}
      />
      <ServicesPageHero
        eyebrow="Service areas"
        title="WHERE WE SERVE IN NEW JERSEY"
        description="Local roofing and construction services across all 21 New Jersey counties. Select your county to explore cities we serve."
        headingId="areas-index-heading"
        overlapLayout
      />

      <div className="relative z-20 -mt-32 sm:-mt-40 lg:-mt-56">
        <AreasCardsSection showHeader={false} className="pb-16 sm:pb-20 lg:pb-24" />
      </div>
    </main>
  );
}
