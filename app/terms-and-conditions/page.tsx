import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="legal-page">
      <article className="legal-content">
        <p className="legal-kicker">DK Appliance Care</p>
        <h1>
          Terms & <em>Conditions</em>
        </h1>
        <p>
          These terms explain how appliance repair bookings and on-site service
          visits are handled by DK Appliance Care.
        </p>
        <h2>Service <em>Visits</em></h2>
        <p>
          A technician will assess the appliance and explain the recommended
          work. Any applicable charges are communicated before repairs begin.
        </p>
        <h2>Appointments & <em>Changes</em></h2>
        <p>
          Please let us know as early as possible if you need to reschedule or
          cancel an appointment so we can update the service visit.
        </p>
        <h2>Need <em>Help?</em></h2>
        <p>
          For questions about a booking, service, or these terms, contact our
          support team and we will be happy to assist.
        </p>
      </article>
    </main>
  );
}
