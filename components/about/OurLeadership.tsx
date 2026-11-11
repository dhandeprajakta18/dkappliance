import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa6";

import styles from "./OurLeadership.module.css";

export default function OurLeadership() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/service-technician.jpg"
              alt="DK Appliance Care team"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />

            <div className={styles.imageBadge}>
              The Team Behind DK Appliance Care
            </div>
          </div>

          <div className={styles.content}>
            {/* <span className={styles.tag}>OUR PEOPLE</span> */}

            <h2>
              Driven by People.
              <br />
              <em>Defined by Care.</em>
            </h2>

            <p>
              Behind every service is a commitment
              to helping customers keep their homes
              running smoothly.
            </p>

            <div className={styles.quoteCard}>
              <FaQuoteLeft className={styles.quoteIcon} />

              <blockquote>
                Great service is not just about repairing
                an appliance. It is about earning trust
                through every interaction.
              </blockquote>

              <div className={styles.author}>
                <div className={styles.avatar}>DK</div>

                <div>
                  <strong>DK Appliance Care</strong>
                  <span>Our Service Philosophy</span>
                </div>
              </div>

              <div className={styles.quoteFooter}>
                <span>Need assistance?</span>

                <Link href="/contact">
                  Contact Us
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
