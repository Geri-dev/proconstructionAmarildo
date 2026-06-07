import { createOgImageResponse } from "@/lib/seo/og";

export const alt = "Creative Pro Construction roofing blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImageResponse({
    eyebrow: "Roofing Tips & Guides",
    title: "Creative Pro Construction Blog",
    subtitle: "Expert advice for New Jersey homeowners on roofs, repairs, and exterior work.",
  });
}
