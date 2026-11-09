import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import Technicians from "@/components/home/Technicians";
import ApplianceServices from "@/components/home/ApplianceServices";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CareTips from "@/components/home/CareTips";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <TrustStats />
      <Technicians />
      <ApplianceServices />
      <HowItWorks />
      <Testimonials />
      <CareTips />
    </main>
  );
}
