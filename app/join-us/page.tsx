import type { Metadata } from "next";

import JoinHero from "@/components/join-us/JoinHero";
import JobRoles from "@/components/join-us/JobRoles";
import HiringProcess from "@/components/join-us/HiringProcess";
import ApplicationForm from "@/components/join-us/ApplicationForm";
import JoinBenefits from "@/components/join-us/JoinBenefits";

export const metadata: Metadata = {
  title: "Join Our Team | DK Appliance Care",
  description:
    "Explore career opportunities at DK Appliance Care. Join our team of appliance repair technicians, trainees, and customer support professionals.",
};

export default function JoinUsPage() {
  return (
    <main>
      <JoinHero />
      <JobRoles />
      <HiringProcess />
      <ApplicationForm />
      <JoinBenefits />
    </main>
  );
}