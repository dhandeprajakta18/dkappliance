import {
  FaClock,
  FaHeadset,
  FaCalendarCheck,
  FaClipboardCheck,
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
              Service <em>Support.</em>
            </h2>

            <p className={styles.description}>
              Have questions about our services?
              Our team is available to assist you
              with appliance repair enquiries.
            </p>

            <h3>Arrange your appliance service</h3>

            <div className={styles.details}>
              <div className={styles.detail}>
                <FaClipboardCheck />

                <p>
                  Tell us the appliance and the issue
                  <br />
                  when you request a booking.
                </p>
              </div>

              <div className={styles.detail}>
                <FaCalendarCheck />

                <a href="/book-repair">Choose a convenient visit time</a>
              </div>

              <div className={styles.detail}>
                <FaHeadset />

                <a href="#callback">Request a callback from our team</a>
              </div>

              <div className={styles.detail}>
                <FaClock />

                <p>
                  Contact us for current support hours
                </p>
              </div>
            </div>

            <a
              href="/book-repair"
              className={styles.mapLink}
            >
              Book a Repair
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
              <strong>Booking</strong>

              <a href="/book-repair">Start an online request</a>
            </div>

            <div className={styles.supportItem}>
              <strong>Callback</strong>

              <a href="#callback">Ask our team to contact you</a>
            </div>

            <div className={styles.supportItem}>
              <strong>Availability</strong>

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
