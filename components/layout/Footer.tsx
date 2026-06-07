import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { fontBody, fontDisplay } from "@/app/fonts";
import { BookingCtaButton } from "@/components/ui/BookingCtaButton";
import {
  ADDRESS,
  EMAIL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_NUMBER,
} from "@/lib/contact";

const LOGO_SRC = "/images/logo-fix.png";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/services", label: "Services", highlight: true },
  { href: "/#roof-repair-before-after", label: "Projects" },
  { href: "/services", label: "All Services" },
];

const resourceLinks = [
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/areas", label: "Service Areas" },
  { href: "/#contact", label: "Contact" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#reviews", label: "Testimonials" },
];

const companyLinks = [
  { href: "/#about", label: "Our Story" },
  { href: "/#process", label: "Our Process" },
  { href: "/#brands", label: "Materials" },
  { href: "/#specialized-services", label: "Specialties" },
  { href: "/areas", label: "Areas We Serve" },
  { href: "/#faq", label: "Help Center" },
];

function FooterNavColumn({
  links,
}: {
  links: { href: string; label: string; highlight?: boolean; opensBooking?: boolean }[];
}) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`}>
          {link.opensBooking ? (
            <BookingCtaButton
              className={`${fontBody} text-left text-sm transition-colors hover:text-brand-accent sm:text-base ${
                link.highlight
                  ? "font-semibold text-brand-accent"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </BookingCtaButton>
          ) : (
            <Link
              href={link.href}
              className={`${fontBody} text-sm transition-colors hover:text-brand-accent sm:text-base ${
                link.highlight
                  ? "font-semibold text-brand-accent"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-white">
      {/* CTA banner — overlaps dark footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-100 px-6 py-10 sm:rounded-3xl sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <h2
            className={`${fontDisplay} max-w-md text-3xl leading-[0.95] tracking-wide text-neutral-900 sm:text-4xl lg:text-[2.75rem]`}
          >
            Get a free estimate today
          </h2>

          <div className="mt-6 flex max-w-lg flex-col gap-5 lg:mt-0 lg:max-w-none lg:shrink-0 lg:items-end">
            <p
              className={`${fontBody} text-sm leading-relaxed text-neutral-600 sm:text-base lg:text-right lg:whitespace-nowrap`}
            >
              A typical roof installation takes 1–3 days depending on the size
              of the roof.
            </p>
            <BookingCtaButton
              className={`${fontBody} inline-flex min-h-[52px] items-center justify-center rounded-xl bg-brand-accent px-8 text-sm font-semibold text-neutral-900 transition-colors hover:bg-brand-accent-light sm:text-base`}
            >
              Request a free estimate
            </BookingCtaButton>
          </div>
        </div>
      </div>

      {/* Main dark footer */}
      <div className="footer-dark-panel relative -mt-14 pt-28 sm:-mt-16 sm:pt-32 lg:-mt-20 lg:pt-36">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-4">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src={LOGO_SRC}
                  alt="Creative Pro Construction"
                  width={480}
                  height={160}
                  className="h-16 w-auto max-w-[18rem] object-contain object-left sm:h-20 sm:max-w-[20rem] lg:h-24 lg:max-w-[22rem]"
                />
              </Link>
              <p
                className={`${fontBody} mt-5 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base`}
              >
                Top-rated roofing and construction across New Jersey quality
                materials, licensed crews, and workmanship you can trust from
                estimate to final walkthrough.
              </p>
            </div>

            {/* Nav columns */}
            <div className="lg:col-span-2">
              <FooterNavColumn links={pageLinks} />
            </div>
            <div className="lg:col-span-2">
              <FooterNavColumn links={resourceLinks} />
            </div>
            <div className="lg:col-span-2">
              <FooterNavColumn links={companyLinks} />
            </div>

            {/* Contact column */}
            <div className="sm:col-span-2 lg:col-span-2">
              <ul className={`${fontBody} flex flex-col gap-4 text-sm text-white/85 sm:text-base`}>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-start gap-3 transition-colors hover:text-white"
                  >
                    <Mail
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent"
                      aria-hidden
                    />
                    <span className="underline underline-offset-2">{EMAIL}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-start gap-3 transition-colors hover:text-white"
                  >
                    <Phone
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent"
                      aria-hidden
                    />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-3 transition-colors hover:text-white"
                  >
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent"
                      aria-hidden
                    />
                    <span className="underline underline-offset-2">
                      {ADDRESS}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom attribution tab */}
        <div className="footer-attribution-tab pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
          <p
            className={`${fontBody} rounded-t-2xl bg-white px-8 py-3.5 text-center text-xs text-neutral-600 sm:text-sm`}
          >
            © {year}{" "}
            <span className="font-semibold text-brand-accent">
              Creative Pro Construction
            </span>
            . Licensed &amp; insured in New Jersey.
          </p>
        </div>
      </div>

      {/* Spacer for attribution tab */}
      <div className="h-10 bg-white sm:h-12" aria-hidden />
    </footer>
  );
}
