import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Soccorso Stradale Pedrotti H24 | Trento, Mori, Mezzi Pesanti e Autogrù",
  description:
    "Pedrotti offre soccorso stradale H24 a Trento e Mori, recupero auto, furgoni, camion, mezzi pesanti e autogrù. Intervento rapido in viabilità ordinaria e autostradale.",
  keywords: [
    "soccorso stradale trento",
    "soccorso stradale mori",
    "carro attrezzi trento",
    "mezzi pesanti trento",
    "autogrù trento",
    "soccorso camion A22",
  ],
  openGraph: {
    title:
      "Soccorso Stradale Pedrotti H24 | Trento, Mori",
    description:
      "Intervento rapido H24 per auto, camion, autogrù e mezzi pesanti.",
    type: "website",
    locale: "it_IT",
    siteName: "Pedrotti Srl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body>
  {children}

  <Script
    src="https://multilingual-dispatch-flow.vercel.app/dispatch-widget.js"
    data-company="pedrotti"
    data-button-text="Need roadside help?"
    data-accent-color="#dc2626"
    strategy="afterInteractive"
  />
</body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );

}
