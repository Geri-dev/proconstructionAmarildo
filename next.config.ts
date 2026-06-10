import type { NextConfig } from "next";
import { LEGACY_AREA_REDIRECTS } from "./lib/seo/legacy-redirects";
import { getSeoRedirects } from "./lib/seo/page-map";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/our-works",
        destination: "/gallery",
        permanent: true,
      },
      ...getSeoRedirects().map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),
      ...LEGACY_AREA_REDIRECTS.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
