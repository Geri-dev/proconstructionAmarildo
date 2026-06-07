"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { SectionConsultationCta } from "@/components/ui/SectionConsultationCta";
import { fontBody, fontDisplay } from "@/app/fonts";
import { specializedServices } from "@/lib/services";
import type { ServiceArea } from "@/lib/seo/areas";

type AreaPageContentProps = {
  area: ServiceArea;
};

export function AreaPageContent({ area }: AreaPageContentProps) {
  return (
    <>
      <ServicesPageHero
        eyebrow="Service area"
        title={area.headline}
        description={area.description}
        headingId="area-page-heading"
        overlapLayout
      />

      <section className="relative z-20 bg-white px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl pt-10 sm:pt-14 lg:pt-20">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <h2
                className={`${fontDisplay} text-3xl tracking-wide text-neutral-900 sm:text-4xl lg:text-5xl`}
              >
                Local roofing & construction in {area.name}
              </h2>
              <p
                className={`${fontBody} mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg`}
              >
                {area.intro}
              </p>

              <ul
                className={`${fontBody} mt-8 list-disc space-y-4 pl-5 text-base leading-relaxed text-neutral-600 sm:text-lg`}
              >
                {area.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p
                className={`${fontBody} mt-8 text-sm text-neutral-500 sm:text-base`}
              >
                Nearby communities we serve: {area.nearby.join(", ")}.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="-mt-0 rounded-2xl border border-neutral-200 bg-slate-50 p-6 shadow-lg shadow-black/5 sm:rounded-3xl sm:p-8 lg:-mt-8">
                <h3
                  className={`${fontDisplay} text-2xl tracking-wide text-neutral-900 sm:text-3xl`}
                >
                  Popular services in {area.name}
                </h3>
                <ul className="mt-6 space-y-4">
                  {specializedServices.slice(0, 6).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
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

          <SectionConsultationCta className="mt-20 flex justify-center sm:mt-24 lg:mt-28" />
        </div>
      </section>
    </>
  );
}
