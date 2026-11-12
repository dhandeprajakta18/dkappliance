"use client";

import Link from "next/link";

import {
  FaCircleCheck,
  FaLocationDot,
  FaScrewdriverWrench,
  FaCalendarDays,
  FaClock,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa6";

import type { BookingData } from "./booking.types";

import styles from "@/app/book-repair/page.module.css";

interface ConfirmationStepProps {
  booking: BookingData;
  bookingId?: string;
}

export default function ConfirmationStep({
  booking,
  bookingId,
}: ConfirmationStepProps) {
  return (
    <div className={styles.confirmationContent}>
      <div className={styles.confirmationIcon}>
        <FaCircleCheck />
      </div>

      <h2>Booking confirmed!</h2>

      <p>
        Your appliance service request has been
        successfully received.
      </p>

      {bookingId && (
        <div className={styles.bookingId}>
          Booking ID: <strong>{bookingId}</strong>
        </div>
      )}

      <div className={styles.confirmationSummary}>
        <div>
          <FaLocationDot />
          <span>City</span>
          <strong>{booking.city}</strong>
        </div>

        <div>
          <FaScrewdriverWrench />
          <span>Appliance</span>
          <strong>{booking.appliance}</strong>
        </div>

        <div>
          <FaCircleCheck />
          <span>Service</span>
          <strong>{booking.serviceType}</strong>
        </div>

        <div>
          <FaCalendarDays />
          <span>Date</span>
          <strong>{booking.date}</strong>
        </div>

        <div>
          <FaClock />
          <span>Preferred Time</span>
          <strong>{booking.timeSlot}</strong>
        </div>

        <div>
          <FaPhone />
          <span>Mobile</span>
          <strong>+91 {booking.phone}</strong>
        </div>
      </div>

      <div className={styles.infoBanner}>
        Our team will contact you to confirm
        your appointment.
      </div>

      <Link href="/" className={styles.homeButton}>
        Back to Home
        <FaArrowRight />
      </Link>
    </div>
  );
}