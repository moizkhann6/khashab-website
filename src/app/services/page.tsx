import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Products",
  description: "Explore our premium woodwork services: custom architectural doors, windows, bespoke kitchens, wardrobes, and corporate office furniture.",
};

const serviceCategories = [
  {
    id: "doors",
    title: "Architectural Doors",
    description: "Premium interior and exterior doors engineered for structural integrity. Available in massive pivot formats, flush-to-wall configurations, and certified fire-retardant commercial ratings.",
    materials: ["Solid Walnut", "Oak Veneer", "Teakwood", "MDF core with fire-rating option"],
    features: ["Acoustic sealing", "Heavy-duty hidden hinges", "SASO fire-certification"],
  },
  {
    id: "windows",
    title: "Premium Timber Windows",
    description: "Climate-adapted hardwood frames engineered to withstand Gulf temperatures. Features multi-point locking systems and dual-rubber sealing for superior dust and thermal insulation.",
    materials: ["Teakwood", "Mahogany", "Iroko"],
    features: ["Double-glazed ready", "Weatherproof exterior sealants", "Acoustic isolation"],
  },
  {
    id: "kitchens",
    title: "Bespoke Kitchen Cabinets",
    description: "Luxury minimalist kitchen cabinetry tailored for residential developments. Featuring flush handle-less fronts, integrated lighting channels, and premium moisture-resistant finishes.",
    materials: ["Marine plywood core", "Premium veneers", "Custom matte lacquers"],
    features: ["Soft-close hardware integration", "Moisture-resistant coating", "Tailored storage inserts"],
  },
  {
    id: "wardrobes",
    title: "Custom Wardrobes & Storage",
    description: "Sleek, integrated built-in wardrobes and walk-in dressing rooms. Engineered with internal drawer organizers, integrated LED arrays, and seamless floor-to-ceiling panels.",
    materials: ["Smoked oak veneer", "Fabric-lined drawers", "Lacquered panels"],
    features: ["Seamless sliding rails", "Built-in vanity tables", "Modular modular framing"],
  },
  {
    id: "furniture",
    title: "Corporate Office Furniture",
    description: "B2B office furniture built to architectural specifications. Custom boardroom tables, monolithic reception desks, and modular wood slatted acoustic cladding.",
    materials: ["American walnut", "Ash wood", "Brushed metal integration"],
    features: ["Hidden power pathways", "Acoustic absorption options", "Durable scratch-proof surface oils"],
  },
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
          <h1 className="text-4xl lg:text-5xl font-serif text-primary leading-tight max-w-2xl">
            Bespoke Woodwork Engineered to Specification
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {serviceCategories.map((service, index) => (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-stone-200 last:border-0 items-start"
              >
                {/* Visual number / index */}
                <div className="lg:col-span-1">
                  <span className="font-serif text-3xl font-light text-stone-300 block">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                {/* Service Details */}
                <div className="lg:col-span-6 space-y-4">
                  <h2 className="text-2xl font-serif text-primary">
                    {service.title}
                  </h2>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Materials & Features List */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-6 bg-stone-50 p-6 border border-stone-200">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent mb-3">
                      Timber & Core Specs
                    </h4>
                    <ul className="space-y-2 text-xs font-light text-stone-600">
                      {service.materials.map((mat, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1 h-1 bg-accent mr-2"></span>
                          {mat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent mb-3">
                      Performance Details
                    </h4>
                    <ul className="space-y-2 text-xs font-light text-stone-600">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1 h-1 bg-accent mr-2"></span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Process Workflow */}
      <section className="bg-sand-light py-24 lg:py-32 border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Our Process
            </span>
            <h2 className="text-3xl font-serif text-primary">
              How We Deliver Custom Bespoke Solutions
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed mt-4">
              We manage the entire lifecycle of woodwork engineering, from initial CAD shop drawings 
              to delivery and professional installation on-site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative bg-white border border-stone-200 p-8 h-full">
                <span className="font-serif text-4xl font-light text-accent/20 block mb-6">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg text-primary mb-3">
                  {step.name}
                </h3>
                <p className="text-stone-500 font-light text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-24 text-center">
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
