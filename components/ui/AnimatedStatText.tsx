"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

type AnimatedStatTextProps = {
  text: string;
  active: boolean;
  className?: string;
  delayPerChar?: number;
};

export function AnimatedStatText({
  text,
  active,
  className = "",
  delayPerChar = 0.025,
}: AnimatedStatTextProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline-flex flex-nowrap justify-center ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 14 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{
            duration: 0.35,
            delay: index * delayPerChar,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
