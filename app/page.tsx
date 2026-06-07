import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HeroServicesMarquee } from "@/components/sections/HeroServicesMarquee";
import { StatsSection } from "@/components/sections/StatsSection";
import { RaisingStandardSection } from "@/components/sections/RaisingStandardSection";
import { WorkingProcessSection } from "@/components/sections/WorkingProcessSection";
import { SpecializedServicesSection } from "@/components/sections/SpecializedServicesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BrandsCarouselSection } from "@/components/sections/BrandsCarouselSection";
import { ExcellenceWorkSection } from "@/components/sections/ExcellenceWorkSection";
import { RoofRepairBeforeAfterSection } from "@/components/sections/RoofRepairBeforeAfterSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getHomeKeywords } from "@/lib/seo/keywords";

export const metadata: Metadata = createPageMetadata({
  title: "Roofing & Construction Contractor in New Jersey",
  description:
    "Creative Pro Construction — licensed & insured roofing and exterior contractor in NJ. Roof installation, replacement, gutters, chimney, masonry, siding. Free estimates across Bergen County and statewide.",
  path: "/",
  keywords: getHomeKeywords(),
});

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <HeroServicesMarquee />
      <StatsSection />
      <RaisingStandardSection />
      <ServiceAreaSection />
      <WorkingProcessSection />
      <SpecializedServicesSection />
      <RoofRepairBeforeAfterSection />
      <BrandsCarouselSection />
      <ExcellenceWorkSection />
      <ReviewsSection />
    </main>
  );
}
