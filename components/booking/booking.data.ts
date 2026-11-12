import type { TimeSlot } from "./booking.types";

export const serviceCities = [
  "Mumbai",
  "Pune",
  "Navi Mumbai",
  "Thane",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Ahmedabad",
  "Chandigarh",
  "Amritsar",
  "Ludhiana",
  "Jalandhar",
  "Kolkata",
];

export const popularCities = [
  "Mumbai",
  "Pune",
  "Navi Mumbai",
  "Thane",
  "Delhi",
  "Bengaluru",
];

export const appliances = [
  { name: "AC", icon: "❄️" },
  { name: "Washing Machine", icon: "🧺" },
  { name: "Refrigerator", icon: "🧊" },
  { name: "TV", icon: "📺" },
  { name: "Microwave", icon: "♨️" },
  { name: "RO Water Purifier", icon: "💧" },
  { name: "Geyser", icon: "🚿" },
  { name: "Electric Work", icon: "⚡" },
  { name: "Treadmill", icon: "🏃" },
  { name: "Chimney", icon: "🏠" },
  { name: "Water Dispenser", icon: "🚰" },
  { name: "Dishwasher", icon: "🍽️" },
  { name: "Water Cooler", icon: "🧊" },
  { name: "CCTV", icon: "📷" },
  { name: "Air Purifier", icon: "🌬️" },
];

export const timeSlots: {
  name: TimeSlot;
  time: string;
}[] = [
  {
    name: "Morning",
    time: "9:00 AM – 12:00 PM",
  },
  {
    name: "Afternoon",
    time: "12:00 PM – 4:00 PM",
  },
  {
    name: "Evening",
    time: "4:00 PM – 8:00 PM",
  },
];