import {
  FaScrewdriverWrench,
  FaGraduationCap,
  FaHeadset,
} from "react-icons/fa6";

import styles from "./JobRoles.module.css";

const roles = [
  {
    icon: FaScrewdriverWrench,
    title: "Service Technicians",
    description:
      "Work on air conditioners, refrigerators, washing machines, and other home appliances. Diagnose problems, provide professional repairs, and deliver outstanding customer service.",
    label: "Technical role",
  },
  {
    icon: FaGraduationCap,
    title: "Helpers & Trainees",
    description:
      "Start your career in appliance repair. Learn practical skills, work alongside experienced professionals, and develop the confidence to become a skilled technician.",
    label: "Entry-level role",
  },
  {
    icon: FaHeadset,
    title: "Office & Support",
    description:
      "Help customers schedule services, coordinate technician visits, manage enquiries, and ensure every customer enjoys a smooth service experience.",
    label: "Support role",
  },
];

export default function JobRoles() {
  return (
    <section
      className={styles.section}
      id="open-positions"
    >
      <div className={styles.container}>

        <div className={styles.sectionHeader}>

          <h2>
            Who We Are <em>Looking For.</em>
          </h2>

          <p>
            Whether you&apos;re an experienced professional
            or just starting your career, there&apos;s
            an opportunity to grow with us.
          </p>

        </div>

        <div className={styles.grid}>

          {roles.map((role, index) => {
            const Icon = role.icon;

            return (
              <article
                className={styles.card}
                key={role.title}
              >

                <div className={styles.cardTop}>
                  <div className={styles.iconBox}>
                    <Icon />
                  </div>

                  <span className={styles.cardNumber}>
                    0{index + 1}
                  </span>
                </div>

                <span className={styles.roleMeta}>
                  {role.label}
                </span>

                <h3>{role.title}</h3>

                <p>{role.description}</p>

                <a
                  href="#apply"
                  className={styles.applyLink}
                >
                  Apply for this role
                  <span>↗</span>
                </a>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
