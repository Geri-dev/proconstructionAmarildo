import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ServicesPageHero } from "@/components/sections/ServicesPageHero";
import { SectionConsultationCta } from "@/components/ui/SectionConsultationCta";
import { fontBody, fontDisplay } from "@/app/fonts";
import type { BlogPost } from "@/lib/blog/posts";

type BlogPostContentProps = {
  post: BlogPost;
};

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <>
      <ServicesPageHero
        eyebrow={`${post.readTime} · ${post.publishedAt}`}
        title={post.title.toUpperCase()}
        description={post.excerpt}
        headingId="blog-post-heading"
      />

      <article className="relative z-20 -mt-32 bg-white px-4 pb-16 sm:-mt-40 sm:px-6 sm:pb-20 lg:-mt-48 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className={`${fontBody} inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-opacity hover:opacity-80`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to blog
          </Link>

          <div className="mt-8 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2
                  className={`${fontDisplay} text-3xl tracking-wide text-neutral-900 sm:text-4xl`}
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={`${fontBody} mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg`}
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul
                    className={`${fontBody} mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-600 sm:text-lg`}
                  >
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <SectionConsultationCta className="mt-12 flex justify-center sm:mt-16" />
        </div>
      </article>
    </>
  );
}
