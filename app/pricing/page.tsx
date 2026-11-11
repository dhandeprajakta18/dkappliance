import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Service Pricing | DK Appliance Care",
  description:
    "Explore appliance repair and maintenance pricing at DK Appliance Care. Transparent service charges for AC, refrigerators, washing machines, TVs and more.",
};

export default function PricingPage() {
  return <PricingContent />;
}