import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    short_name: SITE_NAME,
    description:
      "Licensed roofing and construction contractor serving New Jersey.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1b4d3e",
    lang: "en-US",
    icons: [
      {
        src: "/images/logo-fix.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
