"use client";

import { TopRatedBadge } from "@/components/ui/TopRatedBadge";
import { LicenceBadge } from "@/components/ui/LicenceBadge";

export function HeroSideCards() {
  return (
    <div className="flex w-full max-w-md flex-col items-stretch gap-3 mx-auto sm:gap-4 lg:mx-0 lg:max-w-none lg:items-end lg:gap-5">
      <TopRatedBadge />
      <LicenceBadge />
    </div>
  );
}
