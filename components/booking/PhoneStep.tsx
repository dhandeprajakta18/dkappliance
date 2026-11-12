"use client";

import { useState } from "react";

import type { StepProps } from "./booking.types";

import styles from "@/app/book-repair/page.module.css";

export default function PhoneStep({
  booking,
  updateBooking,
  nextStep,
}: StepProps) {
  const [error, setError] = useState("");

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      updateBooking({ phone: value });
      setError("");
    }
  };

  const handleContinue = () => {
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(booking.phone)) {
      setError(
        "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    // Frontend-only transition.
    // Connect an OTP sending API before production.
    nextStep();
  };

  return (
    <div className={styles.stepContent}>
      <h2>Your WhatsApp number</h2>

      <p className={styles.stepDescription}>
        Enter your mobile number so our team can
        contact you about your booking.
      </p>

      <label
        htmlFor="booking-phone"
        className={styles.phoneLabel}
      >
        Mobile Number <span>*</span>
      </label>

      <div className={styles.phoneInputWrapper}>
        <span className={styles.countryCode}>
          +91
        </span>

        <input
          id="booking-phone"
          type="tel"
          inputMode="numeric"
          placeholder="98765 43210"
          value={booking.phone}
          onChange={handlePhoneChange}
          maxLength={10}
          autoComplete="tel-national"
        />
      </div>

      <p className={styles.phoneHelper}>
        Phone verification will be available
        once the OTP service is connected.
      </p>

      <p className={styles.phonePrivacy}>
        By continuing, you agree to be contacted
        about this booking and accept our{" "}
        <a href="/privacy-policy">
          Privacy Policy
        </a>.
      </p>

      {error && (
        <p className={styles.errorText}>{error}</p>
      )}

      <button
        type="button"
        className={styles.continueButton}
        onClick={handleContinue}
      >
        Continue to verification
      </button>
    </div>
  );
}