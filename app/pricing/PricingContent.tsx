"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaChevronDown, FaMagnifyingGlass, FaShieldHalved } from "react-icons/fa6";
import { pricingCategories } from "./pricing.data";
import styles from "./pricing.module.css";

const faqs = [
  ["Are these DK Appliance Care's final rates?", "No. Fixed figures are competitor reference prices retained for review. Final DK Appliance Care pricing will be confirmed before work begins."],
  ["What does “Price on Inspection” mean?", "The technician will inspect the appliance and share a quote before starting any chargeable work."],
  ["Are spare parts included?", "No. Parts, if required, are additional and are quoted after inspection."],
  ["Can I book a particular service?", "Yes. Select Book Now or Get Quote on a service card and your appliance and requested service will be carried into the booking flow."],
];

function bookingHref(appliance: string, service: string, price?: string) {
  const params = new URLSearchParams({ appliance, service });
  if (price) params.set("price", price);
  return `/book-repair?${params.toString()}`;
}

export default function PricingContent() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const normalizedQuery = query.trim().toLowerCase();
  const categories = useMemo(() => pricingCategories.map((category) => ({ ...category, services: category.services.filter((service) => !normalizedQuery || `${category.name} ${service.name}`.toLowerCase().includes(normalizedQuery)) })).filter((category) => (activeCategory === "all" || category.id === activeCategory) && category.services.length > 0), [activeCategory, normalizedQuery]);

  return <main className={styles.page}>
    <section className={styles.hero}><div className={styles.container}><h1>Repair pricing, <em>made clear.</em></h1><p className={styles.heroCopy}>Explore available appliance services, use reference prices as a guide, and book a convenient doorstep visit.</p><div className={styles.heroPills}><span><FaCheck /> Skilled technicians</span><span><FaCheck /> Quote before repair</span><span><FaCheck /> No online payment</span></div></div></section>
    <section className={styles.catalogue} aria-labelledby="pricing-heading"><div className={styles.container}>
      <div className={styles.sectionLead}><div><h2 id="pricing-heading">Find the service you need</h2></div><label className={styles.search}><FaMagnifyingGlass /><span className={styles.srOnly}>Search services</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search AC, cleaning, repair…" /></label></div>
      <div className={styles.categoryNav} aria-label="Appliance categories"><button type="button" className={activeCategory === "all" ? styles.activeCategory : ""} onClick={() => setActiveCategory("all")}>All services</button>{pricingCategories.map((category) => { const Icon = category.icon; return <button type="button" key={category.id} className={activeCategory === category.id ? styles.activeCategory : ""} onClick={() => setActiveCategory(category.id)}><Icon /> {category.name.replace(" Repair", "")}</button>; })}</div>
      <div className={styles.referenceNotice}><FaShieldHalved /><p><strong>Reference pricing for review only.</strong> These competitor prices are not approved DK Appliance Care rates. The final amount is confirmed after inspection.</p></div>
      {categories.length ? <div className={styles.categoryList}>{categories.map((category) => { const Icon = category.icon; return <section className={styles.categorySection} id={category.id} key={category.id}><header><span className={styles.categoryIcon}><Icon /></span><div><h2>{category.name}</h2><p>{category.services.length} services available</p></div></header><div className={styles.serviceGrid}>{category.services.map((service) => <article className={styles.serviceCard} key={service.name}><div><h3>{service.name}</h3><p>{service.price ? "Competitor reference price" : "Final price after inspection"}</p></div><div className={styles.serviceAction}>{service.price ? <strong>{service.price}</strong> : <strong className={styles.quotePrice}>Price on Inspection</strong>}<Link href={bookingHref(category.bookingAppliance, service.name, service.price)}>{service.price ? "Book Now" : "Get Quote"}<FaArrowRight /></Link></div></article>)}</div></section>; })}</div> : <div className={styles.emptyState}><h2>No matching service found</h2><p>Try a different appliance or service name.</p><button type="button" onClick={() => { setQuery(""); setActiveCategory("all"); }}>Clear search</button></div>}
    </div></section>
    <section className={styles.process}><div className={styles.container}><h2>Book with confidence</h2><div className={styles.steps}><div><span>01</span><h3>Choose a service</h3><p>Select the appliance and service that best matches your need.</p></div><div><span>02</span><h3>Pick a time</h3><p>Share your city, preferred date, and time slot.</p></div><div><span>03</span><h3>Approve the quote</h3><p>Your technician explains the final cost before repair work starts.</p></div></div></div></section>
    <section className={styles.faq}><div className={styles.container}><div className={styles.faqGrid}><div><h2>Pricing questions?</h2><p>Our team is happy to help with your appliance and booking.</p><Link href="/contact" className={styles.contactLink}>Contact our team <FaArrowRight /></Link></div><div>{faqs.map(([question, answer], index) => { const open = openFaq === index; return <div className={styles.faqItem} key={question}><button type="button" onClick={() => setOpenFaq(open ? null : index)} aria-expanded={open}><span>{question}</span><FaChevronDown className={open ? styles.rotate : ""} /></button>{open && <p>{answer}</p>}</div>; })}</div></div></div></section>
    <section className={styles.cta}><div className={styles.container}><div><h2>Let’s get your appliance working again.</h2></div><Link href="/book-repair">Book a repair <FaArrowRight /></Link></div></section>
  </main>;
}
