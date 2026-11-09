"use client";

import { useEffect, useRef, useState } from "react";

import {
  FaPause,
  FaPlay,
  FaExpand,
  FaXmark,
  FaVolumeHigh,
  FaVolumeXmark,
} from "react-icons/fa6";

import styles from "./Technicians.module.css";

const videos = [
  {
    id: 1,
    title: "Washing Machine",
    description: "Professional washing machine repair",
    src: "/videos/washing-machine.mp4",
  },
  {
    id: 2,
    title: "Refrigerator",
    description: "Cooling system inspection & repair",
    src: "/videos/refrigerator.mp4",
  },
  {
    id: 3,
    title: "Television",
    description: "TV diagnosis and circuit repair",
    src: "/videos/television.mp4",
  },
  {
    id: 4,
    title: "Air Conditioner",
    description: "AC servicing and maintenance",
    src: "/videos/ac-repair.mp4",
  },
  {
    id: 5,
    title: "Our Technicians",
    description: "Dedicated professionals at work",
    src: "/videos/technicians.mp4",
  },
];

export default function Technicians() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeVideo, setActiveVideo] = useState<number | null>(
    null
  );
  const [isMuted, setIsMuted] = useState(true);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const selectedVideo = videos.find(
    (video) => video.id === activeVideo
  );

  /* =====================================
     PLAY / PAUSE ALL
  ===================================== */

  const togglePlayback = () => {
    const nextPlaying = !isPlaying;

    setIsPlaying(nextPlaying);

    videoRefs.current.forEach((video) => {
      if (!video) return;

      if (nextPlaying) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  };

  /* =====================================
     MODAL EFFECT
  ===================================== */

  useEffect(() => {
    if (activeVideo === null) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";

    };
  }, [activeVideo]);

  /* =====================================
     MODAL SOUND
  ===================================== */

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className={styles.header}>

          <div className={styles.headingContent}>

            {/* <span className={styles.eyebrow}>
              REAL PEOPLE. REAL REPAIRS.
            </span> */}

            <h2 className={styles.title}>
              Our Technicians,{" "}
              <span>On the Job.</span>
            </h2>

            <p className={styles.description}>
              See our skilled technicians in action,
              delivering professional appliance repairs
              and reliable doorstep service.
            </p>

          </div>

          {/* PLAY / PAUSE BUTTON */}

          <button
            type="button"
            onClick={togglePlayback}
            className={styles.playPauseButton}
            aria-label={
              isPlaying ? "Pause all videos" : "Play all videos"
            }
          >
            {isPlaying ? <FaPause /> : <FaPlay />}

            <span>
              {isPlaying ? "Pause Clips" : "Play Clips"}
            </span>
          </button>

        </div>

        {/* =====================================
            VIDEO GRID
        ===================================== */}

        <div className={styles.videoGrid}>

          {videos.map((video, index) => (
            <button
              type="button"
              key={video.id}
              className={styles.videoCard}
              onClick={() => {
                setActiveVideo(video.id);
                setIsMuted(false);
              }}
              aria-label={`Watch ${video.title}: ${video.description}`}
            >

              {/* VIDEO */}

              <video
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className={styles.video}
                onLoadedData={(event) => {
                  if (!isPlaying) {
                    event.currentTarget.pause();
                  }
                }}
              />

              {/* DARK GRADIENT */}

              <div className={styles.videoOverlay} />

              {/* TOP PROGRESS LINE */}

              <div className={styles.videoProgress}>
                <span />
              </div>

              {/* EXPAND ICON */}

              <span className={styles.expandIcon}>
                <FaExpand />
              </span>

              {/* BOTTOM TEXT */}

              <div className={styles.videoInfo}>

                <h3>{video.title}</h3>

                <p>{video.description}</p>

              </div>

            </button>
          ))}

        </div>

      </div>

      {/* =====================================
          VIDEO MODAL
      ===================================== */}

      {selectedVideo && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveVideo(null)}
          role="presentation"
        >

          <div
            className={styles.modalContent}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedVideo.title} repair video`}
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <FaXmark />
            </button>

            {/* MODAL VIDEO */}

            <video
              ref={modalVideoRef}
              src={selectedVideo.src}
              autoPlay
              controls
              playsInline
              muted={isMuted}
              className={styles.modalVideo}
            />

            {/* MODAL FOOTER */}

            <div className={styles.modalFooter}>

              <div>
                <h3>{selectedVideo.title}</h3>
                <p>{selectedVideo.description}</p>
              </div>

              <button
                type="button"
                className={styles.soundButton}
                onClick={toggleSound}
                aria-label={
                  isMuted ? "Unmute video" : "Mute video"
                }
              >
                {isMuted ? (
                  <FaVolumeXmark />
                ) : (
                  <FaVolumeHigh />
                )}
              </button>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}