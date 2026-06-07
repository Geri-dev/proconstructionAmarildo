"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

type LazyAutoplayVideoProps = {
  src: string;
  title: string;
  className?: string;
};

export function LazyAutoplayVideo({
  src,
  title,
  className = "",
}: LazyAutoplayVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const inView = useInView(containerRef, { amount: 0.4 });
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (inView && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [inView, shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || reducedMotion) return;

    if (inView) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, shouldLoad, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl bg-neutral-100 shadow-lg shadow-black/10 sm:rounded-3xl ${className}`}
    >
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          title={title}
          muted
          loop
          playsInline
          preload="none"
          aria-label={title}
          className="aspect-video h-full w-full object-cover"
        />
      ) : (
        <div
          className="aspect-video w-full bg-neutral-200"
          aria-hidden
        />
      )}
    </div>
  );
}
