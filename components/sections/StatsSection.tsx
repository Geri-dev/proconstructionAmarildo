"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { fontBody, fontDisplay } from "@/app/fonts";
import { AnimatedStatText } from "@/components/ui/AnimatedStatText";
import { CountUp } from "@/components/ui/CountUp";
import { usePrefersReducedMotion } from "@/lib/motion";

const statValueClass = `${fontDisplay} text-4xl leading-none text-white sm:text-5xl lg:text-6xl`;

function StatCell({
  label,
  children,
  index,
  active,
}: {
  label: string;
  children: ReactNode;
  index: number;
  active: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center justify-center rounded-2xl bg-neutral-900 px-5 py-10 text-center sm:rounded-3xl sm:px-8 sm:py-12 lg:py-14"
    >
      <p
        className={`${fontBody} mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-orange sm:text-xs`}
      >
        {label}
      </p>
      <div className={`flex min-h-[3rem] items-end justify-center sm:min-h-[3.5rem] ${statValueClass}`}>
        {children}
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reducedMotion = usePrefersReducedMotion();

  const stats = [
    {
      label: "Experience",
      content: <CountUp end={25} active={inView} duration={1800} />,
    },
    {
      label: "Roofs Completed",
      content: (
        <span>
          <CountUp end={5000} active={inView} duration={2200} />
          <span className="text-brand-orange">+</span>
        </span>
      ),
    },
    {
      label: "Better Business Bureau",
      content: (
        <AnimatedStatText text="BBB" active={inView} delayPerChar={0.06} />
      ),
    },
    {
      label: "Full Insured",
      content: (
        <AnimatedStatText text="INSURED" active={inView} delayPerChar={0.045} />
      ),
    },
  ];

  return (
    <section className="bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.h2
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`${fontDisplay} mb-5 text-center text-5xl tracking-wide text-neutral-900 sm:mb-6 sm:text-6xl lg:text-7xl xl:text-[4.5rem]`}
        >
          Experience You Can Trust
        </motion.h2>

        <motion.p
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`${fontBody} mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-neutral-600 sm:mb-10 sm:text-lg`}
        >
          Top-rated roofing contractors delivering premium roof replacement,
          installation, and repair services across New Jersey for over two
          decades
        </motion.p>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 48 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-neutral-800 bg-neutral-950 p-3 shadow-2xl shadow-black/25 sm:p-4"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCell
                key={stat.label}
                label={stat.label}
                index={index}
                active={inView}
              >
                {stat.content}
              </StatCell>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
