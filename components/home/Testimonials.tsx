"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import {
  FaArrowUpRightFromSquare,
  FaPause,
  FaPlay,
  FaVolumeHigh,
  FaVolumeXmark,
  FaShieldHalved,
  FaSnowflake,
  FaTv,
  FaScrewdriverWrench,
  FaStar,
} from "react-icons/fa6";

import styles from "./Testimonials.module.css";

/* =========================================
   TYPES
========================================= */

type Review = {
  id: number;
  name: string;
  service: string;
  location: string;
  date: string;
  rating: number;
  review: string;
  sourceUrl?: string;
};

type Story = {
  id: number;
  title: string;
  subtitle: string;
  video: string;
  poster: string;
};

/* Service standards shown instead of unverified customer reviews. */

const reviews: Review[] = [
  {
    id: 1,
    name: "Clear communication",
    service: "Before work begins",
    location: "Every booking",
    date: "Service standard",
    rating: 5,
    review:
      "We explain the service process and any applicable inspection or repair charges before work begins.",
  },
  {
    id: 2,
    name: "Convenient scheduling",
    service: "For your preferred time",
    location: "Service availability",
    date: "Service standard",
    rating: 5,
    review:
      "Choose a suitable date and time while booking. Our team confirms the visit details with you.",
  },
  {
    id: 3,
    name: "Careful inspection",
    service: "For the reported issue",
    location: "At your doorstep",
    date: "Service standard",
    rating: 5,
    review:
      "The technician assesses the appliance and recommends the right repair or maintenance option.",
  },
  {
    id: 4,
    name: "Approval first",
    service: "Before a chargeable repair",
    location: "Your decision matters",
    date: "Service standard",
    rating: 5,
    review:
      "Repair work proceeds only after you understand and approve the proposed service.",
  },
];

/* =========================================
   CUSTOMER VIDEO STORIES

   Add your own videos and poster images
   inside the public folder.
========================================= */

const stories: Story[] = [
  {
    id: 1,
    title: "A customer's repair experience",
    subtitle: "Customer video testimonial",
    video: "/videos/customer-review-1.mp4",
    poster: "/images/testimonials/customer-1.jpg",
  },
  {
    id: 2,
    title: "Hear directly from our customers",
    subtitle: "Real customer experience",
    video: "/videos/customer-review-2.mp4",
    poster: "/images/testimonials/customer-2.jpg",
  },
];

/* =========================================
   BACKGROUND PATTERN
========================================= */

function BackgroundPattern() {
  const icons = [
    FaSnowflake,
    FaTv,
    FaScrewdriverWrench,
    FaShieldHalved,
  ];

  return (
    <div className={styles.backgroundPattern} aria-hidden="true">
      {Array.from({ length: 72 }).map((_, index) => {
        const Icon = icons[index % icons.length];

        return (
          <span key={index} className={styles.patternIcon}>
            <Icon />
          </span>
        );
      })}
    </div>
  );
}

/* =========================================
   STAR RATING
========================================= */

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div
      className={styles.stars}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={index}
          className={
            index < rating ? styles.starFilled : styles.starEmpty
          }
        />
      ))}
    </div>
  );
}

/* =========================================
   REVIEW CARD
========================================= */

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className={styles.reviewCard}>
      <div className={styles.reviewTop}>
        <StarRating rating={review.rating} />

        <FaScrewdriverWrench className={styles.reviewIcon} />
      </div>

      <p className={styles.reviewText}>
        &ldquo;{review.review}&rdquo;
      </p>

      <div className={styles.reviewBottom}>
        <div className={styles.customerInfo}>
          <strong>{review.name}</strong>

          <span>
            {review.service}
          </span>
        </div>

        <span className={styles.reviewLocation}>
          {review.location}
        </span>

        {review.sourceUrl ? (
          <Link
            href={review.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviewSource}
          >
            <span>Google review, {review.date}</span>
            <FaArrowUpRightFromSquare />
          </Link>
        ) : (
          <span className={styles.reviewSource}>
            {review.date}
          </span>
        )}
      </div>
    </article>
  );
}

/* =========================================
   VIDEO TESTIMONIAL CARD
========================================= */

function StoryCard({ story }: { story: Story }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    const nextMuted = !video.muted;

    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <article className={styles.videoCardWrapper}>
      <div className={styles.videoCard}>
        <video
          ref={videoRef}
          className={styles.video}
          src={story.video}
          poster={story.poster}
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onVolumeChange={(event) =>
            setIsMuted(event.currentTarget.muted)
          }
        />

        <div className={styles.videoGradient} />

        {/* VIDEO CONTROLS */}

        <div className={styles.videoControls}>
          <button
            type="button"
            className={styles.controlButton}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button
            type="button"
            className={styles.controlButton}
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />}
          </button>
        </div>

        {/* BRAND */}

        <div className={styles.videoBrand}>
          <span className={styles.brandIcon}>
            <FaScrewdriverWrench />
          </span>

          <span>DK Appliance Care</span>
        </div>

        {/* CENTER PLAY BUTTON */}

        {!isPlaying && (
          <button
            type="button"
            className={styles.centerPlayButton}
            onClick={togglePlay}
            aria-label={`Play ${story.title}`}
          >
            <FaPlay />
          </button>
        )}

        {/* VIDEO BOTTOM LABEL */}

        <div className={styles.videoBottomOverlay}>
          {/* <span>Real customer experiences</span> */}
        </div>
      </div>

      <div className={styles.videoCaption}>
        <h3>{story.title}</h3>
        <p>{story.subtitle}</p>
      </div>
    </article>
  );
}

/* =========================================
   MAIN TESTIMONIALS SECTION
========================================= */

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <BackgroundPattern />

      <div className={styles.container}>
        {/* SECTION HEADER */}

        <div className={styles.header}>
          <div className={styles.headingContent}>
            {/* <span className={styles.eyebrow}>
              CUSTOMER EXPERIENCES
            </span> */}

            <h2 className={styles.heading}>
              Service you can <em>count on.</em>
            </h2>

            <p className={styles.description}>
              A straightforward repair experience built around
              clear updates, careful inspection, and your approval.
            </p>
          </div>

          {/* RATING CARD */}

          <div className={styles.ratingCard}>
            <div className={styles.ratingNumber}>✓</div>

            <div className={styles.ratingDetails}>
              <p>Our service approach</p>

              <span className={styles.ratingLink}>
                Clear updates at every step
              </span>
            </div>
          </div>
        </div>

        {/* =====================================
            FOUR COLUMN TESTIMONIAL GRID
        ===================================== */}

        <div className={styles.testimonialGrid}>
          {/* COLUMN 1 — REVIEWS */}

          <div className={styles.reviewColumn}>
            <ReviewCard review={reviews[0]} />
            <ReviewCard review={reviews[1]} />
          </div>

          <div className={styles.reviewColumn}>
            <ReviewCard review={reviews[2]} />
            <ReviewCard review={reviews[3]} />
          </div>
        </div>

        {/* BOTTOM */}

        <div className={styles.bottomSection}>
          <div className={styles.bottomText}>
            <FaShieldHalved />

            <span>
              Professional technicians. Reliable repairs.
              Customer-focused service.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
