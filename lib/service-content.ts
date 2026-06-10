export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceDetailContent = {
  about: string;
  whyChoose: string[];
  processSteps: ServiceProcessStep[];
};

const defaultWhyChoose = [
  "Licensed, insured crews with years of New Jersey roofing and construction experience.",
  "Premium materials and code-compliant workmanship on every project.",
  "Clear written estimates, honest timelines, and a final walkthrough you can trust.",
  "Local team serving Bergen County and surrounding communities.",
];

const defaultProcess: ServiceProcessStep[] = [
  {
    title: "Consultation",
    description:
      "We start with a free on-site visit to inspect your property, discuss goals, and answer your questions.",
  },
  {
    title: "Estimate & planning",
    description:
      "You receive a detailed quote with material options, scope of work, and a realistic project schedule.",
  },
  {
    title: "Professional execution",
    description:
      "Our crew prepares the site, completes the work to spec, and keeps you updated throughout the job.",
  },
  {
    title: "Final walkthrough",
    description:
      "We review the finished work with you, address any details, and leave your property clean and protected.",
  },
];

export const serviceDetailContent: Record<string, ServiceDetailContent> = {
  "roof-installation": {
    about:
      "Creative Pro Construction delivers complete roof installation systems for New Jersey homes and businesses. From tear-off and deck inspection to ice-and-water shield, architectural shingles, and precision flashing, we build roofs engineered for wind, rain, and long-term curb appeal.",
    whyChoose: [
      "Full roofing systems with premium underlayment, ventilation, and flashing details.",
      "Architectural shingles and materials selected for New Jersey weather.",
      "Clean job sites, daily progress updates, and manufacturer-backed warranties.",
      ...defaultWhyChoose.slice(3),
    ],
    processSteps: defaultProcess,
  },
  "roof-replacement": {
    about:
      "When aging materials, storm damage, or persistent leaks put your property at risk, a full roof replacement restores protection and value. We safely remove old layers, repair decking where needed, and install durable, code-compliant roofing backed by strong warranties.",
    whyChoose: [
      "Thorough inspection before replacement to catch hidden deck or ventilation issues.",
      "Safe removal and disposal of old roofing materials.",
      "Upgrade opportunities for insulation, ventilation, and improved curb appeal.",
      ...defaultWhyChoose.slice(3),
    ],
    processSteps: defaultProcess,
  },
  "roof-fitting": {
    about:
      "Accurate roof fitting is essential for additions, dormers, and complex pitches. Our team measures, templates, and installs custom-fit solutions so every plane aligns, vents correctly, and sheds water for a seamless finished look.",
    whyChoose: [
      "Precise measurements and templating for additions and custom roof geometry.",
      "Seamless integration with existing roofing and flashing systems.",
      "Attention to pitch, drainage, and ventilation on every plane.",
      ...defaultWhyChoose.slice(3),
    ],
    processSteps: defaultProcess,
  },
  "gutter-installation-repair": {
    about:
      "Seamless gutter installation and repair protects siding, foundations, and landscaping from New Jersey rainfall. We size runs correctly, secure hangers, and ensure downspouts move water away from your home efficiently.",
    whyChoose: [
      "Seamless aluminum gutters sized for your roofline and rainfall volume.",
      "Proper pitch, hangers, and downspout placement to prevent overflow.",
      "Repair services for leaks, sagging sections, and storm damage.",
      ...defaultWhyChoose.slice(3),
    ],
    processSteps: defaultProcess,
  },
  "chimney-services": {
    about:
      "Chimney repair, flashing, caps, and masonry restoration stop leaks and preserve structural integrity. Our specialists diagnose crown, liner, and brick issues before they lead to interior water damage or costly repairs.",
    whyChoose: [
      "Flashing, crown, cap, and masonry repair by experienced specialists.",
      "Leak diagnosis that addresses root causes, not just surface symptoms.",
      "Restoration work that protects brick, mortar, and surrounding roof areas.",
      ...defaultWhyChoose.slice(3),
    ],
    processSteps: defaultProcess,
  },
  stairs: {
    about:
      "We build exterior and structural stairs to code with safe treads, railings, and weather-resistant finishes. From entry steps to multi-level access, our stairs are sturdy, attractive, and built to match your home's design.",
    whyChoose: [
      "Code-compliant tread depth, rise, and railing height on every build.",
      "Weather-resistant materials and finishes for New Jersey seasons.",
      "Custom designs that complement your home's architecture.",
      ...defaultWhyChoose.slice(3),
    ],
    processSteps: defaultProcess,
  },
  masonry: {
    about:
      "Our brick, block, and stone masonry covers walls, veneers, and structural repairs across Bergen County and beyond. Skilled masons repoint, rebuild, and finish surfaces that stand up to freeze-thaw cycles and moisture.",
    whyChoose: [
      "Repointing, rebuilding, and new masonry with matched materials and color.",
      "Structural and cosmetic repairs for chimneys, walls, and veneers.",
      "Workmanship built for freeze-thaw and moisture in the Northeast.",
      ...defaultWhyChoose.slice(3),
    ],
    processSteps: defaultProcess,
  },
  siding: {
    about:
      "Siding installation and replacement improves insulation, weather resistance, and exterior style. We work with vinyl, fiber cement, and composite systems for a clean, low-maintenance envelope that performs year-round.",
    whyChoose: [
      "Vinyl, fiber cement, and composite siding options for every budget.",
      "Proper house wrap, flashing, and trim details behind every panel.",
      "Improved curb appeal with durable, low-maintenance exterior finishes.",
      ...defaultWhyChoose.slice(3),
    ],
    processSteps: defaultProcess,
  },
};

export function getServiceDetailContent(slug: string): ServiceDetailContent {
  return (
    serviceDetailContent[slug] ?? {
      about:
        "Creative Pro Construction provides licensed, professional service across New Jersey with quality materials and workmanship you can trust.",
      whyChoose: defaultWhyChoose,
      processSteps: defaultProcess,
    }
  );
}

type LocalizedContentContext = {
  cityName: string;
  countyName: string;
};

function localizeServiceCopy(
  text: string,
  { cityName, countyName }: LocalizedContentContext,
): string {
  return text
    .replace(
      /across Bergen County and beyond/gi,
      `in ${cityName} and throughout ${countyName}`,
    )
    .replace(
      /Bergen County and surrounding communities/gi,
      `${cityName} and ${countyName}`,
    )
    .replace(/across New Jersey/gi, `in ${cityName}, NJ`)
    .replace(/for New Jersey/gi, `for ${cityName}, NJ`)
    .replace(/New Jersey homes and businesses/gi, `${cityName} homes and businesses`)
    .replace(/New Jersey rainfall/gi, `${countyName} rainfall`)
    .replace(/New Jersey weather/gi, `${countyName} weather`)
    .replace(/New Jersey seasons/gi, `${countyName} seasons`)
    .replace(
      /years of New Jersey roofing and construction experience/gi,
      `years of roofing and construction experience in ${cityName}`,
    )
    .replace(
      /across New Jersey with quality materials/gi,
      `in ${cityName}, NJ with quality materials`,
    );
}

export function getLocalizedServiceDetailContent(
  slug: string,
  context: LocalizedContentContext,
): ServiceDetailContent {
  const base = getServiceDetailContent(slug);

  return {
    about: `${localizeServiceCopy(base.about, context)} Our ${context.cityName} team provides free on-site estimates and warranty-backed work throughout ${context.countyName}.`,
    whyChoose: [
      ...base.whyChoose.slice(0, 3).map((item) => localizeServiceCopy(item, context)),
      `Local ${context.cityName} contractors with fast response across ${context.countyName}.`,
    ],
    processSteps: base.processSteps.map((step) => ({
      title: step.title,
      description: localizeServiceCopy(step.description, context).replace(
        "your property",
        `your ${context.cityName} property`,
      ),
    })),
  };
}
