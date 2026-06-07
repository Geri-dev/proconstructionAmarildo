"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import roofingPortrait from "@/app/images/ROOFING-1.webp";
import roofingLandscape from "@/app/images/ROOFING-2.webp";
import materialsIcon from "@/app/icons/materials.svg";
import workerIcon from "@/app/icons/worker.svg";
import { fontBody, fontDisplay } from "@/app/fonts";
import { usePrefersReducedMotion } from "@/lib/motion";

const features = [
  {
    title: "Premium Materials",
    icon: materialsIcon,
    description:
      "We install top-tier shingles, underlayment, and flashing built for New Jersey storms, heat, and freeze-thaw cycles maximizing roof life and energy efficiency.",
  },
  {
    title: "Expert Members",
    icon: workerIcon,
    description:
      "Our licensed, insured team brings decades of roofing and construction expertise to homes and businesses across New Jersey from inspection to final walkthrough.",
  },
];

function FeatureBlock({
  title,
  icon,
  description,
  index,
  active,
}: {
  title: string;
  icon: typeof materialsIcon;
  description: string;
  index: number;
  active: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.article
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
      className="flex flex-col gap-3"
    >
      <Image
        src={icon}
        alt=""
        width={56}
        height={56}
        className="h-12 w-12 object-contain sm:h-14 sm:w-14"
        aria-hidden
      />
      <h3
        className={`${fontDisplay} text-2xl uppercase leading-none tracking-wide text-neutral-900 sm:text-3xl`}
      >
        {title}
      </h3>
      <p className={`${fontBody} text-sm leading-relaxed text-neutral-600 sm:text-base`}>
        {description}
      </p>
    </motion.article>
  );
}

export function RaisingStandardSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="about"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="raising-standard-heading"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left — overlapping images */}
          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <div className="relative min-h-[18rem] w-full sm:min-h-[20rem] lg:min-h-[24rem]">
              <div className="relative z-0 w-[72%] overflow-hidden rounded-3xl shadow-xl sm:w-[68%]">
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                  <Image
                    src={roofingPortrait}
                    alt="Premium roofing installation on a New Jersey home"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 70vw, 35vw"
                  />
                </div>
              </div>

              <div className="absolute bottom-2 left-[18%] z-10 w-[85%] max-w-lg overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white sm:bottom-0 sm:left-[22%] sm:w-[88%] lg:left-[20%]">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={roofingLandscape}
                    alt="Professional roofing and construction crew at work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 85vw, 45vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 lg:gap-10"
          >
            <div className="space-y-5">
              <h2
                id="raising-standard-heading"
                className={`${fontDisplay} text-4xl leading-[0.95] tracking-wide sm:text-5xl lg:text-6xl xl:text-[4rem]`}
              >
                <span className="text-neutral-900">Raising the Standard in </span>
                <span className="text-brand-orange">
                  Roofing &amp; Construction
                </span>
              </h2>
              <p
                className={`${fontBody} max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg`}
              >
                Creative Pro Construction is a top-rated New Jersey roofing and
                construction company specializing in roof replacement, repair,
                siding, and full exterior upgrades. We combine proven craftsmanship
                with premium materials to protect your property and increase its
                value on time and on budget.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <FeatureBlock
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                  index={index}
                  active={inView}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
