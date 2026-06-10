"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { fontBody } from "@/app/fonts";
import {
  getCityPagePath,
  getCountyPagePath,
  getNavCounties,
  type CountyArea,
} from "@/lib/seo/areas";

const navCounties = getNavCounties();

type AreasNavDropdownProps = {
  theme?: "dark" | "light";
  onNavigate?: () => void;
  layout?: "desktop" | "mobile";
};

type CountyNavRowProps = {
  county: CountyArea;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  itemClass: string;
  subItemClass: string;
  isMobile?: boolean;
};

function CountyNavRow({
  county,
  expanded,
  onToggle,
  onNavigate,
  itemClass,
  subItemClass,
  isMobile = false,
}: CountyNavRowProps) {
  const countyName = county.name.replace(/, NJ$/, "");

  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        className={`${fontBody} flex w-full items-center justify-between gap-3 text-left transition-colors ${
          isMobile
            ? `rounded-lg px-3 py-3 text-base ${itemClass}`
            : `px-4 py-2.5 text-sm lg:py-3 lg:text-base ${itemClass}`
        }`}
        aria-expanded={expanded}
      >
        <span>{countyName}</span>
        <ChevronDown
          className={`shrink-0 opacity-60 transition-transform ${isMobile ? "h-5 w-5" : "h-4 w-4"} ${expanded ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {expanded ? (
        <ul className="pb-1">
          {county.cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={getCityPagePath(county.slug, city.slug)}
                onClick={onNavigate}
                className={`${fontBody} block transition-colors ${
                  isMobile
                    ? `rounded-lg py-2.5 pl-9 pr-3 text-base ${subItemClass}`
                    : `py-2 pl-8 pr-4 text-sm lg:text-base ${subItemClass}`
                }`}
              >
                {city.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={getCountyPagePath(county.slug)}
              onClick={onNavigate}
              className={`${fontBody} block font-medium text-brand-orange transition-opacity hover:opacity-80 ${
                isMobile
                  ? "rounded-lg py-2.5 pl-9 pr-3 text-base"
                  : "py-2 pl-8 pr-4 text-sm lg:text-base"
              }`}
            >
              View all in {countyName}
            </Link>
          </li>
        </ul>
      ) : null}
    </li>
  );
}

export function AreasNavDropdown({
  theme = "dark",
  onNavigate,
  layout = "desktop",
}: AreasNavDropdownProps) {
  const [open, setOpen] = useState(false);
  const [expandedCounty, setExpandedCounty] = useState<string | null>(null);
  const containerRef = useRef<HTMLLIElement | null>(null);
  const isLight = theme === "light";
  const isMobile = layout === "mobile";

  useEffect(() => {
    if (isMobile) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setExpandedCounty(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  useEffect(() => {
    if (!open) {
      setExpandedCounty(null);
    }
  }, [open]);

  const triggerClass = isLight
    ? "text-neutral-800 hover:text-brand-orange"
    : "text-white/90 hover:text-brand-orange";

  const panelClass = isLight
    ? "border-neutral-200 bg-white shadow-xl shadow-black/10"
    : "border-white/10 bg-neutral-950/95 shadow-xl shadow-black/40 backdrop-blur-md";

  const itemClass = isLight
    ? "text-neutral-700 hover:bg-neutral-100 hover:text-brand-orange"
    : "text-white/90 hover:bg-white/10 hover:text-brand-orange";

  const subItemClass = isLight
    ? "text-neutral-600 hover:bg-neutral-50 hover:text-brand-orange"
    : "text-white/70 hover:bg-white/10 hover:text-brand-orange";

  const seeAllClass = isLight
    ? "border-neutral-200 text-brand-orange hover:bg-neutral-50"
    : "border-white/10 text-brand-orange hover:bg-white/10";

  function closeMenu() {
    setOpen(false);
    setExpandedCounty(null);
    onNavigate?.();
  }

  function toggleCounty(slug: string) {
    setExpandedCounty((current) => (current === slug ? null : slug));
  }

  const countyList = (
    <>
      <ul
        className={
          isMobile
            ? `${fontBody} flex max-h-[min(24rem,50vh)] flex-col gap-0.5 overflow-y-auto overscroll-contain`
            : "max-h-[min(36rem,calc(100dvh-7rem))] overflow-y-auto overscroll-contain py-2 lg:grid lg:grid-cols-2 lg:gap-x-2 xl:grid-cols-3"
        }
      >
        {navCounties.map((county) => (
          <CountyNavRow
            key={county.slug}
            county={county}
            expanded={expandedCounty === county.slug}
            onToggle={() => toggleCounty(county.slug)}
            onNavigate={closeMenu}
            itemClass={itemClass}
            subItemClass={subItemClass}
            isMobile={isMobile}
          />
        ))}
      </ul>
      <div
        className={
          isMobile
            ? "mt-1 px-3 pb-1"
            : `border-t px-3 py-3 lg:px-4 lg:py-4 ${isLight ? "border-neutral-200" : "border-white/10"}`
        }
      >
        <Link
          href="/areas"
          onClick={closeMenu}
          className={`${fontBody} inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border text-base font-semibold transition-colors ${seeAllClass}`}
        >
          See all areas
        </Link>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <div className="flex flex-col">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`${fontBody} flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-lg transition-colors ${triggerClass} ${isLight ? "hover:bg-neutral-100" : "hover:bg-white/10"}`}
          aria-expanded={open}
        >
          Areas
          <ChevronDown
            className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>

        {open ? (
          <div
            className={`${fontBody} mt-1 flex flex-col border-t pt-2 ${isLight ? "border-neutral-200" : "border-white/10"}`}
          >
            {countyList}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <li ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`${fontBody} inline-flex items-center gap-1 text-base transition-colors lg:text-lg ${triggerClass}`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Areas
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          className={`absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-[min(48rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border xl:w-[min(56rem,calc(100vw-2rem))] ${panelClass}`}
          role="menu"
        >
          {countyList}
        </div>
      ) : null}
    </li>
  );
}
