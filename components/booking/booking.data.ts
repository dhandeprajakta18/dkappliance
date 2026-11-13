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
  { name: "Geyser", icon: "🚿" },
  { name: "Gas Stove", icon: "🔥" },
  { name: "Cooking Range", icon: "🍳" },
  { name: "Commercial Bhatti", icon: "♨️" },
  { name: "Kitchen Chimney", icon: "🏠" },
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
