import Link from "next/link";

import {
  FaScrewdriverWrench,
  FaComments,
  FaCircleExclamation,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa6";

import styles from "./ContactOptions.module.css";

const options = [
  {
    icon: FaScrewdriverWrench,
    title: "Book an Appliance Repair",
    description:
      "Choose your appliance and request a convenient service appointment. Get assistance with repair and maintenance needs.",
    button: "Book Online",
    href: "#callback",
  },
  {
    icon: FaComments,
    title: "Have a Question?",
    description:
      "Not sure which service you need? Request a callback and our team can help you understand your options.",
    button: "Request a Callback",
    href: "#callback",
  },
  {
    icon: FaCircleExclamation,
    title: "Problem with a Booking?",
    description:
      "Need assistance with an existing booking or repair? Access your booking details or contact our support team.",
    button: "Request Support",
    href: "#callback",
  },
  {
    icon: FaUsers,
    title: "Want to Work With Us?",
    description:
      "Interested in joining our team? Get in touch to explore potential opportunities with DK Appliance Care.",
    button: "Contact Our Team",
    href: "#callback",
  },
];

export default function ContactOptions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          {/* <span className={styles.tag}>HOW CAN WE ASSIST?</span> */}

          <h2>
            What Do You <em>Need?</em>
          </h2>

          <p>
            Choose the option that best describes
            how we can help you.
          </p>
        </div>

        <div className={styles.grid}>
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <article className={styles.card} key={option.title}>
                <div className={styles.icon}>
                  <Icon />
                </div>

                <h3>{option.title}</h3>

                <p>{option.description}</p>

                <div className={styles.cardFooter}>
                  <Link href={option.href} className={styles.button}>
                    {option.button}
                    <FaArrowRight />
                  </Link>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
