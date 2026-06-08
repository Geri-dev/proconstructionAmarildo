import emailjs from "@emailjs/browser";

export type BookingRequestParams = {
  name: string;
  phone: string;
  streetAddress: string;
  contactTime: string;
  serviceSlug: string;
  serviceLabel: string;
  areaSlug: string;
  areaLabel: string;
};

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

function formatSubmittedAt(): string {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function isEmailJsConfigured(): boolean {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

export async function sendBookingRequest({
  name,
  phone,
  streetAddress,
  contactTime,
  serviceSlug,
  serviceLabel,
  areaSlug,
  areaLabel,
}: BookingRequestParams): Promise<void> {
  if (!isEmailJsConfigured()) {
    throw new Error("Email service is not configured.");
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name,
      phone,
      phone_dial: phone.replace(/\D/g, ""),
      street_address: streetAddress || "Not specified",
      contact_time: contactTime || "Not specified",
      service: serviceLabel,
      service_slug: serviceSlug,
      area: areaLabel,
      area_slug: areaSlug,
      submitted_at: formatSubmittedAt(),
      page_url: window.location.href,
      site_name: "Creative Pro Construction",
    },
    { publicKey: PUBLIC_KEY },
  );
}
