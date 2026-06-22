import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fnzevent.com";

const title = "FNZ Event — Curated Turkish Journeys";
const description =
  "FNZ Event crafts private, thoughtfully designed travel itineraries across Türkiye — from the balloons of Cappadocia to the turquoise coast.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/fnz-logo.ico",
    shortcut: "/fnz-logo.ico",
    apple: "/assets/fnz-logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "FNZ Event",
    title,
    description,
    url: "/",
    images: [
      {
        url: "/assets/thumb.png",
        width: 1024,
        height: 1024,
        alt: "FNZ Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/thumb.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans text-navy antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
