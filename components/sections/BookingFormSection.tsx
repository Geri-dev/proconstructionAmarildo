import { fontBody, fontDisplay } from "@/app/fonts";
import { ServiceBookingForm } from "@/components/ui/ServiceBookingForm";

type BookingFormSectionProps = {
  defaultServiceSlug?: string;
  defaultAreaSlug?: string;
};

export function BookingFormSection({
  defaultServiceSlug = "roof-installation-repair",
  defaultAreaSlug,
}: BookingFormSectionProps) {
  return (
    <section
      id="booking"
      className="bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      aria-labelledby="booking-section-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <h2
              id="booking-section-heading"
              className={`${fontDisplay} text-4xl tracking-wide text-neutral-900 sm:text-5xl lg:text-6xl`}
            >
              REQUEST A FREE ESTIMATE
            </h2>
            <p
              className={`${fontBody} mt-4 text-base leading-relaxed text-neutral-600 sm:mt-5 sm:text-lg`}
            >
              Tell us about your project and preferred contact time. Our licensed
              team will reach out to schedule a free on-site estimate across New
              Jersey.
            </p>
            <ul
              className={`${fontBody} mt-6 space-y-3 text-sm leading-relaxed text-neutral-600 sm:text-base`}
            >
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                Licensed &amp; insured roofing and construction contractor
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                Free on-site estimates with clear written proposals
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                Serving Bergen, Passaic, Essex, Morris, Hudson, and statewide
              </li>
            </ul>
          </div>

          <div className="w-full">
            <ServiceBookingForm
              defaultServiceSlug={defaultServiceSlug}
              defaultAreaSlug={defaultAreaSlug}
              idPrefix="page-booking"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
