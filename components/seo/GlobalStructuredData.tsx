import { JsonLd } from "@/components/seo/JsonLd";
import { getGlobalStructuredData } from "@/lib/seo/schema";

export function GlobalStructuredData() {
  return <JsonLd data={getGlobalStructuredData()} />;
}
