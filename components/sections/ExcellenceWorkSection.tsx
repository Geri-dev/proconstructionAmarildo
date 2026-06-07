"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fontBody, fontDisplay } from "@/app/fonts";
import { LazyAutoplayVideo } from "@/components/ui/LazyAutoplayVideo";
import { usePrefersReducedMotion } from "@/lib/motion";

const droneVideos = [
  {
    src: "/videos/drone-video1.mp4",
    title: "Aerial drone footage of a completed roofing project in New Jersey",
    caption: "Residential roof replacement",
  },
  {
    src: "/videos/drone-video2.mp4",
    title: "Drone flyover of professional roofing and construction work in New Jersey",
    caption: "Commercial roofing project",
  },
] as const;

export function ExcellenceWorkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="excellence-work"
      className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="excellence-work-heading"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            id="excellence-work-heading"
            className={`${fontDisplay} text-4xl tracking-wide text-neutral-900 sm:text-5xl lg:text-6xl`}
          >
            EXCELLENCE WORK
          </h2>
          <p
            className={`${fontBody} mt-4 text-base leading-relaxed text-neutral-600 sm:mt-5 sm:text-lg`}
          >
            See the difference precision makes from above. Our drone footage captures
            real roofing and construction projects across New Jersey, with clean lines,
            expert shingle installation, and durable results you can trust. Creative
            Pro Construction delivers licensed, insured craftsmanship on every roof
            replacement, repair, and commercial build, backed by premium materials
            and a crew that treats your property like their own.
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:mt-14 lg:grid-cols-2"
        >
          {droneVideos.map((video) => (
            <figure key={video.src} className="flex flex-col">
              <LazyAutoplayVideo src={video.src} title={video.title} />
              <figcaption
                className={`${fontBody} mt-4 text-center text-sm text-neutral-500 sm:text-[15px]`}
              >
                {video.caption}
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
