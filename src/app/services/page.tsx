import Link from "next/link";
import { Metadata } from "next";
import ServicesList from "@/components/ServicesList";

export const metadata: Metadata = {
  title: "Services & Products",
  description: "Explore our premium woodwork services: custom architectural doors, windows, bespoke kitchens, wardrobes, and corporate office furniture.",
};

const comprehensiveServices = [
  { title: "Interior & Exterior Decorations", desc: "Premium architectural wooden wall paneling, ceiling grids, slatted features, and entrance claddings." },
  { title: "Exhibitions & Showrooms", desc: "Sophisticated wooden booths and product showcase stands engineered for high-traffic presentation." },
  { title: "Restaurants & Cafes", desc: "Durable custom tables, counters, wall cladding, and booth seating crafted to hospitality specifications." },
  { title: "Children's Play Areas", desc: "Sanded, non-toxic, safe wooden structures, playhouses, and modular activity furniture." },
  { title: "Clinics & Laboratories", desc: "Sterile, non-porous chemical casework, hygiene panels, and custom treatment cabinets." },
  { title: "Premium Homes & Villas", desc: "Complete bespoke home fit-out packages encompassing doors, closets, kitchens, and wall decor." },
];

const steps = [
  { number: "01", name: "CAD Consultation", desc: "Our engineering office translates architectural designs into precise CAD shop drawings." },
  { number: "02", name: "Material Selection", desc: "Select from curated, sustainably-sourced premium hardwoods dried to local relative humidity specs." },
  { number: "03", name: "Precision CNC", desc: "Computer-controlled milling ensures absolute dimensional accuracy for all custom panels and joins." },
  { number: "04", name: "Assembly & Finish", desc: "Traditional carpenters handle final assembly, sandings, and hand-oil applications." },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            Our Offerings
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary leading-tight max-w-2xl text-left font-medium">
            Bespoke Woodwork Engineered to Specification
          </h1>
        </div>
      </section>

      {/* Services Grid (Dynamic DB Categories) */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ServicesList />
        </div>
      </section>

      {/* Comprehensive Services Sectors */}
      <section className="bg-sand-light py-24 lg:py-32 border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Where We Apply Our Craft
            </span>
            <h2 className="text-3xl font-serif text-primary">
              Comprehensive Fitting & Fit-Out Services
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed mt-4">
              We design and construct wooden installations for a broad range of sectors, ensuring 
              excellence in both commercial scale and private aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comprehensiveServices.map((comp, idx) => (
              <div key={idx} className="card-2d bg-white p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg text-primary mb-3 text-left font-medium">
                    {comp.title}
                  </h3>
                  <p className="text-stone-550 font-light text-xs leading-relaxed text-left">
                    {comp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Process Workflow */}
      <section className="bg-white py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Our Process
            </span>
            <h2 className="text-3xl font-serif text-primary">
              How We Deliver Custom Bespoke Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative bg-white border border-stone-200 p-8 h-full">
                <span className="font-serif text-4xl font-light text-accent/20 block mb-6 text-left">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg text-primary mb-3 text-left font-medium">
                  {step.name}
                </h3>
                <p className="text-stone-550 font-light text-xs leading-relaxed text-left">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sand-light py-24 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-primary mb-6">
            B2B Specification Support
          </h2>
          <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
            Do you need material samples, architectural specifications, or custom shop drawings for your tender?
          </p>
          <Link href="/contact" className="btn-primary">
            Request Spec Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
