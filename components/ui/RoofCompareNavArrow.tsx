type RoofCompareNavArrowProps = {
  direction: "prev" | "next";
  disabled?: boolean;
  onClick: () => void;
  label: string;
};

function PrevArrowIcon() {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2 10H22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 4L2 10L8 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 4V16"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        opacity={0.8}
      />
      <path
        d="M26 4V16"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        opacity={0.5}
      />
    </svg>
  );
}

function NextArrowIcon() {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 4V16"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        opacity={0.5}
      />
      <path
        d="M2 4V16"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        opacity={0.8}
      />
      <path
        d="M6 10H26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 4L26 10L20 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RoofCompareNavArrow({
  direction,
  disabled = false,
  onClick,
  label,
}: RoofCompareNavArrowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="roof-compare-nav flex h-12 w-14 items-center justify-center rounded-xl border-2 border-neutral-900/15 bg-white text-neutral-900 shadow-sm transition-[border-color,background-color,box-shadow] hover:border-brand-orange/50 hover:bg-neutral-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-900/15 disabled:hover:bg-white disabled:hover:shadow-sm sm:h-14 sm:w-16"
    >
      {direction === "prev" ? <PrevArrowIcon /> : <NextArrowIcon />}
    </button>
  );
}
