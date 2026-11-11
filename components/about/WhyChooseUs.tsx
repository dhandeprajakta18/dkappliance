import {
  FaShieldHalved,
  FaScrewdriverWrench,
  FaClock,
  FaHeadset,
  FaCircleCheck,
  FaHouse,
} from "react-icons/fa6";

import styles from "./WhyChooseUs.module.css";

const benefits = [
  {
    icon: FaScrewdriverWrench,
    title: "Professional Appliance Care",
    description:
      "Practical repair and maintenance solutions for everyday household appliances.",
  },
  {
    icon: FaShieldHalved,
    title: "Transparent Approach",
    description:
      "Clear communication about the service process and expected charges.",
  },
  {
    icon: FaClock,
    title: "Convenient Booking",
    description:
      "An easy way to request appliance services without unnecessary complications.",
  },
  {
    icon: FaHeadset,
    title: "Customer Support",
    description:
      "A customer-focused approach to questions and service requests.",
  },
  {
    icon: FaCircleCheck,
    title: "Quality-Focused Service",
    description:
      "Attention to workmanship and responsible appliance handling.",
  },
  {
    icon: FaHouse,
    title: "Home Service Convenience",
    description:
      "Appliance care designed around the needs of modern households.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          

          <h2>
            Trusted Service.
            <br />
            <em>Exceptional Care.</em>
          </h2>

          <p>
            We focus on making appliance repair easier,
            clearer, and more convenient.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className={styles.card} key={benefit.title}>
                <div className={styles.icon}>
                  <Icon />
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}