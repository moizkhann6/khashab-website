import { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services & Products",
  description: "Explore our premium woodwork services: custom architectural doors, windows, bespoke kitchens, wardrobes, and corporate office furniture.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
