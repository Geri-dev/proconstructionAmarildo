"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroBg from "@/app/images/MAIN-ROOF.webp";
import { fontBody, fontDisplay } from "@/app/fonts";
import { Header } from "@/components/layout/Header";
import { ConsultationButton } from "@/components/ui/ConsultationButton";
import { QuickCallButton } from "@/components/ui/QuickCallButton";
import { HeroScrollHint } from "@/components/ui/HeroScrollHint";
import { HeroTrustStrip } from "@/components/sections/HeroTrustStrip";
import { heroGlassSurface } from "@/lib/heroGlass";
import { usePrefersReducedMotion } from "@/lib/motion";

const headlineLines = [
  "Quality Roofing.",
  "Reliable Construction.",
  "New Jersey",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const variants = reducedMotion ? itemVariantsReduced : itemVariants;

  return (
    <section
      id="home"
      className="relative overflow-hidden lg:h-screen lg:min-h-0 lg:overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Professional roofing and construction in New Jersey"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/5"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          aria-hidden
        />
      </div>

      <Header />

      <div className="hero-mobile-shell relative z-10 mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col px-4 sm:px-6 lg:justify-center lg:px-8 lg:pb-0 lg:pt-36 xl:pt-40">
        <div className="flex min-h-0 flex-1 flex-col justify-start max-lg:overflow-y-auto max-lg:pb-24 max-lg:pt-[8.25rem] sm:max-lg:pt-[8.75rem] lg:flex-none lg:overflow-visible lg:pb-0 lg:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-3xl flex-col gap-3 sm:gap-4 lg:gap-5"
        >
          <div className="space-y-1">
            {headlineLines.map((line) => (
              <motion.h1
                key={line}
                variants={variants}
                className={`${fontDisplay} text-[2.35rem] leading-[0.92] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.75rem] 2xl:text-[6.5rem]`}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.div variants={variants}>
            <HeroTrustStrip />
          </motion.div>

          <motion.p
            variants={variants}
            className={`${fontBody} max-w-xl text-base leading-relaxed text-white/90 sm:text-lg`}
          >
            Professional roofing and construction services delivering quality,
            durability, and peace of mind for your home and business.
          </motion.p>

          <motion.div
            variants={variants}
            className={`${heroGlassSurface} flex w-full flex-col overflow-hidden p-0 max-lg:w-full lg:inline-flex lg:w-auto lg:self-start lg:flex-row`}
          >
            <ConsultationButton
              variant="hero-glass"
              className="border-b border-white/15 lg:border-b-0 lg:border-r"
            />
            <QuickCallButton variant="hero-glass" />
          </motion.div>
        </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center pb-6 sm:pb-8">
        <div className="pointer-events-auto">
          <HeroScrollHint />
        </div>
      </div>
    </section>
  );
}
