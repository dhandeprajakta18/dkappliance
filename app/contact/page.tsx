import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactOptions from "@/components/contact/ContactOptions";
import CallbackForm from "@/components/contact/CallbackForm";
import WhatHappensNext from "@/components/contact/WhatHappensNext";
import ContactOffice from "@/components/contact/ContactOffice";

export const metadata: Metadata = {
  title: "Contact Us | DK Appliance Care",
  description:
    "Contact DK Appliance Care for professional appliance repair, maintenance, booking assistance, and service enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactOptions />

      <div className="callback-section">
        <CallbackForm />

        <div className="callback-sidebar">
          <WhatHappensNext />
        </div>
      </div>

      <ContactOffice />

      <style>{`
        .callback-section {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
          gap: clamp(36px, 5vw, 72px);
          align-items: start;
          padding: 0 var(--page-gutter);
          background: var(--background);
        }

        .callback-section > section {
          padding: clamp(76px, 8vw, 110px) 0;
          min-width: 0;
        }

        .callback-sidebar {
          align-self: center;
          padding: 0;
          min-width: 0;
        }

        @media (max-width: 1000px) {
          .callback-section {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .callback-section > section {
            padding-bottom: 32px;
          }

          .callback-sidebar {
            padding: 0 0 clamp(72px, 10vw, 96px);
          }
        }
      `}</style>
    </main>
  );
}
