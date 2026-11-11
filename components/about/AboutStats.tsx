import styles from "./AboutStats.module.css";

const stats = [
  {
    value: "XX+",
    label: "Years of Experience",
    description: "Providing dependable appliance care.",
  },
  {
    value: "XX+",
    label: "Appliances Serviced",
    description: "Helping homes run smoothly.",
  },
  {
    value: "XX+",
    label: "Happy Customers",
    description: "Building trust through quality service.",
  },
  {
    value: "XX+",
    label: "Service Locations",
    description: "Making appliance care accessible.",
  },
  {
    value: "6",
    label: "Core Appliance Categories",
    description: "Supporting essential household appliances.",
  },
  {
    value: "100%",
    label: "Commitment to Quality",
    description: "Focused on customer satisfaction.",
  },
];

export default function AboutStats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <article className={styles.card} key={stat.label}>
              <div className={styles.value}>{stat.value}</div>
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
