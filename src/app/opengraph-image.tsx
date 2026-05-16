import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050608",
          color: "#e8edf5",
          padding: 80,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              border: "1px solid #262d3d",
              background: "#0b0d12",
              color: "#00ff88",
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 18,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            T/G
          </div>
          <div style={{ fontSize: 28, fontWeight: 500 }}>{SITE.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: 4,
              color: "#00ff88",
            }}
          >
            AI-NATIVE GROWTH ENGINE
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 500, letterSpacing: -2 }}>
            Build. Deploy.
            <br />
            <span style={{ color: "#00ff88" }}>Get found by AI.</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#8b94a7", fontSize: 18 }}>
          <div>IT Development · Manpower · Digital Marketing</div>
          <div>topgstudios.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
