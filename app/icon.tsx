import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#c8943f",
          color: "#101a26",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: "-0.05em",
          borderRadius: 14,
          fontFamily: "sans-serif",
        }}
      >
        JV
      </div>
    ),
    size,
  );
}
