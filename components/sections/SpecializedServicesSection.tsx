import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fontBody, fontDisplay } from "@/app/fonts";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionConsultationCta } from "@/components/ui/SectionConsultationCta";
import { homeSpecializedServices } from "@/lib/services";

export function SpecializedServicesSection() {
  return (
    <section
      id="specialized-services"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="specialized-services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2
              id="specialized-services-heading"
              className={`${fontDisplay} text-4xl tracking-wide text-neutral-900 sm:text-5xl lg:text-6xl`}
            >
              OUR SPECIALIZED SERVICES
            </h2>
            <p
              className={`${fontBody} mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg`}
            >
              We provide top-quality roofing and exterior construction solutions
              across New Jersey designed to protect your home, improve drainage,
              and increase long-term property value.
            </p>
          </div>

          <Link
            href="/services"
            className={`${fontBody} inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-orange transition-opacity hover:opacity-80 sm:text-base`}
          >
            View all
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid auto-rows-fr items-stretch gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeSpecializedServices.map((service) => (
            <div key={service.slug} className="flex h-full min-h-0">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <SectionConsultationCta className="mt-10 flex justify-center sm:mt-12 lg:mt-14" />
      </div>
    </section>
  );
}
