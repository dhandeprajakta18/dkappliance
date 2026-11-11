"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaCheck,
  FaPhone,
  FaShieldHalved,
} from "react-icons/fa6";

import styles from "./ApplicationForm.module.css";

const jobRoles = [
  "Technician",
  "Helper / Trainee",
  "Office / Support",
];

const experienceOptions = [
  "No Experience",
  "Under 1 Year",
  "1–3 Years",
  "Over 3 Years",
];

const cities = [
  "Mumbai",
  "Pune",
  "Navi Mumbai",
  "Thane",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
];

type FormData = {
  role: string;
  name: string;
  phone: string;
  city: string;
  experience: string;
  message: string;
};

const initialForm: FormData = {
  role: "",
  name: "",
  phone: "",
  city: "",
  experience: "",
  message: "",
};

export default function ApplicationForm() {
  const [form, setForm] = useState<FormData>(initialForm);

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  /* VALIDATION */

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.role) {
      newErrors.role = "Please select a job role.";
    }

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const cleanedPhone = form.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number.";
    }

    if (!form.city) {
      newErrors.city = "Please select your city.";
    }

    if (!form.experience) {
      newErrors.experience =
        "Please select your experience.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* SUBMIT */

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    // Frontend-only confirmation.
    // Connect a backend API before accepting real applications.
    setSubmitted(true);
  };

  return (
    <section
      className={styles.section}
      id="apply"
    >
      <div className={styles.container}>

        {/* HEADER */}

        <div className={styles.header}>

          <h2>
            Send Your <em>Application.</em>
          </h2>

          <p>
            Take the first step toward your next opportunity.
            Complete the form below to express your interest
            in joining DK Appliance Care.
          </p>

        </div>

        <div className={styles.layout}>

          {/* FORM */}

          <div className={styles.formCard}>

            {submitted ? (

              <div
                className={styles.successMessage}
                role="status"
              >

                <div className={styles.successIcon}>
                  <FaCheck />
                </div>

                <h3>Form Completed!</h3>

                <p>
                  Your application details are valid.
                  This demo form is not yet connected
                  to the recruitment team.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                >
                  Fill Another Application
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                noValidate
              >

                {/* JOB ROLE */}

                <div className={styles.fieldGroup}>

                  <label className={styles.label}>
                    I want to work as
                    <span className={styles.required}> *</span>
                  </label>

                  <div className={styles.pillGroup}>

                    {jobRoles.map((role) => (
                      <button
                        type="button"
                        key={role}
                        className={`${styles.pill} ${
                          form.role === role
                            ? styles.selected
                            : ""
                        }`}
                        onClick={() =>
                          updateField("role", role)
                        }
                        aria-pressed={form.role === role}
                      >
                        {role}
                      </button>
                    ))}

                  </div>

                  {errors.role && (
                    <span className={styles.error}>
                      {errors.role}
                    </span>
                  )}

                </div>

                {/* NAME + PHONE */}

                <div className={styles.twoColumns}>

                  <div className={styles.fieldGroup}>

                    <label
                      className={styles.label}
                      htmlFor="applicant-name"
                    >
                      Your Name
                      <span className={styles.required}> *</span>
                    </label>

                    <input
                      id="applicant-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) =>
                        updateField("name", e.target.value)
                      }
                    />

                    {errors.name && (
                      <span className={styles.error}>
                        {errors.name}
                      </span>
                    )}

                  </div>

                  <div className={styles.fieldGroup}>

                    <label
                      className={styles.label}
                      htmlFor="applicant-phone"
                    >
                      Mobile Number
                      <span className={styles.required}> *</span>
                    </label>

                    <div className={styles.phoneInput}>

                      <span>+91</span>

                      <input
                        id="applicant-phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={(e) =>
                          updateField(
                            "phone",
                            e.target.value.replace(/\D/g, "")
                          )
                        }
                      />

                    </div>

                    {errors.phone && (
                      <span className={styles.error}>
                        {errors.phone}
                      </span>
                    )}

                  </div>

                </div>

                {/* CITY */}

                <div className={styles.fieldGroup}>

                  <label
                    className={styles.label}
                    htmlFor="applicant-city"
                  >
                    Your City
                    <span className={styles.required}> *</span>
                  </label>

                  <select
                    id="applicant-city"
                    value={form.city}
                    onChange={(e) =>
                      updateField("city", e.target.value)
                    }
                  >
                    <option value="">
                      Choose your city
                    </option>

                    {cities.map((city) => (
                      <option
                        key={city}
                        value={city}
                      >
                        {city}
                      </option>
                    ))}
                  </select>

                  {errors.city && (
                    <span className={styles.error}>
                      {errors.city}
                    </span>
                  )}

                </div>

                {/* EXPERIENCE */}

                <div className={styles.fieldGroup}>

                  <label className={styles.label}>
                    Your Experience
                    <span className={styles.required}> *</span>
                  </label>

                  <div className={styles.pillGroup}>

                    {experienceOptions.map((experience) => (
                      <button
                        type="button"
                        key={experience}
                        className={`${styles.pill} ${
                          form.experience === experience
                            ? styles.selected
                            : ""
                        }`}
                        onClick={() =>
                          updateField(
                            "experience",
                            experience
                          )
                        }
                        aria-pressed={
                          form.experience === experience
                        }
                      >
                        {experience}
                      </button>
                    ))}

                  </div>

                  {errors.experience && (
                    <span className={styles.error}>
                      {errors.experience}
                    </span>
                  )}

                </div>

                {/* MESSAGE */}

                <div className={styles.fieldGroup}>

                  <label
                    className={styles.label}
                    htmlFor="applicant-message"
                  >
                    Anything Else We Should Know?
                    <span className={styles.optional}>
                      {" "}(Optional)
                    </span>
                  </label>

                  <textarea
                    id="applicant-message"
                    rows={5}
                    placeholder="Tell us about your skills, current work, or when you can start..."
                    value={form.message}
                    onChange={(e) =>
                      updateField(
                        "message",
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* PRIVACY */}

                <p className={styles.privacy}>
                  By submitting this form, you agree
                  to be contacted regarding your
                  application and acknowledge our{" "}
                  <Link href="/privacy-policy">
                    Privacy Policy
                  </Link>.
                </p>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className={styles.submitButton}
                >
                  Send Application
                  <FaArrowRight />
                </button>

              </form>

            )}

          </div>

          {/* RIGHT SIDEBAR */}

          <aside className={styles.sidebar}>

            <h3>Good to Know</h3>

            <div className={styles.infoItem}>

              <span className={styles.infoNumber}>1</span>

              <div>
                <h4>Every Application Matters</h4>

                <p>
                  Our team reviews applications
                  to identify suitable candidates.
                </p>
              </div>

            </div>

            <div className={styles.infoItem}>

              <span className={styles.infoNumber}>2</span>

              <div>
                <h4>We Contact You Directly</h4>

                <p>
                  Shortlisted applicants will be
                  contacted using their provided
                  mobile number.
                </p>
              </div>

            </div>

            <div className={styles.infoItem}>

              <span className={styles.infoNumber}>3</span>

              <div>
                <h4>Learn and Grow</h4>

                <p>
                  We value dedication, professionalism,
                  and a willingness to learn.
                </p>
              </div>

            </div>

            <div className={styles.securityNote}>

              <FaShieldHalved />

              <p>
                Your information should only be
                used for recruitment purposes
                in accordance with our privacy policy.
              </p>

            </div>

            <div className={styles.helpBox}>

              <FaPhone />

              <div>
                <strong>Have Questions?</strong>

                <p>
                  Contact our team for more
                  information about career
                  opportunities.
                </p>

                <Link href="/contact">
                  Contact Us
                  <FaArrowRight />
                </Link>
              </div>

            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}
