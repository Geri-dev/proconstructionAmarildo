export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What types of roofs do you install in New Jersey?",
    answer:
      "Creative Pro Construction installs asphalt architectural shingles, flat and low-slope roofing systems, and complete re-roofing packages for residential and commercial properties across New Jersey. We also handle roof fitting for additions, dormers, and complex pitches paired with ice-and-water shield, precision flashing, and ventilation upgrades for long-lasting protection against NJ weather.",
  },
  {
    question: "How long does a roof installation or replacement take?",
    answer:
      "Most standard roof replacements in New Jersey are completed in one to three days, depending on roof size, pitch, decking repairs, and weather. A full tear-off and new roof installation on an average single-family home typically takes one to two days. We provide a clear timeline during your free estimate so you know exactly when our crew will start and finish.",
  },
  {
    question: "Do you offer warranties on roofing and exterior work?",
    answer:
      "Yes. Creative Pro Construction stands behind every roof installation and roof replacement with strong workmanship warranties, and we install manufacturer-backed material warranties on qualifying shingle and roofing products. Many clients receive up to 50 years of combined labor and material coverage details are outlined in writing before your project begins.",
  },
  {
    question: "How much does roof replacement cost in New Jersey?",
    answer:
      "Roof replacement cost in New Jersey depends on square footage, roof pitch, material choice, tear-off layers, and any decking or flashing repairs. Most NJ homeowners invest between roughly $8,000 and $25,000+ for a full replacement. We provide free, no-obligation estimates with itemized pricing so you can compare options and choose the best roofing system for your budget.",
  },
  {
    question: "Can you help with insurance claims for storm or hail damage?",
    answer:
      "Absolutely. If storm, hail, or wind damage caused leaks or missing shingles, our team can document the damage, meet with your adjuster on-site, and provide detailed repair or roof replacement estimates that align with your insurance claim. We work with homeowners throughout New Jersey to restore your roof quickly and keep the claims process as smooth as possible.",
  },
];

export { PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/contact";
