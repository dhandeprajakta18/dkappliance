import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaShieldHalved,
  FaCircleCheck,
} from "react-icons/fa6";

import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.content}>
            
            <h1>
              Your Home Deserves
              <br />
              <em>Exceptional Care.</em>
            </h1>

            <p>
              At DK Appliance Care, we believe every home
              deserves reliable, professional, and convenient
              appliance repair services.
            </p>

            <p>
              From everyday maintenance to complicated repairs,
              our focus is on making appliance care simple,
              transparent, and stress-free.
            </p>

            <div className={styles.actions}>
              <Link href="/contact#callback" className={styles.primaryBtn}>
                Book a Service
                <FaArrowRight />
              </Link>

              <Link href="#our-story" className={styles.secondaryBtn}>
                Discover Our Story
                <FaArrowRight />
              </Link>
            </div>

            <div className={styles.trust}>
              <span>
                <FaCircleCheck />
                Professional Service
              </span>

              <span>
                <FaCircleCheck />
                Customer-Focused Care
              </span>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/service-technician.jpg"
              alt="DK Appliance Care technician"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.heroImage}
            />

            <div className={styles.imageBadge}>
              <FaShieldHalved />

              <div>
                <strong>Reliable Care</strong>
                <span>For Every Home</span>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.disclaimer}>
          DK Appliance Care is an independent appliance repair
          service provider and is not affiliated with appliance
          manufacturers unless explicitly stated.
        </p>
      </div>
    </section>
  );
}
