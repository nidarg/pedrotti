import { ImageResponse } from "next/og";

const baseUrl = "https://pedrotti.vercel.app";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background: "#ffffff",
        }}
      >
        <img
          src={`${baseUrl}/images/logo-pedrotti.png`}
          width="600"
          height="140"
          alt="Pedrotti"
        />

        <div style={{ fontSize: 64, marginTop: 40 }}>
          Soccorso Stradale H24
        </div>
      </div>
    ),
    size
  );
}