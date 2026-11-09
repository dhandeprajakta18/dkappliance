"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "My Bookings", href: "/my-bookings" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">

          {/* LOGO */}
          <Link
            href="/"
            className="navbar-logo"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/logo.png"
              alt="DK Appliance Care"
              width={170}
              height={70}
              priority
              className="logo-image"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  pathname === link.href ? "active" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* BOOKING BUTTON */}
          <div className="navbar-actions">
            <Link href="/book-repair" className="book-btn">
              Book a Service
              <FaArrowRight aria-hidden="true" />
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? (
                <FaXmark aria-hidden="true" />
              ) : (
                <FaBars aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <nav
          id="mobile-navigation"
          className={`mobile-nav ${menuOpen ? "show" : ""}`}
          aria-label="Mobile navigation"
          inert={!menuOpen}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`mobile-link ${
                pathname === link.href ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/book-repair"
            className="mobile-book-btn"
            onClick={() => setMenuOpen(false)}
          >
            Book a Service <FaArrowRight aria-hidden="true" />
          </Link>
        </nav>
      </header>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(11, 34, 61, 0.04);
        }

        .navbar-container {
          max-width: 1440px;
          margin: auto;
          padding: 12px 5%;
          min-height: 90px;
          min-width: 0;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        /* LOGO */

        .navbar-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .navbar-logo :global(.logo-image) {
          width: 170px;
          height: auto;
          object-fit: contain;
        }

        /* DESKTOP NAV */

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 26px;
          min-width: 0;
        }

        .desktop-nav :global(.nav-link) {
          font-size: 14px;
          font-weight: 600;
          color: #14263d;
          white-space: nowrap;
          position: relative;
          transition: color 0.3s ease;
        }

        .desktop-nav :global(.nav-link:hover),
        .desktop-nav :global(.nav-link.active) {
          color: #0866e8;
        }

        .desktop-nav :global(.nav-link::after) {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 2px;
          background: #0866e8;
          transition: width 0.3s ease;
        }

        .desktop-nav :global(.nav-link:hover::after),
        .desktop-nav :global(.nav-link.active::after) {
          width: 100%;
        }

        /* ACTIONS */

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .navbar-actions :global(.book-btn) {
          background: linear-gradient(
            135deg,
            #0866e8,
            #0052c8
          );

          color: white;
          padding: 14px 22px;
          border-radius: 10px;

          font-size: 14px;
          font-weight: 600;

          display: flex;
          align-items: center;
          gap: 12px;

          white-space: nowrap;

          box-shadow: 0 6px 18px rgba(8, 102, 232, 0.18);
          transition: all 0.3s ease;
        }

        .navbar-actions :global(.book-btn:hover) {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(8, 102, 232, 0.28);
        }

        /* MOBILE TOGGLE */

        .menu-toggle {
          display: none;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;

          border: none;
          background: transparent;
          cursor: pointer;
        }

        .menu-toggle :global(svg) {
          color: #0b223d;
          font-size: 23px;
        }

        /* MOBILE NAV */

        .mobile-nav {
          display: none;
        }

        /* TABLET */

        @media (max-width: 1200px) {
          .desktop-nav {
            gap: 16px;
          }

          .desktop-nav :global(.nav-link) {
            font-size: 13px;
          }

          .navbar-container {
            padding: 12px 3%;
          }
        }

        /* MOBILE */

        @media (max-width: 1180px) {
          .desktop-nav {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }

          .navbar-container {
            min-height: 76px;
            padding: 10px 5%;
          }

          .mobile-nav {
            display: flex;
            flex-direction: column;

            position: absolute;
            top: 100%;
            left: 0;

            width: 100%;
            background: white;

            padding: 0 5%;
            max-height: 0;
            overflow: hidden;

            opacity: 0;
            visibility: hidden;

            box-shadow: 0 15px 25px rgba(11, 34, 61, 0.08);
            transition:
              max-height 0.3s ease,
              opacity 0.3s ease,
              visibility 0.3s ease;
          }

          .mobile-nav.show {
            max-height: calc(100dvh - 76px);
            overflow-y: auto;
            padding: 20px 5% 28px;
            opacity: 1;
            visibility: visible;
          }

          .mobile-nav :global(.mobile-link) {
            padding: 14px 4px;
            border-bottom: 1px solid #e2e8f0;
            color: #14263d;
            font-weight: 600;
            font-size: 15px;
          }

          .mobile-nav :global(.mobile-link.active) {
            color: #0866e8;
          }

          .mobile-nav :global(.mobile-book-btn) {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-top: 20px;
            padding: 15px;
            text-align: center;

            background: #0866e8;
            color: white;

            border-radius: 10px;
            font-weight: 600;
          }
        }

        @media (max-width: 600px) {
          .navbar-logo :global(.logo-image) {
            width: 135px;
          }

          .navbar-actions :global(.book-btn) {
            display: none;
          }

          .navbar-container {
            min-height: 70px;
          }

          .mobile-nav.show {
            max-height: calc(100dvh - 70px);
          }
        }
      `}</style>
    </>
  );
}
