"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { fontBody, fontDisplay } from "@/app/fonts";
import {
  formatServiceTitle,
  specializedServices,
} from "@/lib/services";

type ServiceBookingFormProps = {
  defaultServiceSlug: string;
  idPrefix?: string;
  embedded?: boolean;
};

export function ServiceBookingForm({
  defaultServiceSlug,
  idPrefix = "booking",
  embedded = false,
}: ServiceBookingFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const inputClass = `${fontBody} w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-brand-accent sm:text-base`;
  const nameId = `${idPrefix}-name`;
  const phoneId = `${idPrefix}-phone`;
  const timeId = `${idPrefix}-time`;
  const serviceId = `${idPrefix}-service`;

  const content = (
    <>
      <h2
        id={embedded ? "booking-modal-title" : undefined}
        className={`${fontDisplay} text-3xl tracking-wide text-neutral-900 sm:text-4xl`}
      >
        Book a call
      </h2>

      {submitted ? (
        <p
          className={`${fontBody} mt-6 rounded-xl bg-white px-4 py-5 text-sm leading-relaxed text-neutral-600 sm:text-base`}
        >
          Thank you! We received your request and will contact you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor={nameId}
              className={`${fontBody} mb-1.5 block text-sm font-medium text-neutral-800`}
            >
              Name
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor={phoneId}
              className={`${fontBody} mb-1.5 block text-sm font-medium text-neutral-800`}
            >
              Phone
            </label>
            <input
              id={phoneId}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="201-800-0710"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor={timeId}
              className={`${fontBody} mb-1.5 block text-sm font-medium text-neutral-800`}
            >
              Preferred time to contact
            </label>
            <input
              id={timeId}
              name="contactTime"
              type="text"
              placeholder="Morning, afternoon, or evening"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor={serviceId}
              className={`${fontBody} mb-1.5 block text-sm font-medium text-neutral-800`}
            >
              Select service
            </label>
            <div className="relative">
              <select
                id={serviceId}
                name="service"
                defaultValue={defaultServiceSlug}
                className={`${inputClass} appearance-none pr-10`}
              >
                {specializedServices.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {formatServiceTitle(service.title)}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
                aria-hidden
              />
            </div>
          </div>

          <button
            type="submit"
            className={`${fontBody} mt-2 w-full rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-brand-accent-light sm:text-base`}
          >
            Request a call
          </button>
        </form>
      )}
    </>
  );

  if (embedded) {
    return (
      <div className="rounded-2xl bg-slate-100 px-4 py-6 sm:rounded-3xl sm:px-6 sm:py-8">
        {content}
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-slate-100 px-6 py-8 shadow-xl shadow-black/10 sm:rounded-3xl sm:px-8 sm:py-10">
      {content}
    </div>
  );
}
