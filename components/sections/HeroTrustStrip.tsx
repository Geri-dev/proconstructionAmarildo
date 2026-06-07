"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fontBody, fontDisplay } from "@/app/fonts";
import { usePrefersReducedMotion } from "@/lib/motion";

const reviewers = [
  {
    name: "Sarah M.",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face",
  },
  {
    name: "James R.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
  },
  {
    name: "Maria L.",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face",
  },
];

import { heroGlassSurface } from "@/lib/heroGlass";

const glassCard = heroGlassSurface;

export function HeroTrustStrip() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15 }}
      className="flex flex-row flex-wrap items-stretch gap-2.5 sm:gap-3"
      role="group"
      aria-label="Trust and credentials"
    >
      <article
        className={`${glassCard} flex items-center gap-3 px-3 py-2.5 sm:gap-4 sm:px-4 sm:py-3`}
      >
        <div className="flex items-center">
          {reviewers.map((person, index) => (
            <div
              key={person.name}
              className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border-2 border-white/80 bg-neutral-300/50 sm:h-8 sm:w-8"
              style={{
                zIndex: reviewers.length - index,
                marginLeft: index === 0 ? 0 : -10,
              }}
            >
              <Image
                src={person.src}
                alt=""
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
          ))}
          <span
            className={`${fontBody} relative z-10 -ml-2 flex h-7 min-w-[2rem] items-center justify-center rounded-full border-2 border-white/80 bg-neutral-900/90 px-1 text-[9px] font-semibold text-white sm:h-8 sm:text-[10px]`}
            aria-label="Over two thousand five hundred reviews"
          >
            +2.5k
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <Star
            className="avatar-star-bright h-4 w-4"
            aria-hidden
          />
          <span className={`${fontDisplay} text-lg leading-none text-white sm:text-xl`}>
            4.9
          </span>
          <span className={`${fontBody} text-[11px] text-white/75 sm:text-xs`}>
            / 5.0
          </span>
        </div>
      </article>

      <article className={`${glassCard} flex flex-col justify-center px-3 py-2.5 sm:px-4 sm:py-3`}>
        <p
          className={`${fontBody} text-[10px] font-semibold uppercase tracking-wider text-brand-orange sm:text-[11px]`}
        >
          Licensed
        </p>
        <p
          className={`${fontDisplay} mt-0.5 text-base leading-none tracking-wide text-brand-orange sm:text-lg`}
        >
          #13VH13624900
        </p>
      </article>
    </motion.div>
  );
}
