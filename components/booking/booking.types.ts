export type BookingStep =
  | "city"
  | "appliance"
  | "type"
  | "details"
  | "date"
  | "phone"
  | "otp"
  | "confirmation";

export type ServiceType =
  | "Repair"
  | "Service"
  | "Installation"
  | "Uninstallation";

export type TimeSlot =
  | "Morning"
  | "Afternoon"
  | "Evening";

export interface BookingData {
  city: string;
  appliance: string;
  requestedService: string;
  referencePrice: string;
  serviceType: ServiceType | null;
  date: string;
  timeSlot: TimeSlot | null;
  phone: string;
}

export interface StepProps {
  booking: BookingData;
  updateBooking: (data: Partial<BookingData>) => void;
  nextStep: () => void;
  previousStep: () => void;
}
