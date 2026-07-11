import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Woodwork Solutions",
  description: "Specialized, Saudi Ministry of Health compliant clinical doors, cabinets, and panels with anti-microbial coatings, moisture, and fire resistance.",
};

const complianceStandards = [
  {
    title: "Anti-Microbial Surfaces",
    description: "Treated with medical-grade antimicrobial laminates and finishes that actively suppress the growth of bacteria, fungi, and viruses. Tested and proven to withstand regular exposure to clinical disinfectants.",
    benefit: "Reduces hospital-acquired infections (HAIs) and ensures easy cleaning protocols.",
  },
  {
    title: "Certified Fire Resistance",
    description: "Manufactured with mineral cores and fire-retardant timber treatments, offering certified ratings from 30 up to 120 minutes. Fully compliant with SASO and Saudi Civil Defense regulations.",
    benefit: "Ensures evacuation safety paths in hospital corridors and clinical chambers.",
  },
  {
    title: "Moisture & Humidity Resistance",
    description: "Constructed using high-density polyurethane cores and water-resistant adhesives. Formulated specifically to prevent swelling, warping, or delamination in high-humidity areas like clinical kitchens or utility rooms.",
    benefit: "Extends product lifespan under intense sanitization washdowns.",
  },
  {
    title: "Dust-Free Joint Design",
    description: "Custom flush joinery designed to eliminate deep grooves and recesses where dust and organic matter could settle. All cabinet handles are integrated or flush to prevent infection nesting.",
    benefit: "Maintains absolute hygiene standards in surgery theaters and cleanrooms.",
  },
];

const medicalProducts = [
  {
    name: "MOH-Spec Clinical Doors",
    use: "Patient rooms, corridors, ICU",
    specs: "Solid wood frame, lead-lined option, custom kickplates, integrated observation glass with flush seals.",
  },
  {
    name: "Lead-Lined Radiology Doors",
    use: "X-Ray, CT Scan, MRI rooms",
    specs: "Internal lead sheet thickness from 1mm to 3mm, heavy-duty pivots, hermetic edge sealings.",
  },
  {
    name: "Clinical Casework & Cabinetry",
    use: "Laboratories, pharmacies, treatment suites",
    specs: "Marine-ply core, chemical-resistant anti-microbial coatings, soft-close heavy hinges, dust-proof seals.",
  },
  {
    name: "Anti-Microbial Wall Cladding",
    use: "Operation theater lobbies, corridor corridors",
    specs: "High-impact laminates, seamless joints, moisture-proof barrier backing, easy sanitize veneer finish.",
  },
];

export default function HealthcarePage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            Specialized Division
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary leading-tight max-w-3xl">
            Saudi MOH Compliant Woodwork & Doors
          </h1>
          <p className="mt-4 text-stone-500 font-light text-base max-w-xl">
            Precision-engineered woodwork solutions designed for clinical, laboratory, and surgical environments 
            requiring absolute hygiene and safety compliance.
          </p>
        </div>
      </section>

      {/* Compliance Standards Detail */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Clinical Quality
            </span>
            <h2 className="text-3xl font-serif text-primary">
              Core Healthcare Specifications
            </h2>
            <p className="text-stone-500 font-light text-sm mt-2">
              All KhashabSA healthcare products are tested and manufactured to align with standard international hospital designs 
              and local Saudi Ministry of Health guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {complianceStandards.map((std, i) => (
              <div key={i} className="border border-stone-200 p-8 lg:p-10 hover:border-accent transition-all duration-200 bg-white">
                <h3 className="font-serif text-xl text-primary mb-4 flex items-center">
                  <span className="w-1.5 h-6 bg-accent mr-3 block"></span>
                  {std.title}
                </h3>
                <p className="text-stone-600 font-light text-sm leading-relaxed mb-6">
                  {std.description}
                </p>
                <div className="bg-stone-50 p-4 border-l-2 border-stone-300">
                  <span className="text-[10px] font-bold uppercase text-stone-500 tracking-wider block mb-1">
                    Operational Benefit
                  </span>
                  <p className="text-stone-600 font-light text-xs leading-relaxed">
                    {std.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specification Table */}
      <section className="bg-sand-light py-24 lg:py-32 border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Catalog & Specs
            </span>
            <h2 className="text-3xl font-serif text-primary">
              Healthcare-Grade Product Matrix
            </h2>
          </div>

          {/* 2D Responsive Table/List */}
          <div className="overflow-x-auto border border-stone-200 bg-white rounded-none">
            <table className="min-w-full divide-y divide-stone-200 text-left text-sm font-light">
              <thead className="bg-stone-50 text-stone-700 text-xs font-semibold uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4">Product Category</th>
                  <th scope="col" className="px-6 py-4">Typical Application</th>
                  <th scope="col" className="px-6 py-4">Technical Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-600">
                {medicalProducts.map((prod, i) => (
                  <tr key={i} className="hover:bg-stone-50/50 transition-colors duration-150">
                    <td className="px-6 py-4 font-serif text-primary font-medium text-base">{prod.name}</td>
                    <td className="px-6 py-4 text-xs font-semibold text-accent uppercase tracking-wider">{prod.use}</td>
                    <td className="px-6 py-4 text-xs leading-relaxed font-light text-stone-500 max-w-xs">{prod.specs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certification Note */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="bg-accent/10 text-accent font-semibold text-[10px] px-3 py-1.5 uppercase tracking-widest mb-6 inline-block">
            MOH / Civil Defense Approved
          </span>
          <h2 className="text-3xl font-serif text-primary mb-6">
            Tendering & Engineering Submittals
          </h2>
          <p className="text-stone-500 font-light text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            We provide full engineering submittal packages including independent laboratory test fire ratings, 
            acoustic test results, and antimicrobial certificates to support your project's approval process.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Spec Submittal Pack
          </Link>
        </div>
      </section>
    </div>
  );
}
