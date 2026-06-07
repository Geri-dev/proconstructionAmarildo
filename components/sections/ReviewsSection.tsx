"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { fontBody, fontDisplay } from "@/app/fonts";
import googleIcon from "@/app/icons/google.svg";
import homeAdvisorIcon from "@/app/icons/homeadvisor111.svg";
import { GOOGLE_REVIEWS_URL, reviews, type Review } from "@/lib/reviews";
import { usePrefersReducedMotion } from "@/lib/motion";

type ReviewPlatform = Review["platform"];

const platformIcons: Record<
  ReviewPlatform,
  { src: StaticImageData | string; label: string; className: string }
> = {
  google: {
    src: googleIcon,
    label: "Google review",
    className: "h-7 w-7 sm:h-8 sm:w-8",
  },
  homeadvisor: {
    src: homeAdvisorIcon,
    label: "HomeAdvisor review",
    className: "h-5 w-auto max-w-[5.5rem] sm:h-6 sm:max-w-[6.5rem]",
  },
};

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      setSlidesPerView(
        window.matchMedia("(min-width: 1024px)").matches ? 2 : 1,
      );
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return slidesPerView;
}

function StarRating() {
  return (
    <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="avatar-star-bright h-4 w-4 sm:h-[18px] sm:w-[18px]"
          aria-hidden
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const platform = platformIcons[review.platform];

  return (
    <article className="flex flex-col rounded-2xl bg-neutral-100 p-4 sm:rounded-3xl sm:p-8 lg:h-full">
      <div className="flex items-start justify-between gap-4">
        <StarRating />
        <Image
          src={platform.src}
          alt={platform.label}
          width={32}
          height={32}
          className={`shrink-0 object-contain ${platform.className}`}
        />
      </div>

      <h3
        className={`${fontBody} mt-4 text-lg font-bold leading-snug text-neutral-900 sm:mt-6 sm:text-xl`}
      >
        {review.headline}
      </h3>

      <p
        className={`${fontBody} mt-2.5 text-sm leading-relaxed text-neutral-600 sm:mt-4 sm:text-[15px] lg:flex-1`}
      >
        {review.text}
      </p>

      <div className="mt-4 sm:mt-8">
        <p className={`${fontBody} text-base font-bold text-neutral-900`}>
          {review.name}
        </p>
        <p className={`${fontBody} mt-0.5 text-sm text-neutral-500`}>
          {review.role}
        </p>
      </div>
    </article>
  );
}

export function ReviewsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reducedMotion = usePrefersReducedMotion();
  const slidesPerView = useSlidesPerView();
  const maxIndex = Math.max(0, reviews.length - slidesPerView);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section
      id="reviews"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="reviews-heading"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <h2
              id="reviews-heading"
              className={`${fontDisplay} text-4xl tracking-wide text-neutral-900 sm:text-5xl lg:text-6xl`}
            >
              What New Jersey Says About Us
            </h2>
            <p
              className={`${fontBody} mt-3 text-base leading-relaxed text-neutral-600 sm:mt-4 sm:text-lg`}
            >
              We provide top-quality roofing solutions designed to protect your
              home and enhance its value.
            </p>
          </div>

          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${fontBody} inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-orange transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 sm:text-base`}
          >
            View All Reviews
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </Link>
        </motion.div>

        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{
                transform: `translateX(-${(activeIndex * 100) / slidesPerView}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={`${review.platform}-${review.name}`}
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-8 flex justify-center gap-2 sm:mt-10"
            role="tablist"
            aria-label="Reviews carousel pagination"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to review slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-2.5 bg-neutral-800"
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
