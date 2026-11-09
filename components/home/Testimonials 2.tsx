"use client";

import { useRef, useState } from "react";

import {
  FaStar,
  FaPlay,
  FaPause,
  FaVolumeHigh,
  FaVolumeXmark,
  FaArrowUpRightFromSquare,
  FaQuoteLeft,
  FaSnowflake,
  FaTv,
  FaScrewdriverWrench,
  FaShieldHalved,
  FaArrowRight,
} from "react-icons/fa6";

import styles from "./Testimonials.module.css";

/* =========================================
   CUSTOMER REVIEWS
========================================= */

const reviews = [
  {
    id: 1,
    name: "Customer Name",
    service: "AC Repair",
    location: "Your City",
    date: "Verified review date",
    rating: 5,
    review:
      "Add a genuine customer review here. Describe the service experience, technician's professionalism, and repair quality.",
  },
  {
    id: 2,
    name: "Customer Name",
    service: "Washing Machine Repair",
    location: "Your City",
    date: "Verified review date",
    rating: 5,
    review:
      "Add another genuine customer testimonial here. You can include feedback about the booking process and repair experience.",
  },
  {
    id: 3,
    name: "Customer Name",
    service: "Refrigerator Repair",
    location: "Your City",
    date: "Verified review date",
    rating: 5,
    review:
      "Add an authentic review from a refrigerator repair customer here.",
  },
  {
    id: 4,
    name: "Customer Name",
    service: "TV Repair",
    location: "Your City",
    date: "Verified review date",
    rating: 5,
    review:
      "Add a real customer review about your television repair service here.",
  },
];

/* =========================================
   CUSTOMER VIDEOS
========================================= */

const videos = [
  {
    id: 1,
    title: "Our customers share their experience",
    subtitle: "Customer video testimonial",
    src: "/videos/customer-review-1.mp4",
    poster: "/images/testimonials/customer-1.jpg",
  },
  {
    id: 2,
    title: "Real experiences. Real satisfaction.",
    subtitle: "Customer video testimonial",
    src: "/videos/customer-review-2.mp4",
    poster: "/images/testimonials/customer-2.jpg",
  },
];

/* =========================================
   STAR RATING
========================================= */

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div
      className={styles.stars}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: rating }).map((_, index) => (
        <FaStar key={index} />
      ))}
    </div>
  );
}

/* =========================================
   REVIEW CARD
========================================= */

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[number];
}) {
  return (
    <article className={styles.reviewCard}>
      <div className={styles.reviewTop}>
        <StarRating rating={review.rating} />

        <FaQuoteLeft className={styles.quoteIcon} />
      </div>

      <p className={styles.reviewText}>
        &ldquo;{review.review}&rdquo;
      </p>

      <div className={styles.reviewBottom}>
        <div className={styles.customerInfo}>
          <strong>{review.name}</strong>

          <span>{review.service}</span>
        </div>

        <span className={styles.reviewLocation}>
          {review.location}
        </span>

        <div className={styles.reviewSource}>
          <span>{review.date}</span>

          <FaArrowUpRightFromSquare />
        </div>
      </div>
    </article>
  );
}

/* =========================================
   VIDEO CARD
========================================= */

function VideoCard({
  video,
}: {
  video: (typeof videos)[number];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = async () => {
    const currentVideo = videoRef.current;

    if (!currentVideo) return;

    if (currentVideo.paused) {
      try {
        await currentVideo.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      currentVideo.pause();
    }
  };

  const toggleMute = () => {
    const currentVideo = videoRef.current;

    if (!currentVideo) return;

    currentVideo.muted = !currentVideo.muted;

    setIsMuted(currentVideo.muted);
  };

  return (
    <article className={styles.videoCardWrapper}>
      <div className={styles.videoCard}>
        <video
          ref={videoRef}
          className={styles.video}
          src={video.src}
          poster={video.poster}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
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
          <FaScrewdriverWrench />

          <span>DK Appliance Care</span>
        </div>

        {/* PLAY OVERLAY */}

        {!isPlaying && (
          <button
            type="button"
            className={styles.centerPlay}
            onClick={togglePlay}
            aria-label="Play customer testimonial"
          >
            <FaPlay />
          </button>
        )}
      </div>

      <div className={styles.videoCaption}>
        <h3>{video.title}</h3>

        <p>{video.subtitle}</p>
      </div>
    </article>
  );
}

/* =========================================
   MAIN TESTIMONIAL SECTION
========================================= */

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      {/* BACKGROUND DECORATION */}

      <div className={styles.backgroundPattern}>
        <FaSnowflake />
        <FaTv />
        <FaScrewdriverWrench />
        <FaShieldHalved />
        <FaSnowflake />
        <FaTv />
        <FaScrewdriverWrench />
        <FaShieldHalved />
      </div>

      <div className={styles.container}>
        {/* HEADER */}

        <div className={styles.header}>
          <div className={styles.headingContent}>
            <span className={styles.eyebrow}>
              CUSTOMER EXPERIENCES
            </span>

            <h2 className={styles.heading}>
              Straight from{" "}
              <em>our customers.</em>
            </h2>

            <p className={styles.description}>
              Real experiences from people who trusted us
              with their home appliances. Hear their stories
              and discover the care behind every repair.
            </p>
          </div>

          {/* GOOGLE RATING */}

          <div className={styles.ratingCard}>
            <div className={styles.ratingNumber}>
              —
            </div>

            <div className={styles.ratingDetails}>
              <div className={styles.ratingStars}>
                <StarRating />
              </div>

              <p>Customer reviews</p>

              <span className={styles.ratingLink}>
                Verified ratings coming soon
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL GRID */}

        <div className={styles.testimonialGrid}>
          {/* COLUMN 1 */}

          <div className={styles.reviewColumn}>
            <ReviewCard review={reviews[0]} />
            <ReviewCard review={reviews[1]} />
          </div>

          {/* COLUMN 2 */}

          <VideoCard video={videos[0]} />

          {/* COLUMN 3 */}

          <div className={styles.reviewColumn}>
            <ReviewCard review={reviews[2]} />
            <ReviewCard review={reviews[3]} />
          </div>

          {/* COLUMN 4 */}

          <VideoCard video={videos[1]} />
        </div>

        {/* BOTTOM */}

        <div className={styles.bottomSection}>
          <div className={styles.bottomText}>
            <FaShieldHalved />

            <span>
              Quality service. Professional technicians.
              Customer satisfaction.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}