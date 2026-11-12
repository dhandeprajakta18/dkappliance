import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <article className="legal-content">
        <p className="legal-kicker">DK Appliance Care</p>
        <h1>
          Privacy <em>Policy</em>
        </h1>
        <p>
          We use the details you provide to arrange appliance service, respond to
          your enquiry, and improve your experience with DK Appliance Care.
        </p>
        <h2>Information We <em>Use</em></h2>
        <p>
          This may include your name, phone number, address, appliance details,
          and appointment preferences. We only use it to deliver and support the
          service you request.
        </p>
        <h2>Keeping Data <em>Safe</em></h2>
        <p>
          We do not sell your personal information. Access is limited to the team
          members and service partners who need it to assist with your booking.
        </p>
        <h2>Questions About <em>Privacy?</em></h2>
        <p>
          Contact our support team if you would like to ask about, update, or
          remove the information connected to your enquiry.
        </p>
      </article>
    </main>
  );
}
