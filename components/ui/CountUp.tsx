"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/motion";

type CountUpProps = {
  end: number;
  active: boolean;
  duration?: number;
  className?: string;
};

export function CountUp({
  end,
  active,
  duration = 2000,
  className = "",
}: CountUpProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }

    if (reducedMotion) {
      setValue(end);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, end, duration, reducedMotion]);

  return <span className={className}>{value.toLocaleString()}</span>;
}
