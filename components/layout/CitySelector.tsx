"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import {
  FaLocationDot,
  FaChevronDown,
  FaMagnifyingGlass,
  FaXmark,
  FaCheck,
} from "react-icons/fa6";

import styles from "./CitySelector.module.css";

/* =========================================
   CITY DATA
========================================= */

const popularCities = [
  "Mumbai",
  "Pune",
  "Navi Mumbai",
  "Thane",
  "Delhi",
  "Bengaluru",
];

const allCities = [
  "Ahmedabad",
  "Amritsar",
  "Aurangabad",
  "Bengaluru",
  "Bhopal",
  "Chandigarh",
  "Chennai",
  "Delhi",
  "Faridabad",
  "Ghaziabad",
  "Gurugram",
  "Hyderabad",
  "Indore",
  "Jaipur",
  "Jalandhar",
  "Jammu",
  "Kolkata",
  "Lucknow",
  "Ludhiana",
  "Mumbai",
  "Nagpur",
  "Nashik",
  "Navi Mumbai",
  "Noida",
  "Patna",
  "Pune",
  "Surat",
  "Thane",
  "Vadodara",
  "Visakhapatnam",
];

const CITY_STORAGE_KEY = "dk-selected-city";

function subscribeToSelectedCity(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("dk-city-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("dk-city-change", onStoreChange);
  };
}

function getSelectedCitySnapshot() {
  const savedCity = localStorage.getItem(CITY_STORAGE_KEY) ?? "";

  return allCities.includes(savedCity) ? savedCity : "";
}

function getServerSelectedCitySnapshot() {
  return "";
}

export default function CitySelector() {
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");

  const selectedCity = useSyncExternalStore(
    subscribeToSelectedCity,
    getSelectedCitySnapshot,
    getServerSelectedCitySnapshot
  );

  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  /* =========================================
     CLOSE ON ESCAPE
  ========================================= */

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open]);

  /* =========================================
     AUTO FOCUS SEARCH
  ========================================= */

  useEffect(() => {
    if (open) {
      searchRef.current?.focus();
    }
  }, [open]);

  /* =========================================
     SELECT CITY
  ========================================= */

  const selectCity = (city: string) => {
    localStorage.setItem(CITY_STORAGE_KEY, city);

    window.dispatchEvent(
      new CustomEvent("dk-city-change", {
        detail: city,
      })
    );

    setOpen(false);
    setSearch("");
    buttonRef.current?.focus();
  };

  /* =========================================
     FILTER CITIES
  ========================================= */

  const filteredCities = allCities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const filteredPopular = popularCities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>

      {/* CITY BUTTON */}

      <button
        ref={buttonRef}
        type="button"
        className={`${styles.cityButton} ${
          open ? styles.active : ""
        }`}
        onClick={() => {
          setOpen(!open);
          setSearch("");
        }}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="city-selection-dialog"
      >
        <FaLocationDot className={styles.locationIcon} />

        <span>
          {selectedCity || "Choose city"}
        </span>

        <FaChevronDown
          className={`${styles.chevron} ${
            open ? styles.rotate : ""
          }`}
        />
      </button>

      {/* BACKDROP */}

      {open && (
        <div
          className={styles.backdrop}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* CITY POPUP */}

      {open && (
        <div
          ref={popupRef}
          id="city-selection-dialog"
          className={styles.popup}
          role="dialog"
          aria-modal="true"
          aria-labelledby="city-popup-title"
        >

          {/* HEADER */}

          <div className={styles.popupHeader}>

            <div>
              <h3 id="city-popup-title">
                Choose your city
              </h3>

              <p>
                Select your location to explore
                available appliance repair services.
              </p>
            </div>

            <button
              type="button"
              className={styles.closeButton}
              onClick={() => {
                setOpen(false);
                buttonRef.current?.focus();
              }}
              aria-label="Close city selector"
            >
              <FaXmark />
            </button>

          </div>

          {/* SEARCH */}

          <div className={styles.searchBox}>

            <FaMagnifyingGlass />

            <input
              ref={searchRef}
              type="search"
              placeholder="Search your city"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              aria-label="Search cities"
            />

          </div>

          {/* SCROLLABLE CONTENT */}

          <div className={styles.scrollArea}>

            {/* POPULAR CITIES */}

            {filteredPopular.length > 0 && (
              <div className={styles.citySection}>

                <h4>Popular cities</h4>

                <div className={styles.cityGrid}>

                  {filteredPopular.map((city) => (
                    <button
                      key={city}
                      type="button"
                      className={`${styles.cityOption} ${
                        selectedCity === city
                          ? styles.selected
                          : ""
                      }`}
                      onClick={() => selectCity(city)}
                    >
                      <span>{city}</span>

                      {selectedCity === city && (
                        <FaCheck />
                      )}
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* ALL CITIES */}

            {filteredCities.length > 0 && (
              <div className={styles.citySection}>

                <h4>All cities</h4>

                <div className={styles.cityGrid}>

                  {filteredCities.map((city) => (
                    <button
                      key={city}
                      type="button"
                      className={`${styles.cityOption} ${
                        selectedCity === city
                          ? styles.selected
                          : ""
                      }`}
                      onClick={() => selectCity(city)}
                    >
                      <span>{city}</span>

                      {selectedCity === city && (
                        <FaCheck />
                      )}
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* NO RESULTS */}

            {filteredCities.length === 0 && (
              <div className={styles.noResults}>
                <FaLocationDot />

                <h4>No cities found</h4>

                <p>
                  Try searching with another city name.
                </p>
              </div>
            )}

          </div>

          {/* FOOTER */}

          <div className={styles.popupFooter}>
            Select your city to continue.
          </div>

        </div>
      )}

    </div>
  );
}
