import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

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
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
