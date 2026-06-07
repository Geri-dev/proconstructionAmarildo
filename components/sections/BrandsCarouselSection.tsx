"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { fontBody, fontDisplay } from "@/app/fonts";
import gafLogo from "@/app/images/brands/gaf-logo.png";
import tamkoLogo from "@/app/images/brands/tamko-logo.png";
import johnsManvilleLogo from "@/app/images/brands/johns-manville-logo.png";
import owensLogo from "@/app/images/brands/owens-logo.png";
import duraLastLogo from "@/app/images/brands/dura-last-logo.png";
import { usePrefersReducedMotion } from "@/lib/motion";

type Brand = {
  name: string;
  logo: StaticImageData;
};

const brands: Brand[] = [
  { name: "GAF", logo: gafLogo },
  { name: "TAMKO", logo: tamkoLogo },
  { name: "Johns Manville", logo: johnsManvilleLogo },
  { name: "Owens Corning", logo: owensLogo },
  { name: "Duro-Last", logo: duraLastLogo },
];

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setSlidesPerView(3);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return slidesPerView;
}

export function BrandsCarouselSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reducedMotion = usePrefersReducedMotion();
  const slidesPerView = useSlidesPerView();
  const maxIndex = Math.max(0, brands.length - slidesPerView);
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
      id="brands"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="brands-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#143a30] via-[#22c55e] to-[#4ade80]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(255,255,255,0.22)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(20,58,48,0.15)_0%,transparent_45%)]"
        aria-hidden
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          id="brands-heading"
          className={`${fontDisplay} mb-10 text-center text-4xl tracking-wide text-neutral-900 sm:mb-12 sm:text-5xl lg:text-6xl`}
        >
          BUILT WITH THE BEST BRANDS
        </motion.h2>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative"
        >
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Previous brands"
              className={`${fontBody} flex h-12 w-12 shrink-0 items-center justify-center text-neutral-900 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-35 sm:h-14 sm:w-14`}
            >
              <ChevronLeft className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden />
            </button>

            <div className="min-w-0 flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                style={{
                  transform: `translateX(-${(activeIndex * 100) / slidesPerView}%)`,
                }}
              >
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="shrink-0 px-2 sm:px-3"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    <div className="relative flex h-36 items-center justify-center rounded-2xl border border-white/40 bg-white p-6 shadow-lg shadow-black/10 sm:h-40 sm:rounded-3xl sm:p-8">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={280}
                        height={120}
                        className="max-h-full w-auto max-w-full object-contain"
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 220px, 280px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Next brands"
              className={`${fontBody} flex h-12 w-12 shrink-0 items-center justify-center text-neutral-900 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-35 sm:h-14 sm:w-14`}
            >
              <ChevronRight className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden />
            </button>
          </div>

          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label="Brand carousel pagination"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-neutral-900"
                    : "w-2 bg-neutral-900/30 hover:bg-neutral-900/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
