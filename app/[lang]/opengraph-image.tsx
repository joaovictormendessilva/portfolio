import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/i18n";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "João Victor Mendes Silva — Frontend Engineer";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(isLocale(lang) ? lang : defaultLocale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#101a26",
        padding: "72px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", width: 72, height: 4, backgroundColor: "#c8943f" }} />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#e7ebee",
            fontWeight: 700,
          }}
        >
          {dict.hero.headline}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderTop: "1px solid rgba(231,235,238,0.15)",
          paddingTop: 28,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 28, color: "#e7ebee", fontWeight: 600 }}>{dict.hero.name}</div>
          <div style={{ display: "flex", fontSize: 22, color: "#7e8c9a", marginTop: 8 }}>{dict.hero.role}</div>
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "#7e8c9a" }}>{dict.hero.location}</div>
      </div>
    </div>,
    size,
  );
}
