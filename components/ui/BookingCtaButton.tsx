"use client";

import { useBookingModal } from "@/components/providers/BookingModalProvider";

type BookingCtaButtonProps = {
  children: React.ReactNode;
  className?: string;
  serviceSlug?: string;
};

export function BookingCtaButton({
  children,
  className = "",
  serviceSlug,
}: BookingCtaButtonProps) {
  const { openBookingModal } = useBookingModal();

  return (
    <button
      type="button"
      onClick={() => openBookingModal(serviceSlug)}
      className={className}
    >
      {children}
    </button>
  );
}
