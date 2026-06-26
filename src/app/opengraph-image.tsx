import { ImageResponse } from "next/og";
import { company } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${company.name} — Industrial Cooling, Power & Insulation`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1220",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#f97316",
              display: "flex",
            }}
          />
          <div
            style={{
              color: "#7dd3fc",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Citizen Cooling Solutions Ltd
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              textTransform: "uppercase",
            }}
          >
            Industrial Cooling,
          </div>
          <div
            style={{
              color: "#38bdf8",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              textTransform: "uppercase",
            }}
          >
            Power & Insulation
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#94a3b8", fontSize: 28 }}>
            Radiators · Generators · Rewinding · Refractory
          </div>
          <div style={{ color: "#f97316", fontSize: 28, fontWeight: 700 }}>
            Nairobi, Kenya
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
