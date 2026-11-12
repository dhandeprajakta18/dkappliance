"use client";

import { useState } from "react";

import {
  FaCircleCheck,
  FaPhone,
} from "react-icons/fa6";

import { timeSlots } from "./booking.data";

import type {
  StepProps,
  TimeSlot,
} from "./booking.types";

import styles from "@/app/book-repair/page.module.css";

function getNextSevenDays() {
  const dates: Date[] = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();

    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + i);

    dates.push(date);
  }

  return dates;
}

function getLocalDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function DateTimeStep({
  booking,
  updateBooking,
  nextStep,
}: StepProps) {
  const [dates] = useState<Date[]>(getNextSevenDays);

  const [error, setError] = useState("");

  const selectDate = (date: Date) => {
    updateBooking({
      date: getLocalDateString(date),
      timeSlot: null,
    });

    setError("");
  };

  const selectTime = (time: TimeSlot) => {
    updateBooking({
      timeSlot: time,
    });

    setError("");
  };

  const handleContinue = () => {
    if (!booking.date) {
      setError("Please select a date.");
      return;
    }

    if (!booking.timeSlot) {
      setError("Please select a time slot.");
      return;
    }

    nextStep();
  };

  return (
    <div className={styles.stepContent}>
      <h2>When should we visit?</h2>

      <p className={styles.stepDescription}>
        Pick a date and preferred time slot.
      </p>

      <div className={styles.dateGrid}>
        {dates.map((date, index) => {
          const dateString = getLocalDateString(date);

          const selected =
            booking.date === dateString;

          return (
            <button
              key={dateString}
              type="button"
              className={`${styles.dateCard} ${
                selected ? styles.selectedDate : ""
              }`}
              onClick={() => selectDate(date)}
            >
              <span>
                {date
                  .toLocaleDateString("en-IN", {
                    weekday: "short",
                  })
                  .toUpperCase()}
              </span>

              <strong>{date.getDate()}</strong>

              {index === 0 && <small>Today</small>}
            </button>
          );
        })}
      </div>

      <div className={styles.dateNotice}>
        Your preferred appointment time is subject
        to technician availability.
      </div>

      <h3 className={styles.timeHeading}>
        Preferred time slots
      </h3>

      <div className={styles.timeSlotList}>
        {timeSlots.map((slot) => {
          const selected =
            booking.timeSlot === slot.name;

          return (
            <button
              key={slot.name}
              type="button"
              className={`${styles.timeSlotCard} ${
                selected ? styles.selectedTime : ""
              }`}
              onClick={() => selectTime(slot.name)}
            >
              <strong>{slot.name}</strong>

              <span>{slot.time}</span>

              {selected ? (
                <FaCircleCheck
                  className={styles.selectedIcon}
                />
              ) : (
                <span className={styles.radioCircle} />
              )}
            </button>
          );
        })}
      </div>

      <div className={styles.infoBanner}>
        <FaPhone />

        <span>
          Your technician calls to confirm
          the exact time.
        </span>
      </div>

      {error && (
        <p className={styles.errorText}>{error}</p>
      )}

      <button
        type="button"
        className={styles.continueButton}
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}