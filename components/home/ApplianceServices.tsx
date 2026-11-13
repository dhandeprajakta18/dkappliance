import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaLocationDot,
  FaScrewdriverWrench,
} from "react-icons/fa6";

import styles from "./ApplianceServices.module.css";

const appliances = [
  {
    name: "Air Conditioner",
    service: "AC",
    image: "/images/services/ac.png",
  },
  {
    name: "Washing Machine",
    service: "Washing Machine",
    image: "/images/services/washing-machine.png",
  },
  {
    name: "Refrigerator",
    service: "Refrigerator",
    image: "/images/services/refrigerator.png",
  },
  {
    name: "LED Television",
    service: "TV",
    image: "/images/services/television.png",
  },
  {
    name: "Microwave",
    service: "Microwave",
    image: "/images/services/microwave.png",
  },
  {
    name: "Geyser",
    service: "Geyser",
    image: "/images/technician1.png",
  },
  {
    name: "Gas Stove",
    service: "Gas Stove",
    image: "/images/technician1.png",
  },
  {
    name: "Cooking Range",
    service: "Cooking Range",
    image: "/images/services/microwave.png",
  },
  {
    name: "Commercial Bhatti",
    service: "Commercial Bhatti",
    image: "/images/technician1.png",
  },
  {
    name: "Kitchen Chimney",
    service: "Kitchen Chimney",
    image: "/images/services/microwave.png",
  },
];

export default function ApplianceServices() {
  return (
    <section
      className={styles.section}
      id="services"
    >
      <div className={styles.container}>

        {/* SECTION HEADER */}

        <div className={styles.header}>
          <h2 className={styles.title}>
            If it&apos;s in your home,
            <br className={styles.mobileBreak} />
            {" "}we can{" "}
            <span>take care of it.</span>
          </h2>

          <p className={styles.description}>
            From everyday essentials to modern home appliances,
            our professional repair services help keep your
            home running smoothly.
          </p>
        </div>

        {/* BOOKING BANNER */}

        <div className={styles.bookingBanner}>
          <div className={styles.bannerContent}>
            <span className={styles.bannerIcon}>
              <FaLocationDot />
            </span>

            <p>
              Need an appliance repaired? Choose a service
              and book a technician at your doorstep.
            </p>
          </div>

          <Link href="/book-repair" className="book-btn">
  Book a Repair
  <FaArrowRight className="book-arrow" />
</Link>
        </div>

        {/* APPLIANCE GRID */}

        <div className={styles.applianceGrid}>
          {appliances.map((appliance) => (
            <Link
              key={appliance.service}
              href={`/book-repair?appliance=${encodeURIComponent(
                appliance.service
              )}`}
              className={styles.applianceCard}
              aria-label={`Book ${appliance.name} repair`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={appliance.image}
                  alt={`${appliance.name} repair service`}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, (max-width: 1200px) 25vw, 13vw"
                  className={styles.applianceImage}
                />
              </div>

              <div className={styles.cardContent}>
                <h3>{appliance.name}</h3>

                <div className={styles.cardBottom}>
                  <p>
                    Professional repair
                    <br />
                    &amp; maintenance
                  </p>

                  <span className={styles.cardArrow}>
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <div className={styles.bottomCTA}>
          <div className={styles.bottomText}>
            <span className={styles.bottomIcon}>
              <FaScrewdriverWrench />
            </span>

            <p>
              Can&apos;t find the appliance you need help with?
            </p>
          </div>

          <Link href="/contact">
            Contact Our Team
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}
