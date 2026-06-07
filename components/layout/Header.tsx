"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { fontBody } from "@/app/fonts";
import { ConsultationButton } from "@/components/ui/ConsultationButton";
import { ServicesNavDropdown } from "@/components/layout/ServicesNavDropdown";
import { usePrefersReducedMotion } from "@/lib/motion";

const LOGO_SRC = "/images/logo-fix.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/#reviews", label: "Reviews" },
];

type HeaderTheme = "dark" | "light";

type HeaderProps = {
  theme?: HeaderTheme;
  position?: "absolute" | "relative";
};

export function Header({ theme = "dark", position = "absolute" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const isLight = theme === "light";

  const linkClass = isLight
    ? "text-neutral-800 hover:text-brand-orange"
    : "text-white/90 hover:text-brand-orange";

  const menuButtonClass = isLight ? "text-neutral-900" : "text-white";

  const mobilePanelClass = isLight
    ? "border-neutral-200 bg-white/95"
    : "border-white/10 bg-black/80";

  const desktopNavItems = (
    <>
      {navLinks.slice(0, 3).map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`${fontBody} text-base transition-colors lg:text-lg ${linkClass}`}
          >
            {link.label}
          </Link>
        </li>
      ))}
      <ServicesNavDropdown theme={theme} />
      {navLinks.slice(3).map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`${fontBody} text-base transition-colors lg:text-lg ${linkClass}`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <motion.header
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={
        position === "relative"
          ? "relative z-50"
          : "absolute inset-x-0 top-0 z-50"
      }
    >
      <div className="mx-auto flex min-h-[3.5rem] max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:min-h-[4.25rem] sm:px-6 sm:py-2.5 lg:min-h-[5.5rem] lg:px-8 lg:py-3">
        <Link
          href="/"
          className="relative z-10 flex h-12 shrink-0 items-center max-md:translate-y-1 md:translate-y-0 sm:h-[3.25rem] lg:h-[4.5rem]"
        >
          <Image
            src={LOGO_SRC}
            alt="Creative Pro Construction"
            width={480}
            height={160}
            className="h-full w-auto max-w-[12rem] object-contain object-left sm:max-w-[14rem] lg:max-w-[19rem]"
            priority
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-10">{desktopNavItems}</ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <ConsultationButton variant="header" />
        </div>

        <button
          type="button"
          className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-lg ${menuButtonClass} lg:hidden`}
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, height: 0 }
            }
            animate={{ opacity: 1, height: "auto" }}
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, height: 0 }
            }
            transition={{ duration: 0.3 }}
            className={`overflow-hidden border-t backdrop-blur-md lg:hidden ${mobilePanelClass}`}
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`${fontBody} rounded-lg px-3 py-3 text-base transition-colors hover:text-brand-orange ${isLight ? "hover:bg-neutral-100" : "hover:bg-white/10"} ${linkClass}`}
                >
                  {link.label}
                </Link>
              ))}
              <ServicesNavDropdown
                theme={theme}
                layout="mobile"
                onNavigate={() => setMobileOpen(false)}
              />
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`${fontBody} rounded-lg px-3 py-3 text-base transition-colors hover:text-brand-orange ${isLight ? "hover:bg-neutral-100" : "hover:bg-white/10"} ${linkClass}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 px-3">
                <ConsultationButton
                  variant="header"
                  className="w-full"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
