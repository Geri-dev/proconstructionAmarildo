"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { fontBody } from "@/app/fonts";
import {
  formatServiceTitle,
  specializedServices,
} from "@/lib/services";

type ServicesNavDropdownProps = {
  theme?: "dark" | "light";
  onNavigate?: () => void;
  layout?: "desktop" | "mobile";
};

export function ServicesNavDropdown({
  theme = "dark",
  onNavigate,
  layout = "desktop",
}: ServicesNavDropdownProps) {
  const [open, setOpen] = useState(false);
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
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  const triggerClass = isLight
    ? "text-neutral-800 hover:text-brand-orange"
    : "text-white/90 hover:text-brand-orange";

  const panelClass = isLight
    ? "border-neutral-200 bg-white shadow-xl shadow-black/10"
    : "border-white/10 bg-neutral-950/95 shadow-xl shadow-black/40 backdrop-blur-md";

  const itemClass = isLight
    ? "text-neutral-700 hover:bg-neutral-100 hover:text-brand-orange"
    : "text-white/90 hover:bg-white/10 hover:text-brand-orange";

  const seeAllClass = isLight
    ? "border-neutral-200 text-brand-orange hover:bg-neutral-50"
    : "border-white/10 text-brand-orange hover:bg-white/10";

  function closeMenu() {
    setOpen(false);
    onNavigate?.();
  }

  if (isMobile) {
    return (
      <div className="flex flex-col">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`${fontBody} flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-lg transition-colors ${triggerClass} ${isLight ? "hover:bg-neutral-100" : "hover:bg-white/10"}`}
          aria-expanded={open}
        >
          Services
          <ChevronDown
            className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>

        {open && (
          <ul
            className={`${fontBody} mt-1 flex flex-col gap-0.5 border-t pt-2 ${isLight ? "border-neutral-200" : "border-white/10"}`}
          >
            {specializedServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={closeMenu}
                  className={`block rounded-lg px-3 py-3 text-base transition-colors ${itemClass}`}
                >
                  {formatServiceTitle(service.title)}
                </Link>
              </li>
            ))}
            <li className="mt-1 px-3 pb-1">
              <Link
                href="/services"
                onClick={closeMenu}
                className={`${fontBody} inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border text-base font-semibold transition-colors ${seeAllClass}`}
              >
                See all
              </Link>
            </li>
          </ul>
        )}
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
        Services
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div
          className={`absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl border ${panelClass}`}
          role="menu"
        >
          <ul className="max-h-[min(36rem,calc(100dvh-7rem))] overflow-y-auto overscroll-contain py-2">
            {specializedServices.map((service) => (
              <li key={service.slug} role="none">
                <Link
                  href={`/services/${service.slug}`}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={`${fontBody} block px-4 py-2.5 text-sm transition-colors ${itemClass}`}
                >
                  {formatServiceTitle(service.title)}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`border-t px-3 py-3 ${isLight ? "border-neutral-200" : "border-white/10"}`}>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className={`${fontBody} inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border text-sm font-semibold transition-colors ${seeAllClass}`}
            >
              See all
            </Link>
          </div>
        </div>
      )}
    </li>
  );
}
