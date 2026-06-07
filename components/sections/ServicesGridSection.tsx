"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { specializedServices } from "@/lib/services";
import { usePrefersReducedMotion } from "@/lib/motion";

type ServicesGridSectionProps = {
  overlapHero?: boolean;
};

export function ServicesGridSection({
  overlapHero = false,
}: ServicesGridSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      className={`px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-24 ${
        overlapHero
          ? "relative z-20 -mt-32 bg-transparent sm:-mt-40 lg:-mt-56"
          : "bg-white"
      }`}
      aria-label="All specialized services"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid auto-rows-fr items-stretch gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specializedServices.map((service, index) => (
            <motion.div
              key={service.slug}
              className="flex h-full min-h-0"
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
