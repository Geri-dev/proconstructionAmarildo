"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import workingImage from "@/app/images/working.webp";
import { fontBody, fontDisplay } from "@/app/fonts";
import { usePrefersReducedMotion } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Consultation & Inspection",
    description:
      "We begin with a thorough on-site consultation and inspection. Our experts carefully evaluate your roofing and masonry needs, discuss your vision, and provide personalized recommendations that align with your budget and timeline.",
  },
  {
    number: "02",
    title: "Detailed Planning & Design",
    description:
      "Next, we craft a customized plan designed specifically for your project. Whether it's selecting high-quality roofing materials or intricate masonry details, our team ensures you fully understand and approve each step before we start construction.",
  },
  {
    number: "03",
    title: "Expert Installation & Final Review",
    description:
      "Finally, our skilled professionals execute your project with precision, attention to detail, and efficiency. After completion, we conduct a comprehensive final inspection alongside you, ensuring everything meets your expectations and our high standards of excellence.",
  },
];

function ProcessStep({
  number,
  title,
  description,
  index,
  active,
}: {
  number: string;
  title: string;
  description: string;
  index: number;
  active: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.article
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex gap-4 sm:gap-5"
    >
      <div className="flex shrink-0 flex-col items-center">
        <span
          className={`${fontDisplay} text-3xl leading-none text-brand-orange sm:text-4xl`}
        >
          {number}
        </span>
        {index < steps.length - 1 && (
          <div className="mt-3 hidden h-full min-h-[3rem] w-px flex-1 bg-neutral-200 sm:block" />
        )}
      </div>
      <div className="space-y-2 pb-6 sm:pb-8">
        <h3
          className={`${fontDisplay} text-2xl uppercase leading-none tracking-wide text-neutral-900 sm:text-3xl`}
        >
          {title}
        </h3>
        <p
          className={`${fontBody} text-sm leading-relaxed text-neutral-600 sm:text-base`}
        >
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export function WorkingProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="process"
      className="bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="working-process-heading"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.h2
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          id="working-process-heading"
          className={`${fontDisplay} mb-10 text-center text-4xl tracking-wide text-neutral-900 sm:mb-12 sm:text-5xl lg:text-6xl`}
        >
          Working Process
        </motion.h2>

        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="flex flex-col justify-center">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
                active={inView}
              />
            ))}
          </div>

          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[14rem] w-full overflow-hidden sm:min-h-[16rem] lg:h-full lg:min-h-0"
          >
            <Image
              src={workingImage}
              alt="Creative Pro Construction team working on a roofing project in New Jersey"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
