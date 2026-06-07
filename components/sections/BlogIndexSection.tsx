"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { fontBody, fontDisplay } from "@/app/fonts";
import { blogPosts } from "@/lib/blog/posts";
import { usePrefersReducedMotion } from "@/lib/motion";

export function BlogIndexSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <>
      <ServicesPageHero
        eyebrow="Blog"
        title="NJ ROOFING TIPS & GUIDES"
        description="Expert advice on roof replacement, costs, insurance claims, materials, and exterior projects for New Jersey homeowners."
        headingId="blog-index-heading"
        overlapLayout
      />

      <section
        className="relative z-20 -mt-32 bg-transparent px-4 pb-16 sm:-mt-40 sm:px-6 sm:pb-20 lg:-mt-56 lg:px-8 lg:pb-24"
        aria-label="Blog articles"
      >
        <div ref={ref} className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-6 shadow-lg shadow-black/10 sm:rounded-3xl sm:p-8"
              >
                <p
                  className={`${fontBody} text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange`}
                >
                  {post.readTime}
                </p>
                <h2
                  className={`${fontDisplay} mt-3 text-2xl tracking-wide text-neutral-900`}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-opacity hover:opacity-80"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p
                  className={`${fontBody} mt-3 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base`}
                >
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className={`${fontBody} mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-opacity hover:opacity-80`}
                >
                  Read article
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
