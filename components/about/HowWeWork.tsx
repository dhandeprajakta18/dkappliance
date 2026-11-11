import { FaShieldHalved } from "react-icons/fa6";

import styles from "./HowWeWork.module.css";

const steps = [
  {
    number: "1",
    title: "Book Your Service",
    description:
      "Choose your appliance and submit a service request through our website.",
  },
  {
    number: "2",
    title: "Inspection & Estimate",
    description:
      "The technician inspects the appliance and explains the proposed repair and estimated charges.",
  },
  {
    number: "3",
    title: "Repair & Completion",
    description:
      "After your approval, the technician carries out the agreed service.",
  },
];

export default function HowWeWork() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
         

          <h2>
            How We <em>Work.</em>
          </h2>

          <p>
            A straightforward service process
            designed around your convenience.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step) => (
            <div className={styles.step} key={step.number}>
              <div className={styles.number}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.notice}>
          <FaShieldHalved />

          <p>
            We believe customers should understand the
            proposed work and estimated cost before
            approving a repair.
          </p>
        </div>
      </div>
    </section>
  );
}