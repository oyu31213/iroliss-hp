import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Shinoby | 相続・解約手続き SaaS — Iroliss Inc.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [fontData, logoData] = await Promise.all([
    readFile(join(process.cwd(), "public/NotoSansJP-Bold.ttf")),
    readFile(join(process.cwd(), "public/logo.png")),
  ]);

  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#5B3D8A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 100px",
          gap: 80,
        }}
      >
        {/* Left: logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            borderRadius: 32,
            padding: 40,
            width: 260,
            height: 260,
            flexShrink: 0,
          }}
        >
          <img
            src={logoBase64}
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Right: text */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "#D4B8FF",
              fontSize: 22,
              fontWeight: 700,
              padding: "8px 24px",
              borderRadius: 100,
              marginBottom: 28,
              display: "flex",
            }}
          >
            相続・解約手続き SaaS
          </div>
          <div
            style={{
              color: "white",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.25,
              marginBottom: 24,
              display: "flex",
            }}
          >
            差し戻し、ゼロへ。
          </div>
          <div
            style={{
              color: "#C4B0E8",
              fontSize: 26,
              lineHeight: 1.6,
              display: "flex",
            }}
          >
            書類不備・来店対応・確認連絡を構造から解決
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "NotoSansJP",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
