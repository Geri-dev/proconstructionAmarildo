"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { HeroBackgroundImage } from "@/components/ui/HeroBackgroundImage";
import { fontBody, fontDisplay } from "@/app/fonts";
import { usePrefersReducedMotion } from "@/lib/motion";

type ServicesPageHeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  headingId?: string;
  /** Extra hero height and bottom padding for overlapping cards below */
  overlapLayout?: boolean;
};

export function ServicesPageHero({
  eyebrow = "Our services",
  title = "OUR SPECIALIZED SERVICES",
  description = "We provide top-quality roofing, masonry, siding, and exterior solutions designed to protect your New Jersey home and enhance its value for years to come.",
  headingId = "services-page-heading",
  overlapLayout = false,
}: ServicesPageHeroProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      className={`relative overflow-hidden ${
        overlapLayout
          ? "min-h-[52vh] sm:min-h-[58vh] lg:min-h-[68vh]"
          : "min-h-[52vh] sm:min-h-[58vh] lg:min-h-[65vh]"
      }`}
      aria-labelledby={headingId}
    >
      <HeroBackgroundImage />
      <Header />

      <div
        className={`relative z-10 mx-auto max-w-7xl px-4 pt-28 text-center sm:px-6 sm:pt-32 lg:px-8 lg:pt-36 ${
          overlapLayout
            ? "pb-36 sm:pb-44 lg:pb-52"
            : "pb-32 sm:pb-40 lg:pb-48"
        }`}
      >
        <motion.p
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={`${fontBody} text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange sm:text-sm`}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          id={headingId}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={`${fontDisplay} mt-3 text-4xl tracking-wide text-white sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl`}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${fontBody} mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg`}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
