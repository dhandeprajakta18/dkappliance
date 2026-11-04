"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaSnowflake,
  FaTemperatureLow,
  FaShirt,
  FaTv,
  FaFireBurner,
  FaDroplet,
  FaCircleCheck,
  FaScrewdriverWrench,
  FaCalendarCheck,
  FaHouse,
} from "react-icons/fa6";

import styles from "./Hero.module.css";

const appliances = [
  {
    name: "Air Conditioner",
    value: "AC Repair",
    icon: FaSnowflake,
  },
  {
    name: "Refrigerator",
    value: "Refrigerator",
    icon: FaTemperatureLow,
  },
  {
    name: "Washing Machine",
    value: "Washing Machine",
    icon: FaShirt,
  },
  {
    name: "Television",
    value: "Television",
    icon: FaTv,
  },
  {
    name: "Microwave",
    value: "Microwave",
    icon: FaFireBurner,
  },
  {
    name: "Water Purifier",
    value: "Water Purifier",
    icon: FaDroplet,
  },
];

export default function Hero() {
  const [selectedService, setSelectedService] = useState("");

  const bookingUrl = selectedService
    ? `/book-repair?service=${encodeURIComponent(selectedService)}`
    : "/book-repair";

  return (
    <>
      {/* HERO SECTION */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          {/* LEFT SIDE */}

          <div className={styles.heroContent}>
            {/* <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              HOME APPLIANCE REPAIR & SERVICE
            </div> */}

            <h1 className={styles.heroTitle}>
              Expert Care
              <br />
              for Every
              <br />
              <span className={styles.titleAccent}>
                Corner of Your
              </span>
              <br />
              <span className={styles.cursiveText}>Home.</span>
            </h1>

            <p className={styles.heroDescription}>
              Because a comfortable home deserves appliances
              that work beautifully. Discover convenient,
              professional repair services designed around
              your everyday needs.
            </p>

            {/* BUTTONS */}

            <div className={styles.heroButtons}>
              <Link
                href="/book-repair"
                className={styles.primaryButton}
              >
                Book a Service
                <FaArrowRight />
              </Link>

              <Link
                href="/services"
                className={styles.secondaryButton}
              >
                Explore Services
                <FaArrowRight aria-hidden="true" />
              </Link>
            </div>

            {/* SMALL FEATURES */}

            <div className={styles.heroFeatures}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>
                  <FaScrewdriverWrench />
                </span>

                <span>Appliance Repair</span>
              </div>

              <span className={styles.featureDivider} />

              <div className={styles.feature}>
                <span className={styles.featureIcon}>
                  <FaCalendarCheck />
                </span>

                <span>Easy Booking</span>
              </div>

              <span className={styles.featureDivider} />

              <div className={styles.feature}>
                <span className={styles.featureIcon}>
                  <FaHouse />
                </span>

                <span>Doorstep Service</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className={styles.heroVisual}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/technician1.png"
                alt="Appliance repair technician providing professional service"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.heroImage}
              />

              <div className={styles.imageOverlay} />

              <div className={styles.imageBottomText}>
                {/* <span>DK APPLIANCE CARE</span> */}

                <p>
                  Thoughtful service.
                  <br />
                  Everyday comfort.
                </p>
              </div>
            </div>

            {/* FLOATING SERVICE CARD */}

            {/* <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>
                <FaShieldHalved />
              </div>

              <div>
                <strong>Professional Care</strong>
                <span>For the home you love</span>
              </div>

              <FaCircleCheck className={styles.floatingCheck} />
            </div> */}

            {/* DECORATIVE TEXT */}

            <div className={styles.verticalLabel}>
              REPAIR · SERVICE · CARE
            </div>
          </div>
        </div>
      </section>

      {/* APPLIANCE SELECTOR */}

      <section
        className={styles.serviceSelector}
        id="our-services"
      >
        <div className={styles.selectorContainer}>
          <div className={styles.selectorHeader}>
            <div className={styles.selectorTitleGroup}>
              {/* <span className={styles.sectionEyebrow}>
                OUR EXPERTISE
              </span> */}

              <h2>
                We take care of
                <br />
                <span className={styles.selectorCursive}>
                  what matters.
                </span>
              </h2>
            </div>

            <div className={styles.selectorDescription}>
              <p>
                From everyday essentials to the appliances
                you rely on most, choose what needs attention
                and start your booking.
              </p>
            </div>
          </div>

          {/* APPLIANCE GRID */}

          <div className={styles.applianceGrid}>
            {appliances.map((appliance) => {
              const Icon = appliance.icon;

              const isSelected =
                selectedService === appliance.value;

              return (
                <button
                  key={appliance.value}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() =>
                    setSelectedService(appliance.value)
                  }
                  className={`${styles.applianceCard} ${
                    isSelected ? styles.selected : ""
                  }`}
                >
                  {isSelected && (
                    <FaCircleCheck
                      className={styles.selectedCheck}
                    />
                  )}

                  <span className={styles.applianceIcon}>
                    <Icon />
                  </span>

                  <span className={styles.applianceName}>
                    {appliance.name}
                  </span>

                  <span className={styles.cardArrow}>
                    <FaArrowRight aria-hidden="true" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* SELECTOR FOOTER */}

          <div className={styles.selectorFooter}>
            <Link
              href={bookingUrl}
              className={styles.continueButton}
            >
              Continue to Booking
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
