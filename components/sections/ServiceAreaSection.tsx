"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { fontBody, fontDisplay } from "@/app/fonts";
import { NewJerseyServiceMap } from "@/components/ui/NewJerseyServiceMap";
import { SectionConsultationCta } from "@/components/ui/SectionConsultationCta";
import { serviceAreas } from "@/lib/seo/areas";
import { usePrefersReducedMotion } from "@/lib/motion";

export function ServiceAreaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const reducedMotion = usePrefersReducedMotion();

  const fadeUp = reducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <section
      id="service-area"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="service-area-heading"
    >
      <div ref={ref} className="mx-auto flex max-w-7xl flex-col">
        {/* Header */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <h2
              id="service-area-heading"
              className={`${fontDisplay} text-4xl leading-[0.95] tracking-wide text-neutral-900 sm:text-5xl lg:text-6xl`}
            >
              TOP-TIER ROOFING SERVICES ACROSS NEW JERSEY
            </h2>
            <p
              className={`${fontBody} mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg`}
            >
              We provide top-quality roofing and construction solutions designed
              to protect your home and enhance its value serving homeowners and
              businesses statewide, from Bergen County to Cape May.
            </p>
          </div>

          <Link
            href="/services"
            className={`${fontBody} inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-orange transition-opacity hover:opacity-80 sm:text-base`}
          >
            Explore services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.header>

        {/* Map stage — centered, constrained (reference-style breathing room) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-12 lg:mt-14"
        >
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50/70 sm:rounded-3xl">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #d4d4d4 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
              aria-hidden
            />
            <div className="relative flex h-[260px] items-center justify-center px-6 sm:h-[300px] sm:px-8 md:h-[340px] lg:h-[380px]">
              <NewJerseyServiceMap className="h-full w-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12"
        >
          <Link
            href="/areas"
            className={`${fontBody} rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand-orange hover:text-brand-orange`}
          >
            All service areas
          </Link>
          {serviceAreas.slice(0, 6).map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className={`${fontBody} rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand-orange hover:text-brand-orange`}
            >
              {area.name}
            </Link>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.footer
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-6 text-center sm:mt-16 sm:gap-8 lg:mt-20"
        >
          <h3
            className={`${fontDisplay} max-w-4xl text-3xl leading-[0.95] tracking-wide text-neutral-900 sm:text-4xl lg:text-[2.75rem]`}
          >
            READY TO EXPERIENCE WORLD-CLASS ROOFING SOLUTIONS TAILORED TO{" "}
            <span className="text-brand-orange">YOUR SPECIFIC NEEDS</span>?
          </h3>
          <SectionConsultationCta />
        </motion.footer>
      </div>
    </section>
  );
}
