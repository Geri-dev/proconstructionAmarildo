import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fontBody, fontDisplay } from "@/app/fonts";
import { serviceAreas } from "@/lib/seo/areas";

type AreasCardsSectionProps = {
  limit?: number;
  showExploreAll?: boolean;
  showHeader?: boolean;
  className?: string;
};

export function AreasCardsSection({
  limit,
  showExploreAll = false,
  showHeader = true,
  className = "",
}: AreasCardsSectionProps) {
  const areas = limit ? serviceAreas.slice(0, limit) : serviceAreas;

  return (
    <section
      className={`bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24 ${className}`}
      aria-labelledby={showHeader ? "areas-cards-heading" : undefined}
    >
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2
                id="areas-cards-heading"
                className={`${fontDisplay} text-4xl tracking-wide text-neutral-900 sm:text-5xl lg:text-6xl`}
              >
                SERVICE AREAS
              </h2>
              <p
                className={`${fontBody} mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg`}
              >
                Local roofing and construction services across North and Central
                New Jersey. Select your area to learn more.
              </p>
            </div>
            {showExploreAll && (
              <Link
                href="/areas"
                className={`${fontBody} inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-orange transition-opacity hover:opacity-80 sm:text-base`}
              >
                Explore all
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {areas.map((area) => (
            <article
              key={area.slug}
              className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-6 shadow-lg shadow-black/10 sm:rounded-3xl sm:p-8"
            >
              <h3
                className={`${fontDisplay} text-2xl tracking-wide text-neutral-900`}
              >
                {area.name}
              </h3>
              <p
                className={`${fontBody} mt-4 flex-1 text-sm leading-relaxed text-neutral-600 sm:text-base`}
              >
                {area.description}
              </p>
              <Link
                href={`/areas/${area.slug}`}
                className={`${fontBody} mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-opacity hover:opacity-80`}
              >
                View area
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>

        {showExploreAll && !showHeader && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href="/areas"
              className={`${fontBody} inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:text-base`}
            >
              Explore all
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
