"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { fontBody, fontDisplay } from "@/app/fonts";
import { sendBookingRequest } from "@/lib/emailjs/send-booking-request";
import { getAreaBySlug, getNavServiceAreas } from "@/lib/seo/areas";
import {
  formatServiceTitle,
  getServiceBySlug,
  specializedServices,
} from "@/lib/services";

const bookingAreas = getNavServiceAreas();

type ServiceBookingFormProps = {
  defaultServiceSlug: string;
  defaultAreaSlug?: string;
  idPrefix?: string;
  embedded?: boolean;
};

export function ServiceBookingForm({
  defaultServiceSlug,
  defaultAreaSlug,
  idPrefix = "booking",
  embedded = false,
}: ServiceBookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const streetAddress = String(formData.get("streetAddress") ?? "").trim();
    const contactTime = String(formData.get("contactTime") ?? "").trim();
    const serviceSlug = String(formData.get("service") ?? defaultServiceSlug);
    const areaSlug = String(formData.get("area") ?? "").trim();
    const service = getServiceBySlug(serviceSlug);
    const area = getAreaBySlug(areaSlug);
    const serviceLabel = service
      ? formatServiceTitle(service.title)
      : serviceSlug;
    const areaLabel = area?.name ?? areaSlug;

    try {
      await sendBookingRequest({
        name,
        phone,
        streetAddress,
        contactTime,
        serviceSlug,
        serviceLabel,
        areaSlug,
        areaLabel,
      });
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong sending your request. Please call us at 201-800-0710.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = `${fontBody} w-full rounded-xl border border-neutral-200 bg-white px-4 ${embedded ? "py-2.5 sm:py-3" : "py-3"} text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-brand-accent disabled:cursor-not-allowed disabled:opacity-60 sm:text-base`;
  const nameId = `${idPrefix}-name`;
  const phoneId = `${idPrefix}-phone`;
  const streetAddressId = `${idPrefix}-street-address`;
  const areaId = `${idPrefix}-area`;
  const timeId = `${idPrefix}-time`;
  const serviceId = `${idPrefix}-service`;
  const selectedAreaSlug =
    defaultAreaSlug && getAreaBySlug(defaultAreaSlug)
      ? defaultAreaSlug
      : "";

  const content = (
    <>
      <h2
        id={embedded ? "booking-modal-title" : undefined}
        className={`${fontDisplay} ${embedded ? "pr-10 text-2xl sm:pr-0 sm:text-4xl" : "text-3xl sm:text-4xl"} tracking-wide text-neutral-900`}
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
        <form
          onSubmit={handleSubmit}
          className={embedded ? "mt-4 space-y-3 sm:mt-6 sm:space-y-4" : "mt-6 space-y-4"}
        >
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
              disabled={submitting}
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
              disabled={submitting}
              autoComplete="tel"
              placeholder="201-800-0710"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor={streetAddressId}
              className={`${fontBody} mb-1.5 block text-sm font-medium text-neutral-800`}
            >
              Street Address
            </label>
            <input
              id={streetAddressId}
              name="streetAddress"
              type="text"
              required
              disabled={submitting}
              autoComplete="street-address"
              placeholder="123 Main St, Clifton, NJ"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor={areaId}
              className={`${fontBody} mb-1.5 block text-sm font-medium text-neutral-800`}
            >
              Select area
            </label>
            <div className="relative">
              <select
                id={areaId}
                name="area"
                required
                defaultValue={selectedAreaSlug}
                disabled={submitting}
                className={`${inputClass} appearance-none pr-10`}
              >
                <option value="" disabled>
                  Choose your city or county
                </option>
                {bookingAreas.map((area) => (
                  <option key={area.slug} value={area.slug}>
                    {area.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
                aria-hidden
              />
            </div>
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
              disabled={submitting}
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
                disabled={submitting}
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

          {error ? (
            <p
              role="alert"
              className={`${fontBody} rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700`}
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className={`${fontBody} mt-2 w-full rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-brand-accent-light disabled:cursor-not-allowed disabled:opacity-70 sm:text-base`}
          >
            {submitting ? "Sending..." : "Request a call"}
          </button>
        </form>
      )}
    </>
  );

  if (embedded) {
    return (
      <div className="rounded-2xl bg-slate-100 px-3 py-4 sm:rounded-3xl sm:px-6 sm:py-8">
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
