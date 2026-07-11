export interface Project {
  id: string;
  title: string;
  category: "healthcare" | "commercial" | "residential";
  location: string;
  description: string;
  image: string;
  specs?: string[];
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "King Faisal Specialist Hospital Paneling",
    category: "healthcare",
    location: "Jeddah, Saudi Arabia",
    description: "Anti-microbial and fire-retardant maple wall panels and custom door frames engineered for sterile clinical environments.",
    image: "/images/healthcare.jpg",
    specs: ["Moisture resistant", "Fire rated", "Saudi MoH approved", "Seamless joints"],
  },
  {
    id: "proj-2",
    title: "SABIC Headquarters Executive Desks",
    category: "commercial",
    location: "Jubail, Saudi Arabia",
    description: "Premium European white oak boardroom table and executive office storage systems with minimalist integrated power pathways.",
    image: "/images/commercial.jpg",
    specs: ["European White Oak", "Bespoke cabling", "Custom stains"],
  },
  {
    id: "proj-3",
    title: "Al-Muhammadiyah Villa Bespoke Doors",
    category: "residential",
    location: "Jeddah, Saudi Arabia",
    description: "Ultra-height solid walnut pivot doors and custom built-in flush wardrobes designed to match the minimalist architectural language.",
    image: "/images/residential.jpg",
    specs: ["Solid American Walnut", "3.2m pivot design", "Flush-to-wall design"],
  },
  {
    id: "proj-4",
    title: "Dr. Sulaiman Al-Habib Medical Suites",
    category: "healthcare",
    location: "Khobar, Saudi Arabia",
    description: "Bacteria-resistant laboratory casework, clinical washroom units, and protective corridor kickplates styled in light birch wood.",
    image: "/images/healthcare.jpg",
    specs: ["Bacteria resistant", "Impact protection", "Easy-to-disinfect laminates"],
  },
  {
    id: "proj-5",
    title: "Jeddah Financial District Office Fit-Out",
    category: "commercial",
    location: "Jeddah, Saudi Arabia",
    description: "Acoustic wood slatted wall cladding and custom reception desks crafted in natural ash wood for a high-end financial firm.",
    image: "/images/commercial.jpg",
    specs: ["Acoustic Slats", "Integrated LED channels", "Ash Wood Veneer"],
  },
  {
    id: "proj-6",
    title: "Diriyah Historic Estate Custom Joinery",
    category: "residential",
    location: "Diriyah, Saudi Arabia",
    description: "Traditional Najdi architectural details blended with modern minimalist doors and windows for a private desert residence.",
    image: "/images/residential.jpg",
    specs: ["Solid Teakwood", "Traditional Najdi patterns", "Weatherproof sealings"],
  },
];
