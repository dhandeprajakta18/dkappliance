import styles from "./HiringProcess.module.css";

const steps = [
  {
    number: "01",
    title: "Submit Your Application",
    description:
      "Tell us about your preferred role, experience, location, and contact details using our simple application form.",
  },
  {
    number: "02",
    title: "Our Team Contacts You",
    description:
      "Our recruitment team reviews your application and contacts suitable candidates to discuss opportunities.",
  },
  {
    number: "03",
    title: "Training & Onboarding",
    description:
      "Selected candidates complete the necessary onboarding and role-specific training before starting work.",
  },
];

export default function HiringProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>

          <h2>
            How It <em>Works.</em>
          </h2>

          <p>
            Your next career opportunity is just
            three simple steps away.
          </p>

        </div>

        <div className={styles.timeline}>

          {steps.map((step) => (
            <div
              className={styles.step}
              key={step.number}
            >

              <div className={styles.number}>
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
