import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaSnowflake,
  FaTemperatureLow,
  FaShirt,
  FaTv,
  FaFireBurner,
  FaDroplet,
  FaScrewdriverWrench,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Air Conditioner Repair",
    description:
      "Professional AC inspection, maintenance, and repair services to keep your home cool and comfortable.",
    image: "/images/services/ac.png",
    icon: FaSnowflake,
    service: "AC Repair",
  },
  {
    number: "02",
    title: "Refrigerator Repair",
    description:
      "Reliable solutions for cooling problems, unexpected breakdowns, and refrigerator maintenance.",
    image: "/images/services/refrigerator.png",
    icon: FaTemperatureLow,
    service: "Refrigerator",
  },
  {
    number: "03",
    title: "Washing Machine Repair",
    description:
      "Expert troubleshooting and repairs to keep your washing machine running smoothly.",
    image: "/images/services/washing-machine.png",
    icon: FaShirt,
    service: "Washing Machine",
  },
  {
    number: "04",
    title: "Television Repair",
    description:
      "Professional assistance for television display, sound, connectivity, and performance issues.",
    image: "/images/services/television.png",
    icon: FaTv,
    service: "Television",
  },
  {
    number: "05",
    title: "Microwave Repair",
    description:
      "Restore everyday convenience with dependable microwave inspection and repair services.",
    image: "/images/services/microwave.png",
    icon: FaFireBurner,
    service: "Microwave",
  },
  {
    number: "06",
    title: "Water Purifier Repair",
    description:
      "Keep your water purifier working efficiently with professional servicing and repair support.",
    image: "/images/services/water-purifier.png",
    icon: FaDroplet,
    service: "Water Purifier",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className={styles.sectionHeader}>

          <div className={styles.headingContent}>
            {/* <span className={styles.sectionLabel}>
              OUR SERVICES
            </span> */}

            <h2 className={styles.sectionTitle}>
              Expert Solutions for
              <br />

              <span className={styles.cursiveTitle}>
                Everyday Living.
              </span>
            </h2>
          </div>

          <div className={styles.headingRight}>
            <p>
              From essential kitchen appliances to everyday home
              comforts, we provide reliable repair and maintenance
              services to keep everything running smoothly.
            </p>

            <Link href="/services" className={styles.viewAll}>
              Explore All Services

              <span className={styles.viewAllIcon}>
                <FaArrowUpRightFromSquare />
              </span>
            </Link>
          </div>
        </div>

        {/* =====================================
            SERVICES GRID
        ===================================== */}

        <div className={styles.servicesGrid}>

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className={styles.serviceCard}
                key={service.number}
              >

                {/* IMAGE */}

                <div className={styles.imageWrapper}>

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 33vw"
                    className={styles.serviceImage}
                  />

                  <span className={styles.cardNumber}>
                    {service.number}
                  </span>

                </div>

                {/* CONTENT */}

                <div className={styles.cardContent}>

                  <div className={styles.cardHeading}>

                    <div className={styles.serviceIcon}>
                      <Icon aria-hidden="true" />
                    </div>

                    <h3>{service.title}</h3>

                  </div>

                  <p className={styles.cardDescription}>
                    {service.description}
                  </p>

                  <Link
                    href={`/book-repair?service=${encodeURIComponent(
                      service.service
                    )}`}
                    className={styles.cardLink}
                  >
                    <span>Book This Service</span>

                    <span className={styles.cardArrow}>
                      <FaArrowRight aria-hidden="true" />
                    </span>

                  </Link>

                </div>

              </article>
            );
          })}

        </div>

        {/* =====================================
            BOTTOM CTA BANNER
        ===================================== */}

        <div className={styles.bottomBanner}>

          <div className={styles.bannerLeft}>

            <div className={styles.bannerIcon}>
              <FaScrewdriverWrench aria-hidden="true" />
            </div>

            <div className={styles.bannerContent}>

              {/* <span className={styles.bannerLabel}>
                WE&apos;RE HERE TO HELP
              </span> */}

              <h3>
                Let&apos;s get things{" "}
                <span>working again.</span>
              </h3>

              <p>
                Not sure which repair service you need?
                Tell us about the problem, and we&apos;ll
                help you get started.
              </p>

            </div>

          </div>

          <Link
            href="/book-repair"
            className={styles.bannerButton}
          >
            Book a Repair
            <FaArrowRight aria-hidden="true" />
          </Link>

        </div>

      </div>
    </section>
  );
}
