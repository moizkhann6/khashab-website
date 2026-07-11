import { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact & Partners",
  description: "Get in touch with KhashabSA's Jeddah engineering office, request a B2B woodwork specification quote, or view our local Saudi development partners.",
};

export default function ContactPage() {
  return <ContactContent />;
}
