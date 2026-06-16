"use client";

import Image, { type StaticImageData } from "next/image";
import { fontBody } from "@/app/fonts";
import roofIcon from "@/app/icons/roof.svg";
import chimneyIcon from "@/app/icons/chimney.svg";
import sidingIcon from "@/app/icons/siding.svg";
import stairsIcon from "@/app/icons/stairs.svg";
import masonryIcon from "@/app/icons/masonry.svg";
import gutterIcon from "@/app/icons/gutter.svg";

type ServiceItem = {
  label: string;
  icon?: StaticImageData;
};

const services: ServiceItem[] = [
  { label: "Roof Installation & Repair", icon: roofIcon },
  { label: "Roof Inspection & Maintenance", icon: roofIcon },
  { label: "Roof Replacement", icon: roofIcon },
  { label: "Chimney", icon: chimneyIcon },
  { label: "Siding", icon: sidingIcon },
  { label: "Steps", icon: stairsIcon },
  { label: "Masonry", icon: masonryIcon },
  { label: "Gutters", icon: gutterIcon },
];

function MarqueeItem({ label, icon }: ServiceItem) {
  return (
    <div
      className={`${fontBody} flex shrink-0 items-center gap-5 px-8 font-semibold uppercase leading-none tracking-[0.12em] text-neutral-900 sm:gap-6 sm:px-12 lg:px-14`}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
          aria-hidden
        />
      )}
      <span className="whitespace-nowrap text-base sm:text-lg lg:text-xl">
        {label}
      </span>
    </div>
  );
}

export function HeroServicesMarquee() {
  const track = [...services, ...services];

  return (
    <div
      id="services-marquee"
      className="relative z-20 w-full border-t border-neutral-200/80 bg-white py-5 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] sm:py-6"
    >
      <div className="overflow-hidden">
        <div className="hero-marquee-track flex w-max items-center">
          {track.map((service, index) => (
            <MarqueeItem
              key={`${service.label}-${index}`}
              label={service.label}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
