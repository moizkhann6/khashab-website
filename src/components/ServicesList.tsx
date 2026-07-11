"use client";

import { useDb } from "@/context/DbContext";

// Static details lists that match the category IDs
const staticSpecsMap: Record<string, { materials: string[]; features: string[] }> = {
  doors: {
    materials: ["Solid Walnut", "Oak Veneer", "Teakwood", "Fire-Rated Core"],
    features: ["Acoustic sealing", "Heavy-duty hidden pivots", "SASO certified"],
  },
  windows: {
    materials: ["Teakwood", "Mahogany", "Iroko"],
    features: ["Double-glazed ready", "Weatherproof sealants", "Thermal insulation"],
  },
  kitchens: {
    materials: ["Marine plywood core", "Premium veneers", "Matte lacquers"],
    features: ["Soft-close hardware", "Moisture-resistant coating", "Tailored organizers"],
  },
  wardrobes: {
    materials: ["Smoked oak veneer", "Fabric-lined drawers", "Lacquered panels"],
    features: ["Seamless sliding rails", "Built-in drawer systems", "Modular framing"],
  },
  closets: {
    materials: ["Cedar wood", "Eucalyptus veneer", "Leather lining"],
    features: ["Hidden security safes", "Custom glass display doors", "Anti-dust seals"],
  },
  bedrooms: {
    materials: ["American Walnut", "Ash Wood", "Premium upholstery backing"],
    features: ["Floating bed frames", "Integrated bedside panels", "Touch-to-open drawers"],
  },
  "office-furniture": {
    materials: ["American Walnut", "Ash Wood", "Brushed metal integration"],
    features: ["Hidden power pathways", "Acoustic absorption options", "Durable scratch-proof surface oils"],
  },
  "general-furniture": {
    materials: ["Oak", "Ash", "Maple", "Exotic veneers"],
    features: ["Precision hand-finishing", "Custom stains & coloring", "Sustainable sourcing"],
  },
};

export default function ServicesList() {
  const { categories, isLoaded } = useDb();

  if (!isLoaded || categories.length === 0) {
    return (
      <div className="w-full flex justify-center py-16">
        <div className="w-8 h-8 border-2 border-stone-200 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {categories.map((service, index) => {
        // Fallback to defaults if no custom specs found
        const specs = staticSpecsMap[service.id] || {
          materials: ["Solid Hardwood", "Natural Veneers", "MDF Core"],
          features: ["Tailored Dimensions", "Sterile Finishes", "SASO Quality Audit"],
        };

        return (
          <div
            key={service.id}
            id={service.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-stone-200 last:border-0 items-start"
          >
            {/* Visual number / index */}
            <div className="lg:col-span-1">
              <span className="font-serif text-3xl font-light text-stone-300 block text-left">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl font-serif text-primary font-medium text-left">
                {service.title}
              </h2>
              <p className="text-stone-600 font-light text-sm leading-relaxed text-left">
                {service.description}
              </p>
            </div>

            {/* Materials & Features List */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6 bg-stone-50 p-6 border border-stone-200">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent mb-3 text-left">
                  Timber & Core Specs
                </h4>
                <ul className="space-y-2 text-xs font-light text-stone-600 text-left">
                  {specs.materials.map((mat, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1 h-1 bg-accent mr-2 shrink-0"></span>
                      {mat}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent mb-3 text-left">
                  Performance Details
                </h4>
                <ul className="space-y-2 text-xs font-light text-stone-600 text-left">
                  {specs.features.map((feat, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1 h-1 bg-accent mr-2 shrink-0"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
