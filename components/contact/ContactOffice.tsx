import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowUpRightFromSquare,
  FaHeadset,
} from "react-icons/fa6";

import styles from "./ContactOffice.module.css";

export default function ContactOffice() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* OFFICE DETAILS */}
          <div className={styles.content}>
            {/* <span className={styles.tag}>
              GET IN TOUCH
            </span> */}

            <h2>
              Our Head <em>Office.</em>
            </h2>

            <p className={styles.description}>
              Have questions about our services?
              Our team is available to assist you
              with appliance repair enquiries.
            </p>

            <h3>DK Appliance Care</h3>

            <div className={styles.details}>
              <div className={styles.detail}>
                <FaLocationDot />

                <p>
                  Your Office Address,
                  <br />
                  City, State, PIN Code
                </p>
              </div>

              <div className={styles.detail}>
                <FaPhone />

                <a href="tel:+910000000000">
                  +91 XXXXX XXXXX
                </a>
              </div>

              <div className={styles.detail}>
                <FaEnvelope />

                <a href="mailto:your-email@example.com">
                  your-email@example.com
                </a>
              </div>

              <div className={styles.detail}>
                <FaClock />

                <p>
                  Contact us for current support hours
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Open in Google Maps
              <FaArrowUpRightFromSquare />
            </a>
          </div>

          {/* SUPPORT CARD */}
          <div className={styles.supportCard}>
            <div className={styles.supportIcon}>
              <FaHeadset />
            </div>

            <h3>Customer Support</h3>

            <p>
              Need help with a repair, appointment,
              or service experience? Contact our
              support team directly.
            </p>

            <div className={styles.supportDivider} />

            <div className={styles.supportItem}>
              <strong>Phone</strong>

              <a href="tel:+910000000000">
                +91 XXXXX XXXXX
              </a>
            </div>

            <div className={styles.supportItem}>
              <strong>Email</strong>

              <a href="mailto:your-email@example.com">
                your-email@example.com
              </a>
            </div>

            <div className={styles.supportItem}>
              <strong>Business Hours</strong>

              <span>
                Contact us for availability
              </span>
            </div>

            <p className={styles.supportNote}>
              For assistance with an existing
              service request, please provide your
              booking details when contacting us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
