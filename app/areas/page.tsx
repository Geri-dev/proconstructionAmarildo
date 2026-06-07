import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { fontBody, fontDisplay } from "@/app/fonts";
import { serviceAreas } from "@/lib/seo/areas";
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

      <section className="relative z-20 -mt-32 bg-transparent px-4 pb-16 sm:-mt-40 sm:px-6 sm:pb-20 lg:-mt-56 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {serviceAreas.map((area) => (
              <article
                key={area.slug}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-6 shadow-lg shadow-black/10 sm:rounded-3xl sm:p-8"
              >
                <h2
                  className={`${fontDisplay} text-2xl tracking-wide text-neutral-900`}
                >
                  {area.name}
                </h2>
                <p
                  className={`${fontBody} mt-4 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base`}
                >
                  {area.description}
                </p>
                <Link
                  href={`/areas/${area.slug}`}
                  className={`${fontBody} mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-opacity hover:opacity-80`}
                >
                  View area
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
