import Image from "next/image";

import { FaScrewdriverWrench } from "react-icons/fa6";

import styles from "./Technicians.module.css";

const showcases = [
  {
    id: 1,
    title: "Washing Machine",
    description: "Professional washing machine repair",
    image: "/images/services/washing-machine.png",
  },
  {
    id: 2,
    title: "Refrigerator",
    description: "Cooling system inspection and repair",
    image: "/images/services/refrigerator.png",
  },
  {
    id: 3,
    title: "Television",
    description: "TV diagnosis and circuit repair",
    image: "/images/services/television.png",
  },
  {
    id: 4,
    title: "Air Conditioner",
    description: "AC servicing and maintenance",
    image: "/images/services/ac.png",
  },
  {
    id: 5,
    title: "Our Technicians",
    description: "Dedicated professionals at work",
    image: "/images/technician1.png",
  },
];

export default function Technicians() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headingContent}>
            <h2 className={styles.title}>
              Our Technicians, <span>On the Job.</span>
            </h2>

            <p className={styles.description}>
              See our skilled technicians in action, delivering
              professional appliance repairs and reliable doorstep service.
            </p>
          </div>
        </div>

        <div className={styles.videoGrid}>
          {showcases.map((showcase) => (
            <article className={styles.videoCard} key={showcase.id}>
              <Image
                src={showcase.image}
                alt={`${showcase.title} repair service`}
                fill
                sizes="(max-width: 650px) 235px, (max-width: 1100px) 33vw, 20vw"
                className={styles.video}
              />

              <div className={styles.videoOverlay} />

              <span className={styles.expandIcon} aria-hidden="true">
                <FaScrewdriverWrench />
              </span>

              <div className={styles.videoInfo}>
                <h3>{showcase.title}</h3>
                <p>{showcase.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
