import {
  FaCalendarCheck,
  FaScrewdriverWrench,
  FaStar,
  FaShieldHalved,
  FaUserCheck,
} from "react-icons/fa6";

import styles from "./TrustStats.module.css";

const stats = [
  {
    icon: FaCalendarCheck,
    title: "Experienced",
    description: "Professional appliance repair services",
  },
  {
    icon: FaScrewdriverWrench,
    title: "Expert Repairs",
    description: "Solutions for everyday appliances",
  },
  {
    icon: FaStar,
    title: "Quality Service",
    description: "Customer satisfaction comes first",
  },
  {
    icon: FaShieldHalved,
    title: "Reliable Care",
    description: "Professional support for your home",
  },
  {
    icon: FaUserCheck,
    title: "Skilled",
    description: "Technicians you can depend on",
  },
];

export default function TrustStats() {
  return (
    <section className={styles.trustSection}>

      {/* DISCLAIMER */}

      <div className={styles.disclaimer}>
        <p>
          <strong>Disclaimer:</strong> We are an independent
          appliance repair service provider and are not
          affiliated with or authorised by any appliance brand.
        </p>
      </div>

      {/* STATS BAR */}

      <div className={styles.statsBar}>

        {/* DECORATIVE BACKGROUND */}

        <div className={styles.backgroundPattern}>
          <FaScrewdriverWrench />
          <FaShieldHalved />
          <FaCalendarCheck />
          <FaScrewdriverWrench />
          <FaShieldHalved />
          <FaCalendarCheck />
        </div>

        <div className={styles.statsContainer}>

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className={styles.statItem}
              >

                <div className={styles.statHeading}>

                  <span className={styles.statIcon}>
                    <Icon />
                  </span>

                  <h3>{stat.title}</h3>

                </div>

                <p>{stat.description}</p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}