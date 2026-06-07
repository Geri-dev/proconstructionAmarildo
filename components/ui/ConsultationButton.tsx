"use client";

import { fontBody } from "@/app/fonts";
import { useBookingModal } from "@/components/providers/BookingModalProvider";

type ConsultationButtonProps = {
  className?: string;
  variant?: "hero" | "header" | "hero-glass";
  serviceSlug?: string;
};

export function ConsultationButton({
  className = "",
  variant = "hero",
  serviceSlug,
}: ConsultationButtonProps) {
  const { openBookingModal } = useBookingModal();

  const shared = `${fontBody} inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-200`;

  const variants = {
    hero: `${shared} min-h-[50px] w-full px-3 text-xs leading-snug sm:min-h-[56px] sm:px-6 sm:text-base lg:min-h-[60px] lg:px-8 lg:text-lg bg-white text-brand-orange hover:bg-premium-white-soft shadow-lg shadow-black/25`,
    header: `${shared} min-h-[48px] px-8 text-base bg-white text-neutral-900 hover:bg-premium-white-soft shadow-md shadow-black/15`,
    "hero-glass": `${shared} min-h-[50px] w-full rounded-xl px-4 py-3.5 text-sm font-semibold leading-snug text-brand-orange transition-colors duration-200 hover:bg-white/15 hover:text-white max-lg:text-[15px] lg:w-auto lg:min-h-[48px] lg:whitespace-nowrap lg:px-5 lg:py-3 lg:text-sm`,
  };

  return (
    <button
      type="button"
      onClick={() => openBookingModal(serviceSlug)}
      className={`${variants[variant]} ${className}`}
    >
      Get Free Consultation
    </button>
  );
}
