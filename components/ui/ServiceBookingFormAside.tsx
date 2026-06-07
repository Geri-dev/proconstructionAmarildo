"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { ServiceBookingForm } from "@/components/ui/ServiceBookingForm";
import { usePrefersReducedMotion } from "@/lib/motion";

type ServiceBookingFormAsideProps = {
  defaultServiceSlug: string;
  formColumnRef: React.RefObject<HTMLDivElement | null>;
  processSectionRef: React.RefObject<HTMLDivElement | null>;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

function getAbsoluteTop(element: HTMLElement) {
  return element.getBoundingClientRect().top + window.scrollY;
}

export function ServiceBookingFormAside({
  defaultServiceSlug,
  formColumnRef,
  processSectionRef,
}: ServiceBookingFormAsideProps) {
  const reducedMotion = usePrefersReducedMotion();
  const formRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const smoothY = useSpring(0, {
    stiffness: 120,
    damping: 28,
    mass: 0.45,
  });

  useEffect(() => {
    function checkEnabled() {
      setEnabled(window.innerWidth >= 1024);
    }

    checkEnabled();
    window.addEventListener("resize", checkEnabled);
    return () => window.removeEventListener("resize", checkEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) {
      smoothY.set(0);
      return;
    }

    function updateOffset() {
      const formColumn = formColumnRef.current;
      const processSection = processSectionRef.current;
      if (!formColumn || !processSection) return;

      const stickyTop = 112;
      const maxOffset = Math.max(
        0,
        getAbsoluteTop(processSection) - getAbsoluteTop(formColumn) - stickyTop,
      );

      if (maxOffset <= 0 || reducedMotion) {
        smoothY.set(0);
        return;
      }

      const columnTop = getAbsoluteTop(formColumn);
      const scrollStart = columnTop - stickyTop;
      const progress = clamp(
        (window.scrollY - scrollStart) / maxOffset,
        0,
        1,
      );

      smoothY.set(easeOutCubic(progress) * maxOffset);
    }

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);

    const resizeObserver = new ResizeObserver(updateOffset);
    if (formColumnRef.current) resizeObserver.observe(formColumnRef.current);
    if (processSectionRef.current) {
      resizeObserver.observe(processSectionRef.current);
    }

    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
      resizeObserver.disconnect();
    };
  }, [
    enabled,
    reducedMotion,
    formColumnRef,
    processSectionRef,
    smoothY,
  ]);

  return (
    <div ref={formRef} className="lg:sticky lg:top-28 lg:self-start">
      <motion.div style={{ y: enabled && !reducedMotion ? smoothY : 0 }}>
        <ServiceBookingForm defaultServiceSlug={defaultServiceSlug} />
      </motion.div>
    </div>
  );
}
