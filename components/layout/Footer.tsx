"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaArrowUp,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaSnowflake,
  FaTemperatureLow,
  FaShirt,
  FaTv,
  FaFireBurner,
  FaDroplet,
  FaScrewdriverWrench,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "My Bookings", href: "/my-bookings" },
];

const services = [
  {
    label: "AC Repair",
    href: "/book-repair?service=AC%20Repair",
    icon: FaSnowflake,
  },
  {
    label: "Refrigerator Repair",
    href: "/book-repair?service=Refrigerator",
    icon: FaTemperatureLow,
  },
  {
    label: "Washing Machine Repair",
    href: "/book-repair?service=Washing%20Machine",
    icon: FaShirt,
  },
  {
    label: "Television Repair",
    href: "/book-repair?service=Television",
    icon: FaTv,
  },
  {
    label: "Microwave Repair",
    href: "/book-repair?service=Microwave",
    icon: FaFireBurner,
  },
  {
    label: "Water Purifier Repair",
    href: "/book-repair?service=Water%20Purifier",
    icon: FaDroplet,
  },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        {/* =====================================
            TOP CTA
        ===================================== */}

        <div className="footer-cta">
          <div className="footer-cta-container">
            <div className="footer-cta-content">
              {/* <span className="footer-eyebrow">
                DK APPLIANCE CARE
              </span> */}

              <h2>
                Your comfort,
                <br />
                <span>our priority.</span>
              </h2>

              <p>
                Appliances need attention? We&apos;re here to
                help you get things working again.
              </p>
            </div>

            <Link href="/book-repair" className="footer-cta-btn">
              Book a Service
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* =====================================
            MAIN FOOTER
        ===================================== */}

        <div className="footer-main">
          <div className="footer-container">
            <div className="footer-grid">
              {/* BRAND COLUMN */}

              <div className="footer-brand">
                <Link href="/" className="footer-logo">
                  <Image
                    src="/images/darklogo.png"
                    alt="DK Appliance Care"
                    width={190}
                    height={75}
                    className="footer-logo-image"
                  />
                </Link>

                <p className="footer-description">
                  Professional appliance repair and servicing
                  designed to bring convenience, care, and
                  comfort to your home.
                </p>

                <p className="footer-signature">
                  Repair <span>•</span> Service <span>•</span> Care
                </p>

                <div className="footer-brand-badge">
                  <FaScrewdriverWrench />
                  <span>Professional Appliance Services</span>
                </div>
              </div>

              {/* QUICK LINKS */}

              <div className="footer-column">
                <h3>Explore</h3>

                <ul>
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>
                        <span>{link.label}</span>
                        <FaArrowRight aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SERVICES */}

              <div className="footer-column">
                <h3>Our Services</h3>

                <ul>
                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <li key={service.label}>
                        <Link
                          href={service.href}
                          className="footer-service-link"
                        >
                          <Icon className="footer-service-icon" />
                          <span>{service.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CONTACT */}

              <div className="footer-contact">
                <h3>Get in Touch</h3>

                <p className="footer-contact-intro">
                  Have a question about a repair? Get in touch
                  and we&apos;ll help you find the right service.
                </p>

                <Link href="/contact" className="footer-contact-item">
                  <span className="footer-contact-icon">
                    <FaEnvelope />
                  </span>

                  <span className="footer-contact-text">
                    <small>ENQUIRIES</small>
                    <strong>Contact Our Team</strong>
                  </span>
                </Link>

                <Link href="/contact" className="footer-contact-item">
                  <span className="footer-contact-icon">
                    <FaPhone />
                  </span>

                  <span className="footer-contact-text">
                    <small>NEED ASSISTANCE?</small>
                    <strong>Request a Callback</strong>
                  </span>
                </Link>

                <Link href="/contact" className="footer-contact-item">
                  <span className="footer-contact-icon">
                    <FaLocationDot />
                  </span>

                  <span className="footer-contact-text">
                    <small>SERVICE AVAILABILITY</small>
                    <strong>Check Your Location</strong>
                  </span>
                </Link>

                <Link href="/book-repair" className="footer-contact-btn">
                  Schedule a Repair
                  <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* =====================================
                FOOTER BOTTOM
            ===================================== */}

            <div className="footer-bottom">
              <p>
                © 2026 DK Appliance Care. All rights reserved.
              </p>

              <div className="footer-bottom-links">
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>

                <span className="footer-divider" />

                <Link href="/terms-and-conditions">
                  Terms &amp; Conditions
                </Link>

                <a href="#top" className="footer-back-top">
                  Back to Top
                  <FaArrowUp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================
          ALL FOOTER CSS
      ===================================== */}

      <style jsx>{`
        /* =====================================
           FOOTER
        ===================================== */

        .footer {
          width: 100%;
          background: #0b223d;
          color: #ffffff;
          font-family: var(--font-inter), sans-serif;
        }

        /* =====================================
           TOP CTA
        ===================================== */

        .footer-cta {
          position: relative;
          overflow: hidden;
          padding: 80px 5%;
          background: #eaf3ff;
        }

        .footer-cta-container {
          position: relative;
          z-index: 2;

          max-width: 1380px;
          margin: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .footer-eyebrow {
          display: block;
          margin-bottom: 20px;

          color: #0866e8;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .footer-cta-content h2 {
          margin: 0 0 20px;

          color: #0b223d;
          font-family: var(--font-manrope), sans-serif;
          font-size: clamp(38px, 4vw, 60px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -2.5px;
        }

        .footer-cta-content h2 span {
          display: inline-block;
          padding-right: 12px;

          color: #0866e8;
          font-family: var(--font-cursive), cursive;
          font-size: 1.35em;
          font-weight: 400;
          letter-spacing: 0;
        }

        .footer-cta-content p {
          max-width: 470px;
          margin: 0;

          color: #64748b;
          font-size: 14px;
          line-height: 1.9;
        }

        .footer-cta-container :global(.footer-cta-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          flex-shrink: 0;

          padding: 18px 28px;

          background: #0866e8;
          color: #ffffff;
          border-radius: 8px;

          font-size: 13px;
          font-weight: 700;

          box-shadow: 0 12px 30px rgba(8, 102, 232, 0.16);

          transition: all 0.3s ease;
        }

        .footer-cta-container :global(.footer-cta-btn:hover) {
          background: #0755c4;
          transform: translateY(-3px);
        }

        /* =====================================
           MAIN FOOTER
        ===================================== */

        .footer-main {
          padding: 85px 5% 0;
          background: #0b223d;
        }

        .footer-container {
          max-width: 1380px;
          margin: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.75fr 1fr 1.15fr;
          gap: 55px;
          padding-bottom: 75px;
        }

        /* =====================================
           BRAND
        ===================================== */

        .footer-brand {
          min-width: 0;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          margin-bottom: 25px;
        }

        .footer-logo :global(.footer-logo-image) {
          width: 190px;
          height: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .footer-description {
          max-width: 320px;
          margin: 0 0 25px;

          color: #aabbd0;
          font-size: 13px;
          line-height: 1.95;
        }

        .footer-signature {
          margin: 0 0 30px;

          color: #ffffff;
          font-family: var(--font-cursive), cursive;
          font-size: 27px;
          line-height: 1.5;
        }

        .footer-signature span {
          margin: 0 5px;
          color: #65a9ff;
          font-family: var(--font-inter), sans-serif;
          font-size: 10px;
        }

        .footer-brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 12px 15px;

          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 8px;

          color: #b6c9df;
          font-size: 11px;
        }

        .footer-brand-badge :global(svg) {
          color: #65a9ff;
          font-size: 15px;
        }

        /* =====================================
           FOOTER COLUMNS
        ===================================== */

        .footer-column,
        .footer-contact {
          min-width: 0;
        }

        .footer-column h3,
        .footer-contact h3 {
          position: relative;
          margin: 0 0 32px;
          padding-bottom: 18px;

          color: #ffffff;
          font-family: var(--font-manrope), sans-serif;
          font-size: 15px;
          font-weight: 700;
        }

        .footer-column h3::after,
        .footer-contact h3::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;

          width: 28px;
          height: 2px;
          background: #4b9cff;
        }

        .footer-column ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-column li + li {
          margin-top: 17px;
        }

        .footer-column li :global(a) {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          color: #aabbd0;
          font-size: 12px;
          line-height: 1.5;

          transition: all 0.3s ease;
        }

        .footer-column li :global(a:hover) {
          color: #ffffff;
          transform: translateX(4px);
        }

        .footer-column li :global(a > svg:last-child) {
          font-size: 10px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .footer-column li :global(a:hover > svg:last-child) {
          opacity: 1;
        }

        .footer-column li :global(.footer-service-icon) {
          flex-shrink: 0;
          color: #65a9ff;
          font-size: 13px;
          opacity: 1 !important;
        }

        /* =====================================
           CONTACT
        ===================================== */

        .footer-contact-intro {
          margin: 0 0 27px;

          color: #aabbd0;
          font-size: 12px;
          line-height: 1.9;
        }

        .footer-contact :global(.footer-contact-item) {
          display: flex;
          align-items: center;
          gap: 13px;

          margin-bottom: 23px;
        }

        .footer-contact-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9px;

          color: #65a9ff;
          font-size: 15px;

          transition: background 0.3s ease;
        }

        .footer-contact :global(.footer-contact-item:hover)
          .footer-contact-icon {
          background: rgba(8, 102, 232, 0.2);
        }

        .footer-contact-text small {
          display: block;
          margin-bottom: 6px;

          color: #7890aa;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.2px;
        }

        .footer-contact-text strong {
          display: block;

          color: #e7eef7;
          font-size: 12px;
          font-weight: 600;
        }

        .footer-contact :global(.footer-contact-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;

          margin-top: 8px;
          padding: 15px 20px;

          background: #0866e8;
          color: #ffffff;
          border-radius: 8px;

          font-size: 12px;
          font-weight: 700;

          transition: background 0.3s ease;
        }

        .footer-contact :global(.footer-contact-btn:hover) {
          background: #287ff5;
        }

        /* =====================================
           BOTTOM BAR
        ===================================== */

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;

          padding: 28px 0;

          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .footer-bottom p {
          margin: 0;
          color: #8297ae;
          font-size: 11px;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-bottom-links :global(a) {
          color: #aabbd0;
          font-size: 11px;
          transition: color 0.3s ease;
        }

        .footer-bottom-links :global(a:hover) {
          color: #ffffff;
        }

        .footer-divider {
          width: 1px;
          height: 13px;
          background: rgba(255, 255, 255, 0.18);
        }

        .footer-bottom-links :global(.footer-back-top) {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          margin-left: 15px;

          color: #ffffff;
          font-weight: 600;
        }

        .footer-bottom-links :global(.footer-back-top svg) {
          color: #65a9ff;
        }

        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 55px;
          }
        }

        @media (max-width: 800px) {
          .footer-cta-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }

          .footer-cta-container :global(.footer-cta-btn) {
            width: 100%;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .footer-bottom-links {
            gap: 15px;
          }

          .footer-bottom-links :global(.footer-back-top) {
            margin-left: 0;
          }
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 650px) {
          .footer-cta {
            padding: 65px 20px;
          }

          .footer-cta-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }

          .footer-cta-content h2 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .footer-cta-content p {
            font-size: 13px;
          }

          .footer-cta-container :global(.footer-cta-btn) {
            width: 100%;
          }

          .footer-main {
            padding: 65px 20px 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 42px;
            padding-bottom: 55px;
          }

          .footer-logo :global(.footer-logo-image) {
            width: 175px;
          }

          .footer-description {
            max-width: 100%;
          }

          .footer-column h3,
          .footer-contact h3 {
            margin-bottom: 25px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .footer-bottom-links {
            gap: 15px;
          }

          .footer-bottom-links :global(.footer-back-top) {
            margin-left: 0;
          }
        }

        /* =====================================
           ACCESSIBILITY
        ===================================== */

        .footer :global(a:focus-visible) {
          outline: 2px solid #65a9ff;
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer :global(a) {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
