import Image from "next/image";
import Link from "next/link";

import {
  FaPhone,
  FaHeadset,
  FaCircleCheck,
  FaArrowRight,
} from "react-icons/fa6";

import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1>
              How Can We
              <br />
              <em>Help You?</em>
            </h1>

            <p className={styles.description}>
              Need an appliance repaired, have a question,
              or want assistance with an existing booking?
              Our team is here to help.
            </p>

            <p className={styles.subDescription}>
              Reach out to us for professional appliance
              repair assistance and convenient home services.
            </p>

            <div className={styles.availability}>
              <span className={styles.statusDot} />
              Contact our team for service availability
            </div>

            <div className={styles.actions}>
              <Link href="#callback" className={styles.callButton}>
                <FaPhone />
                Request a Callback
              </Link>

              <Link href="/#services" className={styles.whatsappButton}>
                Explore Services
                <FaArrowRight />
              </Link>
            </div>

            <div className={styles.trust}>
              <span>
                <FaCircleCheck />
                Professional Assistance
              </span>

              <span>
                <FaCircleCheck />
                Convenient Booking
              </span>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/service-technician.jpg"
              alt="DK Appliance Care customer support"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />

            <div className={styles.imageBadge}>
              <FaHeadset />

              <div>
                <strong>Here to Help</strong>
                <span>DK Appliance Care Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            DK Appliance Care provides independent
            appliance repair and maintenance services.
          </p>

          <Link href="/#services">
            Explore Our Services
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
