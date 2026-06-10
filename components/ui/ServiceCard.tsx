"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fontBody, fontDisplay } from "@/app/fonts";
import type { ServiceItem } from "@/lib/services";

/** Icon slot — top-right on every card */
const CARD_ICON_SLOT = "size-[5.5rem] sm:size-[6rem]";

const ICON_CLASS = {
  default: "h-11 w-11 sm:h-12 sm:w-12",
  large: "h-[3.25rem] w-[3.25rem] sm:h-14 sm:w-14",
  xlarge: "h-14 w-14 sm:h-16 sm:w-16",
  xxlarge: "h-[4.25rem] w-[4.25rem] sm:h-[4.75rem] sm:w-[4.75rem]",
} as const;

const ICON_PX = {
  default: 48,
  large: 56,
  xlarge: 64,
  xxlarge: 76,
} as const;

type ServiceCardProps = {
  service: ServiceItem;
  href?: string;
};

function ServiceDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-3 flex flex-col items-start">
      <p
        className={`${fontBody} w-full text-sm leading-relaxed text-neutral-600 sm:text-[15px] ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        className={`${fontBody} mt-1.5 self-start text-[11px] font-semibold text-brand-orange underline-offset-2 transition-opacity hover:underline hover:opacity-80 sm:text-xs`}
        aria-expanded={expanded}
      >
        {expanded ? "See less" : "See more"}
      </button>
    </div>
  );
}

export function ServiceCard({ service, href }: ServiceCardProps) {
  const iconVariant = service.iconSize ?? "default";

  return (
    <article
      id={service.slug}
      className="service-card relative flex h-full w-full min-h-[21.5rem] scroll-mt-28 flex-col overflow-hidden rounded-2xl border bg-[#FAFAFA] sm:min-h-[22rem] sm:rounded-3xl lg:min-h-[22rem]"
    >
      <div
        className={`pointer-events-none absolute top-0 right-0 flex items-center justify-center bg-[#FAFAFA] ${CARD_ICON_SLOT} overflow-hidden rounded-tr-2xl sm:rounded-tr-3xl`}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={ICON_PX[iconVariant]}
          height={ICON_PX[iconVariant]}
          className={`object-contain ${ICON_CLASS[iconVariant]}`}
          sizes="(max-width: 640px) 52px, 56px"
        />
      </div>

      <div className="relative z-[1] flex flex-1 flex-col items-start p-6 pr-[calc(5.5rem+1.25rem)] sm:p-8 sm:pr-[calc(6rem+2rem)]">
        <span
          className={`${fontBody} flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-medium text-neutral-500 shadow-sm sm:h-10 sm:w-10 sm:text-sm`}
        >
          {service.number}
        </span>

        <h3
          className={`${fontDisplay} mt-4 shrink-0 text-2xl uppercase leading-none tracking-wide text-neutral-900 sm:mt-5 sm:text-[1.65rem]`}
        >
          {service.title}
        </h3>

        <ServiceDescription text={service.description} />

        <Link
          href={href ?? `/services/${service.slug}`}
          className={`${fontBody} service-view-more relative z-10 mt-5 inline-flex w-fit self-start items-center rounded-full px-5 py-2.5 text-sm font-semibold sm:mt-6`}
        >
          View more
        </Link>
      </div>
    </article>
  );
}
