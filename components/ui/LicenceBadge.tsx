"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { fontBody, fontDisplay } from "@/app/fonts";
import { usePrefersReducedMotion } from "@/lib/motion";

export function LicenceBadge() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.55 }}
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
                delay: 0.5,
              }
        }
        className="relative h-full"
      >
        <div
          className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-orange/40 via-white/20 to-brand-orange-light/30 blur-md"
          aria-hidden
        />

        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/95 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:rounded-3xl sm:p-7">
          <div
            className="pointer-events-none absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-brand-green/10 blur-2xl"
            aria-hidden
          />

          <div className="relative flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/15">
              <ShieldCheck
                className="h-6 w-6 text-brand-orange"
                aria-hidden
              />
            </div>
            <div className="rounded-full bg-neutral-100 px-3 py-1">
              <span
                className={`${fontBody} text-[10px] font-semibold uppercase tracking-wider text-brand-green sm:text-xs`}
              >
                Verified
              </span>
            </div>
          </div>

          <p
            className={`${fontBody} relative mt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-xs`}
          >
            Licence
          </p>
          <p
            className={`${fontDisplay} relative mt-2 text-xl leading-none tracking-wide text-neutral-900 sm:text-[1.75rem]`}
          >
            #13VH13624900
          </p>
          <p
            className={`${fontBody} relative mt-2 hidden text-sm leading-relaxed text-neutral-600 sm:mt-3 sm:block`}
          >
            Fully licensed contractor serving New Jersey with official state
            credentials.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
