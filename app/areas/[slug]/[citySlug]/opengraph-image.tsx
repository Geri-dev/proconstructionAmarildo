import { createOgImageResponse } from "@/lib/seo/og";
import { getCityBySlugs } from "@/lib/seo/areas";

export const alt = "Creative Pro Construction city service area";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string; citySlug: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { slug, citySlug } = await params;
  const city = getCityBySlugs(slug, citySlug);

  return createOgImageResponse({
    eyebrow: "Service Area",
    title: city?.headline ?? "New Jersey Service Area",
    subtitle: city?.description.slice(0, 120),
  });
}
