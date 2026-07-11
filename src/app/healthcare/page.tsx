import { Metadata } from "next";
import HealthcareContent from "@/components/HealthcareContent";

export const metadata: Metadata = {
  title: "Healthcare Woodwork Solutions",
  description: "Specialized, Saudi Ministry of Health compliant clinical doors, cabinets, and panels with anti-microbial coatings, moisture, and fire resistance.",
};

export default function HealthcarePage() {
  return <HealthcareContent />;
}
