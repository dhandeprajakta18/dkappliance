import {
  FaPhoneVolume,
  FaClipboardCheck,
  FaCalendarCheck,
  FaShieldHalved,
} from "react-icons/fa6";

import styles from "./WhatHappensNext.module.css";

const steps = [
  {
    number: "01",
    icon: FaPhoneVolume,
    title: "We Contact You",
    description:
      "Our support team reviews your request and contacts you using the phone number provided.",
  },
  {
    number: "02",
    icon: FaClipboardCheck,
    title: "We Understand Your Issue",
    description:
      "Tell us about your appliance and the problem. Our team will guide you through the available service options.",
  },
  {
    number: "03",
    icon: FaCalendarCheck,
    title: "Schedule a Visit",
    description:
      "If you wish to proceed, we help arrange a convenient service appointment.",
  },
];

export default function WhatHappensNext() {
  return (
    <aside className={styles.wrapper}>
      {/* <span className={styles.tag}>SIMPLE PROCESS</span> */}

      <h3>What Happens Next?</h3>

      <p className={styles.intro}>
        Here&apos;s what you can expect after requesting
        a callback.
      </p>

      <div className={styles.steps}>
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div className={styles.step} key={step.number}>
              <div className={styles.number}>
                {step.number}
              </div>

              <div className={styles.stepContent}>
                <div className={styles.stepHeading}>
                  <Icon />
                  <h4>{step.title}</h4>
                </div>

                <p>{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.notice}>
        <FaShieldHalved />

        <p>
          Submitting a callback request does not
          automatically confirm a repair booking.
          Our team will discuss the next steps with you.
        </p>
      </div>
    </aside>
  );
}
