"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaSnowflake,
  FaTemperatureLow,
  FaShirt,
  FaTv,
  FaFireBurner,
  FaWaveSquare,
  FaScrewdriverWrench,
  FaCalendarCheck,
  FaHouse,
  FaCheck,
  FaStar,
  FaShieldHalved,
  FaCircleCheck,
} from "react-icons/fa6";

import styles from "./Hero.module.css";

/* =========================================
   APPLIANCE DATA
========================================= */

const appliances = [
  {
    name: "AC",
    value: "AC",
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
    value: "TV",
    icon: FaTv,
  },
  {
    name: "Microwave",
    value: "Microwave",
    icon: FaFireBurner,
  },
  {
    name: "Geyser",
    value: "Geyser",
    icon: FaWaveSquare,
  },
];

/* =========================================
   HERO COMPONENT
========================================= */

export default function Hero() {
  const [selectedService, setSelectedService] = useState("");

  const bookingUrl = selectedService
    ? `/book-repair?appliance=${encodeURIComponent(selectedService)}`
    : "/book-repair";

  return (
    <div className={styles.heroWrapper}>

      {/* =====================================
          MAIN HERO
      ===================================== */}

      <section className={styles.hero}>
        <div className={styles.heroContainer}>

          {/* LEFT CONTENT */}

          <div className={styles.heroContent}>

            {/* HEADING */}

            <h1 className={styles.heroTitle}>
              Your Home.
              <br />

              Our Expertise.
              <br />

              <span className={styles.accentText}>
                Exceptional Care.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className={styles.heroDescription}>
              From cooling to cleaning, we keep your everyday
              appliances running beautifully. Experience
              professional repairs, trusted technicians,
              and convenient doorstep service.
            </p>

            {/* BUTTONS */}

            <div className={styles.heroButtons}>

            <Link href="/book-repair" className="book-btn">
  Book a Repair
  <FaArrowRight className="book-arrow" />
</Link>

              <Link
                href="/#services"
                className={styles.secondaryButton}
              >
                Explore Services

                <FaArrowUpRightFromSquare />
              </Link>

            </div>

            {/* TRUST INFORMATION */}

            <div className={styles.trustRow}>

              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>
                  <FaCircleCheck />
                </span>

                <span>
                  Skilled Technicians
                </span>
              </div>

              <span className={styles.trustDivider} />

              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>
                  <FaHouse />
                </span>

                <span>
                  Doorstep Service
                </span>
              </div>

              <span className={styles.trustDivider} />

              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>
                  <FaCalendarCheck />
                </span>

                <span>
                  Easy Booking
                </span>
              </div>

            </div>

          </div>

          {/* =====================================
              RIGHT IMAGE
          ===================================== */}

          <div className={styles.heroVisual}>

            {/* BACKGROUND DECORATION */}

            <div className={styles.imageDecoration} />

            {/* MAIN IMAGE */}

            <div className={styles.imageFrame}>

              <Image
                src="/images/technician1.png"
                alt="DK Appliance Care professional technician"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.heroImage}
              />

              <div className={styles.imageOverlay} />

            </div>

            {/* FLOATING SERVICE CARD */}

            <div className={styles.floatingCard}>

              <div className={styles.floatingCardTop}>

                <div className={styles.floatingIcon}>
                  <FaShieldHalved />
                </div>

                <div className={styles.floatingCheck}>
                  <FaCheck />
                </div>

              </div>

              <h3>
                Expert Service,
                <br />
                Every Time.
              </h3>

              <p>
                Reliable appliance repairs
                with professional care
                at your doorstep.
              </p>

              <div className={styles.floatingStars}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>

            </div>

            {/* DECORATIVE BADGE */}

            <div className={styles.imageBadge}>
              <FaScrewdriverWrench />

              <span>
                Repair
                <br />
                Specialists
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          BOOKING SELECTOR
      ===================================== */}

      <section
        className={styles.serviceSelector}
        id="our-services"
      >

        <div className={styles.selectorContainer}>

          {/* LEFT SIDE */}

          <div className={styles.selectorIntro}>

            <h2>
              Book Doorstep
              <br />
              <span>Repair</span>
            </h2>

            <p>
              Select your appliance and let
              our experts take care of the rest.
            </p>

            <div className={styles.selectorTrust}>
              <FaCircleCheck />

              <span>
                Convenient home service
              </span>
            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className={styles.selectorRight}>

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

                    <span className={styles.applianceIcon}>
                      <Icon />
                    </span>

                    <span className={styles.applianceName}>
                      {appliance.name}
                    </span>

                    {isSelected && (
                      <span className={styles.selectedCheck}>
                        <FaCheck />
                      </span>
                    )}

                  </button>
                );
              })}

            </div>

            {/* SELECTOR FOOTER */}

            <div className={styles.selectorFooter}>

              <p
                className={styles.selectionFeedback}
                aria-live="polite"
              >
                {selectedService ? (
                  <>
                    <FaCircleCheck />

                    {selectedService} selected
                  </>
                ) : (
                  "Choose an appliance to get started"
                )}
              </p>

              <Link
                href={bookingUrl}
                className={styles.continueButton}
              >
                Continue to Booking

                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
