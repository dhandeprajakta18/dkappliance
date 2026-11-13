"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaArrowLeft,
  FaCalendarCheck,
  FaPhone,
  FaShieldHalved,
  FaMobileScreen,
  FaLocationDot,
  FaClock,
  FaScrewdriverWrench,
  FaCircleCheck,
  FaCircleInfo,
  FaWhatsapp,
  FaMagnifyingGlass,
  FaChevronRight,
  FaLock,
  FaRotateRight,
} from "react-icons/fa6";

/* =========================================
   TYPES
========================================= */

type Step = "phone" | "otp" | "bookings";

type BookingStatus =
  | "Confirmed"
  | "In Progress"
  | "Completed"
  | "Cancelled";

type Booking = {
  id: string;
  appliance: string;
  service: string;
  date: string;
  time: string;
  location: string;
  technician: string;
  status: BookingStatus;
};

/* =========================================
   DEMO BOOKINGS

   Replace with backend data later.
========================================= */

const demoBookings: Booking[] = [
  {
    id: "DKAC-2026-001",
    appliance: "Air Conditioner",
    service: "AC Repair & Inspection",
    date: "18 Nov 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Chandigarh",
    technician: "To be assigned",
    status: "Confirmed",
  },
  {
    id: "DKAC-2026-002",
    appliance: "Washing Machine",
    service: "Washing Machine Repair",
    date: "12 Nov 2026",
    time: "02:00 PM - 04:00 PM",
    location: "Mohali",
    technician: "Demo Technician",
    status: "Completed",
  },
];

/* =========================================
   STATUS STYLES
========================================= */

function getStatusClass(status: BookingStatus) {
  switch (status) {
    case "Confirmed":
      return "confirmed";

    case "In Progress":
      return "progress";

    case "Completed":
      return "completed";

    case "Cancelled":
      return "cancelled";

    default:
      return "";
  }
}

/* =========================================
   MY BOOKINGS PAGE
========================================= */

export default function MyBookingsPage() {
  const [step, setStep] = useState<Step>("phone");

  const [phone, setPhone] = useState("");

  const [otp, setOtp] = useState("");

  const [error, setError] = useState("");

  const [showDemoBookings, setShowDemoBookings] =
    useState(false);

  const [activeBooking, setActiveBooking] =
    useState<string | null>(null);

  /* =====================================
     PHONE VALIDATION
  ===================================== */

  const handlePhoneSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cleanedPhone = phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    setStep("otp");
  };

  /* =====================================
     DEMO OTP VERIFICATION
  ===================================== */

  const handleOTPSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    setError("");

    // Frontend demo only.
    // No real OTP verification is performed.

    setShowDemoBookings(false);
    setStep("bookings");
  };

  /* =====================================
     RESET
  ===================================== */

  const resetForm = () => {
    setStep("phone");
    setPhone("");
    setOtp("");
    setError("");
    setShowDemoBookings(false);
    setActiveBooking(null);
  };

  return (
    <main className="bookings-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="bookings-hero">

        <div className="container">

          <div className="hero-content">

            <h1>
              My <em>Bookings.</em>
            </h1>

            <p>
              Keep track of your appliance repair
              appointments and service requests,
              all in one convenient place.
            </p>

            <div className="hero-features">

              <span>
                <FaCalendarCheck />
                Booking Details
              </span>

              <span>
                <FaShieldHalved />
                Service Updates
              </span>

              <span>
                <FaClock />
                Appointment Tracking
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================
          MAIN SECTION
      ===================================== */}

      <section className="booking-section">

        <div className="container">

          {/* =====================================
              PHONE STEP
          ===================================== */}

          {step === "phone" && (
            <div className="lookup-card">

              <div className="card-icon">
                <FaMobileScreen />
              </div>

              <h2>
                Enter your mobile number
              </h2>

              <p className="card-description">
                Enter the mobile number used while
                booking your appliance repair service.
              </p>

              <form onSubmit={handlePhoneSubmit}>

                <label htmlFor="phone">
                  Mobile Number
                </label>

                <div className="phone-input">

                  <span className="country-code">
                    +91
                  </span>

                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="Enter 10-digit mobile number"
                    value={phone}
                    maxLength={10}
                    onChange={(event) => {
                      setPhone(
                        event.target.value.replace(/\D/g, "")
                      );
                      setError("");
                    }}
                  />

                </div>

                {error && (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="submit-button"
                >
                  Continue
                  <FaArrowRight />
                </button>

              </form>

              <div className="secure-note">
                <FaLock />
                <span>
                  Booking lookup will be available
                  after backend integration.
                </span>
              </div>

            </div>
          )}

          {/* =====================================
              OTP STEP
          ===================================== */}

          {step === "otp" && (
            <div className="lookup-card">

              <button
                type="button"
                className="back-button"
                onClick={() => {
                  setStep("phone");
                  setError("");
                }}
              >
                <FaArrowLeft />
                Back
              </button>

              <div className="card-icon">
                <FaShieldHalved />
              </div>

              <h2>
                Verify your mobile number
              </h2>

              <p className="card-description">
                This is a preview of the OTP verification
                process for <strong>+91 {phone}</strong>.
                No SMS has been sent.
              </p>

              <form onSubmit={handleOTPSubmit}>

                <label htmlFor="otp">
                  Enter 6-digit OTP
                </label>

                <input
                  id="otp"
                  className="otp-input"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="000000"
                  maxLength={6}
                  value={otp}
                  onChange={(event) => {
                    setOtp(
                      event.target.value.replace(/\D/g, "")
                    );
                    setError("");
                  }}
                />

                {error && (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="submit-button"
                >
                  Continue to Preview
                  <FaArrowRight />
                </button>

              </form>

              <p className="demo-note">
                This screen does not authenticate users.
                Any six-digit value opens the demo preview.
              </p>

            </div>
          )}

          {/* =====================================
              BOOKINGS STEP
          ===================================== */}

          {step === "bookings" && (
            <div className="bookings-dashboard">

              {/* DASHBOARD HEADER */}

              <div className="dashboard-header">

                <div>

                  <h2>
                    Your Service Requests
                  </h2>

                  <p>
                    Mobile number: +91 {phone}
                  </p>

                </div>

                <button
                  type="button"
                  className="change-number"
                  onClick={resetForm}
                >
                  <FaRotateRight />
                  Change Number
                </button>

              </div>

              {/* DEMO NOTICE */}

              <div className="demo-banner">

                <FaCircleInfo />

                <div>
                  <strong>Demo preview only</strong>
                  <p>
                    Your number has not been verified,
                    and no actual bookings have been retrieved.
                    You can explore sample booking cards below.
                  </p>
                </div>

              </div>

              {!showDemoBookings ? (
                <div className="empty-state">

                  <div className="empty-icon">
                    <FaMagnifyingGlass />
                  </div>

                  <h3>
                    Booking lookup is coming soon
                  </h3>

                  <p>
                    Live booking history will appear here
                    once secure OTP verification and
                    booking retrieval are connected.
                  </p>

                  <button
                    type="button"
                    className="preview-button"
                    onClick={() => setShowDemoBookings(true)}
                  >
                    View Sample Bookings
                    <FaArrowRight />
                  </button>

                </div>
              ) : (
                <div className="booking-list">

                  {demoBookings.map((booking) => {
                    const isExpanded =
                      activeBooking === booking.id;

                    return (
                      <article
                        className="booking-card"
                        key={booking.id}
                      >

                        <div className="booking-card-top">

                          <div className="booking-id">

                            <span>
                              DEMO BOOKING
                            </span>

                            <h3>{booking.id}</h3>

                          </div>

                          <span
                            className={`status-badge ${getStatusClass(
                              booking.status
                            )}`}
                          >
                            <FaCircleCheck />
                            {booking.status}
                          </span>

                        </div>

                        <div className="booking-card-body">

                          <div className="appliance-icon">
                            <FaScrewdriverWrench />
                          </div>

                          <div className="booking-info">

                            <h3>{booking.appliance}</h3>

                            <p>{booking.service}</p>

                          </div>

                        </div>

                        <div className="booking-meta">

                          <span>
                            <FaCalendarCheck />
                            {booking.date}
                          </span>

                          <span>
                            <FaClock />
                            {booking.time}
                          </span>

                          <span>
                            <FaLocationDot />
                            {booking.location}
                          </span>

                        </div>

                        <button
                          type="button"
                          className="details-button"
                          onClick={() =>
                            setActiveBooking(
                              isExpanded ? null : booking.id
                            )
                          }
                          aria-expanded={isExpanded}
                        >
                          {isExpanded
                            ? "Hide Details"
                            : "View Details"}

                          <FaChevronRight />
                        </button>

                        {isExpanded && (
                          <div className="booking-details">

                            <div>
                              <span>Booking ID</span>
                              <strong>{booking.id}</strong>
                            </div>

                            <div>
                              <span>Appliance</span>
                              <strong>{booking.appliance}</strong>
                            </div>

                            <div>
                              <span>Service</span>
                              <strong>{booking.service}</strong>
                            </div>

                            <div>
                              <span>Technician</span>
                              <strong>{booking.technician}</strong>
                            </div>

                            <div>
                              <span>Status</span>
                              <strong>{booking.status}</strong>
                            </div>

                          </div>
                        )}

                      </article>
                    );
                  })}

                </div>
              )}

            </div>
          )}

        </div>

      </section>

      {/* =====================================
          HELP SECTION
      ===================================== */}

      <section className="help-section">

        <div className="container">

          <div className="help-box">

            <div>

              <h2>
                We&apos;re here to help.
              </h2>

              <p>
                Have a question about your repair
                appointment or need to book a new service?
                Our support team can assist you.
              </p>

              <div className="help-links">

                <a href="tel:+919781629990">
                  <FaPhone />
                  +91 97816-29990
                </a>

                <a
                  href="https://wa.me/919781629990"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                  WhatsApp Us
                </a>

              </div>

            </div>

            <Link
              href="/book-repair"
              className="help-button"
            >
              Book a Repair
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================
          COMPLETE CSS
      ===================================== */}

      <style jsx>{`

        /* =====================================
           ROOT
        ===================================== */

        .bookings-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: var(--text-primary, #172b3a);
          font-family: var(--font-body), Arial, sans-serif;
        }

        .container {
          width: 90%;
          max-width: 1240px;
          margin: 0 auto;
        }

        /* =====================================
           HERO
        ===================================== */

        .bookings-hero {
          padding: 100px 0 95px;
          background: var(--surface-blue, #f2f7fc);
        }

        .hero-content {
          max-width: 780px;
        }

        .hero-content h1 {
          margin: 0 0 22px;
          font-family: Georgia, serif;
          font-size: clamp(50px, 6vw, 84px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -2px;
          color: var(--primary, #123b5d);
        }

        .hero-content h1 em {
          color: var(--secondary, #357da3);
          font-weight: 400;
        }

        .hero-content p {
          max-width: 560px;
          margin: 0;
          font-size: 15px;
          line-height: 1.9;
          color: var(--text-secondary, #667684);
        }

        .hero-features {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          margin-top: 35px;
        }

        .hero-features span {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--primary, #123b5d);
        }

        .hero-features svg {
          color: var(--secondary, #357da3);
        }

        /* =====================================
           MAIN SECTION
        ===================================== */

        .booking-section {
          padding: 90px 0;
          min-height: 500px;
        }

        /* =====================================
           LOOKUP CARD
        ===================================== */

        .lookup-card {
          position: relative;
          width: 100%;
          max-width: 540px;
          margin: 0 auto;
          padding: 45px;
          border: 1px solid #e2eaf1;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 18px 55px rgba(20, 50, 80, 0.05);
        }

        .card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 62px;
          height: 62px;
          margin-bottom: 25px;
          border-radius: 16px;
          background: var(--surface-blue, #f2f7fc);
          color: var(--secondary, #357da3);
          font-size: 25px;
        }

        .lookup-card h2 {
          margin: 15px 0;
          font-family: Georgia, serif;
          font-size: 34px;
          font-weight: 400;
          line-height: 1.25;
          color: var(--primary, #123b5d);
        }

        .card-description {
          margin: 0 0 30px;
          font-size: 14px;
          line-height: 1.8;
          color: var(--text-secondary, #667684);
        }

        .lookup-card label {
          display: block;
          margin-bottom: 10px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary, #123b5d);
        }

        /* PHONE INPUT */

        .phone-input {
          display: flex;
          align-items: center;
          width: 100%;
          height: 55px;
          border: 1px solid #dce5ee;
          border-radius: 9px;
          overflow: hidden;
          transition: border-color 0.25s ease;
        }

        .phone-input:focus-within {
          border-color: var(--secondary, #357da3);
        }

        .country-code {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 18px;
          border-right: 1px solid #dce5ee;
          background: #f8fafc;
          font-size: 14px;
          font-weight: 600;
          color: var(--primary, #123b5d);
        }

        .phone-input input {
          flex: 1;
          min-width: 0;
          height: 100%;
          padding: 0 15px;
          border: none;
          outline: none;
          background: transparent;
          font-family: inherit;
          font-size: 14px;
          color: var(--primary, #123b5d);
        }

        .phone-input input::placeholder {
          color: #9aa8b5;
        }

        /* OTP INPUT */

        .otp-input {
          width: 100%;
          height: 58px;
          padding: 0 20px;
          border: 1px solid #dce5ee;
          border-radius: 9px;
          outline: none;
          background: #ffffff;
          font-family: inherit;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 10px;
          text-align: center;
          color: var(--primary, #123b5d);
        }

        .otp-input:focus {
          border-color: var(--secondary, #357da3);
        }

        .otp-input::placeholder {
          color: #b7c2cc;
        }

        /* ERROR */

        .form-error {
          margin: 10px 0 0;
          font-size: 12px;
          color: #c0392b;
        }

        /* BUTTONS */

        .submit-button,
        .preview-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          width: 100%;
          min-height: 52px;
          margin-top: 25px;
          padding: 14px 22px;
          border: none;
          border-radius: 40px;
          background: var(--secondary, #357da3);
          color: #ffffff;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover,
        .preview-button:hover {
          background: var(--primary, #123b5d);
          transform: translateY(-2px);
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
          padding: 0;
          border: none;
          background: transparent;
          color: var(--text-secondary, #667684);
          font-family: inherit;
          font-size: 13px;
          cursor: pointer;
        }

        .back-button:hover {
          color: var(--secondary, #357da3);
        }

        .secure-note {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 9px;
          margin-top: 25px;
          font-size: 12px;
          line-height: 1.6;
          color: var(--text-secondary, #667684);
        }

        .secure-note svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--secondary, #357da3);
        }

        .demo-note {
          margin: 20px 0 0;
          font-size: 12px;
          line-height: 1.7;
          text-align: center;
          color: var(--text-secondary, #667684);
        }

        /* =====================================
           DASHBOARD
        ===================================== */

        .bookings-dashboard {
          max-width: 950px;
          margin: 0 auto;
        }

        .dashboard-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 35px;
        }

        .dashboard-header h2 {
          margin: 15px 0 10px;
          font-family: Georgia, serif;
          font-size: 38px;
          font-weight: 400;
          color: var(--primary, #123b5d);
        }

        .dashboard-header p {
          margin: 0;
          font-size: 13px;
          color: var(--text-secondary, #667684);
        }

        .change-number {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border: 1px solid #dce5ee;
          border-radius: 40px;
          background: #ffffff;
          color: var(--primary, #123b5d);
          font-family: inherit;
          font-size: 12px;
          cursor: pointer;
        }

        .change-number:hover {
          border-color: var(--secondary, #357da3);
        }

        /* DEMO BANNER */

        .demo-banner {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 30px;
          padding: 20px;
          border: 1px solid #dce6f0;
          border-radius: 12px;
          background: #f5f9fd;
        }

        .demo-banner > svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: var(--secondary, #357da3);
          font-size: 18px;
        }

        .demo-banner strong {
          display: block;
          margin-bottom: 5px;
          font-size: 13px;
          color: var(--primary, #123b5d);
        }

        .demo-banner p {
          margin: 0;
          font-size: 12px;
          line-height: 1.7;
          color: var(--text-secondary, #667684);
        }

        /* EMPTY STATE */

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 65px 25px;
          border: 1px dashed #d5e0ea;
          border-radius: 16px;
          text-align: center;
          background: #ffffff;
        }

        .empty-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          margin-bottom: 22px;
          border-radius: 50%;
          background: var(--surface-blue, #f2f7fc);
          color: var(--secondary, #357da3);
          font-size: 25px;
        }

        .empty-state h3 {
          margin: 0 0 12px;
          font-family: Georgia, serif;
          font-size: 27px;
          font-weight: 400;
          color: var(--primary, #123b5d);
        }

        .empty-state p {
          max-width: 460px;
          margin: 0;
          font-size: 13px;
          line-height: 1.8;
          color: var(--text-secondary, #667684);
        }

        .empty-state .preview-button {
          width: auto;
          margin-top: 28px;
        }

        /* =====================================
           BOOKING CARDS
        ===================================== */

        .booking-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .booking-card {
          padding: 28px;
          border: 1px solid #e1e9f0;
          border-radius: 15px;
          background: #ffffff;
          transition: box-shadow 0.25s ease;
        }

        .booking-card:hover {
          box-shadow: 0 15px 40px rgba(20, 50, 80, 0.05);
        }

        .booking-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          padding-bottom: 22px;
          border-bottom: 1px solid #edf1f5;
        }

        .booking-id > span {
          display: block;
          margin-bottom: 8px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--text-secondary, #667684);
        }

        .booking-id h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
          color: var(--primary, #123b5d);
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 600;
        }

        .status-badge.confirmed {
          background: #eaf3ff;
          color: #2364a5;
        }

        .status-badge.progress {
          background: #fff4e5;
          color: #a96b18;
        }

        .status-badge.completed {
          background: #e8f7ee;
          color: #24824c;
        }

        .status-badge.cancelled {
          background: #fdecec;
          color: #c0392b;
        }

        .booking-card-body {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 25px 0;
        }

        .appliance-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          flex-shrink: 0;
          border-radius: 12px;
          background: var(--surface-blue, #f2f7fc);
          color: var(--secondary, #357da3);
          font-size: 21px;
        }

        .booking-info h3 {
          margin: 0 0 7px;
          font-size: 17px;
          font-weight: 600;
          color: var(--primary, #123b5d);
        }

        .booking-info p {
          margin: 0;
          font-size: 13px;
          color: var(--text-secondary, #667684);
        }

        .booking-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 18px 28px;
          padding-bottom: 24px;
        }

        .booking-meta span {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 12px;
          color: var(--text-secondary, #667684);
        }

        .booking-meta svg {
          color: var(--secondary, #357da3);
        }

        .details-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0;
          border: none;
          background: transparent;
          color: var(--secondary, #357da3);
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        .details-button:hover {
          color: var(--primary, #123b5d);
        }

        .booking-details {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          margin-top: 25px;
          padding-top: 25px;
          border-top: 1px solid #edf1f5;
        }

        .booking-details > div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .booking-details span {
          font-size: 12px;
          color: var(--text-secondary, #667684);
        }

        .booking-details strong {
          font-size: 13px;
          font-weight: 600;
          color: var(--primary, #123b5d);
        }

        /* =====================================
           HELP SECTION
        ===================================== */

        .help-section {
          padding: 0 0 100px;
        }

        .help-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          padding: 55px 60px;
          border-radius: 20px;
          background: var(--surface-blue, #f2f7fc);
        }

        .help-box h2 {
          margin: 18px 0;
          font-family: Georgia, serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 400;
          color: var(--primary, #123b5d);
        }

        .help-box p {
          max-width: 550px;
          margin: 0;
          font-size: 14px;
          line-height: 1.8;
          color: var(--text-secondary, #667684);
        }

        .help-links {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 25px;
        }

        .help-links :global(a) {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary, #123b5d);
          text-decoration: none;
        }

        .help-links :global(a:hover) {
          color: var(--secondary, #357da3);
        }

        .help-links :global(svg) {
          color: var(--secondary, #357da3);
        }

        .help-box :global(.help-button) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 16px 26px;
          border-radius: 40px;
          background: var(--secondary, #357da3);
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .help-box :global(.help-button:hover) {
          background: var(--primary, #123b5d);
          transform: translateY(-2px);
        }

        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 1024px) {
          .help-box {
            padding: 45px;
          }
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 768px) {
          .container {
            width: calc(100% - 40px);
          }

          .bookings-hero {
            padding: 75px 0;
          }

          .hero-content h1 {
            font-size: 48px;
          }

          .hero-features {
            gap: 15px;
          }

          .booking-section {
            padding: 65px 0;
          }

          .lookup-card {
            padding: 30px 24px;
          }

          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .help-section {
            padding-bottom: 70px;
          }

          .help-box {
            flex-direction: column;
            align-items: flex-start;
            padding: 35px 25px;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 42px;
          }

          .lookup-card h2 {
            font-size: 29px;
          }

          .booking-details {
            grid-template-columns: 1fr;
          }

          .booking-card {
            padding: 22px;
          }

          .help-box :global(.help-button) {
            width: 100%;
          }
        }

        /* =====================================
           ACCESSIBILITY
        ===================================== */

        .bookings-page :global(a:focus-visible),
        .bookings-page button:focus-visible,
        .bookings-page input:focus-visible {
          outline: 2px solid var(--secondary, #357da3);
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .bookings-page *,
          .bookings-page *::before,
          .bookings-page *::after {
            transition: none !important;
          }
        }

      `}</style>
    </main>
  );
}
