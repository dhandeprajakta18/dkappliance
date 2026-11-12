"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaChevronDown,
  FaCircleCheck,
  FaClipboardCheck,
  FaDroplet,
  FaFireBurner,
  FaLocationDot,
  FaShieldHalved,
  FaShirt,
  FaSnowflake,
  FaScrewdriverWrench,
  FaTemperatureLow,
  FaTv,
  FaWallet,
} from "react-icons/fa6";

import styles from "./pricing.module.css";

const cities = [
  "Mumbai",
  "Pune",
  "Navi Mumbai",
  "Thane",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
];

const appliances = [
  {
    name: "Air Conditioner",
    icon: FaSnowflake,
    services: [
      { name: "Inspection", price: 350 },
      { name: "General Service", price: 400 },
      { name: "Installation", price: 900 },
      { name: "Uninstallation", price: 500 },
    ],
  },
  {
    name: "Washing Machine",
    icon: FaShirt,
    services: [
      { name: "Inspection", price: 350 },
      { name: "General Service", price: 799 },
      { name: "Installation", price: 600 },
    ],
  },
  {
    name: "Refrigerator",
    icon: FaTemperatureLow,
    services: [
      { name: "Inspection", price: 350 },
      { name: "General Service", price: 500 },
    ],
  },
  {
    name: "Television",
    icon: FaTv,
    services: [
      { name: "Inspection", price: 350 },
      { name: "Wall Mounting", price: 600 },
    ],
  },
  {
    name: "Microwave",
    icon: FaFireBurner,
    services: [
      { name: "Inspection", price: 350 },
      { name: "General Service", price: 500 },
    ],
  },
  {
    name: "Water Purifier",
    icon: FaDroplet,
    services: [
      { name: "Inspection", price: 250 },
      { name: "General Service", price: 350 },
      { name: "Installation", price: 600 },
    ],
  },
];

const billingSteps = [
  {
    number: "01",
    title: "Inspection First",
    description:
      "Our technician visits your home, inspects the appliance and identifies the issue.",
    icon: FaClipboardCheck,
  },
  {
    number: "02",
    title: "Transparent Estimate",
    description:
      "You receive an estimated repair cost, including labour and required spare parts, before work begins.",
    icon: FaWallet,
  },
  {
    number: "03",
    title: "Expert Repair",
    description:
      "Once you approve the estimate, our technician proceeds with the repair.",
    icon: FaScrewdriverWrench,
  },
  {
    number: "04",
    title: "Final Payment",
    description:
      "Pay after the service is completed according to the agreed final bill.",
    icon: FaCircleCheck,
  },
];

const faqs = [
  {
    question: "How much is the inspection charge?",
    answer:
      "Inspection charges depend on the appliance and service location. The displayed rates are indicative and will be confirmed before booking.",
  },
  {
    question: "Do I pay the inspection charge separately?",
    answer:
      "Whether the inspection charge is adjusted against the repair bill depends on the confirmed service terms. Please verify this when booking.",
  },
  {
    question: "Are spare parts included in the pricing?",
    answer:
      "No. Spare parts, if required, are charged separately. Our technician will explain the additional cost before proceeding.",
  },
  {
    question: "What if my appliance cannot be repaired?",
    answer:
      "If the appliance cannot be repaired, any applicable inspection or visit charge will be explained according to the confirmed booking terms.",
  },
  {
    question: "Do you provide a warranty?",
    answer:
      "Warranty availability and duration depend on the repair performed and the parts used. The applicable terms will be confirmed before service.",
  },
  {
    question: "Can I book a service online?",
    answer:
      "Yes. You can book an appliance service through our website using the Book a Service button.",
  },
];

export default function PricingContent() {
  const [selectedCity, setSelectedCity] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const bookingLink = (service: string) =>
    `/contact?service=${encodeURIComponent(service)}${
      selectedCity
        ? `&city=${encodeURIComponent(selectedCity)}`
        : ""
    }#callback`;

  return (
    <main className={styles.page}>
      {/* HERO SECTION */}

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1>
                Clear Pricing.
                <br />
                <span>Complete Peace of Mind.</span>
              </h1>

              <p>
                No confusing charges. No unnecessary surprises.
                Explore our appliance service pricing and book
                professional care for your home.
              </p>

              <div className={styles.heroBenefits}>
                <span>
                  <FaCircleCheck />
                  Transparent Charges
                </span>

                <span>
                  <FaCircleCheck />
                  Skilled Technicians
                </span>
              </div>
            </div>

            <div className={styles.cityCard}>
              <div className={styles.cityCardIcon}>
                <FaLocationDot />
              </div>

              <h3>Find Pricing in Your City</h3>

              <p>
                Select your location to explore available
                appliance services.
              </p>

              <div className={styles.selectWrapper}>
                <FaLocationDot className={styles.locationIcon} />

                <select
                  value={selectedCity}
                  onChange={(event) =>
                    setSelectedCity(event.target.value)
                  }
                  aria-label="Select your city"
                >
                  <option value="">Choose your city</option>

                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                <FaChevronDown className={styles.selectArrow} />
              </div>

              <div className={styles.cityNote}>
                <FaCircleCheck />

                {selectedCity
                  ? `Showing indicative service prices for ${selectedCity}.`
                  : "Select your city to personalize your booking."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}

      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              {/* <span className={styles.sectionTag}>
                OUR SERVICE PRICING
              </span> */}

              <h2>
                Every Appliance.
                <br />
                <em>One Trusted Service.</em>
              </h2>

              <p>
                Explore our indicative service charges for
                everyday home appliances.
              </p>
            </div>

            <div className={styles.pricingBadge}>
              <FaShieldHalved />
              <span>
                Transparent
                <br />
                Service Pricing
              </span>
            </div>
          </div>

          <div className={styles.pricingGrid}>
            {appliances.map((appliance) => {
              const Icon = appliance.icon;

              return (
                <article
                  className={styles.pricingCard}
                  key={appliance.name}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.applianceIcon}>
                      <Icon />
                    </div>

                    <h3>{appliance.name}</h3>
                  </div>

                  <div className={styles.serviceList}>
                    {appliance.services.map((service) => (
                      <Link
                        href={bookingLink(appliance.name)}
                        className={styles.serviceRow}
                        key={service.name}
                      >
                        <span>{service.name}</span>

                        <div className={styles.priceRight}>
                          <small>from</small>

                          <strong>
                            {formatPrice(service.price)}
                          </strong>

                          <FaArrowRight />
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <Link
                      href={bookingLink(appliance.name)}
                      className={styles.cardBookLink}
                    >
                      Book Service
                      <FaArrowUpRightFromSquare />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className={styles.priceNotice}>
            <FaCircleCheck />

            <p>
              Prices shown are indicative. Final charges may vary
              depending on the appliance condition, service
              location, and spare parts required. Selecting a city
              does not currently change the displayed rates.
            </p>
          </div>
        </div>
      </section>

      {/* HOW BILLING WORKS */}

      <section className={styles.billingSection}>
        <div className={styles.container}>
          <div className={styles.billingHeading}>
            {/* <span className={styles.sectionTag}>
              SIMPLE & TRANSPARENT
            </span> */}

            <h2>
              How Our <em>Billing Works.</em>
            </h2>

            <p>
              A simple process designed to keep you informed
              at every step.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {billingSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div className={styles.step} key={step.number}>
                  <div className={styles.stepNumber}>
                    {step.number}
                  </div>

                  <div className={styles.stepIcon}>
                    <Icon />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>

          <div className={styles.warrantyNotice}>
            <FaShieldHalved />

            <p>
              <strong>Our Service Commitment:</strong>{" "}
              We believe in clear communication, quality
              workmanship, and explaining the cost before
              beginning any repair.
            </p>
          </div>
        </div>
      </section>
        {/* FINAL CTA */}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div>
              {/* <span>EXPERT APPLIANCE CARE</span> */}

              <h2>
                Ready to Get Your
                <br />
                Appliance Fixed?
              </h2>

              <p>
                Book a professional technician and give your
                appliances the care they deserve.
              </p>
            </div>

            <Link
              href="/book-repair"
              className={styles.ctaButton}
            >
              Book a Service
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <div className={styles.faqIntro}>
              {/* <span className={styles.sectionTag}>
                FREQUENTLY ASKED QUESTIONS
              </span> */}

              <h2>
                Questions About
                <br />
                <em>Our Pricing?</em>
              </h2>

              <p>
                Find answers to common questions about
                service charges, repairs, and booking.
              </p>

              <Link
                href="/contact"
                className={styles.contactButton}
              >
                Contact Our Team
                <FaArrowRight />
              </Link>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqActive : ""
                    }`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className={styles.faqQuestion}
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span>{faq.question}</span>

                      <span className={styles.faqToggle}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${index}`}
                        className={styles.faqAnswer}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}
