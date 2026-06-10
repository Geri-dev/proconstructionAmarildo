"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { SectionConsultationCta } from "@/components/ui/SectionConsultationCta";
import { fontBody, fontDisplay } from "@/app/fonts";
import { specializedServices } from "@/lib/services";
import {
  getCityPagePath,
  getCountyPagePath,
  type CityArea,
  type CountyArea,
} from "@/lib/seo/areas";
import { getLocalServicePagePath } from "@/lib/seo/local-service-pages";

type CityPageContentProps = {
  city: CityArea;
  county: CountyArea;
};

export function CityPageContent({ city, county }: CityPageContentProps) {
  const otherCities = county.cities.filter((entry) => entry.slug !== city.slug);

  return (
    <>
      <ServicesPageHero
        eyebrow={`${county.name.replace(/, NJ$/, "")}`}
        title={city.headline}
        description={city.description}
        headingId="city-page-heading"
        overlapLayout
      />

      <section className="relative z-20 bg-white px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl pt-10 sm:pt-14 lg:pt-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol
              className={`${fontBody} flex flex-wrap items-center gap-2 text-sm text-neutral-500`}
            >
              <li>
                <Link href="/areas" className="hover:text-brand-orange">
                  Service Areas
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href={getCountyPagePath(county.slug)}
                  className="hover:text-brand-orange"
                >
                  {county.name}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-neutral-900">{city.name}</li>
            </ol>
          </nav>

          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <h2
                className={`${fontDisplay} text-3xl tracking-wide text-neutral-900 sm:text-4xl lg:text-5xl`}
              >
                Local roofing & construction in {city.name}
              </h2>
              <p
                className={`${fontBody} mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg`}
              >
                {city.intro}
              </p>

              <ul
                className={`${fontBody} mt-8 list-disc space-y-4 pl-5 text-base leading-relaxed text-neutral-600 sm:text-lg`}
              >
                {city.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="-mt-0 rounded-2xl border border-neutral-200 bg-slate-50 p-6 shadow-lg shadow-black/5 sm:rounded-3xl sm:p-8 lg:-mt-8">
                <h3
                  className={`${fontDisplay} text-2xl tracking-wide text-neutral-900 sm:text-3xl`}
                >
                  Popular services in {city.name}
                </h3>
                <ul className="mt-6 space-y-4">
                  {specializedServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={getLocalServicePagePath(
                          service.slug,
                          county.slug,
                          city.slug,
                        )}
                        className={`${fontBody} inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-opacity hover:opacity-80 sm:text-base`}
                      >
                        {service.title}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className={`${fontBody} mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-neutral-900 transition-opacity hover:opacity-70`}
                >
                  View all services
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>

          {otherCities.length > 0 ? (
            <div className="mt-20 sm:mt-24 lg:mt-28">
              <h2
                className={`${fontDisplay} text-3xl tracking-wide text-neutral-900 sm:text-4xl`}
              >
                More cities in {county.name.replace(/, NJ$/, "")}
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {otherCities.map((entry) => (
                  <li key={entry.slug}>
                    <Link
                      href={getCityPagePath(county.slug, entry.slug)}
                      className={`${fontBody} flex min-h-[48px] items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand-orange hover:text-brand-orange sm:text-base`}
                    >
                      {entry.name}
                      <ArrowRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <SectionConsultationCta className="mt-20 flex justify-center sm:mt-24 lg:mt-28" />
        </div>
      </section>
    </>
  );
}
