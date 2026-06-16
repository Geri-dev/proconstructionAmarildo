import { fontBody, fontDisplay } from "@/app/fonts";

type LocationSummarySectionProps = {
  locationName: string;
  summary: string;
  className?: string;
};

export function LocationSummarySection({
  locationName,
  summary,
  className,
}: LocationSummarySectionProps) {
  const label = locationName.replace(/, NJ$/i, "");

  return (
    <section
      className={`rounded-2xl border border-neutral-200 bg-slate-50 px-6 py-8 sm:rounded-3xl sm:px-8 sm:py-10${className ? ` ${className}` : ""}`}
      aria-labelledby="location-summary-heading"
    >
      <h2
        id="location-summary-heading"
        className={`${fontDisplay} text-2xl tracking-wide text-neutral-900 sm:text-3xl`}
      >
        Why choose Creative Pro Construction in {label}
      </h2>
      <p
        className={`${fontBody} mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg`}
      >
        {summary}
      </p>
    </section>
  );
}
