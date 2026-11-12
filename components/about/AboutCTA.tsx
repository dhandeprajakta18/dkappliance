import Link from "next/link";

import {
  FaArrowRight,
} from "react-icons/fa6";

import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.ctaBox}>
          <div className={styles.content}>
            {/* <span>
              <FaScrewdriverWrench />
              PROFESSIONAL APPLIANCE CARE
            </span> */}

            <h2>
              Your Appliances Deserve
              <br />
              <em>Expert Attention.</em>
            </h2>

            <p>
              From everyday maintenance to appliance
              repairs, DK Appliance Care is here to
              help you get started.
            </p>
          </div>

          <Link href="/book-repair" className={styles.button}>
            Book a Service
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
