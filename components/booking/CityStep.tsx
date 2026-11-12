"use client";

import { useState } from "react";

import {
  FaMagnifyingGlass,
  FaLocationDot,
  FaCircleCheck,
} from "react-icons/fa6";

import {
  serviceCities,
  popularCities,
} from "./booking.data";

import type { StepProps } from "./booking.types";

import styles from "@/app/book-repair/page.module.css";

export default function CityStep({
  booking,
  updateBooking,
  nextStep,
}: StepProps) {
  const [search, setSearch] = useState("");

  const cities = search
    ? serviceCities.filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
      )
    : [
        ...popularCities,
        ...serviceCities.filter(
          (city) => !popularCities.includes(city)
        ),
      ];

  const selectCity = (city: string) => {
    updateBooking({
      city,
      appliance: "",
      serviceType: null,
      date: "",
      timeSlot: null,
    });

    localStorage.setItem("dk-selected-city", city);

    nextStep();
  };

  return (
    <div className={styles.stepContent}>
      <h2>Where do you need service?</h2>

      <p className={styles.stepDescription}>
        Pick your city. No name or phone needed yet.
      </p>

      <div className={styles.citySearch}>
        <FaMagnifyingGlass />

        <input
          type="text"
          placeholder="Search all service cities"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h3 className={styles.smallHeading}>
        {search
          ? "SEARCH RESULTS"
          : "POPULAR SERVICE CITIES"}
      </h3>

      <div className={styles.cityList}>
        {cities.map((city) => (
          <button
            key={city}
            type="button"
            className={styles.cityItem}
            onClick={() => selectCity(city)}
          >
            <span>
              <FaLocationDot />
              {city}
            </span>

            {booking.city === city ? (
              <FaCircleCheck
                className={styles.selectedIcon}
              />
            ) : (
              <span className={styles.radioCircle} />
            )}
          </button>
        ))}

        {cities.length === 0 && (
          <p className={styles.emptyMessage}>
            No cities found.
          </p>
        )}
      </div>
    </div>
  );
}