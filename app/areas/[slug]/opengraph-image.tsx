import { createOgImageResponse } from "@/lib/seo/og";
import { getCountyBySlug } from "@/lib/seo/areas";

export const alt = "Creative Pro Construction service area";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const area = getCountyBySlug(slug);

  return createOgImageResponse({
    eyebrow: "Service Area",
    title: area?.headline ?? "New Jersey Service Area",
    subtitle: area?.description.slice(0, 120),
  });
}
