type NewJerseyServiceMapProps = {
  className?: string;
};

/**
 * New Jersey outline — fills the map stage box without resizing the section.
 * Source: @svg-maps/usa (see scripts/extract-nj-map.mjs).
 */
export function NewJerseyServiceMap({ className = "" }: NewJerseyServiceMapProps) {
  return (
    <figure
      className={`m-0 flex h-full w-full items-center justify-center ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/new-jersey-map.svg"
        alt="Map of New Jersey"
        width={220}
        height={404}
        className="h-full w-auto max-w-[92%] object-contain"
        decoding="async"
      />
    </figure>
  );
}
