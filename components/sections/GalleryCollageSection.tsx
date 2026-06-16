"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fontBody, fontDisplay } from "@/app/fonts";
import type { GalleryImage } from "@/lib/gallery";
import { usePrefersReducedMotion } from "@/lib/motion";

type GalleryCollageSectionProps = {
  images: GalleryImage[];
};

export function GalleryCollageSection({ images }: GalleryCollageSectionProps) {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.2 });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="project-gallery"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="project-gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={headingRef}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="project-gallery-heading"
            className={`${fontDisplay} text-4xl tracking-wide text-neutral-900 sm:text-5xl lg:text-6xl`}
          >
            PROJECT GALLERY
          </h2>
          <p
            className={`${fontBody} mt-4 text-base leading-relaxed text-neutral-600 sm:mt-5 sm:text-lg`}
          >
            Roofing, chimney, masonry, steps, and exterior work across New Jersey.
            Vertical and horizontal photos keep their natural proportions in a collage
            layout so you can browse real project results at a glance.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {images.map((image, index) => (
            <figure key={image.id} className="min-w-0">
              <div className="overflow-hidden rounded-xl bg-neutral-100 shadow-sm ring-1 ring-neutral-200/80">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="block h-auto w-full object-contain"
                  priority={index < 4}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
