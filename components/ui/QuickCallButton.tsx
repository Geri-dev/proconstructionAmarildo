import { Phone } from "lucide-react";
import { fontBody } from "@/app/fonts";

type QuickCallButtonProps = {
  className?: string;
  variant?: "default" | "hero-glass";
};

export function QuickCallButton({
  className = "",
  variant = "default",
}: QuickCallButtonProps) {
  const variants = {
    default: `${fontBody} inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-lg bg-brand-orange px-3 text-xs font-semibold text-white shadow-lg shadow-black/25 transition-colors duration-200 hover:bg-brand-orange-light sm:min-h-[56px] sm:gap-3 sm:px-6 sm:text-base lg:min-h-[60px] lg:px-8 lg:text-lg`,
    "hero-glass": `${fontBody} inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/15 max-lg:text-[15px] lg:w-auto lg:min-h-[48px] lg:whitespace-nowrap lg:gap-2.5 lg:px-5 lg:py-3 lg:text-sm`,
  };

  const base = variants[variant];

  return (
    <a
      href="tel:2018000710"
      className={`${base} ${className}`}
      aria-label="Quick call 201-800-0710"
    >
      <Phone
        className="h-[18px] w-[18px] shrink-0 max-lg:h-5 max-lg:w-5 lg:h-[18px] lg:w-[18px]"
        aria-hidden
      />
      Quick Call
    </a>
  );
}
