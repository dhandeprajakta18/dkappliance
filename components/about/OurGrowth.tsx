import {
  FaArrowTrendUp,
  FaClipboardCheck,
  FaHeadset,
  FaShieldHalved,
} from "react-icons/fa6";

import styles from "./OurGrowth.module.css";

const growthData = [
  { year: "Request", value: 25 },
  { year: "Inspect", value: 50 },
  { year: "Explain", value: 75 },
  { year: "Repair", value: 100 },
];

const features = [
  {
    icon: FaClipboardCheck,
    title: "Organized Service",
    description:
      "A structured approach to service requests and appliance repair.",
  },
  {
    icon: FaHeadset,
    title: "Clear Communication",
    description:
      "Helping customers understand their service requirements.",
  },
  {
    icon: FaShieldHalved,
    title: "Quality-Focused Work",
    description:
      "An emphasis on responsible workmanship and professional care.",
  },
];

export default function OurGrowth() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          

          <h2>
            Service Built on
            <br />
            <em>Clear Communication.</em>
          </h2>

          <p>
            Our focus is on improving the appliance service
            experience through technical expertise, customer
            support, and dependable processes.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.chartCard}>
            <div className={styles.chartHeading}>
              <h3>Our service process</h3>
              <FaArrowTrendUp />
            </div>

            <p>
              Each visit follows a simple process designed to keep you informed.
            </p>

            <div className={styles.barChart}>
              {growthData.map((item) => (
                <div className={styles.barItem} key={item.year}>
                  <div className={styles.barArea}>
                    <div
                      className={styles.bar}
                      style={{ height: `${item.value}%` }}
                    >
                    </div>
                  </div>

                  <span className={styles.barYear}>
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.features}>
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className={styles.featureCard}
                  key={feature.title}
                >
                  <Icon />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.bottom}>
          <h3>
            Better Processes.
            <br />
            Better Experiences.
          </h3>

          <p>
            We aim to make every service interaction
            straightforward, informative, and convenient.
          </p>
        </div>
      </div>
    </section>
  );
}
