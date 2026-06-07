import { createOgImageResponse } from "@/lib/seo/og";

export const alt = "Creative Pro Construction — Roofing & Construction in New Jersey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImageResponse({
    title: "Roofing & Construction in New Jersey",
    subtitle: "Licensed, insured, and trusted across Bergen County and statewide.",
  });
}
