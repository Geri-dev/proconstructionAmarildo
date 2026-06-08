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
    "Creative Pro Construction serves Clifton, Bergen, Passaic, Essex, Morris, Hudson, Union, Middlesex counties, Paterson, Wayne, Newark, Jersey City, Hackensack, Paramus, Fort Lee, and all of New Jersey.",
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
        description="Local roofing and construction services across North and Central New Jersey. Select your area to learn more."
        headingId="areas-index-heading"
        overlapLayout
      />

      <div className="relative z-20 -mt-32 sm:-mt-40 lg:-mt-56">
        <AreasCardsSection showHeader={false} className="pb-16 sm:pb-20 lg:pb-24" />
      </div>
    </main>
  );
}
