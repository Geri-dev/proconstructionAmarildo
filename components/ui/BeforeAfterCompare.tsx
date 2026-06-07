"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { fontBody } from "@/app/fonts";
import type { CompareLayout } from "@/lib/roofBeforeAfter";
import { usePrefersReducedMotion } from "@/lib/motion";

type BeforeAfterCompareProps = {
  beforeSrc: StaticImageData;
  afterSrc: StaticImageData;
  beforeAlt: string;
  afterAlt: string;
  layout?: CompareLayout;
  className?: string;
};

export function BeforeAfterCompare({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  layout = "portrait",
  className = "",
}: BeforeAfterCompareProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const isStacked = layout === "landscape";

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      setContainerWidth(el.offsetWidth);
      setContainerHeight(el.offsetHeight);
    };
    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const updatePosition = useCallback(
    (clientX: number, clientY: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();

      if (isStacked) {
        const y = clientY - rect.top;
        const pct = (y / rect.height) * 100;
        setPosition(Math.min(100, Math.max(0, pct)));
      } else {
        const x = clientX - rect.left;
        const pct = (x / rect.width) * 100;
        setPosition(Math.min(100, Math.max(0, pct)));
      }
    },
    [isStacked],
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      setIsDragging(true);
      updatePosition(event.clientX, event.clientY);
    },
    [updatePosition],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(event.clientX, event.clientY);
    },
    [isDragging, updatePosition],
  );

  const handlePointerUp = useCallback((event: React.PointerEvent) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const step = event.shiftKey ? 10 : 2;

      if (isStacked) {
        if (event.key === "ArrowUp") {
          event.preventDefault();
          setPosition((p) => Math.max(0, p - step));
        } else if (event.key === "ArrowDown") {
          event.preventDefault();
          setPosition((p) => Math.min(100, p + step));
        }
      } else {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          setPosition((p) => Math.max(0, p - step));
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          setPosition((p) => Math.min(100, p + step));
        }
      }
    },
    [isStacked],
  );

  const aspectClass = isStacked ? "aspect-[3/4] sm:aspect-[4/5]" : "aspect-[3/4]";
  const dragCursor = isDragging
    ? isStacked
      ? "cursor-ns-resize"
      : "cursor-ew-resize"
    : "";

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className={`before-after-compare relative ${aspectClass} w-full select-none overflow-hidden rounded-2xl bg-neutral-200 sm:rounded-3xl ${dragCursor}`}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes={
            isStacked
              ? "(max-width: 1024px) 100vw, 45vw"
              : "(max-width: 1024px) 100vw, 40vw"
          }
          draggable={false}
        />

        {isStacked ? (
          <div
            className="absolute inset-x-0 top-0 overflow-hidden"
            style={{ height: `${position}%` }}
            aria-hidden
          >
            {containerHeight > 0 && (
              <div
                className="relative w-full"
                style={{ height: containerHeight }}
              >
                <Image
                  src={beforeSrc}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  draggable={false}
                  aria-hidden
                />
              </div>
            )}
          </div>
        ) : (
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
            aria-hidden
          >
            {containerWidth > 0 && (
              <div
                className="relative h-full"
                style={{ width: containerWidth }}
              >
                <Image
                  src={beforeSrc}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  draggable={false}
                  aria-hidden
                />
              </div>
            )}
          </div>
        )}

        {isStacked ? (
          <div
            className="pointer-events-none absolute inset-x-0 z-10 h-0.5 -translate-y-1/2 bg-white shadow-[0_0_8px_rgb(0_0_0/0.35)]"
            style={{ top: `${position}%` }}
            aria-hidden
          />
        ) : (
          <div
            className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_8px_rgb(0_0_0/0.35)]"
            style={{ left: `${position}%` }}
            aria-hidden
          />
        )}

        <button
          type="button"
          role="slider"
          aria-label={
            isStacked
              ? "Drag up and down to compare before and after"
              : "Drag left and right to compare before and after"
          }
          aria-orientation={isStacked ? "vertical" : "horizontal"}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% before visible`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          className={`before-after-handle absolute z-20 flex h-11 w-11 items-center justify-center rounded-full border-2 border-neutral-800/25 bg-white shadow-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 ${
            isDragging ? "scale-105 shadow-xl" : "hover:shadow-xl"
          } ${reducedMotion ? "" : "transition-transform"} ${
            isStacked
              ? "left-1/2 -translate-x-1/2 -translate-y-1/2"
              : "top-1/2 -translate-x-1/2 -translate-y-1/2"
          }`}
          style={{
            ...(isStacked
              ? { top: `${position}%` }
              : { left: `${position}%` }),
            touchAction: "none",
          }}
        >
          <span
            className={`flex text-neutral-800 ${isStacked ? "flex-col gap-0.5" : "items-center gap-0.5"}`}
            aria-hidden
          >
            {isStacked ? (
              <>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                  <path d="M5 1L1 5h8L5 1z" />
                </svg>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                  <path d="M5 5L1 1h8l-4 4z" />
                </svg>
              </>
            ) : (
              <>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="currentColor">
                  <path d="M5 1L1 5l4 4V1z" />
                </svg>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="currentColor">
                  <path d="M1 1l4 4-4 4V1z" />
                </svg>
              </>
            )}
          </span>
        </button>

        <span className="sr-only">{beforeAlt}</span>

        {isStacked ? (
          <div
            className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between px-3 py-3 sm:px-4 sm:py-4"
            aria-hidden
          >
            <span
              className={`${fontBody} self-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm sm:text-sm`}
            >
              Before
            </span>
            <span
              className={`${fontBody} self-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm sm:text-sm`}
            >
              After
            </span>
          </div>
        ) : (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-between px-3 pb-3 pt-8 sm:px-4 sm:pb-4"
            aria-hidden
          >
            <span
              className={`${fontBody} rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm sm:text-sm`}
            >
              Before
            </span>
            <span
              className={`${fontBody} rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm sm:text-sm`}
            >
              After
            </span>
          </div>
        )}

        <div
          className={`pointer-events-none absolute z-[5] bg-gradient-to-t from-black/35 to-transparent ${
            isStacked ? "inset-x-0 bottom-0 h-16" : "inset-x-0 bottom-0 h-20"
          }`}
          aria-hidden
        />
        {isStacked && (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-16 bg-gradient-to-b from-black/25 to-transparent"
            aria-hidden
          />
        )}
      </div>
    </div>
  );
}
