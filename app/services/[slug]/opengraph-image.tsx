import { createOgImageResponse } from "@/lib/seo/og";
import { formatServiceTitle, getServiceBySlug } from "@/lib/services";

export const alt = "Creative Pro Construction service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const title = service
    ? formatServiceTitle(service.title)
    : "Specialized Services";

  return createOgImageResponse({
    eyebrow: "New Jersey Roofing & Construction",
    title,
    subtitle: service?.description.slice(0, 120) ?? "Licensed Creative Pro Construction",
  });
}
