"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaChevronDown,
  FaCircleQuestion,
  FaPhone,
  FaWhatsapp,
  FaScrewdriverWrench,
  FaCalendarCheck,
  FaIndianRupeeSign,
  FaShieldHalved,
  FaCreditCard,
  FaLocationDot,
} from "react-icons/fa6";

/* =========================================
   TYPES
========================================= */

type FAQCategory =
  | "All Questions"
  | "Booking"
  | "Services"
  | "Pricing"
  | "Payments"
  | "Warranty";

type FAQ = {
  id: number;
  category: Exclude<FAQCategory, "All Questions">;
  question: string;
  answer: string;
};

/* =========================================
   FAQ DATA
========================================= */

const faqs: FAQ[] = [
  {
    id: 1,
    category: "Booking",
    question: "How can I book an appliance repair service?",
    answer:
      "You can book a repair directly through our website by clicking the Book a Repair button. Select your appliance, choose the required service, provide your location, and select a convenient appointment date and time.",
  },
  {
    id: 2,
    category: "Booking",
    question: "Can I reschedule my service appointment?",
    answer:
      "If you need to reschedule an appointment, please contact our support team as early as possible. Rescheduling is subject to technician availability.",
  },
  {
    id: 3,
    category: "Booking",
    question: "How can I check my booking status?",
    answer:
      "You can visit the My Bookings page to check your booking information once booking lookup is available. Until then, please contact our support team with your booking details.",
  },
  {
    id: 4,
    category: "Booking",
    question: "Can I cancel my booking?",
    answer:
      "You can request a booking cancellation by contacting our support team. Any applicable cancellation charges or refund eligibility should be confirmed with our team.",
  },
  {
    id: 5,
    category: "Services",
    question: "Which appliances do you repair?",
    answer:
      "DK Appliance Care supports ACs, washing machines, refrigerators, geysers, microwave ovens, LCD/LED/Smart TVs, gas stoves, cooking ranges, commercial bhattis, and kitchen chimneys. Service availability may vary by location.",
  },
  {
    id: 6,
    category: "Services",
    question: "Do you provide doorstep appliance repair?",
    answer:
      "You can request a doorstep service appointment through our booking system. Our team will confirm whether an on-site visit is available for your appliance and location.",
  },
  {
    id: 7,
    category: "Services",
    question: "Do you repair appliances from different brands?",
    answer:
      "We handle service enquiries for appliances from various brands. Repair eligibility depends on the appliance model, condition, spare-part availability, and technician expertise.",
  },
  {
    id: 8,
    category: "Services",
    question: "Do you provide same-day repair services?",
    answer:
      "Same-day appointments may be available depending on your city, the type of appliance, and technician availability. Please contact our team to check the earliest available appointment.",
  },
  {
    id: 9,
    category: "Pricing",
    question: "How much does an appliance repair cost?",
    answer:
      "Repair costs depend on the appliance type, problem, replacement parts, and work required. You can review available pricing information on our Pricing page. A final estimate may require an inspection.",
  },
  {
    id: 10,
    category: "Pricing",
    question: "Are spare parts included in the service charge?",
    answer:
      "Replacement parts may be charged separately from inspection or labour charges. The applicable charges should be explained before the repair is approved.",
  },
  {
    id: 11,
    category: "Pricing",
    question: "Will I receive a cost estimate before repair?",
    answer:
      "You can request a cost estimate after the technician has assessed the issue. Where an inspection is necessary, the final repair amount may differ from an initial estimate.",
  },
  {
    id: 12,
    category: "Payments",
    question: "Which payment methods are accepted?",
    answer:
      "Please confirm the currently accepted payment methods with our support team when booking your appointment.",
  },
  {
    id: 13,
    category: "Payments",
    question: "Do I need to pay while booking?",
    answer:
      "Payment requirements depend on the selected service and the booking process. Any advance payment or inspection charge should be displayed or communicated before confirmation.",
  },
  {
    id: 14,
    category: "Warranty",
    question: "Do appliance repairs come with a warranty?",
    answer:
      "Warranty coverage, where offered, depends on the service performed and any replacement parts used. Please confirm the applicable warranty terms before approving the repair.",
  },
  {
    id: 15,
    category: "Warranty",
    question: "What should I do if the same problem occurs again?",
    answer:
      "Contact our support team with your booking details and a description of the issue. Our team can review your request and advise on the next steps, including any applicable warranty coverage.",
  },
];

/* =========================================
   CATEGORY DATA
========================================= */

const categories = [
  {
    label: "All Questions",
    icon: FaCircleQuestion,
  },
  {
    label: "Booking",
    icon: FaCalendarCheck,
  },
  {
    label: "Services",
    icon: FaScrewdriverWrench,
  },
  {
    label: "Pricing",
    icon: FaIndianRupeeSign,
  },
  {
    label: "Payments",
    icon: FaCreditCard,
  },
  {
    label: "Warranty",
    icon: FaShieldHalved,
  },
] as const;

/* =========================================
   FAQ PAGE
========================================= */

export default function FAQPage() {
  const [activeCategory, setActiveCategory] =
    useState<FAQCategory>("All Questions");

  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const filteredFAQs =
    activeCategory === "All Questions"
      ? faqs
      : faqs.filter(
          (faq) => faq.category === activeCategory
        );

  const handleCategoryChange = (category: FAQCategory) => {
    setActiveCategory(category);
    setOpenFAQ(null);
  };

  const toggleFAQ = (id: number) => {
    setOpenFAQ((previous) =>
      previous === id ? null : id
    );
  };

  return (
    <main className="faq-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="faq-hero">

        <div className="faq-container">

          <div className="hero-content">

            <h1>
              Frequently Asked
              <br />
              <em>Questions.</em>
            </h1>

            <p>
              Find answers to common questions about
              appliance repairs, bookings, pricing,
              payments, and service support.
            </p>

            <div className="hero-actions">

              <Link
                href="/book-repair"
                className="primary-button"
              >
                Book a Repair
                <FaArrowRight />
              </Link>

              <Link
                href="/contact"
                className="secondary-button"
              >
                Contact Support
              </Link>

            </div>

          </div>

          <div className="hero-decoration">

            <div className="decoration-circle">
              <FaCircleQuestion />
            </div>

            <div className="floating-label">
              <FaShieldHalved />
              <span>Here to help</span>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          FAQ SECTION
      ===================================== */}

      <section className="faq-section">

        <div className="faq-container">

          <div className="section-heading">

            <h2>
              How can we <em>help you?</em>
            </h2>

            <p>
              Browse by category or explore all frequently
              asked questions below.
            </p>

          </div>

          {/* CATEGORY FILTER */}

          <div className="category-list">

            {categories.map((category) => {
              const Icon = category.icon;

              const isActive =
                activeCategory === category.label;

              return (
                <button
                  key={category.label}
                  type="button"
                  className={`category-button ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() =>
                    handleCategoryChange(category.label)
                  }
                >
                  <Icon />
                  {category.label}
                </button>
              );
            })}

          </div>

          {/* FAQ ACCORDION */}

          <div className="faq-list">

            {filteredFAQs.map((faq, index) => {
              const isOpen = openFAQ === faq.id;
              const answerId = `faq-answer-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`faq-item ${
                    isOpen ? "open" : ""
                  }`}
                >

                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >

                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="question-text">
                      {faq.question}
                    </span>

                    <span className="faq-toggle">
                      <FaChevronDown />
                    </span>

                  </button>

                  {isOpen && (
                    <div
                      className="faq-answer"
                      id={answerId}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}

                </div>
              );
            })}

          </div>

          <p className="faq-count">
            Showing {filteredFAQs.length} questions
          </p>

        </div>

      </section>

      {/* =====================================
          CONTACT SUPPORT
      ===================================== */}

      <section className="support-section">

        <div className="faq-container">

          <div className="support-box">

            <div className="support-content">

              <h2>
                Didn&apos;t find
                <br />
                <em>your answer?</em>
              </h2>

              <p>
                Our support team is here to assist you
                with bookings, repair enquiries, and
                general service questions.
              </p>

              <div className="support-actions">

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

              </div>

            </div>

            <Link
              href="/contact"
              className="support-button"
            >
              Contact Us
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================
          COMPLETE CSS
      ===================================== */}

      <style jsx>{`

        /* ROOT */

        .faq-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: var(--text-primary, #172b3a);
          font-family: var(--font-body), Arial, sans-serif;
        }

        .faq-container {
          width: 90%;
          max-width: 1240px;
          margin: 0 auto;
        }

        /* HERO */

        .faq-hero {
          position: relative;
          padding: 110px 0 105px;
          background: var(--surface-blue, #f2f7fc);
        }

        .faq-hero .faq-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        .hero-content {
          max-width: 660px;
          position: relative;
          z-index: 2;
        }

        .hero-content h1 {
          margin: 0 0 24px;
          font-family: Georgia, serif;
          font-size: clamp(50px, 6vw, 84px);
          font-weight: 400;
          line-height: 1.12;
          letter-spacing: -2px;
          color: var(--primary, #123b5d);
        }

        .hero-content h1 em {
          color: var(--secondary, #357da3);
          font-weight: 400;
        }

        .hero-content p {
          max-width: 540px;
          margin: 0;
          font-size: 15px;
          line-height: 1.9;
          color: var(--text-secondary, #667684);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 35px;
        }

        .hero-actions :global(a) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 15px 24px;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .hero-actions :global(.primary-button) {
          background: var(--secondary, #357da3);
          color: #ffffff;
        }

        .hero-actions :global(.primary-button:hover) {
          background: var(--primary, #123b5d);
          transform: translateY(-2px);
        }

        .hero-actions :global(.secondary-button) {
          border: 1px solid #cddae6;
          color: var(--primary, #123b5d);
          background: #ffffff;
        }

        .hero-actions :global(.secondary-button:hover) {
          border-color: var(--secondary, #357da3);
        }

        /* HERO DECORATION */

        .hero-decoration {
          position: relative;
          width: 290px;
          height: 290px;
          flex-shrink: 0;
        }

        .decoration-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #e3edf7;
          border: 1px solid #d4e3f0;
          color: var(--secondary, #357da3);
          font-size: 105px;
        }

        .floating-label {
          position: absolute;
          bottom: 20px;
          left: -45px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 22px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 15px 40px rgba(20, 50, 80, 0.08);
          font-size: 13px;
          font-weight: 600;
          color: var(--primary, #123b5d);
        }

        .floating-label svg {
          color: var(--secondary, #357da3);
        }

        /* FAQ SECTION */

        .faq-section {
          padding: 100px 0;
        }

        .section-heading {
          max-width: 700px;
          margin-bottom: 40px;
        }

        .section-heading h2 {
          margin: 0 0 18px;
          font-family: Georgia, serif;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 400;
          letter-spacing: -1px;
          color: var(--primary, #123b5d);
        }

        .section-heading h2 em {
          font-weight: 400;
          color: var(--secondary, #357da3);
        }

        .section-heading p {
          font-size: 14px;
          line-height: 1.8;
          color: var(--text-secondary, #667684);
        }

        /* CATEGORY BUTTONS */

        .category-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 40px;
        }

        .category-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 18px;
          border: 1px solid #e1e9f0;
          border-radius: 40px;
          background: #ffffff;
          color: var(--text-secondary, #667684);
          font-family: inherit;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .category-button:hover {
          border-color: var(--secondary, #357da3);
          color: var(--primary, #123b5d);
        }

        .category-button.active {
          background: var(--primary, #123b5d);
          border-color: var(--primary, #123b5d);
          color: #ffffff;
        }

        /* FAQ ACCORDION */

        .faq-list {
          border-top: 1px solid #e4eaf0;
        }

        .faq-item {
          border-bottom: 1px solid #e4eaf0;
          transition: background 0.25s ease;
        }

        .faq-item.open {
          background: #f9fbfd;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 27px 24px;
          border: none;
          background: transparent;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }

        .faq-number {
          font-size: 12px;
          font-weight: 600;
          color: var(--secondary, #357da3);
          flex-shrink: 0;
        }

        .question-text {
          flex: 1;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.6;
          color: var(--primary, #123b5d);
        }

        .faq-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: 1px solid #dce6ef;
          border-radius: 50%;
          color: var(--primary, #123b5d);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .faq-item.open .faq-toggle {
          background: var(--secondary, #357da3);
          border-color: var(--secondary, #357da3);
          color: #ffffff;
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 75px 28px;
        }

        .faq-answer p {
          max-width: 900px;
          margin: 0;
          font-size: 14px;
          line-height: 1.9;
          color: var(--text-secondary, #667684);
        }

        .faq-count {
          margin-top: 24px;
          font-size: 12px;
          color: var(--text-secondary, #667684);
        }

        /* SUPPORT SECTION */

        .support-section {
          padding: 0 0 100px;
        }

        .support-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          padding: 55px 60px;
          border-radius: 20px;
          background: var(--surface-blue, #f2f7fc);
        }

        .support-content {
          max-width: 650px;
        }

        .support-content h2 {
          margin: 18px 0;
          font-family: Georgia, serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 400;
          line-height: 1.2;
          color: var(--primary, #123b5d);
        }

        .support-content h2 em {
          color: var(--secondary, #357da3);
          font-weight: 400;
        }

        .support-content p {
          max-width: 530px;
          font-size: 14px;
          line-height: 1.8;
          color: var(--text-secondary, #667684);
        }

        .support-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 28px;
        }

        .support-actions :global(a) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary, #123b5d);
          text-decoration: none;
        }

        .support-actions :global(a:hover) {
          color: var(--secondary, #357da3);
        }

        .support-actions :global(svg) {
          color: var(--secondary, #357da3);
        }

        .support-box :global(.support-button) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
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

        .support-box :global(.support-button:hover) {
          background: var(--primary, #123b5d);
          transform: translateY(-2px);
        }

        /* TABLET */

        @media (max-width: 1024px) {
          .hero-decoration {
            width: 220px;
            height: 220px;
          }

          .decoration-circle {
            font-size: 80px;
          }

          .support-box {
            padding: 45px;
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {
          .faq-container {
            width: calc(100% - 40px);
          }

          .faq-hero {
            padding: 75px 0;
          }

          .faq-hero .faq-container {
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-content h1 {
            font-size: 48px;
          }

          .hero-decoration {
            display: none;
          }

          .faq-section {
            padding: 70px 0;
          }

          .faq-question {
            gap: 14px;
            padding: 22px 12px;
          }

          .question-text {
            font-size: 14px;
          }

          .faq-answer {
            padding: 0 20px 24px 44px;
          }

          .support-section {
            padding-bottom: 70px;
          }

          .support-box {
            flex-direction: column;
            align-items: flex-start;
            padding: 35px 25px;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 40px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .category-button {
            font-size: 12px;
            padding: 11px 14px;
          }

          .faq-number {
            display: none;
          }

          .faq-answer {
            padding-left: 12px;
          }

          .support-box :global(.support-button) {
            width: 100%;
          }
        }

        /* ACCESSIBILITY */

        .faq-page :global(a:focus-visible),
        .faq-page button:focus-visible {
          outline: 2px solid var(--secondary, #357da3);
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-page *,
          .faq-page *::before,
          .faq-page *::after {
            transition: none !important;
          }
        }

      `}</style>
    </main>
  );
}
