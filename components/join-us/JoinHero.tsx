import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaUsers,
  FaCircleCheck,
} from "react-icons/fa6";

import styles from "./JoinHero.module.css";

export default function JoinHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* LEFT CONTENT */}

        <div className={styles.content}>
          <h1>
            Work With Us.
            <br />

            <em>Grow With Us.</em>
          </h1>

          <p className={styles.description}>
            Build a rewarding career with DK Appliance Care.
            We are looking for passionate technicians,
            enthusiastic trainees, and dedicated support
            professionals who believe in delivering
            exceptional service.
          </p>

          <div className={styles.actions}>

            <Link
              href="#apply"
              className={styles.primaryButton}
            >
              Apply Now
              <FaArrowRight />
            </Link>

            <Link
              href="#open-positions"
              className={styles.secondaryButton}
            >
              Explore Opportunities
            </Link>

          </div>

          <div className={styles.trustRow}>

            <div>
              <FaCircleCheck />
              <span>Growth Opportunities</span>
            </div>

            <div>
              <FaCircleCheck />
              <span>Supportive Team</span>
            </div>

          </div>

        </div>

        <div className={styles.imageWrapper}>

          <div className={styles.imageContainer}>

            <Image
              src="/images/service-technician.jpg"
              alt="Appliance repair technician at work"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.heroImage}
            />

          </div>

          <div className={styles.imageBadge}>
            <span className={styles.badgeIcon}>
              <FaUsers />
            </span>

            <div>
              <strong>Build Your Future</strong>
              <p>With DK Appliance Care</p>
            </div>
          </div>

        </div>

      </div>

      <div className={styles.disclaimer}>
        DK Appliance Care is an independent appliance
        repair service provider.
      </div>
    </section>
  );
}
