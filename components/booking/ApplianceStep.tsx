"use client";

import { useState } from "react";

import { FaCircleInfo } from "react-icons/fa6";

import { appliances } from "./booking.data";

import type { StepProps } from "./booking.types";

import styles from "@/app/book-repair/page.module.css";

export default function ApplianceStep({
  booking,
  updateBooking,
  nextStep,
}: StepProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleAppliances = showAll
    ? appliances
    : appliances.slice(0, 8);

  const selectAppliance = (name: string) => {
    updateBooking({
      appliance: name,
      serviceType: null,
      date: "",
      timeSlot: null,
    });

    nextStep();
  };

  return (
    <div className={styles.stepContent}>
      <h2>What needs attention?</h2>

      <p className={styles.stepDescription}>
        Select the appliance in{" "}
        <strong>{booking.city}</strong>.
      </p>

      <div className={styles.applianceGrid}>
        {visibleAppliances.map((item) => (
          <button
            key={item.name}
            type="button"
            className={`${styles.applianceCard} ${
              booking.appliance === item.name
                ? styles.selectedCard
                : ""
            }`}
            onClick={() => selectAppliance(item.name)}
          >
            <span className={styles.cardRadio} />

            <div className={styles.applianceIcon}>
              {item.icon}
            </div>

            <strong>{item.name}</strong>
          </button>
        ))}
      </div>

      {!showAll && (
        <button
          type="button"
          className={styles.showAllButton}
          onClick={() => setShowAll(true)}
        >
          Show all {appliances.length} appliances
        </button>
      )}

      <div className={styles.infoBanner}>
        <FaCircleInfo />

        <span>
          Pick the closest match. The technician checks
          the exact fault at the visit.
        </span>
      </div>
    </div>
  );
}