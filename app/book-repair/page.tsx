import { Suspense } from "react";

import BookingWizard from "@/components/booking/BookingWizard";

export default function BookRepairPage() {
  return (
    <Suspense fallback={<div>Loading booking...</div>}>
      <BookingWizard />
    </Suspense>
  );
}