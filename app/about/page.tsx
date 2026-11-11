import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import OurJourney from "@/components/about/OurJourney";
import OurGrowth from "@/components/about/OurGrowth";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import HowWeWork from "@/components/about/HowWeWork";
import OurLeadership from "@/components/about/OurLeadership";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | DK Appliance Care",
  description:
    "Discover DK Appliance Care and our commitment to reliable, professional home appliance repair and maintenance services.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStats />
      <OurJourney />
      <OurGrowth />
      <WhyChooseUs />
      <HowWeWork />
      <OurLeadership />
      <AboutCTA />
    </main>
  );
}