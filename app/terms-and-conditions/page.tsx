"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaChevronRight,
  FaFileContract,
  FaCalendarCheck,
  FaScrewdriverWrench,
  FaIndianRupeeSign,
  FaCircleCheck,
  FaTriangleExclamation,
  FaShieldHalved,
  FaUserCheck,
  FaScaleBalanced,
  FaRotate,
  FaCircleInfo,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";

/* =========================================
   TERMS SECTIONS
========================================= */

const termsSections = [
  { id: "introduction", title: "Introduction", icon: FaFileContract },
  { id: "services", title: "Our Services", icon: FaScrewdriverWrench },
  { id: "bookings", title: "Bookings & Appointments", icon: FaCalendarCheck },
  { id: "pricing", title: "Pricing & Payments", icon: FaIndianRupeeSign },
  { id: "cancellation", title: "Cancellations & Refunds", icon: FaRotate },
  { id: "warranty", title: "Service Warranty", icon: FaShieldHalved },
  { id: "responsibilities", title: "Customer Responsibilities", icon: FaUserCheck },
  { id: "limitations", title: "Limitations of Liability", icon: FaTriangleExclamation },
  { id: "third-party", title: "Third-Party Products", icon: FaCircleCheck },
  { id: "law", title: "Applicable Law", icon: FaScaleBalanced },
  { id: "changes", title: "Changes to Terms", icon: FaCircleInfo },
  { id: "contact", title: "Contact Us", icon: FaEnvelope },
];

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <main className="terms-page">

      {/* HERO */}

      <section className="terms-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <FaChevronRight />
            <span>Terms & Conditions</span>
          </div>

          <div className="hero-content">
            <h1>
              Terms & <em>Conditions.</em>
            </h1>

            <p>
              Please review the terms governing the use of the
              DK Appliance Care website and our appliance repair
              and maintenance services.
            </p>

            <div className="hero-meta">
              <span>
                <FaFileContract />
                Service Terms
              </span>

              <span>
                <FaShieldHalved />
                Customer Information
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}

      <section className="terms-content-section">
        <div className="container">
          <div className="terms-layout">

            {/* SIDEBAR */}

            <aside className="terms-sidebar">
              <div className="sidebar-inner">
                <span className="sidebar-label">ON THIS PAGE</span>

                <nav aria-label="Terms and conditions sections">
                  {termsSections.map((section) => {
                    const Icon = section.icon;

                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`sidebar-link ${
                          activeSection === section.id ? "active" : ""
                        }`}
                        onClick={() => setActiveSection(section.id)}
                      >
                        <Icon />
                        <span>{section.title}</span>
                      </a>
                    );
                  })}
                </nav>

                <div className="sidebar-help">
                  <FaFileContract />

                  <h3>Have a question?</h3>

                  <p>
                    Contact our team if you need clarification
                    about our services or these terms.
                  </p>

                  <Link href="/contact">
                    Contact Support
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT */}

            <div className="terms-content">

              <div className="terms-notice">
                <FaCircleInfo />

                <div>
                  <strong>Important information</strong>
                  <p>
                    These terms are a draft for DK Appliance Care.
                    Service charges, cancellation rules, warranties,
                    and other business-specific conditions must be
                    confirmed before publishing this document.
                  </p>
                </div>
              </div>

              {/* 01 */}

              <section id="introduction" className="content-block">
                <div className="block-heading">
                  <span>01</span>
                  <h2>Introduction</h2>
                </div>

                <p>
                  Welcome to DK Appliance Care. These Terms &
                  Conditions describe the proposed conditions
                  governing the use of our website and the
                  appliance repair and maintenance services
                  requested through it.
                </p>

                <p>
                  Customers should review the applicable service
                  details, charges, and appointment conditions
                  before confirming a booking.
                </p>

                <p>
                  These terms should be finalized and published
                  by DK Appliance Care before they are relied upon
                  as binding service conditions.
                </p>
              </section>

              {/* 02 */}

              <section id="services" className="content-block">
                <div className="block-heading">
                  <span>02</span>
                  <h2>Our Services</h2>
                </div>

                <p>
                  DK Appliance Care offers appliance repair,
                  inspection, installation, and maintenance
                  services, subject to service availability.
                </p>

                <p>Service categories may include:</p>

                <ul>
                  <li>Air conditioner repair and servicing</li>
                  <li>Washing machine repair</li>
                  <li>Refrigerator repair</li>
                  <li>Television repair</li>
                  <li>Microwave repair</li>
                  <li>Water purifier servicing</li>
                  <li>Geyser repair</li>
                  <li>Electrical services</li>
                  <li>CCTV-related services</li>
                  <li>Kitchen chimney repair</li>
                  <li>Treadmill repair</li>
                </ul>

                <p>
                  The availability of particular services may
                  depend on the customer&apos;s location, appliance
                  type, required expertise, and spare parts.
                </p>
              </section>

              {/* 03 */}

              <section id="bookings" className="content-block">
                <div className="block-heading">
                  <span>03</span>
                  <h2>Bookings & Appointments</h2>
                </div>

                <p>
                  Customers may request service appointments
                  through the website or available support
                  channels.
                </p>

                <p>
                  A booking request may include the following
                  information:
                </p>

                <ul>
                  <li>Customer name and mobile number</li>
                  <li>Service address and city</li>
                  <li>Appliance type and reported issue</li>
                  <li>Preferred appointment date and time</li>
                  <li>Additional service instructions</li>
                </ul>

                <p>
                  A requested appointment should not be treated
                  as confirmed until the customer receives
                  confirmation through an authorized
                  communication channel.
                </p>

                <p>
                  Appointment timing may be affected by
                  technician availability, travel conditions,
                  and other operational circumstances.
                </p>
              </section>

              {/* 04 */}

              <section id="pricing" className="content-block">
                <div className="block-heading">
                  <span>04</span>
                  <h2>Pricing & Payments</h2>
                </div>

                <p>
                  Service charges may vary according to the
                  appliance category, nature of the issue,
                  inspection findings, location, and required
                  replacement parts.
                </p>

                <p>
                  Any inspection fee, visiting charge, labour
                  charge, spare-part cost, or applicable tax
                  should be communicated to the customer
                  before the relevant charge is incurred.
                </p>

                <h3>Service Estimates</h3>

                <p>
                  Where the final repair cost cannot be
                  determined in advance, an estimate may be
                  provided after inspecting the appliance.
                </p>

                <p>
                  Customers should be informed of additional
                  work or charges before proceeding with
                  repairs beyond the agreed scope.
                </p>

                <h3>Payments</h3>

                <p>
                  Available payment methods and payment timing
                  should be communicated when the booking or
                  service is confirmed.
                </p>
              </section>

              {/* 05 */}

              <section id="cancellation" className="content-block">
                <div className="block-heading">
                  <span>05</span>
                  <h2>Cancellations & Refunds</h2>
                </div>

                <p>
                  Customers who wish to cancel or reschedule
                  an appointment should contact DK Appliance
                  Care as early as possible.
                </p>

                <p>
                  Cancellation eligibility, any applicable
                  cancellation charges, and refund conditions
                  depend on the final policy adopted by
                  DK Appliance Care.
                </p>

                <p>
                  Before publishing these terms, the business
                  should clearly specify:
                </p>

                <ul>
                  <li>When customers may cancel without charges</li>
                  <li>Whether visiting or inspection fees are refundable</li>
                  <li>How prepaid bookings are refunded</li>
                  <li>Applicable refund processing timelines</li>
                  <li>Conditions for rescheduling appointments</li>
                </ul>

                <p>
                  Customers may contact the support team to
                  enquire about the conditions applicable
                  to their booking.
                </p>
              </section>

              {/* 06 */}

              <section id="warranty" className="content-block">
                <div className="block-heading">
                  <span>06</span>
                  <h2>Service Warranty</h2>
                </div>

                <p>
                  Warranty coverage, where offered, should
                  be communicated to the customer at the
                  time of service.
                </p>

                <p>
                  Warranty eligibility may depend on the
                  nature of the repair, the replacement
                  parts used, and the terms provided with
                  the service.
                </p>

                <p>
                  Any warranty policy should clearly identify
                  its duration, covered defects, exclusions,
                  and claim procedure.
                </p>

                <p>
                  No specific warranty period is stated
                  here until DK Appliance Care confirms
                  its actual service warranty policy.
                </p>
              </section>

              {/* 07 */}

              <section id="responsibilities" className="content-block">
                <div className="block-heading">
                  <span>07</span>
                  <h2>Customer Responsibilities</h2>
                </div>

                <p>
                  Customers are expected to provide accurate
                  information when requesting a service.
                </p>

                <p>Customers should:</p>

                <ul>
                  <li>Provide accurate contact and address details</li>
                  <li>Describe the appliance issue as clearly as possible</li>
                  <li>Ensure reasonable access to the appliance</li>
                  <li>Follow relevant electrical and appliance safety guidance</li>
                  <li>Inform the technician about previous repairs or known hazards</li>
                  <li>Review and approve proposed charges before additional work</li>
                </ul>

                <p>
                  Customers should avoid operating appliances
                  that appear unsafe or show signs of serious
                  electrical or mechanical damage.
                </p>
              </section>

              {/* 08 */}

              <section id="limitations" className="content-block">
                <div className="block-heading">
                  <span>08</span>
                  <h2>Limitations of Liability</h2>
                </div>

                <p>
                  Repair outcomes may depend on appliance age,
                  condition, previous repairs, spare-part
                  availability, and the nature of the defect.
                </p>

                <p>
                  Certain appliances may require additional
                  inspection or may not be economically
                  repairable.
                </p>

                <p>
                  Any limitation of liability included in
                  the final service agreement must comply
                  with applicable law and must not exclude
                  rights or remedies that cannot lawfully
                  be excluded.
                </p>
              </section>

              {/* 09 */}

              <section id="third-party" className="content-block">
                <div className="block-heading">
                  <span>09</span>
                  <h2>Third-Party Products & Brands</h2>
                </div>

                <p>
                  DK Appliance Care may provide repair
                  services for appliances manufactured
                  by various third-party brands.
                </p>

                <p>
                  References to brand names, trademarks,
                  and product models are intended to
                  identify the appliances for which
                  customers request services.
                </p>

                <p>
                  Unless expressly stated and verified,
                  such references should not be understood
                  as indicating authorization, sponsorship,
                  or endorsement by the appliance manufacturer.
                </p>
              </section>

              {/* 10 */}

              <section id="law" className="content-block">
                <div className="block-heading">
                  <span>10</span>
                  <h2>Applicable Law</h2>
                </div>

                <p>
                  The final Terms & Conditions should
                  identify the applicable governing law
                  and any legally valid dispute resolution
                  arrangements.
                </p>

                <p>
                  Consumer rights and statutory remedies
                  available under applicable Indian law
                  remain subject to the relevant legal
                  requirements.
                </p>
              </section>

              {/* 11 */}

              <section id="changes" className="content-block">
                <div className="block-heading">
                  <span>11</span>
                  <h2>Changes to These Terms</h2>
                </div>

                <p>
                  DK Appliance Care may revise its published
                  Terms & Conditions to reflect changes
                  in services, operational practices,
                  pricing policies, or legal requirements.
                </p>

                <p>
                  The published version should identify
                  its effective date. Where required,
                  customers should receive appropriate
                  notice of material changes.
                </p>
              </section>

              {/* 12 */}

              <section id="contact" className="content-block">
                <div className="block-heading">
                  <span>12</span>
                  <h2>Contact Us</h2>
                </div>

                <p>
                  If you have questions about these terms,
                  a booking, or a service request, please
                  contact DK Appliance Care.
                </p>

                <div className="contact-card">
                  <h3>DK Appliance Care</h3>

                  <a href="tel:+919781629990">
                    <FaPhone />
                    +91 97816-29990
                  </a>

                  <a
                    href="https://wa.me/919781629990"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                    WhatsApp Us
                  </a>

                  <Link href="/contact">
                    <FaEnvelope />
                    Contact Form
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}

      <section className="bottom-section">
        <div className="container">
          <div className="bottom-box">
            <div>
              <h2>We&apos;re here to help.</h2>

              <p>
                Have questions about our repair services,
                appointments, or service terms?
                Our team is ready to assist you.
              </p>
            </div>

            <Link href="/contact" className="contact-button">
              Contact Support
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CSS */}

      <style jsx>{`
        .terms-page {
          width: 100%;
          background: #ffffff;
          color: var(--text-primary, #172b3a);
          font-family: var(--font-body), Arial, sans-serif;
        }

        .container {
          width: 90%;
          max-width: 1240px;
          margin: 0 auto;
        }

        /* HERO */

        .terms-hero {
          padding: 75px 0 90px;
          background: var(--surface-blue, #f2f7fc);
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 65px;
          font-size: 12px;
          color: var(--text-secondary, #667684);
        }

        .breadcrumb :global(a) {
          color: inherit;
          text-decoration: none;
        }

        .breadcrumb :global(a:hover) {
          color: var(--secondary, #357da3);
        }

        .breadcrumb svg {
          font-size: 9px;
        }

        .hero-content {
          max-width: 780px;
        }

        .hero-content h1 {
          margin: 0 0 25px;
          font-family: Georgia, serif;
          font-size: clamp(50px, 6vw, 86px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -2px;
          color: var(--primary, #123b5d);
        }

        .hero-content h1 em {
          color: var(--secondary, #357da3);
          font-weight: 400;
        }

        .hero-content p {
          max-width: 630px;
          margin: 0;
          font-size: 15px;
          line-height: 1.9;
          color: var(--text-secondary, #667684);
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          margin-top: 32px;
        }

        .hero-meta span {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: var(--primary, #123b5d);
        }

        .hero-meta svg {
          color: var(--secondary, #357da3);
        }

        /* LAYOUT */

        .terms-content-section {
          padding: 90px 0;
        }

        .terms-layout {
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr);
          align-items: start;
          gap: 75px;
        }

        /* SIDEBAR */

        .terms-sidebar {
          position: sticky;
          top: 110px;
        }

        .sidebar-inner {
          padding: 25px;
          border: 1px solid #e3eaf0;
          border-radius: 14px;
          background: #ffffff;
        }

        .sidebar-label {
          display: block;
          margin-bottom: 20px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--text-secondary, #667684);
        }

        .sidebar-inner nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
          font-size: 12px;
          line-height: 1.5;
          color: var(--text-secondary, #667684);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .sidebar-link svg {
          flex-shrink: 0;
          font-size: 13px;
        }

        .sidebar-link:hover {
          background: #f4f8fc;
          color: var(--primary, #123b5d);
        }

        .sidebar-link.active {
          background: var(--surface-blue, #f2f7fc);
          color: var(--primary, #123b5d);
          font-weight: 600;
        }

        .sidebar-link.active svg {
          color: var(--secondary, #357da3);
        }

        .sidebar-help {
          margin-top: 25px;
          padding: 22px 18px;
          border-radius: 10px;
          background: var(--surface-blue, #f2f7fc);
        }

        .sidebar-help > svg {
          margin-bottom: 15px;
          font-size: 22px;
          color: var(--secondary, #357da3);
        }

        .sidebar-help h3 {
          margin: 0 0 10px;
          font-size: 14px;
          font-weight: 600;
          color: var(--primary, #123b5d);
        }

        .sidebar-help p {
          margin: 0 0 18px;
          font-size: 12px;
          line-height: 1.7;
          color: var(--text-secondary, #667684);
        }

        .sidebar-help :global(a) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 600;
          color: var(--secondary, #357da3);
          text-decoration: none;
        }

        /* CONTENT */

        .terms-content {
          min-width: 0;
        }

        .terms-notice {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 55px;
          padding: 22px 25px;
          border: 1px solid #dce7f0;
          border-radius: 12px;
          background: #f7fafd;
        }

        .terms-notice > svg {
          flex-shrink: 0;
          margin-top: 3px;
          font-size: 18px;
          color: var(--secondary, #357da3);
        }

        .terms-notice strong {
          display: block;
          margin-bottom: 7px;
          font-size: 13px;
          color: var(--primary, #123b5d);
        }

        .terms-notice p {
          margin: 0;
          font-size: 12px;
          line-height: 1.8;
          color: var(--text-secondary, #667684);
        }

        .content-block {
          margin-bottom: 55px;
          padding-bottom: 50px;
          border-bottom: 1px solid #e8edf2;
          scroll-margin-top: 110px;
        }

        .content-block:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .block-heading {
          display: flex;
          align-items: baseline;
          gap: 18px;
          margin-bottom: 25px;
        }

        .block-heading span {
          font-size: 12px;
          font-weight: 700;
          color: var(--secondary, #357da3);
        }

        .block-heading h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: clamp(27px, 3vw, 37px);
          font-weight: 400;
          line-height: 1.25;
          color: var(--primary, #123b5d);
        }

        .content-block h3 {
          margin: 30px 0 15px;
          font-size: 16px;
          font-weight: 600;
          color: var(--primary, #123b5d);
        }

        .content-block p {
          margin: 0 0 20px;
          font-size: 14px;
          line-height: 1.95;
          color: var(--text-secondary, #667684);
        }

        .content-block ul {
          margin: 15px 0 25px;
          padding-left: 22px;
        }

        .content-block li {
          margin-bottom: 12px;
          padding-left: 5px;
          font-size: 14px;
          line-height: 1.8;
          color: var(--text-secondary, #667684);
        }

        .content-block li::marker {
          color: var(--secondary, #357da3);
        }

        /* CONTACT CARD */

        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
          max-width: 450px;
          margin-top: 25px;
          padding: 28px;
          border: 1px solid #e1e9f0;
          border-radius: 12px;
          background: #fbfcfe;
        }

        .contact-card h3 {
          margin: 0 0 5px;
        }

        .contact-card :global(a) {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: var(--primary, #123b5d);
          text-decoration: none;
        }

        .contact-card :global(a:hover) {
          color: var(--secondary, #357da3);
        }

        .contact-card :global(svg) {
          color: var(--secondary, #357da3);
        }

        /* BOTTOM CTA */

        .bottom-section {
          padding: 0 0 100px;
        }

        .bottom-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 45px;
          padding: 50px 55px;
          border-radius: 18px;
          background: var(--surface-blue, #f2f7fc);
        }

        .bottom-box h2 {
          margin: 16px 0;
          font-family: Georgia, serif;
          font-size: clamp(30px, 3.5vw, 44px);
          font-weight: 400;
          color: var(--primary, #123b5d);
        }

        .bottom-box p {
          max-width: 530px;
          margin: 0;
          font-size: 14px;
          line-height: 1.8;
          color: var(--text-secondary, #667684);
        }

        .bottom-box :global(.contact-button) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 16px 26px;
          border-radius: 40px;
          background: var(--secondary, #357da3);
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .bottom-box :global(.contact-button:hover) {
          background: var(--primary, #123b5d);
          transform: translateY(-2px);
        }

        /* TABLET */

        @media (max-width: 1024px) {
          .terms-layout {
            grid-template-columns: 230px minmax(0, 1fr);
            gap: 40px;
          }

          .sidebar-inner {
            padding: 18px;
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {
          .container {
            width: calc(100% - 40px);
          }

          .terms-hero {
            padding: 55px 0 70px;
          }

          .breadcrumb {
            margin-bottom: 45px;
          }

          .hero-content h1 {
            font-size: 48px;
          }

          .terms-content-section {
            padding: 65px 0;
          }

          .terms-layout {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .terms-sidebar {
            position: static;
          }

          .sidebar-inner nav {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sidebar-help {
            display: none;
          }

          .bottom-section {
            padding-bottom: 70px;
          }

          .bottom-box {
            flex-direction: column;
            align-items: flex-start;
            padding: 35px 25px;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 40px;
          }

          .sidebar-inner nav {
            grid-template-columns: 1fr;
          }

          .block-heading {
            gap: 12px;
          }

          .block-heading h2 {
            font-size: 27px;
          }

          .terms-notice {
            padding: 18px;
          }

          .bottom-box :global(.contact-button) {
            width: 100%;
          }
        }

        /* ACCESSIBILITY */

        .terms-page :global(a:focus-visible) {
          outline: 2px solid var(--secondary, #357da3);
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .terms-page *,
          .terms-page *::before,
          .terms-page *::after {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
