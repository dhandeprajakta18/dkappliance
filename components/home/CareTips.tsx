"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

import styles from "./CareTips.module.css";

type Tip = {
  title: string;
  highlight: string;
  description: string;
};

type Appliance = {
  id: string;
  name: string;
  icon: string;
  tips: Tip[];
};

const appliances: Appliance[] = [
  {
    id: "ac",
    name: "Air Conditioner",
    icon: "/images/services/ac.png",
    tips: [
      {
        title: "your AC needs a service before summer",
        highlight: "AC needs a service",
        description:
          "Regular servicing improves cooling performance and helps your air conditioner work efficiently during hot summer days.",
      },
      {
        title: "AC works harder than you think",
        highlight: "works harder",
        description:
          "Dust, heat and long operating hours can clog filters and coils, making your AC work longer to cool the same room.",
      },
      {
        title: "clean filters mean better cooling",
        highlight: "better cooling",
        description:
          "Dirty air filters restrict airflow. Cleaning them regularly can improve cooling and reduce unnecessary energy consumption.",
      },
      {
        title: "small AC problems before they grow",
        highlight: "small AC problems",
        description:
          "Unusual sounds, weak airflow and water leakage can indicate problems that should be checked by a technician.",
      },
      {
        title: "a little maintenance goes a long way",
        highlight: "maintenance",
        description:
          "Routine inspections and timely servicing can help prevent unexpected breakdowns and extend your AC's lifespan.",
      },
    ],
  },

  {
    id: "washing-machine",
    name: "Washing Machine",
    icon: "/images/services/washing-machine.png",
    tips: [
      {
        title: "your washing machine needs regular care",
        highlight: "regular care",
        description:
          "Cleaning the drum, filter and detergent drawer helps prevent unpleasant smells and keeps your clothes fresh.",
      },
      {
        title: "overloading can damage your machine",
        highlight: "overloading",
        description:
          "Too many clothes put extra pressure on the motor, bearings and drum, potentially causing unnecessary wear.",
      },
      {
        title: "strange noises during the spin cycle",
        highlight: "strange noises",
        description:
          "Loud vibrations or grinding sounds may indicate worn bearings, loose components or an unbalanced load.",
      },
      {
        title: "keep the detergent drawer clean",
        highlight: "drawer clean",
        description:
          "Detergent residue can build up over time. Regular cleaning helps prevent blockages and unwanted odours.",
      },
      {
        title: "small habits protect your washing machine",
        highlight: "small habits",
        description:
          "Use the recommended detergent quantity, avoid overloading and check hoses regularly for leaks.",
      },
    ],
  },

  {
    id: "refrigerator",
    name: "Refrigerator",
    icon: "/images/services/refrigerator.png",
    tips: [
      {
        title: "your fridge needs proper airflow",
        highlight: "proper airflow",
        description:
          "Good ventilation around your refrigerator helps release heat and supports efficient cooling.",
      },
      {
        title: "door seals matter more than you think",
        highlight: "door seals",
        description:
          "Damaged or dirty door seals allow cold air to escape, forcing the compressor to work harder.",
      },
      {
        title: "your refrigerator running constantly",
        highlight: "running constantly",
        description:
          "Continuous operation may indicate poor ventilation, dirty coils or a cooling-system problem.",
      },
      {
        title: "keep your refrigerator coils clean",
        highlight: "coils clean",
        description:
          "Dust buildup on accessible condenser coils can reduce cooling efficiency. Follow the manufacturer's cleaning guidance.",
      },
      {
        title: "prevent cooling problems before they start",
        highlight: "cooling problems",
        description:
          "Maintain suitable temperature settings and arrange an inspection when cooling becomes inconsistent.",
      },
    ],
  },

  {
    id: "television",
    name: "Television",
    icon: "/images/services/television.png",
    tips: [
      {
        title: "your television needs proper ventilation",
        highlight: "proper ventilation",
        description:
          "Adequate airflow around your television helps prevent overheating and supports reliable performance.",
      },
      {
        title: "screen cleaning needs extra care",
        highlight: "screen cleaning",
        description:
          "Use a soft microfiber cloth and follow the manufacturer's instructions to avoid damaging the display.",
      },
      {
        title: "screen flickering and unusual lines",
        highlight: "screen flickering",
        description:
          "Flickering, dark patches or coloured lines may indicate a display or internal hardware issue.",
      },
      {
        title: "protect your TV from power fluctuations",
        highlight: "power fluctuations",
        description:
          "Use suitable electrical protection where recommended and avoid damaged cables or loose sockets.",
      },
      {
        title: "professional diagnosis prevents guesswork",
        highlight: "professional diagnosis",
        description:
          "When your TV develops display or sound problems, an inspection can help identify the actual fault.",
      },
    ],
  },

  {
    id: "microwave",
    name: "Microwave",
    icon: "/images/services/microwave.png",
    tips: [
      {
        title: "your microwave needs regular cleaning",
        highlight: "regular cleaning",
        description:
          "Food residue and grease can cause unpleasant smells and affect the cleanliness of your microwave.",
      },
      {
        title: "use only microwave-safe containers",
        highlight: "microwave-safe",
        description:
          "Always use containers approved for microwave use and follow the appliance manufacturer's instructions.",
      },
      {
        title: "unusual sparks or burning smells",
        highlight: "sparks",
        description:
          "Stop using the microwave immediately if you notice sparks, smoke or burning smells, and arrange a professional inspection.",
      },
      {
        title: "never operate an empty microwave",
        highlight: "empty microwave",
        description:
          "Operating a microwave without food or water can damage internal components.",
      },
      {
        title: "leave internal microwave repairs to experts",
        highlight: "repairs to experts",
        description:
          "Microwaves contain high-voltage components that can remain dangerous even when unplugged.",
      },
    ],
  },

  {
    id: "water-purifier",
    name: "Water Purifier",
    icon: "/images/services/water-purifier.png",
    tips: [
      {
        title: "your water purifier needs timely servicing",
        highlight: "timely servicing",
        description:
          "Regular maintenance helps your purifier operate correctly and supports consistent water treatment.",
      },
      {
        title: "filters do not last forever",
        highlight: "filters",
        description:
          "Replace filters according to manufacturer recommendations, water quality and usage.",
      },
      {
        title: "slow water flow and unusual taste",
        highlight: "slow water flow",
        description:
          "Changes in flow, taste or smell may indicate that your purifier requires inspection or maintenance.",
      },
      {
        title: "keep your purifier clean and hygienic",
        highlight: "clean and hygienic",
        description:
          "Follow recommended cleaning and sanitisation schedules to maintain the system properly.",
      },
      {
        title: "regular checks protect your water system",
        highlight: "regular checks",
        description:
          "Timely servicing helps identify leaks, clogged filters and other performance issues.",
      },
    ],
  },
];

const AUTO_PLAY_DELAY = 5500;

export default function CareTips() {
  const [activeAppliance, setActiveAppliance] = useState(0);
  const [activeTip, setActiveTip] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const reduceMotion = useReducedMotion();

  const appliance = appliances[activeAppliance];
  const tips = appliance.tips;

  const nextTip = () => {
    setDirection(1);
    setActiveTip((previous) => (previous + 1) % tips.length);
  };

  const previousTip = () => {
    setDirection(-1);
    setActiveTip(
      (previous) => (previous - 1 + tips.length) % tips.length
    );
  };

  const selectAppliance = (index: number) => {
    if (index === activeAppliance) return;

    setDirection(1);
    setActiveAppliance(index);
    setActiveTip(0);
  };

  useEffect(() => {
    if (!isPlaying || reduceMotion) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveTip((previous) => (previous + 1) % tips.length);
    }, AUTO_PLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [isPlaying, activeAppliance, tips.length, reduceMotion]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeDistance = info.offset.x;
    const swipeVelocity = info.velocity.x;

    if (swipeDistance < -70 || swipeVelocity < -500) {
      nextTip();
    } else if (swipeDistance > 70 || swipeVelocity > 500) {
      previousTip();
    }
  };

  const currentTip = tips[activeTip];

  const renderHighlightedTitle = (tip: Tip) => {
    const index = tip.title
      .toLowerCase()
      .indexOf(tip.highlight.toLowerCase());

    if (index === -1) {
      return tip.title;
    }

    return (
      <>
        {tip.title.slice(0, index)}
        <span className={styles.highlight}>
          {tip.title.slice(index, index + tip.highlight.length)}
        </span>
        {tip.title.slice(index + tip.highlight.length)}
      </>
    );
  };

  return (
    <section className={styles.section} id="care-tips">
      <div className={styles.container}>
        {/* LEFT COLUMN */}

        <div className={styles.leftColumn}>
          <div className={styles.introBlock}>
            <h2 className={styles.heading}>
              Care tips for
              <br />
              <em>your appliances.</em>
            </h2>

            <p className={styles.description}>
              Simple advice from appliance repair professionals.
              Discover what wears out, what to watch for, and
              how to keep your appliances running smoothly.
            </p>
          </div>

          <div
            className={styles.applianceList}
            aria-label="Choose an appliance"
          >
            {appliances.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.applianceButton} ${
                  activeAppliance === index
                    ? styles.applianceActive
                    : ""
                }`}
                onClick={() => selectAppliance(index)}
                aria-pressed={activeAppliance === index}
              >
                <span className={styles.applianceIcon}>
                  <Image
                    src={item.icon}
                    alt=""
                    width={34}
                    height={34}
                    className={styles.iconImage}
                  />
                </span>

                <span>{item.name}</span>

                <FaArrowRight className={styles.applianceArrow} />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}

        <div className={styles.rightColumn}>
          <div className={styles.stackArea}>
            <div className={styles.cardStack}>
              {/* THIRD CARD */}

              <div
                className={`${styles.stackCard} ${styles.thirdCard}`}
                aria-hidden="true"
              >
                <div className={styles.stackBackground} />
              </div>

              {/* SECOND CARD */}

              <div
                className={`${styles.stackCard} ${styles.secondCard}`}
                aria-hidden="true"
              >
                <div className={styles.stackBackground} />
              </div>

              {/* ACTIVE CARD */}

              <AnimatePresence
                initial={false}
                mode="popLayout"
                custom={direction}
              >
                <motion.div
                  key={`${appliance.id}-${activeTip}`}
                  className={`${styles.stackCard} ${styles.activeCard}`}
                  custom={direction}
                  initial={
                    reduceMotion
                      ? { opacity: 0 }
                      : {
                          x: direction > 0 ? 36 : -36,
                          rotate: direction > 0 ? 2 : -2,
                          opacity: 0,
                          scale: 0.985,
                        }
                  }
                  animate={{
                    x: 0,
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : {
                          x: direction > 0 ? -36 : 36,
                          rotate: direction > 0 ? -2 : 2,
                          opacity: 0,
                          scale: 0.98,
                        }
                  }
                  transition={{
                    duration: reduceMotion ? 0.1 : 0.42,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  drag={reduceMotion ? false : "x"}
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  dragElastic={0.7}
                  onDragEnd={handleDragEnd}
                  whileDrag={{
                    scale: 1.01,
                    cursor: "grabbing",
                  }}
                >
                  <div className={styles.cardContent}>
                    <div className={styles.cardText}>
                      <h3 className={styles.cardTitle}>
                        {renderHighlightedTitle(currentTip)}
                      </h3>

                      <p className={styles.cardDescription}>
                        {currentTip.description}
                      </p>
                    </div>

                    <div className={styles.cardImage}>
                      <Image
                        src={appliance.icon}
                        alt={`${appliance.name} maintenance`}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className={styles.tipImage}
                      />
                    </div>

                    <button
                      type="button"
                      className={styles.cardNext}
                      onPointerDown={(event) =>
                        event.stopPropagation()
                      }
                      onClick={nextTip}
                    >
                      Next
                      <FaArrowRight />
                    </button>

                    <div className={styles.cardDecoration}>
                      DK
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CONTROLS */}

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.circleButton}
              onClick={previousTip}
              aria-label="Previous tip"
            >
              <FaArrowLeft />
            </button>

            <div className={styles.progress}>
              <span>
                Tip {activeTip + 1} of {tips.length}
              </span>

              <div className={styles.progressBars}>
                {tips.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to tip ${index + 1}`}
                    aria-current={
                      index === activeTip ? "step" : undefined
                    }
                    className={`${styles.progressBar} ${
                      index === activeTip
                        ? styles.progressActive
                        : ""
                    }`}
                    onClick={() => {
                      setDirection(index > activeTip ? 1 : -1);
                      setActiveTip(index);
                    }}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              className={styles.nextButton}
              onClick={nextTip}
            >
              Next tip
              <FaArrowRight />
            </button>
          </div>

          <div className={styles.playControls}>
            <button
              type="button"
              className={styles.playButton}
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={
                isPlaying ? "Pause automatic tips" : "Resume automatic tips"
              }
              aria-pressed={isPlaying}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}

              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>

          <p className={styles.swipeHint}>
            Swipe a card or use the arrows to explore more tips.
          </p>
        </div>
      </div>
    </section>
  );
}
