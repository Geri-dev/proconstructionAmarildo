import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo/constants";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

export const OG_CONTENT_TYPE = "image/png";

type OgTemplateProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function OgImageTemplate({
  eyebrow = SITE_TAGLINE,
  title,
  subtitle,
}: OgTemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        background: "linear-gradient(135deg, #0f172a 0%, #1b4d3e 45%, #14532d 100%)",
        padding: "64px",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "920px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#4ade80",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.88)",
              maxWidth: "860px",
            }}
          >
            {subtitle}
          </div>
        ) : null}
        <div
          style={{
            marginTop: "12px",
            fontSize: 24,
            fontWeight: 700,
            color: "#bbf7d0",
          }}
        >
          {SITE_NAME}
        </div>
      </div>
    </div>
  );
}

export function createOgImageResponse({
  eyebrow,
  title,
  subtitle,
}: OgTemplateProps) {
  return new ImageResponse(
    <OgImageTemplate eyebrow={eyebrow} title={title} subtitle={subtitle} />,
    OG_SIZE,
  );
}
