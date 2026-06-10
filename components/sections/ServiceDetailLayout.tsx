"use client";

import Image from "next/image";
import Link from "next/link";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { ServiceBookingForm } from "@/components/ui/ServiceBookingForm";
import { fontBody, fontDisplay } from "@/app/fonts";
import {
  getLocalServiceHeroDescription,
  getLocalServiceHeroTitle,
  getLocalServicePageContent,
  type LocalServicePageContext,
} from "@/lib/seo/local-service-pages";
import { getCityPagePath, getCountyPagePath } from "@/lib/seo/areas";
import { getServiceDetailContent } from "@/lib/service-content";
import {
  getServiceNameLower,
  type ServiceItem,
} from "@/lib/services";

type ServiceDetailLayoutProps = {
  service: ServiceItem;
  location?: LocalServicePageContext;
};

export function ServiceDetailLayout({
  service,
  location,
}: ServiceDetailLayoutProps) {
  const content = location
    ? getLocalServicePageContent(location)
    : getServiceDetailContent(service.slug);
  const serviceName = getServiceNameLower(service.title);
  const cityLabel = location?.city.name;
  const locationSuffix = cityLabel ? ` in ${cityLabel}` : "";

  return (
    <>
      <ServicesPageHero
        eyebrow={
          location
            ? `${location.county.name.replace(/, NJ$/, "")} · ${location.city.name}`
            : undefined
        }
        title={
          location ? getLocalServiceHeroTitle(location) : service.title
        }
        description={
          location
            ? getLocalServiceHeroDescription(location)
            : service.description
        }
        headingId="service-detail-heading"
        overlapLayout={Boolean(location)}
      />

      <section
        className="relative z-20 -mt-32 bg-transparent px-4 pb-16 sm:-mt-40 sm:px-6 sm:pb-20 lg:-mt-48 lg:px-8 lg:pb-24"
        aria-labelledby="service-about-heading"
      >
        <div className="mx-auto max-w-7xl">
          {location ? (
            <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
              <ol
                className={`${fontBody} flex flex-wrap items-center gap-2 text-sm text-neutral-500`}
              >
                <li>
                  <Link href="/services" className="hover:text-brand-orange">
                    Services
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-brand-orange"
                  >
                    {service.title}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href={getCountyPagePath(location.county.slug)}
                    className="hover:text-brand-orange"
                  >
                    {location.county.name}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href={getCityPagePath(
                      location.county.slug,
                      location.city.slug,
                    )}
                    className="hover:text-brand-orange"
                  >
                    {location.city.name}
                  </Link>
                </li>
              </ol>
            </nav>
          ) : null}
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            <div className="order-1 lg:col-span-7 xl:col-span-8">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image
                  src={service.detailImage}
                  alt={
                    location
                      ? `${service.detailImageAlt} in ${location.city.name}`
                      : service.detailImageAlt
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </div>

            <div className="order-2 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 xl:col-span-4 xl:col-start-9">
              <div className="hidden lg:block lg:sticky lg:top-28 lg:self-start">
                <ServiceBookingForm
                  defaultServiceSlug={service.slug}
                  defaultCountySlug={location?.county.slug}
                  defaultCitySlug={location?.city.slug}
                />
              </div>
              <div className="lg:hidden">
                <ServiceBookingForm
                  defaultServiceSlug={service.slug}
                  defaultCountySlug={location?.county.slug}
                  defaultCitySlug={location?.city.slug}
                />
              </div>
            </div>

            <div className="order-3 rounded-2xl bg-white px-0 py-2 sm:rounded-3xl lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:px-0 lg:py-0 xl:col-span-8">
              <div className="space-y-12 lg:mt-6">
                <div>
                  <h2
                    id="service-about-heading"
                    className={`${fontDisplay} text-3xl tracking-wide text-neutral-900 sm:text-4xl`}
                  >
                    About our {serviceName}
                    {locationSuffix}
                  </h2>
                  <p
                    className={`${fontBody} mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg`}
                  >
                    {content.about}
                  </p>
                </div>

                <div>
                  <h2
                    className={`${fontDisplay} text-3xl tracking-wide text-neutral-900 sm:text-4xl`}
                  >
                    Why choose our {serviceName}
                    {locationSuffix}?
                  </h2>
                  <ul
                    className={`${fontBody} mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-neutral-600 sm:text-lg`}
                  >
                    {content.whyChoose.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2
                    className={`${fontDisplay} text-3xl tracking-wide text-neutral-900 sm:text-4xl`}
                  >
                    Our installation process
                    {locationSuffix}
                  </h2>
                  <ol
                    className={`${fontBody} mt-4 space-y-4 text-base leading-relaxed text-neutral-600 sm:text-lg`}
                  >
                    {content.processSteps.map((step, index) => (
                      <li key={step.title}>
                        <span className="font-semibold text-neutral-900">
                          {index + 1}. {step.title}:
                        </span>{" "}
                        {step.description}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
