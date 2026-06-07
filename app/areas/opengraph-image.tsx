import { createOgImageResponse } from "@/lib/seo/og";

export const alt = "Creative Pro Construction service areas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImageResponse({
    eyebrow: "New Jersey Service Areas",
    title: "Where We Serve",
    subtitle: "Roofing and construction across Clifton, Bergen County, and beyond.",
  });
}
