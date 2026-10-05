import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#090B09",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vidanest.id"),
  title: "VIDA NEST | Premium Natural Bird's Nest",
  description:
    "Premium natural bird's nest carefully selected for quality, purity, and sustainable practices.",
  keywords: [
    "sarang walet",
    "sarang walet cirebon",
    "vida nest",
    "premium bird nest",
    "sarang walet tanpa pemutih",
    "edible bird nest indonesia",
  ],
  authors: [{ name: "VIDA NEST" }],
  openGraph: {
    title: "VIDA NEST | Premium Natural Bird's Nest",
    description:
      "Premium natural bird's nest carefully selected for quality, purity, and sustainable practices.",
    url: "https://vidanest.id",
    siteName: "VIDA NEST",
    images: [
      {
        url: "/hero-nest.jpg",
        width: 1200,
        height: 630,
        alt: "VIDA NEST - Premium Natural Bird's Nest",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/vida-logo.png",
    apple: "/vida-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`dark h-full scroll-smooth ${cormorant.variable} ${manrope.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#090B09] text-[#F2EBDD] font-sans antialiased selection:bg-[#D8B84C] selection:text-[#090B09]">
        {children}
      </body>
    </html>
  );
}
