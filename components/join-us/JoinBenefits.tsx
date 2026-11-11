import {
  FaArrowRight,
  FaGraduationCap,
  FaPeopleGroup,
  FaChartLine,
  FaShieldHalved,
} from "react-icons/fa6";

import Link from "next/link";

import styles from "./JoinBenefits.module.css";

const benefits = [
  {
    icon: FaGraduationCap,
    title: "Continuous Learning",
    description:
      "Develop practical skills and expand your technical knowledge through hands-on experience.",
  },
  {
    icon: FaChartLine,
    title: "Career Growth",
    description:
      "Build valuable industry experience and explore opportunities for professional development.",
  },
  {
    icon: FaPeopleGroup,
    title: "Team Environment",
    description:
      "Work with a team that values collaboration, respect, and excellent customer service.",
  },
  {
    icon: FaShieldHalved,
    title: "Professional Standards",
    description:
      "Be part of a service-focused organization committed to quality, reliability, and customer satisfaction.",
  },
];

export default function JoinBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>

          <h2>
            More Than a Job.
            <br />
            <em>A Place to Grow.</em>
          </h2>

          <p>
            We believe great service begins with
            great people. Discover what makes
            working with us rewarding.
          </p>

        </div>

        <div className={styles.grid}>

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                className={styles.benefit}
                key={benefit.title}
              >

                <div className={styles.icon}>
                  <Icon />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

              </div>
            );
          })}

        </div>

        <div className={styles.bottomCTA}>

          <div>
            <h3>Ready to Start Your Journey?</h3>

            <p>
              Take the next step toward building
              your career with DK Appliance Care.
            </p>
          </div>

          <Link href="#apply">
            Apply Now
            <FaArrowRight />
          </Link>

        </div>

      </div>
    </section>
  );
}
