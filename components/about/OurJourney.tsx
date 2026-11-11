import styles from "./OurJourney.module.css";

const journey = [
  {
    phase: "Our beginning",
    period: "The Early Days",
    milestones: [
      {
        year: "01",
        title: "A Vision for Better Service",
        description:
          "DK Appliance Care was envisioned as a dependable solution for everyday appliance repair needs.",
      },
      {
        year: "02",
        title: "Building Our Expertise",
        description:
          "A focus on technical knowledge, practical solutions, and quality workmanship.",
      },
      {
        year: "03",
        title: "Putting Customers First",
        description:
          "Developing a service approach centered on convenience, communication, and trust.",
      },
    ],
  },
  {
    phase: "Our development",
    period: "Growing Our Capabilities",
    milestones: [
      {
        year: "04",
        title: "Expanding Service Categories",
        description:
          "Building the capability to support a wider range of household appliances.",
      },
      {
        year: "05",
        title: "Improving the Experience",
        description:
          "Working toward simpler service requests and clearer communication.",
      },
      {
        year: "06",
        title: "Digital Convenience",
        description:
          "Making it easier for customers to explore services and request appointments online.",
      },
    ],
  },
];

export default function OurJourney() {
  return (
    <section className={styles.section} id="our-story">
      <div className={styles.container}>
        <div className={styles.heading}>
          

          <h2>
            Built on Trust.
            <br />
            <em>Growing with Every Home.</em>
          </h2>

          <p>
            Our story is shaped by a simple belief:
            appliance care should be professional,
            convenient, and customer-focused.
          </p>
        </div>

        {journey.map((group) => (
          <div className={styles.group} key={group.phase}>
            <div className={styles.groupLabel}>
              <strong>{group.phase}</strong>
              <span>{group.period}</span>
            </div>

            <div className={styles.grid}>
              {group.milestones.map((item) => (
                <article className={styles.card} key={item.year}>
                  <span className={styles.year}>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
