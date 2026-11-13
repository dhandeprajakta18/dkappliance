"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaShieldHalved,
  FaLock,
  FaDatabase,
  FaCookieBite,
  FaUserShield,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaCircleInfo,
  FaChevronRight,
  FaFileLines,
} from "react-icons/fa6";

/* =========================================
   PRIVACY POLICY SECTIONS
========================================= */

const policySections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    icon: FaFileLines,
  },
  {
    id: "information",
    number: "02",
    title: "Information We Collect",
    icon: FaDatabase,
  },
  {
    id: "usage",
    number: "03",
    title: "How We Use Information",
    icon: FaUserShield,
  },
  {
    id: "sharing",
    number: "04",
    title: "Information Sharing",
    icon: FaShieldHalved,
  },
  {
    id: "security",
    number: "05",
    title: "Data Security",
    icon: FaLock,
  },
  {
    id: "cookies",
    number: "06",
    title: "Cookies & Tracking",
    icon: FaCookieBite,
  },
  {
    id: "rights",
    number: "07",
    title: "Your Privacy Rights",
    icon: FaUserShield,
  },
  {
    id: "retention",
    number: "08",
    title: "Data Retention",
    icon: FaDatabase,
  },
  {
    id: "third-party",
    number: "09",
    title: "Third-Party Services",
    icon: FaArrowUpRightFromSquare,
  },
  {
    id: "updates",
    number: "10",
    title: "Policy Updates",
    icon: FaCircleInfo,
  },
  {
    id: "contact",
    number: "11",
    title: "Contact Us",
    icon: FaEnvelope,
  },
];

/* =========================================
   PRIVACY POLICY PAGE
========================================= */

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] =
    useState("introduction");

  return (
    <main className="privacy-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="privacy-hero">

        <div className="container">

          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <FaChevronRight />
            <span>Privacy Policy</span>
          </div>

          <div className="hero-content">

            <h1>
              Privacy <em>Policy.</em>
            </h1>

            <p>
              Your privacy matters to us. Learn about
              the information we may collect, how it is
              used, and the choices available to you
              when using DK Appliance Care services.
            </p>

            <div className="hero-meta">

              <span>
                <FaShieldHalved />
                Privacy Information
              </span>

              <span>
                <FaLock />
                Data Protection
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          POLICY CONTENT
      ===================================== */}

      <section className="policy-section">

        <div className="container">

          <div className="policy-layout">

            {/* =====================================
                SIDEBAR
            ===================================== */}

            <aside className="policy-sidebar">

              <div className="sidebar-inner">

                <span className="sidebar-label">
                  ON THIS PAGE
                </span>

                <nav aria-label="Privacy policy sections">

                  {policySections.map((section) => {
                    const Icon = section.icon;

                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`sidebar-link ${
                          activeSection === section.id
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          setActiveSection(section.id)
                        }
                      >
                        <Icon />
                        <span>{section.title}</span>
                      </a>
                    );
                  })}

                </nav>

                <div className="sidebar-help">

                  <FaShieldHalved />

                  <h3>Need assistance?</h3>

                  <p>
                    Contact our team if you have
                    questions about this policy.
                  </p>

                  <Link href="/contact">
                    Contact Support
                    <FaArrowRight />
                  </Link>

                </div>

              </div>

            </aside>

            {/* =====================================
                MAIN POLICY CONTENT
            ===================================== */}

            <div className="policy-content">

              {/* NOTICE */}

              <div className="policy-notice">

                <FaCircleInfo />

                <div>
                  <strong>About this document</strong>

                  <p>
                    This page explains the intended
                    privacy practices of DK Appliance Care.
                    The final policy should be reviewed
                    against the website&apos;s actual data
                    collection, service providers, and
                    applicable legal requirements before
                    publication.
                  </p>
                </div>

              </div>

              {/* 01 INTRODUCTION */}

              <section
                id="introduction"
                className="content-block"
              >

                <div className="block-heading">
                  <span>01</span>
                  <h2>Introduction</h2>
                </div>

                <p>
                  Welcome to DK Appliance Care.
                  This Privacy Policy describes how
                  information may be collected, used,
                  shared, and protected when customers
                  visit our website, submit enquiries,
                  or request appliance repair services.
                </p>

                <p>
                  We aim to handle customer information
                  responsibly and provide clear information
                  about our privacy practices.
                </p>

                <p>
                  This policy applies to information
                  processed through our website and
                  related customer service interactions,
                  subject to the final operating practices
                  adopted by DK Appliance Care.
                </p>

              </section>

              {/* 02 INFORMATION */}

              <section
                id="information"
                className="content-block"
              >

                <div className="block-heading">
                  <span>02</span>
                  <h2>Information We Collect</h2>
                </div>

                <p>
                  Depending on how you interact with
                  our website and services, we may
                  collect the following information:
                </p>

                <h3>Personal Information</h3>

                <ul>
                  <li>Full name</li>
                  <li>Mobile number</li>
                  <li>Email address, when provided</li>
                  <li>Service address and city</li>
                  <li>Booking and appointment details</li>
                </ul>

                <h3>Appliance & Service Information</h3>

                <ul>
                  <li>Appliance category and brand</li>
                  <li>Reported appliance issues</li>
                  <li>Preferred appointment date and time</li>
                  <li>Service history and repair enquiries</li>
                  <li>Customer feedback and support requests</li>
                </ul>

                <h3>Technical Information</h3>

                <p>
                  Our website or its service providers
                  may process technical information,
                  such as browser type, device details,
                  IP address, and website usage data,
                  where necessary for website operation,
                  security, or analytics.
                </p>

              </section>

              {/* 03 USAGE */}

              <section
                id="usage"
                className="content-block"
              >

                <div className="block-heading">
                  <span>03</span>
                  <h2>How We Use Information</h2>
                </div>

                <p>
                  Information collected through our
                  services may be used for purposes
                  including:
                </p>

                <ul>
                  <li>
                    Processing appliance repair bookings
                    and service enquiries.
                  </li>

                  <li>
                    Contacting customers about appointments,
                    service updates, and support requests.
                  </li>

                  <li>
                    Coordinating technician visits and
                    service availability.
                  </li>

                  <li>
                    Preparing service estimates and
                    maintaining relevant booking records.
                  </li>

                  <li>
                    Responding to customer questions,
                    feedback, or complaints.
                  </li>

                  <li>
                    Maintaining website functionality,
                    preventing misuse, and improving
                    service quality.
                  </li>

                  <li>
                    Meeting applicable legal and
                    regulatory obligations.
                  </li>
                </ul>

              </section>

              {/* 04 SHARING */}

              <section
                id="sharing"
                className="content-block"
              >

                <div className="block-heading">
                  <span>04</span>
                  <h2>Information Sharing</h2>
                </div>

                <p>
                  Customer information may need to be
                  shared with authorized personnel or
                  service providers to complete requested
                  appliance repair services.
                </p>

                <p>
                  Depending on the service arrangements,
                  relevant information may be shared with:
                </p>

                <ul>
                  <li>
                    Technicians assigned to customer
                    service requests.
                  </li>

                  <li>
                    Customer support and scheduling teams.
                  </li>

                  <li>
                    Technology providers supporting
                    website hosting, communications,
                    or booking management.
                  </li>

                  <li>
                    Authorities where disclosure is
                    required by applicable law.
                  </li>
                </ul>

                <p>
                  The final policy should identify
                  any additional categories of third
                  parties involved in actual data
                  processing activities.
                </p>

              </section>

              {/* 05 SECURITY */}

              <section
                id="security"
                className="content-block"
              >

                <div className="block-heading">
                  <span>05</span>
                  <h2>Data Security</h2>
                </div>

                <p>
                  DK Appliance Care aims to implement
                  appropriate technical and organizational
                  measures to protect personal information
                  against unauthorized access, misuse,
                  alteration, or disclosure.
                </p>

                <p>
                  Security measures should be selected
                  based on the sensitivity of the
                  information and the systems used
                  to process it.
                </p>

                <p>
                  No online system can guarantee
                  absolute security. Customers should
                  also take reasonable precautions when
                  sharing personal information online.
                </p>

              </section>

              {/* 06 COOKIES */}

              <section
                id="cookies"
                className="content-block"
              >

                <div className="block-heading">
                  <span>06</span>
                  <h2>Cookies & Tracking</h2>
                </div>

                <p>
                  Our website may use cookies or
                  similar technologies to support
                  essential functionality, remember
                  user preferences, and understand
                  website performance.
                </p>

                <p>
                  Depending on the technologies
                  implemented, cookies may include:
                </p>

                <ul>
                  <li>
                    Essential cookies required for
                    website functionality.
                  </li>

                  <li>
                    Preference cookies that remember
                    selected settings.
                  </li>

                  <li>
                    Analytics cookies used to
                    understand website usage.
                  </li>
                </ul>

                <p>
                  The categories listed above are
                  illustrative. The final policy
                  should accurately describe the
                  cookies and tracking tools actually
                  used by the website.
                </p>

              </section>

              {/* 07 RIGHTS */}

              <section
                id="rights"
                className="content-block"
              >

                <div className="block-heading">
                  <span>07</span>
                  <h2>Your Privacy Rights</h2>
                </div>

                <p>
                  Subject to applicable law, customers
                  may have rights concerning their
                  personal information.
                </p>

                <p>
                  These may include the ability to:
                </p>

                <ul>
                  <li>
                    Request information about personal
                    data held about them.
                  </li>

                  <li>
                    Request correction of inaccurate
                    or incomplete information.
                  </li>

                  <li>
                    Request deletion of eligible
                    personal information.
                  </li>

                  <li>
                    Withdraw consent where processing
                    relies on consent.
                  </li>

                  <li>
                    Raise concerns about the handling
                    of personal information.
                  </li>
                </ul>

                <p>
                  Requests may be subject to identity
                  verification, legal exceptions,
                  and applicable retention obligations.
                </p>

              </section>

              {/* 08 RETENTION */}

              <section
                id="retention"
                className="content-block"
              >

                <div className="block-heading">
                  <span>08</span>
                  <h2>Data Retention</h2>
                </div>

                <p>
                  Personal information should be
                  retained only for as long as reasonably
                  necessary for the purposes for which
                  it was collected, including service
                  administration, customer support,
                  dispute resolution, and legal
                  compliance.
                </p>

                <p>
                  Specific retention periods should
                  be established based on the
                  categories of information collected
                  and applicable requirements.
                </p>

              </section>

              {/* 09 THIRD PARTY */}

              <section
                id="third-party"
                className="content-block"
              >

                <div className="block-heading">
                  <span>09</span>
                  <h2>Third-Party Services</h2>
                </div>

                <p>
                  Our website may include links to
                  external services, including
                  messaging platforms, social media
                  websites, and payment providers
                  where applicable.
                </p>

                <p>
                  These external services may have
                  their own privacy policies and
                  information handling practices.
                </p>

                <p>
                  We encourage customers to review
                  the privacy information provided
                  by third-party services before
                  sharing personal information.
                </p>

              </section>

              {/* 10 UPDATES */}

              <section
                id="updates"
                className="content-block"
              >

                <div className="block-heading">
                  <span>10</span>
                  <h2>Policy Updates</h2>
                </div>

                <p>
                  This Privacy Policy may be updated
                  to reflect changes in website
                  functionality, service operations,
                  technology providers, or applicable
                  legal requirements.
                </p>

                <p>
                  Material changes should be
                  communicated through an appropriate
                  notice, where required.
                </p>

              </section>

              {/* 11 CONTACT */}

              <section
                id="contact"
                className="content-block"
              >

                <div className="block-heading">
                  <span>11</span>
                  <h2>Contact Us</h2>
                </div>

                <p>
                  If you have questions about this
                  Privacy Policy or wish to raise a
                  privacy-related concern, please
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

      {/* =====================================
          BOTTOM CTA
      ===================================== */}

      <section className="bottom-section">

        <div className="container">

          <div className="bottom-box">

            <div>

              <h2>
                We&apos;re here to help.
              </h2>

              <p>
                Reach out to our team for assistance
                with privacy enquiries or service
                information.
              </p>

            </div>

            <Link
              href="/contact"
              className="contact-button"
            >
              Contact Support
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================
          COMPLETE CSS
      ===================================== */}

      <style jsx>{`

        /* =====================================
           ROOT
        ===================================== */

        .privacy-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: var(--text-primary, #172b3a);
          font-family: var(--font-body), Arial, sans-serif;
        }

        .container {
          width: 90%;
          max-width: 1240px;
          margin: 0 auto;
        }

        /* =====================================
           HERO
        ===================================== */

        .privacy-hero {
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
          color: var(--text-secondary, #667684);
          text-decoration: none;
        }

        .breadcrumb :global(a:hover) {
          color: var(--secondary, #357da3);
        }

        .breadcrumb svg {
          font-size: 9px;
        }

        .hero-content {
          max-width: 760px;
        }

        .hero-content h1 {
          margin: 0 0 25px;
          font-family: Georgia, serif;
          font-size: clamp(50px, 6vw, 86px);
          font-weight: 400;
          letter-spacing: -2px;
          line-height: 1.1;
          color: var(--primary, #123b5d);
        }

        .hero-content h1 em {
          font-weight: 400;
          color: var(--secondary, #357da3);
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
          align-items: center;
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

        /* =====================================
           POLICY LAYOUT
        ===================================== */

        .policy-section {
          padding: 90px 0;
        }

        .policy-layout {
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr);
          align-items: start;
          gap: 75px;
        }

        /* =====================================
           SIDEBAR
        ===================================== */

        .policy-sidebar {
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

        /* SIDEBAR HELP */

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

        /* =====================================
           CONTENT
        ===================================== */

        .policy-content {
          min-width: 0;
        }

        /* NOTICE */

        .policy-notice {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 55px;
          padding: 22px 25px;
          border: 1px solid #dce7f0;
          border-radius: 12px;
          background: #f7fafd;
        }

        .policy-notice > svg {
          flex-shrink: 0;
          margin-top: 3px;
          font-size: 18px;
          color: var(--secondary, #357da3);
        }

        .policy-notice strong {
          display: block;
          margin-bottom: 7px;
          font-size: 13px;
          color: var(--primary, #123b5d);
        }

        .policy-notice p {
          margin: 0;
          font-size: 12px;
          line-height: 1.8;
          color: var(--text-secondary, #667684);
        }

        /* CONTENT BLOCKS */

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

        /* =====================================
           BOTTOM CTA
        ===================================== */

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

        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 1024px) {
          .policy-layout {
            grid-template-columns: 230px minmax(0, 1fr);
            gap: 40px;
          }

          .sidebar-inner {
            padding: 18px;
          }
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 768px) {
          .container {
            width: calc(100% - 40px);
          }

          .privacy-hero {
            padding: 55px 0 70px;
          }

          .breadcrumb {
            margin-bottom: 45px;
          }

          .hero-content h1 {
            font-size: 48px;
          }

          .policy-section {
            padding: 65px 0;
          }

          .policy-layout {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .policy-sidebar {
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

          .policy-notice {
            padding: 18px;
          }

          .bottom-box :global(.contact-button) {
            width: 100%;
          }
        }

        /* =====================================
           ACCESSIBILITY
        ===================================== */

        .privacy-page :global(a:focus-visible) {
          outline: 2px solid var(--secondary, #357da3);
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .privacy-page *,
          .privacy-page *::before,
          .privacy-page *::after {
            transition: none !important;
          }
        }

      `}</style>
    </main>
  );
}
