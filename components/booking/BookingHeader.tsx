import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

import styles from "@/app/book-repair/page.module.css";

export default function BookingHeader() {
  return (
    <header className={styles.bookingHeader}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.bookingLogo}>
          <Image
            src="/images/logo.png"
            alt="DK Appliance Care"
            width={150}
            height={60}
            priority
          />
        </Link>

        <div className={styles.headerCenter}>
          <strong>Book a service</strong>
          <span>Secure booking</span>
        </div>

        <div className={styles.bookingHelp}>
          <FaPhone />

          <div>
            <span>Booking help</span>
            <strong>Contact support</strong>
          </div>
        </div>
      </div>
    </header>
  );
}