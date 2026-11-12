"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CitySelector from "./CitySelector";

import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";

/* =========================================
   CONFIGURATION
========================================= */

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Join Us", href: "/join-us" },
];

/* =========================================
   NAVBAR COMPONENT
========================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================
     CLOSE MOBILE MENU ON ESCAPE
  ========================================= */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  /* =========================================
     ACTIVE LINK
  ========================================= */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href.includes("#")) {
      return false;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">

          {/* =====================================
              LOGO
          ===================================== */}

          <Link
            href="/"
            className="navbar-logo"
            aria-label="DK Appliance Care Home"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/logo.png"
              alt="DK Appliance Care"
              width={165}
              height={65}
              priority
              className="logo-image"
            />
          </Link>

          {/* =====================================
              DESKTOP NAVIGATION
          ===================================== */}

          <nav
            className="desktop-nav"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  isActive(link.href) ? "active" : ""
                }`}
                aria-current={
                  isActive(link.href) ? "page" : undefined
                }
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* =====================================
              RIGHT ACTIONS
          ===================================== */}

          <div className="navbar-actions">

            {/* CITY SELECTOR */}

            <div className="desktop-city">
              <CitySelector />
            </div>

            {/* BOOK REPAIR */}

            <Link
              href="/book-repair"
              className="book-btn"
            >
              Book a Repair
              <FaArrowRight className="book-arrow" />
            </Link>

            {/* MOBILE TOGGLE */}

            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
              aria-label={
                menuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? (
                <FaXmark />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
        </div>

        {/* =====================================
            MOBILE NAVIGATION
        ===================================== */}

        <nav
          id="mobile-navigation"
          className={`mobile-nav ${
            menuOpen ? "show" : ""
          }`}
          aria-label="Mobile navigation"
          inert={!menuOpen}
        >
          <div className="mobile-nav-inner">

            {/* MOBILE LINKS */}

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`mobile-link ${
                  isActive(link.href) ? "active" : ""
                }`}
              >
                <span>{link.name}</span>

                <FaArrowRight />
              </Link>
            ))}

            {/* MOBILE CITY SELECTOR */}

            <div className="mobile-city">
              <CitySelector />
            </div>

            {/* MOBILE BOOK BUTTON */}

            <Link
              href="/book-repair"
              className="mobile-book-btn"
              onClick={() => setMenuOpen(false)}
            >
              Book a Repair
              <FaArrowRight />
            </Link>
          </div>
        </nav>
      </header>

      {/* =========================================
          STYLES
      ========================================= */}

      <style jsx>{`

        /* =====================================
           NAVBAR
        ===================================== */

        .navbar {
          position: sticky;
          top: 0;
          left: 0;

          width: 100%;
          z-index: 1000;

          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);

          border-bottom: 1px solid var(--border);

          box-shadow: 0 4px 20px rgba(7, 31, 61, 0.035);
        }

        .navbar-container {
          width: min(1440px, calc(100% - (var(--page-gutter) * 2)));
          margin: 0 auto;

          min-height: 88px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 35px;
        }

        /* =====================================
           LOGO
        ===================================== */

        .navbar-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .navbar-logo :global(.logo-image) {
          width: 155px;
          height: auto;
          object-fit: contain;
        }

        /* =====================================
           DESKTOP NAVIGATION
        ===================================== */

        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 31px;

          flex: 1;
          min-width: 0;
        }

        .desktop-nav :global(.nav-link) {
          position: relative;

          display: inline-flex;
          align-items: center;

          height: 88px;

          font-size: 15px;
          font-weight: 500;

          color: var(--text-secondary);

          white-space: nowrap;

          transition: color 0.25s ease;
        }

        .desktop-nav :global(.nav-link:hover) {
          color: var(--secondary);
        }

        .desktop-nav :global(.nav-link.active) {
          color: var(--text-primary);
          font-weight: 700;
        }

        /* ACTIVE UNDERLINE */

        .desktop-nav :global(.nav-link::after) {
          content: "";

          position: absolute;

          left: 0;
          bottom: 15px;

          width: 0;
          height: 2px;

          background: var(--secondary);

          transition: width 0.25s ease;
        }

        .desktop-nav :global(.nav-link:hover::after),
        .desktop-nav :global(.nav-link.active::after) {
          width: 100%;
        }

        /* =====================================
           RIGHT ACTIONS
        ===================================== */

        .navbar-actions {
          display: flex;
          align-items: center;

          gap: 14px;

          flex-shrink: 0;
        }

        /* =====================================
           BOOK REPAIR BUTTON
        ===================================== */

        .navbar-actions :global(.book-btn) {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          padding: 15px 24px;

          min-height: 48px;

          background: var(--secondary);
          color: #ffffff;

          border-radius: 999px;

          font-size: 14px;
          font-weight: 700;

          white-space: nowrap;

          box-shadow:
            0 8px 18px rgba(8, 102, 232, 0.16);

          transition: all 0.25s ease;
        }

        .navbar-actions :global(.book-btn:hover) {
          background: var(--secondary-strong);

          transform: translateY(-2px);

          box-shadow:
            0 8px 22px rgba(8, 102, 232, 0.22);
        }

        .navbar-actions :global(.book-arrow) {
          font-size: 12px;
          transition: transform 0.25s ease;
        }

        .navbar-actions :global(.book-btn:hover .book-arrow) {
          transform: translateX(3px);
        }

        /* =====================================
           MOBILE TOGGLE
        ===================================== */

        .menu-toggle {
          display: none;

          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;

          border: none;
          border-radius: 12px;

          background: var(--surface-blue);

          cursor: pointer;
        }

        .menu-toggle :global(svg) {
          color: var(--text-primary);
          font-size: 21px;
        }

        /* =====================================
           MOBILE NAVIGATION
        ===================================== */

        .mobile-nav {
          display: none;
        }

        /* =====================================
           LARGE LAPTOP
        ===================================== */

        @media (max-width: 1500px) {

          .navbar-container {
            width: min(1440px, calc(100% - (var(--page-gutter) * 2)));
            gap: 22px;
          }

          .desktop-nav {
            gap: 22px;
          }

          .desktop-nav :global(.nav-link) {
            font-size: 14px;
          }

          .navbar-actions {
            gap: 14px;
          }

          .navbar-logo :global(.logo-image) {
            width: 140px;
          }

        }

        /* =====================================
           SMALL LAPTOP
        ===================================== */

        @media (max-width: 1300px) {

          .desktop-nav {
            gap: 17px;
          }

          .navbar-actions :global(.book-btn) {
            padding: 13px 18px;
          }

        }

        /* =====================================
           TABLET / MOBILE
        ===================================== */

        @media (max-width: 1180px) {

          .navbar-container {
            min-height: 76px;
            width: min(calc(100% - 40px), 960px);
          }

          .desktop-nav {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }

          /* MOBILE NAV */

          .mobile-nav {
            display: block;

            position: absolute;

            top: 100%;
            left: 0;

            width: 100%;

            background: var(--surface);

            max-height: 0;
            overflow: hidden;

            opacity: 0;
            visibility: hidden;

            border-bottom: 1px solid var(--border);

            box-shadow:
              0 15px 30px rgba(11, 34, 61, 0.08);

            transition:
              max-height 0.3s ease,
              opacity 0.3s ease,
              visibility 0.3s ease;
          }

          .mobile-nav.show {
            max-height: calc(100dvh - 76px);

            overflow-y: auto;

            opacity: 1;
            visibility: visible;
          }

          .mobile-nav-inner {
            padding: 20px 5% 30px;
          }

          .mobile-nav :global(.mobile-link) {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 16px 4px;

            border-bottom: 1px solid var(--border);

            color: var(--text-secondary);

            font-size: 15px;
            font-weight: 600;
          }

          .mobile-nav :global(.mobile-link svg) {
            color: var(--text-muted);
            font-size: 12px;
          }

          .mobile-nav :global(.mobile-link.active) {
            color: var(--secondary);
          }

          .mobile-nav :global(.mobile-link.active svg) {
            color: var(--secondary);
          }

          /* MOBILE CITY */

          .mobile-city {
            margin-top: 25px;
          }

          /* MOBILE BOOK */

          .mobile-nav :global(.mobile-book-btn) {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;

            margin-top: 25px;

            padding: 16px;

            background: var(--secondary);
            color: #ffffff;

            border-radius: 14px;

            font-size: 14px;
            font-weight: 700;
          }

        }

        /* =====================================
           SMALL MOBILE
        ===================================== */

        @media (max-width: 600px) {

          .navbar-container {
            min-height: 70px;
          }

          .navbar-logo :global(.logo-image) {
            width: 125px;
          }

          .navbar-actions {
            gap: 12px;
          }

          .navbar-actions :global(.book-btn) {
            display: none;
          }

          .desktop-city {
            display: none;
          }

          .menu-toggle {
            width: 40px;
            height: 40px;
          }

          .mobile-nav.show {
            max-height: calc(100dvh - 70px);
          }

        }

      `}</style>
    </>
  );
}
