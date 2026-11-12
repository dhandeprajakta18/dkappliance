"use client";

import {
  FaScrewdriverWrench,
  FaDroplet,
  FaCirclePlus,
  FaCircleMinus,
  FaCircleInfo,
} from "react-icons/fa6";

import type {
  StepProps,
  ServiceType,
} from "./booking.types";

import styles from "@/app/book-repair/page.module.css";

const serviceTypes = [
  {
    name: "Repair" as ServiceType,
    description:
      "Fix a broken or malfunctioning appliance",
    icon: FaScrewdriverWrench,
  },
  {
    name: "Service" as ServiceType,
    description:
      "Routine maintenance and deep cleaning",
    icon: FaDroplet,
  },
  {
    name: "Installation" as ServiceType,
    description:
      "Install a new appliance at your home",
    icon: FaCirclePlus,
  },
  {
    name: "Uninstallation" as ServiceType,
    description:
      "Safely remove your appliance",
    icon: FaCircleMinus,
  },
];

export default function ServiceTypeStep({
  booking,
  updateBooking,
  nextStep,
}: StepProps) {
  const selectType = (type: ServiceType) => {
    updateBooking({
      serviceType: type,
      date: "",
      timeSlot: null,
    });

    nextStep();
  };

  return (
    <div className={styles.stepContent}>
      <h2>What do you need?</h2>

      <p className={styles.stepDescription}>
        Choose the service type for{" "}
        <strong>{booking.appliance}</strong>.
      </p>

      <div className={styles.serviceTypeGrid}>
        {serviceTypes.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              type="button"
              className={`${styles.serviceTypeCard} ${
                booking.serviceType === item.name
                  ? styles.selectedCard
                  : ""
              }`}
              onClick={() => selectType(item.name)}
            >
              <span className={styles.cardRadio} />

              <div className={styles.serviceTypeIcon}>
                <Icon />
              </div>

              <strong>{item.name}</strong>

              <p>{item.description}</p>
            </button>
          );
        })}
      </div>

      <div className={styles.infoBanner}>
        <FaCircleInfo />

        <span>
          Not sure? Choose Repair. The technician
          checks the fault first.
        </span>
      </div>
    </div>
  );
}