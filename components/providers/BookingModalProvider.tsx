"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ServiceBookingForm } from "@/components/ui/ServiceBookingForm";
import { specializedServices } from "@/lib/services";
import { usePrefersReducedMotion } from "@/lib/motion";

type BookingModalContextValue = {
  openBookingModal: (serviceSlug?: string) => void;
  closeBookingModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(
  null,
);

function getSlugFromPathname(pathname: string): string | undefined {
  const match = pathname.match(/^\/services\/([^/]+)/);
  return match?.[1];
}

function getAreaSlugFromPathname(pathname: string): string | undefined {
  const match = pathname.match(/^\/areas\/([^/]+)(?:\/([^/]+))?/);
  if (!match?.[1]) return undefined;
  return match[2] ? `${match[1]}/${match[2]}` : match[1];
}

export function BookingModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reducedMotion = usePrefersReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [serviceSlug, setServiceSlug] = useState(
    specializedServices[0]?.slug ?? "roof-installation",
  );
  const [areaSlug, setAreaSlug] = useState<string | undefined>();

  const openBookingModal = useCallback(
    (slug?: string) => {
      const fromPath = getSlugFromPathname(pathname);
      const fromAreaPath = getAreaSlugFromPathname(pathname);
      setServiceSlug(slug ?? fromPath ?? specializedServices[0]?.slug ?? "");
      setAreaSlug(fromAreaPath);
      setIsOpen(true);
    },
    [pathname],
  );

  const closeBookingModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeBookingModal();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeBookingModal]);

  const value = useMemo(
    () => ({ openBookingModal, closeBookingModal }),
    [openBookingModal, closeBookingModal],
  );

  return (
    <BookingModalContext.Provider value={value}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
            role="presentation"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-label="Close booking form"
              onClick={closeBookingModal}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="booking-modal-title"
              className="relative z-10 flex min-h-[92dvh] max-h-[96dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:min-h-0 sm:max-h-[92vh] sm:rounded-3xl"
              initial={
                reducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 32, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 24, scale: 0.98 }
              }
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={closeBookingModal}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-sm transition-colors hover:bg-white hover:text-neutral-900"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] [-webkit-overflow-scrolling:touch] sm:p-6">
                <ServiceBookingForm
                  key={`${serviceSlug}-${areaSlug ?? "default"}`}
                  defaultServiceSlug={serviceSlug}
                  defaultAreaSlug={areaSlug}
                  idPrefix="modal"
                  embedded
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return context;
}
