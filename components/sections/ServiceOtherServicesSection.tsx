"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { fontBody, fontDisplay } from "@/app/fonts";
import { getLocalServicePagePath } from "@/lib/seo/local-service-pages";
import { getOtherServices } from "@/lib/services";
import { usePrefersReducedMotion } from "@/lib/motion";

type ServiceOtherServicesSectionProps = {
  currentSlug: string;
  countySlug?: string;
  citySlug?: string;
};

export function ServiceOtherServicesSection({
  currentSlug,
  countySlug,
  citySlug,
}: ServiceOtherServicesSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reducedMotion = usePrefersReducedMotion();
  const otherServices = getOtherServices(currentSlug, 3);

  return (
    <section
      id="other-services"
      className="border-t border-neutral-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="other-services-heading"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.h2
          id="other-services-heading"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
          className={`${fontDisplay} text-center text-4xl tracking-wide text-neutral-900 sm:text-5xl lg:text-6xl`}
        >
          Other services
        </motion.h2>

        <div className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((service, index) => (
            <motion.div
              key={service.slug}
              className="flex h-full min-h-0"
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <ServiceCard
                service={service}
                href={
                  countySlug && citySlug
                    ? getLocalServicePagePath(
                        service.slug,
                        countySlug,
                        citySlug,
                      )
                    : undefined
                }
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <Link
            href="/services"
            className={`${fontBody} inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-brand-accent px-8 text-sm font-semibold text-neutral-900 transition-colors hover:bg-brand-accent-light sm:text-base`}
          >
            Explore all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
