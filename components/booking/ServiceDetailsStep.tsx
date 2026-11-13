"use client";

import { useState } from "react";

import {
  FaCircleCheck,
  FaCirclePlus,
  FaShieldHalved,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa6";

import type { StepProps } from "./booking.types";

import styles from "@/app/book-repair/page.module.css";

export default function ServiceDetailsStep({
  booking,
  nextStep,
}: StepProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={styles.stepContent}>
      <h2>
        {booking.appliance}{" "}
        {booking.serviceType?.toLowerCase()}
      </h2>

      <p className={styles.stepDescription}>
        Available in {booking.city}
      </p>

      <div className={styles.serviceDetailsCard}>
        <div className={styles.serviceDetailsTop}>
          <div className={styles.serviceDetailsInfo}>
            <strong>
              {booking.requestedService || booking.appliance}
            </strong>

            <p>
              Technician visit and fault inspection.
              Final service cost is confirmed before
              work begins.
            </p>
          </div>

          <div className={styles.servicePrice}>
            <span>
              {booking.referencePrice
                ? "REFERENCE PRICE"
                : "PRICE"}
            </span>

            <strong>
              {booking.referencePrice || "On inspection"}
            </strong>

            <small>
              {booking.referencePrice
                ? "Final DK Appliance Care price is confirmed before work begins."
                : "Our team will explain applicable charges."}
            </small>
          </div>

          <FaCircleCheck className={styles.priceCheck} />
        </div>

        <button
          type="button"
          className={styles.viewDetailsButton}
          onClick={() => setShowDetails(!showDetails)}
        >
          View details

          {showDetails ? (
            <FaChevronUp />
          ) : (
            <FaChevronDown />
          )}
        </button>

        {showDetails && (
          <div className={styles.expandedDetails}>
            <p>
              Our technician visits your location
              and inspects the appliance.
            </p>

            <p>
              The exact repair cost is shared
              after inspection.
            </p>

            <p>
              Repairs begin only after your approval.
            </p>
          </div>
        )}
      </div>

      <div className={styles.extraCharge}>
        <FaCirclePlus />

        <span>
          Spare parts, if needed, may cost extra.
        </span>
      </div>

      <div className={styles.warrantyBanner}>
        <FaShieldHalved />

        <div>
          <strong>Transparent service process</strong>

          <p>
            Inspection charges, repair costs,
            and applicable warranties will be
            explained before service.
          </p>
        </div>
      </div>

      <button
        type="button"
        className={styles.continueButton}
        onClick={nextStep}
      >
        Continue
      </button>
    </div>
  );
}
