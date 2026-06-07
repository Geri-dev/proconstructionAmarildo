"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fontBody, fontDisplay } from "@/app/fonts";
import { SectionConsultationCta } from "@/components/ui/SectionConsultationCta";
import { faqItems, PHONE_DISPLAY, PHONE_NUMBER } from "@/lib/faq";
import { usePrefersReducedMotion } from "@/lib/motion";

function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className={`${fontBody} flex w-full items-start justify-between gap-4 py-5 text-left text-sm font-bold uppercase tracking-wide text-neutral-900 transition-colors hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 sm:py-6 sm:text-base`}
        >
          <span>{question}</span>
          <ChevronDown
            className={`mt-0.5 h-5 w-5 shrink-0 text-neutral-900 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={
              reducedMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            animate={
              reducedMotion
                ? { opacity: 1 }
                : { height: "auto", opacity: 1 }
            }
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className={`${fontBody} pb-5 text-sm leading-relaxed text-neutral-600 sm:pb-6 sm:text-base`}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reducedMotion = usePrefersReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
      >
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <h2
            id="faq-heading"
            className={`${fontDisplay} text-4xl tracking-wide text-neutral-900 sm:text-5xl lg:text-6xl`}
          >
            Your Questions Answered
          </h2>
          <p
            className={`${fontBody} mt-4 max-w-md text-base leading-relaxed text-neutral-600 sm:mt-5 sm:text-lg`}
          >
            We have answers to your questions about our roofing services,
            warranties, timelines, and approach across New Jersey.
          </p>

          <div className="mt-10 sm:mt-12 lg:mt-auto lg:pt-16">
            <p className={`${fontBody} text-sm text-neutral-600 sm:text-base`}>
              Got more questions? Contact us for more information.
            </p>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className={`${fontBody} mt-4 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-brand-orange px-8 text-sm font-semibold text-neutral-900 transition-colors hover:bg-brand-orange-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 sm:mt-5 sm:min-h-[52px] sm:px-10 sm:text-base`}
              aria-label={`Contact us call ${PHONE_DISPLAY}`}
            >
              Contact us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {faqItems.map((item, index) => (
            <FaqAccordionItem
              key={item.question}
              id={`faq-item-${index}`}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </motion.div>

        <SectionConsultationCta className="col-span-full mt-12 flex justify-center sm:mt-14 lg:mt-16" />
      </div>
    </section>
  );
}
