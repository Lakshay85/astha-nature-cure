import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "Astha Yoga & Nature Cure Hospital, Rohtak",
  description: "Yoga and natural therapies in Rohtak since 1995: acupressure, hydro therapy, Ceragem, Sujok and more. Book an appointment.",
};
export const viewport: Viewport = { themeColor: "#2f5d3a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-G813682HYH" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-G813682HYH');`}</Script>
      </body>
    </html>
  );
}
