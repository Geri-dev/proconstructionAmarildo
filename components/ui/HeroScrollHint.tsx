"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fontBody } from "@/app/fonts";
import { usePrefersReducedMotion } from "@/lib/motion";

export function HeroScrollHint() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.a
      href="#services-marquee"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className={`${fontBody} relative flex flex-col items-center gap-1 text-sm font-medium text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] transition-colors hover:text-white`}
      aria-label="Scroll down to see more"
    >
      <span>See More</span>
      <motion.span
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, 6, 0],
              }
        }
        transition={
          reducedMotion
            ? undefined
            : {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        <ChevronDown className="h-6 w-6" strokeWidth={2} aria-hidden />
      </motion.span>
    </motion.a>
  );
}
