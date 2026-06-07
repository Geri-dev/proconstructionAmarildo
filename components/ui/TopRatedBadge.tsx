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
  {
    name: "David K.",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face",
  },
];

export function TopRatedBadge() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative w-full sm:w-[22rem]"
    >
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, -6, 0],
              }
        }
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="relative h-full w-full"
      >
        <div
          className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-orange/40 via-white/20 to-brand-orange-light/30 blur-md"
          aria-hidden
        />

        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/95 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:rounded-3xl sm:p-7">
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-orange/15 blur-2xl"
            aria-hidden
          />

          <div className="relative flex items-center justify-between gap-3">
            <div className="flex items-center">
              {reviewers.map((person, index) => (
                <div
                  key={person.name}
                  className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-white bg-neutral-200 shadow-md sm:h-12 sm:w-12"
                  style={{
                    zIndex: reviewers.length - index,
                    marginLeft: index === 0 ? 0 : -14,
                  }}
                >
                  <Image
                    src={person.src}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              ))}
              <div
                className="relative z-10 -ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-[9px] font-semibold leading-none text-white shadow-md sm:-ml-3.5 sm:h-12 sm:w-12 sm:text-[11px]"
                aria-label="Over two thousand five hundred reviews"
              >
                +2.5k
              </div>
            </div>

            <div className="rounded-full bg-brand-orange/15 px-3 py-1">
              <span
                className={`${fontBody} text-[10px] font-semibold uppercase tracking-wider text-brand-orange sm:text-xs`}
              >
                Top Rated
              </span>
            </div>
          </div>

          <div className="relative mt-4 flex items-center gap-2 sm:mt-5">
            <div className="flex gap-0.5" role="img" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="avatar-star-bright h-4 w-4"
                  aria-hidden
                />
              ))}
            </div>
            <span
              className={`${fontDisplay} text-2xl leading-none text-neutral-900`}
            >
              4.9
            </span>
            <span className={`${fontBody} text-xs text-neutral-500`}>
              / 5.0
            </span>
          </div>

          <p
            className={`${fontDisplay} mt-2 text-2xl leading-none tracking-wide text-neutral-900 sm:mt-3 sm:text-[2rem]`}
          >
            TRUSTED BY HOMEOWNERS
          </p>
          <p
            className={`${fontBody} mt-1.5 text-xs leading-relaxed text-neutral-600 sm:mt-2 sm:text-sm`}
          >
            Join thousands who rated our roofing & construction work across New
            Jersey.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
