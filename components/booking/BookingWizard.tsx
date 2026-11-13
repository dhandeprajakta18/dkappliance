"use client";

import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

import { FaArrowLeft } from "react-icons/fa6";

import BookingSidebar from "./BookingSidebar";

import CityStep from "./CityStep";
import ApplianceStep from "./ApplianceStep";
import ServiceTypeStep from "./ServiceTypeStep";
import ServiceDetailsStep from "./ServiceDetailsStep";
import DateTimeStep from "./DateTimeStep";
import PhoneStep from "./PhoneStep";
import OTPStep from "./OTPStep";
import ConfirmationStep from "./ConfirmationStep";

import {
  appliances,
  serviceCities,
} from "./booking.data";

import type {
  BookingData,
  BookingStep,
} from "./booking.types";

import styles from "@/app/book-repair/page.module.css";

const steps: BookingStep[] = [
  "city",
  "appliance",
  "type",
  "details",
  "date",
  "phone",
  "otp",
  "confirmation",
];

const stepLabels: Record<BookingStep, string> = {
  city: "City",
  appliance: "Appliance",
  type: "Type",
  details: "Service",
  date: "Date",
  phone: "Number",
  otp: "Code",
  confirmation: "Done",
};

const initialBooking: BookingData = {
  city: "",
  appliance: "",
  requestedService: "",
  referencePrice: "",
  serviceType: null,
  date: "",
  timeSlot: null,
  phone: "",
};

export default function BookingWizard() {
  const searchParams = useSearchParams();

  const [stepIndex, setStepIndex] = useState(0);

  const [, startTransition] = useTransition();

  const [booking, setBooking] =
    useState<BookingData>(initialBooking);

  const [bookingId] = useState<string | undefined>(
    undefined
  );

  const currentStep = steps[stepIndex];

  const progress =
    ((stepIndex + 1) / steps.length) * 100;

  useEffect(() => {
    const cityParam = searchParams.get("city");
    const applianceParam = searchParams.get("appliance");
    const serviceParam = searchParams.get("service");
    const priceParam = searchParams.get("price");

    const storedCity =
      localStorage.getItem("dk-selected-city");

    const selectedCity =
      cityParam &&
      serviceCities.some(
        (city) =>
          city.toLowerCase() ===
          cityParam.toLowerCase()
      )
        ? serviceCities.find(
            (city) =>
              city.toLowerCase() ===
              cityParam.toLowerCase()
          ) || ""
        : storedCity &&
            serviceCities.includes(storedCity)
          ? storedCity
          : "";

    const selectedAppliance = applianceParam && appliances.some(
      (item) => item.name.toLowerCase() === applianceParam.toLowerCase()
    )
      ? appliances.find(
          (item) => item.name.toLowerCase() === applianceParam.toLowerCase()
        )?.name || ""
      : serviceParam
      ? appliances.find((item) =>
          serviceParam
            .toLowerCase()
            .includes(item.name.toLowerCase())
        )?.name || ""
      : "";

    startTransition(() => {
      setBooking((previous) => ({
        ...previous,
        city: selectedCity,
        appliance: selectedAppliance,
        requestedService: serviceParam || "",
        referencePrice: priceParam || "",
      }));

      setStepIndex(
        selectedCity && selectedAppliance
          ? 2
          : selectedCity
            ? 1
            : 0
      );
    });
  }, [searchParams]);

  const updateBooking = (
    data: Partial<BookingData>
  ) => {
    setBooking((previous) => ({
      ...previous,
      ...data,
    }));
  };

  const nextStep = () => {
    setStepIndex((previous) =>
      Math.min(previous + 1, steps.length - 2)
    );
  };

  const previousStep = () => {
    setStepIndex((previous) =>
      Math.max(previous - 1, 0)
    );
  };

  const stepProps = {
    booking,
    updateBooking,
    nextStep,
    previousStep,
  };

  const renderStep = () => {
    switch (currentStep) {
      case "city":
        return <CityStep {...stepProps} />;

      case "appliance":
        return <ApplianceStep {...stepProps} />;

      case "type":
        return <ServiceTypeStep {...stepProps} />;

      case "details":
        return <ServiceDetailsStep {...stepProps} />;

      case "date":
        return <DateTimeStep {...stepProps} />;

      case "phone":
        return <PhoneStep {...stepProps} />;

      case "otp":
        return <OTPStep {...stepProps} />;

      case "confirmation":
        return (
          <ConfirmationStep
            booking={booking}
            bookingId={bookingId}
          />
        );

      default:
        return <CityStep {...stepProps} />;
    }
  };

  return (
    <div className={styles.bookingPage}>
      <main className={styles.bookingContainer}>
        <div className={styles.bookingTitle}>
          <h1>Book appliance service</h1>

          <p>
            Choose your city and appliance.
            No payment is collected while booking.
          </p>
        </div>

        <div className={styles.bookingLayout}>
          <div className={styles.bookingLeft}>
            <section className={styles.bookingCard}>
              <div className={styles.progressHeader}>
                <span>About a minute</span>
                <span>{stepLabels[currentStep]}</span>
              </div>

              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${progress}%` }}
                />
              </div>

              {stepIndex > 0 &&
                currentStep !== "confirmation" && (
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={previousStep}
                  >
                    <FaArrowLeft />
                    Back
                  </button>
                )}

              {renderStep()}
            </section>

            <p className={styles.bookingDisclaimer}>
              <u>Disclaimer:</u> We are an
              independent appliance repair service
              provider and are not authorised
              by any brand.
            </p>

            <div className={styles.bottomTrust}>
              <span>
                ① Your technician calls before the visit
              </span>

              <span>
                ② Your technician confirms the exact time
              </span>

              <span>
                ③ Nothing is paid online
              </span>
            </div>
          </div>

          <BookingSidebar />
        </div>
      </main>
    </div>
  );
}
