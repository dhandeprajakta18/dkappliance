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

/* =========================================
   CUSTOMER REVIEWS

   Replace these placeholders with genuine
   customer reviews before publishing.
========================================= */

const reviews: Review[] = [
  {
    id: 1,
    name: "Customer Name",
    service: "AC Repair",
    location: "Your City",
    date: "Review date",
    rating: 5,
    review:
      "Add a genuine customer review here. You can describe the technician's punctuality, professionalism and the overall repair experience.",
  },
  {
    id: 2,
    name: "Customer Name",
    service: "Washing Machine Repair",
    location: "Your City",
    date: "Review date",
    rating: 5,
    review:
      "Add another authentic customer review about the washing machine repair service, including the customer's experience with the technician.",
  },
  {
    id: 3,
    name: "Customer Name",
    service: "AC Service",
    location: "Your City",
    date: "Review date",
    rating: 5,
    review:
      "Add genuine feedback from a customer who booked an air conditioner servicing or repair appointment.",
  },
  {
    id: 4,
    name: "Customer Name",
    service: "Refrigerator Repair",
    location: "Your City",
    date: "Review date",
    rating: 5,
    review:
      "Add a verified customer review about refrigerator repair, explaining the service experience and the quality of work.",
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
            Customer review · {review.date}
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
              Straight from <em>our customers.</em>
            </h2>

            <p className={styles.description}>
              Hear directly from the people we serve. Real
              experiences, genuine feedback, and the trust
              behind every appliance repair.
            </p>
          </div>

          {/* RATING CARD */}

          <div className={styles.ratingCard}>
            <div className={styles.ratingNumber}>—</div>

            <div className={styles.ratingDetails}>
              <StarRating />

              <p>Customer reviews</p>

              <span className={styles.ratingLink}>
                Verified ratings coming soon
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

          {/* COLUMN 2 — VIDEO */}

          <StoryCard story={stories[0]} />

          {/* COLUMN 3 — REVIEWS */}

          <div className={styles.reviewColumn}>
            <ReviewCard review={reviews[2]} />
            <ReviewCard review={reviews[3]} />
          </div>

          {/* COLUMN 4 — VIDEO */}

          <StoryCard story={stories[1]} />
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
