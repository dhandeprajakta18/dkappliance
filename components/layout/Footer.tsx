"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaCircle,
} from "react-icons/fa6";

/* =========================================
   FOOTER DATA
========================================= */

const services = [
  {
    label: "AC Repair",
    href: "/book-repair?service=AC%20Repair",
  },
  {
    label: "Washing Machine Repair",
    href: "/book-repair?service=Washing%20Machine",
  },
  {
    label: "Refrigerator Repair",
    href: "/book-repair?service=Refrigerator",
  },
  {
    label: "Television Repair",
    href: "/book-repair?service=Television",
  },
  {
    label: "Microwave Repair",
    href: "/book-repair?service=Microwave",
  },
  {
    label: "Water Purifier Repair",
    href: "/book-repair?service=Water%20Purifier",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/#services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Request a Callback", href: "/contact#callback" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Callback", href: "/contact#callback" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

/* =========================================
   SOCIAL LINKS

   Replace # with actual social URLs.
========================================= */

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "Twitter",
    href: "#",
    icon: FaXTwitter,
  },
];

/* =========================================
   FOOTER COMPONENT
========================================= */

export default function Footer() {
  return (
    <>
      <footer className="footer">

        {/* =====================================
            TOP CTA
        ===================================== */}

        {/* <div className="footer-cta">

          <div className="footer-cta-container">

            <div className="footer-cta-content">

              <span className="footer-eyebrow">
                PROFESSIONAL APPLIANCE CARE
              </span>

              <h2>
                Your comfort,
                <br />
                <em>our priority.</em>
              </h2>

              <p>
                From everyday maintenance to urgent repairs,
                we help keep your home appliances running
                smoothly.
              </p>

            </div>

            <Link
              href="/book-repair"
              className="footer-cta-btn"
            >
              Book a Repair
              <FaArrowRight />
            </Link>

          </div>

        </div> */}

        {/* =====================================
            MAIN FOOTER
        ===================================== */}

        <div className="footer-main">

          <div className="footer-container">

            {/* BRAND HEADER */}

            <div className="footer-brand-row">

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

                <p>
                  Reliable appliance repair and maintenance
                  services for a more comfortable home.
                </p>

              </div>

              <div className="footer-brand-tagline">
                Repair <span>•</span> Service <span>•</span> Care
              </div>

            </div>

            {/* =====================================
                FOOTER COLUMNS
            ===================================== */}

            <div className="footer-grid">

              {/* SERVICES */}

              <div className="footer-column">

                <h3>Services</h3>

                <ul>
                  {services.map((service) => (
                    <li key={service.label}>

                      <Link href={service.href}>
                        {service.label}
                      </Link>

                    </li>
                  ))}
                </ul>

              </div>

              {/* QUICK LINKS */}

              <div className="footer-column">

                <h3>Quick Links</h3>

                <ul>
                  {quickLinks.map((link) => (
                    <li key={link.label}>

                      <Link href={link.href}>
                        {link.label}
                      </Link>

                    </li>
                  ))}
                </ul>

              </div>

              {/* COMPANY */}

              <div className="footer-column">

                <h3>Company</h3>

                <ul>
                  {companyLinks.map((link) => (
                    <li key={link.label}>

                      <Link href={link.href}>
                        {link.label}
                      </Link>

                    </li>
                  ))}
                </ul>

              </div>

              {/* CONTACT */}

              <div className="footer-column footer-contact">

                <h3>Contact</h3>

                <p className="contact-description">
                  Need assistance with an appliance?
                  Our team is here to help.
                </p>

                <Link
                  href="/contact"
                  className="contact-link"
                >
                  <FaEnvelope />
                  Contact Our Team
                </Link>

                <Link
                  href="/contact"
                  className="contact-link"
                >
                  <FaPhone />
                  Request a Callback
                </Link>

                <Link
                  href="/contact"
                  className="contact-link"
                >
                  <FaWhatsapp />
                  WhatsApp Us
                </Link>

               <Link href="/book-repair" className="book-btn">
  Book a Repair
  <FaArrowRight className="book-arrow" />
</Link>

              </div>

            </div>

            {/* =====================================
                SOCIAL MEDIA
            ===================================== */}

            <div className="footer-social-row">

              <div className="footer-socials">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                    </a>
                  );
                })}

              </div>

              <div className="footer-status">

                <FaCircle />

                <span>
                  Professional appliance repair services
                </span>

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

                <Link href="/terms-and-conditions">
                  Terms & Conditions
                </Link>

                <a href="#top">
                  Back to Top
                  <FaArrowUp />
                </a>

              </div>

            </div>

          </div>

        </div>

      </footer>

      {/* =====================================
          FOOTER CSS
      ===================================== */}

      <style jsx>{`

        /* =====================================
           FOOTER MAIN
        ===================================== */

        .footer {
          width: 100%;
          background: var(--surface-muted);
          color: var(--text-primary);
          font-family: var(--font-inter), sans-serif;
        }

        /* =====================================
           TOP CTA
        ===================================== */

        .footer-cta {
          position: relative;
          padding: 90px 5%;
          background: var(--surface-blue);
          overflow: hidden;
        }

        .footer-cta-container {
          max-width: 1320px;
          margin: auto;

          display: flex;
          justify-content: space-between;
          align-items: center;

          gap: 50px;
        }

        .footer-eyebrow {
          display: block;
          margin-bottom: 18px;

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;

          color: #0866e8;
        }

        .footer-cta-content h2 {
          margin: 0 0 20px;

          font-family: Georgia, serif;
          font-size: clamp(40px, 4.5vw, 64px);
          font-weight: 400;

          line-height: 1.1;
          letter-spacing: -1.8px;

          color: var(--text-primary);
        }

        .footer-cta-content h2 em {
          color: var(--secondary);
          font-weight: 400;
        }

        .footer-cta-content p {
          max-width: 480px;
          margin: 0;

          font-size: 15px;
          line-height: 1.8;

          color: var(--text-secondary);
        }

        .footer-cta-container :global(.footer-cta-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 25px;

          padding: 18px 30px;

          border-radius: 50px;

          background: var(--secondary);
          color: #ffffff;

          font-size: 14px;
          font-weight: 600;

          white-space: nowrap;

          transition: all 0.3s ease;
        }

        .footer-cta-container :global(.footer-cta-btn:hover) {
          background: var(--primary);
          transform: translateY(-3px);
        }

        /* =====================================
           MAIN FOOTER
        ===================================== */

        .footer-main {
          padding: 70px 5% 0;
          background: var(--surface-muted);
        }

        .footer-container {
          max-width: 1320px;
          margin: 0 auto;
        }

        /* =====================================
           BRAND HEADER
        ===================================== */

        .footer-brand-row {
          display: flex;
          justify-content: space-between;
          align-items: center;

          gap: 30px;

          padding-bottom: 45px;
          margin-bottom: 55px;

          border-bottom: 1px solid var(--border);
        }

        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .footer-logo :global(.footer-logo-image) {
          width: 185px;
          height: auto;
          object-fit: contain;
        }

        .footer-brand p {
          margin: 0;

          font-size: 13px;
          line-height: 1.8;

          color: var(--text-secondary);
        }

        .footer-brand-tagline {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 25px;

          color: var(--text-primary);
        }

        .footer-brand-tagline span {
          margin: 0 8px;
          color: var(--secondary);
        }

        /* =====================================
           FOOTER GRID
        ===================================== */

        .footer-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr 1fr 1.1fr;

          gap: 55px;

          padding-bottom: 60px;
        }

        .footer-grid > * {
          min-width: 0;
        }

        /* =====================================
           FOOTER COLUMNS
        ===================================== */

        .footer-column h3 {
          margin: 0 0 25px;

          font-size: 14px;
          font-weight: 700;

          color: var(--text-primary);
        }

        .footer-column ul {
          list-style: none;

          margin: 0;
          padding: 0;
        }

        .footer-column li {
          margin-bottom: 17px;
        }

        .footer-column li :global(a) {
          display: inline-block;

          font-size: 14px;
          line-height: 1.5;

          color: var(--text-secondary);

          text-decoration: none;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .footer-column li :global(a:hover) {
          color: var(--secondary);
          transform: translateX(4px);
        }

        /* =====================================
           CONTACT COLUMN
        ===================================== */

        .contact-description {
          margin: 0 0 22px;

          max-width: 250px;

          font-size: 13px;
          line-height: 1.8;

          color: var(--text-secondary);
        }

        .footer-contact :global(.contact-link) {
          display: flex;
          align-items: center;

          gap: 12px;

          margin-bottom: 20px;

          font-size: 14px;
          font-weight: 600;

          color: var(--text-primary);

          transition: color 0.3s ease;
        }

        .footer-contact :global(.contact-link:hover) {
          color: var(--secondary);
        }

        .footer-contact :global(.contact-link svg) {
          font-size: 15px;
          color: #0866e8;
        }

        .footer-contact :global(.contact-book-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 15px;

          margin-top: 10px;
          padding: 13px 22px;

          border: 1px solid var(--secondary);
          border-radius: 50px;

          color: var(--secondary);

          font-size: 13px;
          font-weight: 600;

          transition: all 0.3s ease;
        }

        .footer-contact :global(.contact-book-btn:hover) {
          background: var(--secondary);
          color: #ffffff;
        }

        /* =====================================
           SOCIAL MEDIA ROW
        ===================================== */

        .footer-social-row {
          display: flex;
          flex-direction: column;

          align-items: flex-start;

          gap: 30px;

          padding-bottom: 35px;
        }

        .footer-socials {
          display: flex;
          align-items: center;

          gap: 28px;
        }

        .footer-socials :global(a) {
          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--text-secondary);

          font-size: 19px;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .footer-socials :global(a:hover) {
          color: var(--secondary);
          transform: translateY(-3px);
        }

        /* =====================================
           FOOTER STATUS
        ===================================== */

        .footer-status {
          display: flex;
          align-items: center;

          gap: 10px;

          font-size: 13px;
          font-weight: 600;

          color: var(--text-primary);
        }

        .footer-status :global(svg) {
          font-size: 9px;
          color: var(--secondary);
        }

        /* =====================================
           FOOTER BOTTOM
        ===================================== */

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 25px;

          padding: 28px 0;

          border-top: 1px solid var(--border);
        }

        .footer-bottom p {
          margin: 0;

          font-size: 12px;

          color: var(--text-secondary);
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;

          flex-wrap: wrap;

          gap: 25px;
        }

        .footer-bottom-links :global(a) {
          display: inline-flex;
          align-items: center;

          gap: 8px;

          font-size: 12px;

          color: var(--text-secondary);

          transition: color 0.3s ease;
        }

        .footer-bottom-links :global(a:hover) {
          color: var(--secondary);
        }

        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 45px;
          }
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 768px) {
          .footer-cta {
            padding: 70px 20px;
          }

          .footer-cta-container {
            flex-direction: column;
            align-items: flex-start;

            gap: 30px;
          }

          .footer-cta-content h2 {
            font-size: 45px;
          }

          .footer-cta-container :global(.footer-cta-btn) {
            width: 100%;
          }

          .footer-main {
            padding: 55px 20px 0;
          }

          .footer-brand-row {
            flex-direction: column;
            align-items: flex-start;

            gap: 20px;

            margin-bottom: 45px;
          }

          .footer-brand-tagline {
            font-size: 22px;
          }

          .footer-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 40px 25px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        /* =====================================
           SMALL MOBILE
        ===================================== */

        @media (max-width: 560px) {
          .footer-cta-content h2 {
            font-size: 38px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .footer-column h3 {
            margin-bottom: 20px;
          }

          .footer-column li {
            margin-bottom: 14px;
          }

          .footer-socials {
            gap: 25px;
          }

          .footer-bottom-links {
            gap: 15px;
          }
        }

        /* =====================================
           ACCESSIBILITY
        ===================================== */

        .footer :global(a:focus-visible) {
          outline: 2px solid var(--secondary);
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
