import type { StaticImageData } from "next/image";
import before1 from "@/app/images/before and after/before1.webp";
import after1 from "@/app/images/before and after/after1.webp";
import before2 from "@/app/images/before and after/before2.webp";
import after2 from "@/app/images/before and after/after2.webp";
import before3 from "@/app/images/before and after/before3.webp";
import after3 from "@/app/images/before and after/after3.webp";
import before4 from "@/app/images/before and after/before4.webp";
import after4 from "@/app/images/before and after/after4.webp";
import before5 from "@/app/images/before and after/before5.webp";
import after5 from "@/app/images/before and after/after5.webp";

/** portrait = side-by-side slider; landscape = stacked 16:9 with horizontal dragger (up/down) */
export type CompareLayout = "portrait" | "landscape";

export type RoofComparison = {
  id: string;
  title: string;
  before: StaticImageData;
  after: StaticImageData;
  beforeAlt: string;
  afterAlt: string;
  description: string;
  layout: CompareLayout;
};

export const roofComparisons: RoofComparison[] = [
  {
    id: "residential-shingle-restoration",
    title: "Residential Asphalt Shingle Roof Restoration",
    before: before1,
    after: after1,
    beforeAlt:
      "Worn and weathered asphalt shingle roof on a New Jersey home before professional roof repair by Creative Pro Construction",
    afterAlt:
      "Restored asphalt shingle roof with clean lines and uniform coverage after roof repair in New Jersey",
    description:
      "This New Jersey home needed more than a quick patch aging shingles, worn granules, and early signs of moisture intrusion put the roof at risk. Our crew completed a full roof repair and shingle restoration, replacing damaged sections, re-sealing vulnerable areas, and aligning every course for a clean, weather-tight finish built to handle NJ rain, wind, and freeze-thaw cycles.",
    layout: "portrait",
  },
  {
    id: "gaf-architectural-shingle-installation",
    title: "GAF Architectural Shingle & FeltBuster Installation",
    before: before2,
    after: after2,
    beforeAlt:
      "Roof replacement in progress showing GAF FeltBuster synthetic underlayment before shingle installation in New Jersey",
    afterAlt:
      "Completed architectural shingle roof replacement with multi-tone grey shingles and new ridge cap in New Jersey",
    description:
      "A steep-slope roof replacement captured from start to finish. We installed GAF FeltBuster synthetic underlayment for superior moisture protection, then laid architectural shingles in a dimensional grey blend with precision ridge detailing. From underlayment to the final course, this project shows the craftsmanship homeowners across New Jersey expect from a licensed roofing contractor.",
    layout: "portrait",
  },
  {
    id: "aerial-tear-off-hip-roof",
    title: "Aerial Roof Tear-Off & Full Hip Roof Replacement",
    before: before3,
    after: after3,
    beforeAlt:
      "Drone aerial view of a New Jersey home with exposed roof decking and rafters during a complete roof tear-off",
    afterAlt:
      "Drone aerial view of a completed dark grey hip roof with new asphalt shingles after full roof replacement in New Jersey",
    description:
      "An overhead look at a complete roof tear-off and replacement. The before photo shows stripped decking and exposed framing a full structural reset before new materials go down. The finished hip roof features uniform charcoal-grey shingles, clean ridge lines, and proper flashing at the chimney. Ideal for homeowners comparing the scope of a true New Jersey roof replacement project.",
    layout: "landscape",
  },
  {
    id: "steep-slope-roof-repair",
    title: "Steep-Slope Roof Repair & Finished Curb Appeal",
    before: before4,
    after: after4,
    beforeAlt:
      "Damaged residential roof surface before steep-slope roof repair by Creative Pro Construction in New Jersey",
    afterAlt:
      "Professionally repaired steep-slope roof with new shingles and improved curb appeal after roofing work in New Jersey",
    description:
      "Steep-slope roofs demand experienced installers and the right safety setup. This before-and-after highlights targeted roof repair and shingle replacement on a pitched residential roof addressing worn courses, improving water runoff, and delivering a uniform finished surface. Creative Pro Construction handles complex roof pitches throughout New Jersey with code-compliant materials and workmanship you can see from the street.",
    layout: "portrait",
  },
  {
    id: "multi-gable-aerial-replacement",
    title: "Multi-Gable Aerial Roof Replacement",
    before: before5,
    after: after5,
    beforeAlt:
      "Aerial view of a multi-gable New Jersey home mid roof replacement with synthetic underlayment and staged shingle bundles",
    afterAlt:
      "Aerial view of a completed multi-gable roof with dark charcoal architectural shingles after full replacement in New Jersey",
    description:
      "A large suburban home with multiple gables and a complex roofline photographed from above during and after installation. Mid-project, new underlayment and staged shingle bundles show an organized tear-off and install process. The completed roof features consistent charcoal architectural shingles across every plane, giving the property a modern, high-durability finish and long-term protection against New Jersey weather.",
    layout: "landscape",
  },
];
