import type { StaticImageData } from "next/image";
import materialsServiceIcon from "@/app/icons/materials-service.svg";
import roofReplacementIcon from "@/app/icons/roof-svgrepo-com.svg";
import roofFittingIcon from "@/app/icons/border-outside-svgrepo-com.svg";
import gutterIcon from "@/app/icons/gutter.svg";
import chimneyIcon from "@/app/icons/chimney.svg";
import stairsIcon from "@/app/icons/stairs.svg";
import masonryIcon from "@/app/icons/masonry.svg";
import sidingIcon from "@/app/icons/siding.svg";
import roofingDetailImage from "@/app/images/ROOFING-1.webp";
import roofReplacementDetailImage from "@/app/images/ROOFING-2.webp";
import roofFittingDetailImage from "@/app/images/fitting.webp";
import gutterDetailImage from "@/app/images/gutter-detalis.webp";
import chimneyDetailImage from "@/app/images/chimney22.webp";
import stairsDetailImage from "@/app/images/stairs-details.webp";
import masonryDetailImage from "@/app/images/masonry-details.webp";
import sidingDetailImage from "@/app/images/siding.webp";

export type ServiceItem = {
  slug: string;
  number: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  detailImage: StaticImageData;
  detailImageAlt: string;
  /** Slightly larger icon when SVG artwork reads smaller visually */
  iconSize?: "default" | "large" | "xlarge" | "xxlarge";
};

export const specializedServices: ServiceItem[] = [
  {
    slug: "roof-installation",
    number: "01",
    title: "ROOF INSTALLATION",
    description:
      "Expert roof installation across New Jersey with architectural shingles, ice-and-water shield, and precision flashing. We build complete roofing systems engineered for wind, rain, and long-term curb appeal.",
    image: materialsServiceIcon,
    imageAlt: "Premium materials service icon",
    detailImage: roofingDetailImage,
    detailImageAlt: "Professional roof installation on a New Jersey home",
  },
  {
    slug: "roof-replacement",
    number: "02",
    title: "ROOF REPLACEMENT",
    description:
      "Full roof replacement when aging materials, storm damage, or leaks put your property at risk. Creative Pro Construction removes old layers safely and installs durable, code-compliant roofing backed by strong warranties.",
    image: roofReplacementIcon,
    imageAlt: "Roof replacement service icon",
    detailImage: roofReplacementDetailImage,
    detailImageAlt: "Roof replacement project in progress",
    iconSize: "large",
  },
  {
    slug: "roof-repair",
    number: "03",
    title: "ROOF REPAIR",
    description:
      "Expert roof repair for leaks, storm damage, missing shingles, and flashing failures. Our licensed crews diagnose problems quickly and restore your roof's protection with durable, code-compliant fixes.",
    image: roofFittingIcon,
    imageAlt: "Roof repair service icon",
    detailImage: roofFittingDetailImage,
    detailImageAlt: "Professional roof repair work on a New Jersey home",
    iconSize: "xxlarge",
  },
  {
    slug: "gutter-installation-repair",
    number: "04",
    title: "GUTTER INSTALLATION & REPAIR",
    description:
      "Seamless gutter installation and repair that protects siding, foundations, and landscaping from New Jersey rainfall. We size runs, secure hangers, and ensure downspouts move water away from your home efficiently.",
    image: gutterIcon,
    imageAlt: "Gutter installation and repair service icon",
    detailImage: gutterDetailImage,
    detailImageAlt: "Gutter installation and repair detail work",
    iconSize: "large",
  },
  {
    slug: "chimney-services",
    number: "05",
    title: "CHIMNEY SERVICES",
    description:
      "Chimney repair, flashing, caps, and masonry restoration to stop leaks and preserve structural integrity. Licensed specialists diagnose crown, liner, and brick issues before they lead to interior water damage.",
    image: chimneyIcon,
    imageAlt: "Chimney services icon",
    detailImage: chimneyDetailImage,
    detailImageAlt: "Chimney repair and restoration detail",
    iconSize: "xlarge",
  },
  {
    slug: "steps",
    number: "06",
    title: "STEPS",
    description:
      "Exterior and structural step construction built to code with safe treads, railings, and weather-resistant finishes. From entry steps to multi-level access, we deliver sturdy steps that match your home's design.",
    image: stairsIcon,
    imageAlt: "Steps construction service icon",
    detailImage: stairsDetailImage,
    detailImageAlt: "Exterior step construction detail",
  },
  {
    slug: "masonry",
    number: "07",
    title: "MASONRY",
    description:
      "Brick, block, and stone masonry for walls, veneers, and structural repairs across Bergen County and beyond. Skilled masons repoint, rebuild, and finish surfaces that stand up to freeze-thaw and moisture.",
    image: masonryIcon,
    imageAlt: "Masonry service icon",
    detailImage: masonryDetailImage,
    detailImageAlt: "Brick and masonry construction detail",
  },
  {
    slug: "siding",
    number: "08",
    title: "SIDING",
    description:
      "Siding installation and replacement that improves insulation, weather resistance, and exterior style. We work with vinyl, fiber cement, and composite systems for a clean, low-maintenance envelope year-round.",
    image: sidingIcon,
    imageAlt: "Siding installation service icon",
    detailImage: sidingDetailImage,
    detailImageAlt: "Siding installation on a residential exterior",
  },
];

export const homeSpecializedServices = specializedServices.slice(0, 7);

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return specializedServices.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return specializedServices.map((service) => service.slug);
}

export function formatServiceTitle(title: string): string {
  return title
    .split(" ")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");
}

export function getServiceNameLower(title: string): string {
  return title.toLowerCase();
}

export function getOtherServices(
  currentSlug: string,
  count = 3,
): ServiceItem[] {
  return specializedServices
    .filter((service) => service.slug !== currentSlug)
    .slice(0, count);
}
