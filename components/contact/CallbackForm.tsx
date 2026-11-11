"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaCircleCheck,
  FaSpinner,
} from "react-icons/fa6";

import styles from "./CallbackForm.module.css";

type FormData = {
  name: string;
  phone: string;
  city: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  city: "",
  message: "",
};

const cities = [
  "Mumbai",
  "Pune",
  "Navi Mumbai",
  "Thane",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Other",
];

export default function CallbackForm() {
  const [formData, setFormData] = useState<FormData>(initialForm);

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));

    setStatus("idle");
    setServerMessage("");
  };

  const validate = () => {
    const newErrors: Partial<
      Record<keyof FormData, string>
    > = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const phone = formData.phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone =
        "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.city) {
      newErrors.city = "Please select your city.";
    }

    if (formData.message.length > 1000) {
      newErrors.message =
        "Message must be under 1000 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setStatus("idle");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      setStatus("success");
      setServerMessage(result.message);
      setFormData(initialForm);
      setErrors({});
    } catch (error) {
      setStatus("error");

      setServerMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your request."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} id="callback">
      <div className={styles.container}>
        <div className={styles.heading}>
          {/* <span className={styles.tag}>
            REQUEST A CALLBACK
          </span> */}

          <h2>
            Ask for a <em>Call Back.</em>
          </h2>

          <p>
            Tell us where you are and what you need.
            Our team can contact you to discuss your
            appliance service requirements.
          </p>
        </div>

        <div className={styles.formCard}>
          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="contact-name">
                Your Name <span>*</span>
              </label>

              <input
                id="contact-name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) =>
                  handleChange("name", e.target.value)
                }
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                required
              />

              {errors.name && (
                <span className={styles.error}>
                  {errors.name}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-phone">
                Mobile Number <span>*</span>
              </label>

              <div className={styles.phoneInput}>
                <span className={styles.countryCode}>
                  +91
                </span>

                <input
                  id="contact-phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Enter mobile number"
                  value={formData.phone}
                  onChange={(e) =>
                    handleChange("phone", e.target.value)
                  }
                  autoComplete="tel-national"
                  maxLength={10}
                  aria-invalid={Boolean(errors.phone)}
                  required
                />
              </div>

              {errors.phone && (
                <span className={styles.error}>
                  {errors.phone}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-city">
                Your City <span>*</span>
              </label>

              <select
                id="contact-city"
                value={formData.city}
                onChange={(e) =>
                  handleChange("city", e.target.value)
                }
                aria-invalid={Boolean(errors.city)}
                required
              >
                <option value="">Choose your city</option>

                {cities.map((city) => (
                  <option value={city} key={city}>
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

            <div className={styles.field}>
              <label htmlFor="contact-message">
                What Do You Need?
                <small> (Optional)</small>
              </label>

              <textarea
                id="contact-message"
                rows={5}
                placeholder="For example: My AC is not cooling properly..."
                value={formData.message}
                onChange={(e) =>
                  handleChange("message", e.target.value)
                }
                maxLength={1000}
              />

              {errors.message && (
                <span className={styles.error}>
                  {errors.message}
                </span>
              )}
            </div>

            <p className={styles.privacy}>
              By submitting this form, you agree to
              be contacted regarding your request.
              Please review our{" "}
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
              .
            </p>

            <button
              type="submit"
              disabled={loading}
              className={styles.submitButton}
            >
              {loading ? (
                <>
                  <FaSpinner className={styles.spinner} />
                  Submitting...
                </>
              ) : (
                <>
                  Request Callback
                  <FaArrowRight />
                </>
              )}
            </button>

            {status === "success" && (
              <div
                className={styles.success}
                role="status"
              >
                <FaCircleCheck />
                {serverMessage}
              </div>
            )}

            {status === "error" && (
              <div
                className={styles.serverError}
                role="alert"
              >
                {serverMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}