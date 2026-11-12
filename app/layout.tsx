import type { Metadata } from "next";
import { Manrope, Inter, Great_Vibes } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DK Appliance Care | Expert Appliance Repair",
    template: "%s | DK Appliance Care",
  },
  description:
    "Professional appliance repair and doorstep service for air conditioners, refrigerators, washing machines, televisions, microwaves, and water purifiers.",
  applicationName: "DK Appliance Care",
  keywords: [
    "DK Appliance Care",
    "appliance repair",
    "AC repair",
    "refrigerator repair",
    "washing machine repair",
    "home appliance service",
    "doorstep appliance repair",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="top">
      <body
        className={[
          manrope.variable,
          inter.variable,
          greatVibes.variable,
        ].join(" ")}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
