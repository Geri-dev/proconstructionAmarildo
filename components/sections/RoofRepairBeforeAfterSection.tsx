"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fontBody, fontDisplay } from "@/app/fonts";
import { BeforeAfterCompare } from "@/components/ui/BeforeAfterCompare";
import { RoofCompareNavArrow } from "@/components/ui/RoofCompareNavArrow";
import { SectionConsultationCta } from "@/components/ui/SectionConsultationCta";
import { roofComparisons, type RoofComparison } from "@/lib/roofBeforeAfter";
import { usePrefersReducedMotion } from "@/lib/motion";

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      setSlidesPerView(
        window.matchMedia("(min-width: 1024px)").matches ? 2 : 1,
      );
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return slidesPerView;
}

function ComparisonCard({ item }: { item: RoofComparison }) {
  return (
    <article className="flex h-full flex-col">
      <BeforeAfterCompare
        beforeSrc={item.before}
        afterSrc={item.after}
        beforeAlt={item.beforeAlt}
        afterAlt={item.afterAlt}
        layout={item.layout}
      />
      <h3
        className={`${fontDisplay} mt-5 text-xl uppercase tracking-wide text-neutral-900 sm:mt-6 sm:text-2xl`}
      >
        {item.title}
      </h3>
      <p
        className={`${fontBody} mt-2 text-sm leading-relaxed text-neutral-600 sm:mt-3 sm:text-[15px]`}
      >
        {item.description}
      </p>
    </article>
  );
}

export function RoofRepairBeforeAfterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reducedMotion = usePrefersReducedMotion();
  const slidesPerView = useSlidesPerView();
  const maxIndex = Math.max(0, roofComparisons.length - slidesPerView);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setActiveIndex((current) => Math.max(0, current - 1));
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((current) => Math.min(maxIndex, current + 1));
  }, [maxIndex]);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;

  return (
    <section
      id="roof-repair-before-after"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="roof-repair-before-after-heading"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="roof-repair-before-after-heading"
            className={`${fontDisplay} text-4xl tracking-wide text-neutral-900 sm:text-5xl lg:text-6xl`}
          >
            ROOF REPAIR BEFORE AND AFTER
          </h2>
          <p
            className={`${fontBody} mt-4 text-base leading-relaxed text-neutral-600 sm:mt-5 sm:text-lg`}
          >
            Real roof repair, roof replacement, and shingle installation projects
            across New Jersey photographed before and after our crew finishes.
            Drag each slider to compare the transformation side to side on portrait
            shots, or up and down on aerial 16:9 projects.
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-10 sm:mt-12 lg:mt-14"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{
                transform: `translateX(-${(activeIndex * 100) / slidesPerView}%)`,
              }}
            >
              {roofComparisons.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <ComparisonCard item={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:gap-5">
            <RoofCompareNavArrow
              direction="prev"
              disabled={!canGoPrev}
              onClick={goPrev}
              label="Previous before and after projects"
            />
            <p
              className={`${fontBody} min-w-[4.5rem] text-center text-sm font-semibold tabular-nums text-neutral-500`}
              aria-live="polite"
            >
              <span className="text-neutral-900">{activeIndex + 1}</span>
              <span className="mx-1 text-neutral-400">/</span>
              <span>{maxIndex + 1}</span>
            </p>
            <RoofCompareNavArrow
              direction="next"
              disabled={!canGoNext}
              onClick={goNext}
              label="Next before and after projects"
            />
          </div>

          <SectionConsultationCta className="mt-10 flex justify-center sm:mt-12 lg:mt-14" />
        </motion.div>
      </div>
    </section>
  );
}
