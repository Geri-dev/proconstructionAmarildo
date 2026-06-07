import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getServicesPageKeywords } from "@/lib/seo/keywords";
import {
  getBreadcrumbSchema,
  getServicesItemListSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({
  title: "Roofing & Construction Services in New Jersey",
  description:
    "Explore roof installation, roof replacement, roof fitting, gutters, chimney services, stairs, masonry, and siding. Licensed Creative Pro Construction serves homeowners across New Jersey.",
  path: "/services",
  keywords: getServicesPageKeywords(),
});

export default function ServicesPage() {
  return (
    <main className="relative bg-white">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          getServicesItemListSchema(),
        ]}
      />
      <ServicesPageHero overlapLayout />
      <ServicesGridSection overlapHero />
    </main>
  );
}
