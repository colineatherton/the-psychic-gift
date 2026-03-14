import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2d1b6e, #745ddd)",
          borderRadius: "38px",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: "110px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          G
        </span>
      </div>
    ),
    size
  );
}
