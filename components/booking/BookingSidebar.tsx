import {
  FaShieldHalved,
  FaCircleCheck,
  FaCircleQuestion,
} from "react-icons/fa6";

import styles from "@/app/book-repair/page.module.css";

export default function BookingSidebar() {
  return (
    <aside className={styles.bookingSidebar}>
      <div className={styles.sidebarHeading}>
        <h3>Why book with us?</h3>
        <p>Reliable appliance care at your doorstep.</p>
      </div>

      <div className={styles.sidebarHelpCard}>
        <FaCircleQuestion />

        <div>
          <strong>Questions before you book?</strong>
          <p>
            Our support team can help you understand
            the service process.
          </p>
        </div>
      </div>

      <div className={styles.sidebarInfoCard}>
        <FaShieldHalved />

        <div>
          <strong>Transparent service charges</strong>

          <p>
            Our technician inspects the appliance
            and explains the estimated repair cost.
          </p>

          <p>
            Repairs proceed only after your approval.
          </p>
        </div>
      </div>

      <div className={styles.sidebarTrust}>
        <div>
          <FaCircleCheck />
          <span>Technician calls before visiting</span>
        </div>

        <div>
          <FaCircleCheck />
          <span>No online payment during booking</span>
        </div>

        <div>
          <FaCircleCheck />
          <span>Convenient doorstep service</span>
        </div>
      </div>

      <div className={styles.sidebarBottom}>
        <FaCircleCheck />
        No payment while booking
      </div>
    </aside>
  );
}