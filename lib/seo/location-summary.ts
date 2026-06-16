type CountySummaryContext = {
  name: string;
};

type CitySummaryContext = {
  name: string;
  countyName: string;
};

export function getCountySummary({ name }: CountySummaryContext): string {
  const countyLabel = name.replace(/, NJ$/i, "");

  return `Creative Pro Construction is ${countyLabel}'s trusted roofing and exterior contractor — delivering roof installation, replacement, and repair, plus gutters, chimney work, masonry, siding, and steps. Our licensed, insured crews know ${countyLabel} homes and weather, provide clear written estimates, and stand behind every project with warranty-backed workmanship. When you need reliable results without the runaround, local homeowners choose us for responsive scheduling, honest pricing, and quality that lasts.`;
}

export function getCitySummary({
  name,
  countyName,
}: CitySummaryContext): string {
  const cityLabel = name.replace(/, NJ$/i, "");
  const countyLabel = countyName.replace(/, NJ$/i, "");

  return `For ${cityLabel} homeowners, Creative Pro Construction is the go-to team for roof installation, replacement, and repair, along with gutters, chimney services, masonry, siding, and exterior steps. We live and work across ${countyLabel}, so we understand local building conditions and respond quickly when you need help. From storm damage and leak repairs to full re-roofs and exterior upgrades, we deliver licensed, insured craftsmanship, transparent estimates, and results you can count on — that's why ${cityLabel} residents trust us as their local roofing and construction partner.`;
}
