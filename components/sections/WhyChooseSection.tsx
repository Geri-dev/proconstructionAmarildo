"use client";

import { useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import { Star, Wrench } from "lucide-react";
import thundercloudIcon from "@/app/icons/thundercloud.svg";
import certifiedIcon from "@/app/icons/certified.svg";
import dollarIcon from "@/app/icons/dollar.svg";
import homeIcon from "@/app/icons/home.svg";
import { fontBody, fontDisplay } from "@/app/fonts";
import { BookingCtaButton } from "@/components/ui/BookingCtaButton";
import { usePrefersReducedMotion } from "@/lib/motion";

type WhyChooseItem = {
  number: string;
  title: string;
  body: string;
  icon: StaticImageData;
  seoKeywords: string;
};

const items: WhyChooseItem[] = [
  {
    number: "01",
    title: "Licensed & Fully Insured NJ Contractors",
    body: "We aren't just contractors; we are your New Jersey neighbors. From severe winter storms to humid summers, we understand the local climate and build roofs, siding, and chimneys designed to withstand NJ's toughest weather.",
    icon: thundercloudIcon,
    seoKeywords: "NJ contractors, roofing company New Jersey",
  },
  {
    number: "02",
    title: "Premium Materials & GAF Certified Quality",
    body: "We never cut corners. CPC partners with industry-leading manufacturers to provide high-grade shingles, vinyl siding, and masonry materials that extend the lifespan of your property and boost its curb appeal.",
    icon: certifiedIcon,
    seoKeywords: "GAF certified, roofing materials, masonry materials",
  },
  {
    number: "03",
    title: "Transparent Pricing & Flexible Financing",
    body: "Roofing and construction projects are major investments. That's why we offer detailed, honest estimates with zero hidden fees, alongside flexible financing options tailored to fit your budget.",
    icon: dollarIcon,
    seoKeywords: "roofing financing, honest estimates",
  },
  {
    number: "04",
    title: "Your All-in-One Exterior Specialists",
    body: "From the chimney top to the basement stairs, we handle it all. Skip the hassle of hiring multiple contractors—CPC provides seamless integration between roofing, siding, masonry, and gutter systems.",
    icon: homeIcon,
    seoKeywords: "roofing, siding, masonry, chimney services",
  },
];

const proofHighlights = [
  { icon: Wrench, label: "Over 25 Years of Experience" },
  { icon: Star, label: "5-Star Rated Local Service" },
  { icon: null, label: "100% Satisfaction Guarantee" },
];

function WhyChooseCard({
  item,
  index,
  active,
}: {
  item: WhyChooseItem;
  index: number;
  active: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.article
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        duration: 0.55,
        delay: 0.12 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-lg shadow-neutral-900/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-900/10 sm:rounded-3xl sm:p-8"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-orange/80 via-brand-orange to-brand-orange-light/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10 ring-1 ring-brand-orange/15 sm:h-16 sm:w-16">
          <Image
            src={item.icon}
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            aria-hidden
          />
        </div>
        <span
          className={`${fontDisplay} text-3xl leading-none text-neutral-200 transition-colors duration-300 group-hover:text-brand-orange/30 sm:text-4xl`}
          aria-hidden
        >
          {item.number}
        </span>
      </div>

      <h3
        className={`${fontDisplay} mb-3 text-xl leading-tight tracking-wide text-neutral-900 sm:text-2xl`}
      >
        {item.title}
      </h3>
      <p
        className={`${fontBody} flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base`}
      >
        {item.body}
        <span className="sr-only">{item.seoKeywords}</span>
      </p>
    </motion.article>
  );
}

export function WhyChooseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="why-choose-heading"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-brand-green/5 blur-3xl"
        aria-hidden
      />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-14 lg:mb-16"
        >
          <p
            className={`${fontBody} mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange sm:text-sm`}
          >
            Why CPC
          </p>
          <h2
            id="why-choose-heading"
            className={`${fontDisplay} text-4xl leading-[0.95] tracking-wide sm:text-5xl lg:text-6xl xl:text-[4rem]`}
          >
            <span className="text-neutral-900">Why Choose </span>
            <span className="text-brand-orange">CPC Roofing &amp; Construction?</span>
          </h2>
          <p
            className={`${fontBody} mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg`}
          >
            Delivering Top-Rated Roofing, Siding &amp; Masonry Solutions Across
            New Jersey.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {items.map((item, index) => (
            <WhyChooseCard
              key={item.number}
              item={item}
              index={index}
              active={inView}
            />
          ))}
        </div>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-14 lg:mt-16"
        >
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 px-5 py-10 shadow-2xl shadow-black/25 sm:px-8 sm:py-12 lg:px-12">
            <ul
              className={`${fontBody} mb-8 flex flex-col items-center justify-center gap-4 text-center text-sm text-white/90 sm:mb-10 sm:flex-row sm:flex-wrap sm:gap-x-0 sm:gap-y-3 sm:text-base lg:text-lg`}
            >
              {proofHighlights.map((proof, index) => (
                <li
                  key={proof.label}
                  className="flex items-center gap-2 sm:px-5 lg:px-6"
                >
                  {index > 0 && (
                    <span
                      className="mr-2 hidden h-1 w-1 rounded-full bg-brand-orange sm:mr-0 sm:inline sm:h-4 sm:w-px sm:rounded-none sm:bg-white/20"
                      aria-hidden
                    />
                  )}
                  {proof.icon ? (
                    <proof.icon
                      className="h-5 w-5 shrink-0 text-brand-orange"
                      aria-hidden
                    />
                  ) : (
                    <span className="text-lg" aria-hidden>
                      ✓
                    </span>
                  )}
                  <span className="font-medium">{proof.label}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <BookingCtaButton
                className={`${fontBody} inline-flex min-h-[52px] items-center justify-center rounded-full bg-brand-orange px-8 text-base font-semibold text-white shadow-lg shadow-brand-orange/25 transition-colors hover:bg-brand-orange-light sm:min-h-[56px] sm:px-12 sm:text-lg`}
              >
                Get Your Free Estimate Today
              </BookingCtaButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
