"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  FaPlay,
  FaPause,
  FaCheck,
  FaShieldHalved,
  FaReceipt,
} from "react-icons/fa6";

import styles from "./HowItWorks.module.css";

/* =========================================
   TYPES
========================================= */

type Step = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageTitle: string;
  imageSubtitle: string;
  highlight: string;
};

/* =========================================
   STEPS DATA
========================================= */

const steps: Step[] = [
  {
    id: 1,
    title: "Choose your appliance and book a repair.",
    description:
      "Select your appliance, describe the problem, and choose a convenient service date. Our booking process is simple and quick.",
    image: "/images/services/ac.png",
    imageTitle: "Book your repair",
    imageSubtitle: "Simple and convenient booking",
    highlight: "Quick and easy service booking.",
  },
  {
    id: 2,
    title: "Our team confirms your appointment.",
    description:
      "Our support team contacts you to confirm your booking details and preferred service time.",
    image: "/images/services/washing-machine.png",
    imageTitle: "Booking confirmation",
    imageSubtitle: "Our team confirms your appointment",
    highlight: "Our team keeps you informed.",
  },
  {
    id: 3,
    title: "Your technician calls before arriving.",
    description:
      "A trained technician contacts you before visiting your home and confirms the expected arrival time.",
    image: "/images/services/refrigerator.png",
    imageTitle: "Technician assigned",
    imageSubtitle: "Professional doorstep service",
    highlight: "A professional technician visits your home.",
  },
  {
    id: 4,
    title: "Inspection first. We explain the cost before repair.",
    description:
      "Our technician carefully inspects your appliance, identifies the problem, and explains the repair cost before starting any work.",
    image: "/images/services/television.png",
    imageTitle: "Appliance inspection",
    imageSubtitle: "Professional diagnosis and repair",
    highlight: "You approve the repair before work begins.",
  },
  {
    id: 5,
    title: "Your appliance is repaired with quality spare parts.",
    description:
      "Once you approve the repair, our technician completes the work using suitable replacement parts and tests the appliance.",
    image: "/images/services/microwave.png",
    imageTitle: "Expert appliance repair",
    imageSubtitle: "Quality workmanship",
    highlight: "Your appliance is tested after repair.",
  },
  {
    id: 6,
    title: "Your repair is completed and recorded.",
    description:
      "After the repair, we verify that your appliance is working properly and maintain service details for future assistance.",
    image: "/images/services/water-purifier.png",
    imageTitle: "Repair completed",
    imageSubtitle: "Reliable service and support",
    highlight: "We're here whenever you need assistance.",
  },
];

/* =========================================
   MAIN COMPONENT
========================================= */

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const [scrollProgress, setScrollProgress] = useState(0);

  const [timelineHeight, setTimelineHeight] = useState(0);

  /* =========================================
     SCROLL TRACKING
  ========================================= */

  useEffect(() => {
    if (!isPlaying) return;

    let frame = 0;

    const updateTimeline = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const timeline = timelineRef.current;

        const circles = circleRefs.current.filter(
          (element): element is HTMLDivElement => element !== null
        );

        if (!timeline || circles.length === 0) return;

        const timelineRect = timeline.getBoundingClientRect();

        const firstCircle = circles[0].getBoundingClientRect();

        const lastCircle =
          circles[circles.length - 1].getBoundingClientRect();

        const firstCenter =
          firstCircle.top + firstCircle.height / 2;

        const lastCenter =
          lastCircle.top + lastCircle.height / 2;

        const totalDistance = lastCenter - firstCenter;

        if (totalDistance <= 0) return;

        /*
          Trigger position determines when
          a timeline step becomes active.
        */

        const triggerPosition = window.innerHeight * 0.38;

        /*
          Find currently active step.
        */

        let currentStep = 1;

        circles.forEach((circle, index) => {
          const rect = circle.getBoundingClientRect();

          const center = rect.top + rect.height / 2;

          if (center <= triggerPosition) {
            currentStep = index + 1;
          }
        });

        setActiveStep((previous) =>
          previous === currentStep ? previous : currentStep
        );

        /*
          Calculate scroll progress.
        */

        const traveledDistance =
          triggerPosition - firstCenter;

        const progress = Math.max(
          0,
          Math.min(
            1,
            traveledDistance / totalDistance
          )
        );

        setScrollProgress((previous) =>
          Math.abs(previous - progress) < 0.001
            ? previous
            : progress
        );

        /*
          Calculate actual timeline height.
        */

        const firstCenterRelative =
          firstCenter - timelineRect.top;

        const lastCenterRelative =
          lastCenter - timelineRect.top;

        const lineHeight =
          lastCenterRelative - firstCenterRelative;

        setTimelineHeight((previous) =>
          Math.abs(previous - lineHeight) < 0.5
            ? previous
            : lineHeight
        );
      });
    };

    updateTimeline();

    window.addEventListener("scroll", updateTimeline, {
      passive: true,
    });

    window.addEventListener("resize", updateTimeline);

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        "scroll",
        updateTimeline
      );

      window.removeEventListener(
        "resize",
        updateTimeline
      );
    };
  }, [isPlaying]);

  /* =========================================
     ACTIVE IMAGE
  ========================================= */

  const activeData = steps[activeStep - 1];

  /* =========================================
     JSX
  ========================================= */

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="how-it-works"
    >
      <div className={styles.container}>

        {/* =====================================
            LEFT SIDE — STICKY
        ===================================== */}

        <div className={styles.leftColumn}>

          <div className={styles.stickyContent}>

            {/* HEADING */}

            <div className={styles.headingArea}>

              <h2 className={styles.heading}>
                How a visit works,
                <br />
                <em>step by step.</em>
              </h2>

              <p className={styles.intro}>
                Six simple steps, from booking your
                repair to getting your appliance
                working again.
              </p>

            </div>

            {/* SERVICE SUMMARY */}

            <div className={styles.serviceSummary}>

              <span className={styles.summaryIcon}>
                <FaCheck />
              </span>

              <div>
                <strong>
                  See how our service works
                </strong>

                <span>
                  Professional doorstep appliance care
                </span>
              </div>

            </div>

            {/* =================================
                IMAGE CARD
            ================================= */}

            <div className={styles.visualCard}>

              {/* All images remain mounted for smooth crossfade */}

              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`${styles.imageLayer} ${
                    activeStep === step.id
                      ? styles.imageActive
                      : ""
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.imageTitle}
                    fill
                    sizes="(max-width: 960px) 100vw, 420px"
                    className={styles.stepImage}
                  />
                </div>
              ))}

              <div className={styles.imageOverlay} />

              {/* IMAGE TOP TEXT */}

              <div className={styles.imageTop}>

                <strong key={`title-${activeStep}`}>
                  {activeData.imageTitle}
                </strong>

                <span key={`subtitle-${activeStep}`}>
                  {activeData.imageSubtitle}
                </span>

              </div>

              {/* IMAGE BOTTOM */}

              <div className={styles.imageBottom}>

                <div className={styles.imageStatus}>

                  <span className={styles.statusDot} />

                  <span>
                    Step {activeStep} of {steps.length}
                  </span>

                </div>

                <button
                  type="button"
                  className={styles.pauseButton}
                  onClick={() =>
                    setIsPlaying((previous) => !previous)
                  }
                  aria-label={
                    isPlaying
                      ? "Pause image animations"
                      : "Resume image animations"
                  }
                  aria-pressed={isPlaying}
                >
                  {isPlaying ? (
                    <FaPause />
                  ) : (
                    <FaPlay />
                  )}
                </button>

              </div>

            </div>

            {/* IMAGE PROGRESS */}

            <div className={styles.imageProgress}>

              {steps.map((step) => (
                <span
                  key={step.id}
                  className={
                    activeStep >= step.id
                      ? styles.progressActive
                      : ""
                  }
                />
              ))}

            </div>

          </div>

        </div>

        {/* =====================================
            RIGHT SIDE — SCROLLING TIMELINE
        ===================================== */}

        <div
          ref={timelineRef}
          className={styles.rightColumn}
        >

          {/* BACKGROUND LINE */}

          <div
            className={styles.timelineLine}
            style={{
              height: `${timelineHeight}px`,
            }}
          />

          {/* ANIMATED PROGRESS LINE */}

          <div
            className={styles.timelineProgress}
            style={{
              height: `${
                timelineHeight * scrollProgress
              }px`,
            }}
          />

          {/* =================================
              TIMELINE STEPS
          ================================= */}

          {steps.map((step) => {
            const isActive =
              activeStep === step.id;

            const isCompleted =
              activeStep > step.id;

            return (
              <div
                key={step.id}
                ref={(element) => {
                  stepRefs.current[step.id - 1] =
                    element;
                }}
                className={`${styles.timelineStep} ${
                  isActive
                    ? styles.activeStep
                    : ""
                } ${
                  isCompleted
                    ? styles.completedStep
                    : ""
                }`}
              >

                {/* NUMBER */}

                <div className={styles.numberWrapper}>

                  <div
                    ref={(element) => {
                      circleRefs.current[
                        step.id - 1
                      ] = element;
                    }}
                    className={styles.stepNumber}
                  >
                    {step.id}
                  </div>

                  {isActive && (
                    <span
                      className={styles.activeIndicator}
                    />
                  )}

                </div>

                {/* STEP CONTENT */}

                <div className={styles.stepContent}>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  {/* STEP 2 TIME SLOTS */}

                  {step.id === 2 && (
                    <div className={styles.timeSlots}>

                      <div>
                        <strong>Morning</strong>
                        <span>
                          9:00 AM – 12:00 PM
                        </span>
                      </div>

                      <div>
                        <strong>Afternoon</strong>
                        <span>
                          12:00 PM – 4:00 PM
                        </span>
                      </div>

                      <div>
                        <strong>Evening</strong>
                        <span>
                          4:00 PM – 8:00 PM
                        </span>
                      </div>

                    </div>
                  )}

                  {/* STEP 4 INSPECTION CARD */}

                  {step.id === 4 && (
                    <div className={styles.inspectionCard}>

                      <div className={styles.cardTop}>
                        <FaReceipt />
                        <span>
                          Transparent pricing
                        </span>
                      </div>

                      <p className={styles.cardDescription}>
                        Our technician explains the
                        repair cost before starting
                        the work.
                      </p>

                      <div className={styles.cardGrid}>

                        <div>
                          <h4>
                            Clear pricing.
                            <br />
                            <em>No surprises.</em>
                          </h4>
                        </div>

                        <div>
                          <h4>
                            You decide
                            <br />
                            <em>
                              before we repair.
                            </em>
                          </h4>
                        </div>

                      </div>

                    </div>
                  )}

                  {/* STEP 5 WARRANTY */}

                  {step.id === 5 && (
                    <div className={styles.warrantyInfo}>

                      <FaShieldHalved />

                      <span>
                        We focus on reliable repairs,
                        suitable spare parts, and
                        quality workmanship.
                      </span>

                    </div>
                  )}

                  {/* STEP 6 FINAL MESSAGE */}

                  {step.id === 6 && (
                    <div className={styles.finalMessage}>

                      <em>
                        Great service doesn&apos;t
                        end when the technician leaves.
                      </em>

                      <span />

                    </div>
                  )}

                  {/* ACTIVE STEP HIGHLIGHT */}

                  <div
                    className={`${styles.expandedContent} ${
                      isActive
                        ? styles.expandedActive
                        : ""
                    }`}
                  >
                    <div className={styles.expandedInner}>

                      <FaCheck />

                      <span>
                        {step.highlight}
                      </span>

                    </div>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
