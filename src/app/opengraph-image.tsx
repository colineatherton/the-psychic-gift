import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2d1b6e 0%, #745ddd 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Star decoration */}
        <div
          style={{
            fontSize: "64px",
            marginBottom: "24px",
            opacity: 0.9,
          }}
        >
          ✦
        </div>

        {/* Site name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          The Psychic Gift
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "3px",
            background: "#c6bbf4",
            marginBottom: "20px",
            borderRadius: "2px",
          }}
        />

        {/* Strapline */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 400,
            color: "#c6bbf4",
            textAlign: "center",
            letterSpacing: "0.5px",
          }}
        >
          Psychic Readings by Phone, 24/7
        </div>
      </div>
    ),
    size
  );
}
