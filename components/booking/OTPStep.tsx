"use client";

import {
  useRef,
  useState,
} from "react";

import {
  FaWhatsapp,
  FaPhone,
  FaArrowLeft,
} from "react-icons/fa6";

import type { StepProps } from "./booking.types";

import styles from "@/app/book-repair/page.module.css";

export default function OTPStep({
  booking,
  previousStep,
}: StepProps) {
  const [otp, setOtp] = useState<string[]>(
    Array(6).fill("")
  );

  const [error, setError] = useState("");

  const inputs = useRef<
    (HTMLInputElement | null)[]
  >([]);

  const handleChange = (
    value: string,
    index: number
  ) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    const updated = [...otp];
    updated[index] = digit;

    setOtp(updated);
    setError("");

    if (digit && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    const updated = Array(6).fill("");

    pasted.split("").forEach((digit, index) => {
      updated[index] = digit;
    });

    setOtp(updated);

    const focusIndex = Math.min(pasted.length, 5);
    inputs.current[focusIndex]?.focus();
  };

  const verifyOTP = () => {
    const code = otp.join("");

    if (code.length !== 6) {
      setError(
        "Please enter the complete 6-digit code."
      );
      return;
    }

    setError(
      "OTP verification is not connected yet. " +
      "Connect the backend OTP API to continue."
    );
  };

  return (
    <div className={styles.stepContent}>
      <div className={styles.otpIcon}>
        <FaWhatsapp />
      </div>

      <h2>Enter the code</h2>

      <p className={styles.stepDescription}>
        Verify mobile number{" "}
        <strong>+91 {booking.phone}</strong>
      </p>

      <div className={styles.otpInputGroup}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(element) => {
              inputs.current[index] = element;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) =>
              handleChange(e.target.value, index)
            }
            onKeyDown={(e) =>
              handleKeyDown(e, index)
            }
            onPaste={handlePaste}
            aria-label={`OTP digit ${index + 1}`}
          />
        ))}
      </div>

      <p className={styles.otpHelper}>
        Never share your verification code
        with anyone.
      </p>

      <div className={styles.otpResendSection}>
        <strong>Did not get it?</strong>

        <button
          type="button"
          className={styles.resendButton}
          disabled
        >
          <FaWhatsapp />
          <span>Send again on WhatsApp</span>
        </button>

        <button
          type="button"
          className={styles.resendButton}
          disabled
        >
          <FaPhone />
          <span>Get the code by SMS</span>
        </button>
      </div>

      <div className={styles.otpActions}>
        <button
          type="button"
          className={styles.changeNumberButton}
          onClick={previousStep}
        >
          <FaArrowLeft />
          Change number
        </button>

        <button
          type="button"
          className={styles.verifyButton}
          onClick={verifyOTP}
        >
          Verify code
        </button>
      </div>

      {error && (
        <p className={styles.errorText}>{error}</p>
      )}
    </div>
  );
}