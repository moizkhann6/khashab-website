import { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about KhashabSA's journey since 2015, our mission, vision, and core B2B woodwork manufacturing goals in Saudi Arabia.",
};

export default function AboutPage() {
  return <AboutContent />;
}
