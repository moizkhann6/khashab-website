import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about KhashabSA's journey since 2015, our mission, vision, and core B2B woodwork manufacturing goals in Saudi Arabia.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            Who We Are
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary leading-tight max-w-2xl">
            Established in 2015, dedicated to premium wood engineering.
          </h1>
        </div>
      </section>

      {/* Our Story Narrative */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Year Stamp */}
            <div className="lg:col-span-4">
              <div className="border-l-2 border-accent pl-6">
                <span className="font-serif text-6xl lg:text-7xl font-light text-primary block leading-none">
                  2015
                </span>
                <span className="text-xs uppercase font-bold text-stone-400 tracking-wider block mt-2">
                  Company Founded in Riyadh
                </span>
              </div>
            </div>

            {/* Narrative text */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-2xl lg:text-3xl font-serif text-primary">
                A Journey of Craftsmanship & Industrial Scaling
              </h2>
              <p className="text-stone-600 font-light text-base leading-relaxed">
                KhashabSA began as a small boutique workshop in Riyadh, established by master wood craftsmen 
                who recognized the need for premium, architecturally precise woodwork in the local Saudi market. 
                By combining traditional joinery skills with strict manufacturing tolerances, the company quickly 
                earned a reputation for quality.
              </p>
              <p className="text-stone-600 font-light text-base leading-relaxed">
                In 2019, we expanded operations by establishing our state-of-the-art facility in Riyadh's Second 
                Industrial City. Equipping the plant with automated CNC machinery allowed us to scale from bespoke 
                single-residence fittings to large-scale B2B commercial, educational, and healthcare contract deliveries.
              </p>
              <p className="text-stone-600 font-light text-base leading-relaxed">
                Today, KhashabSA is a trusted partner for Saudi Arabia's leading developers and construction firms, 
                trusted for our deep material knowledge, engineering capabilities, and rigorous compliance with 
                local building standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, & Goals Grid */}
      <section className="bg-sand-light py-24 lg:py-32 border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Message/Mission */}
            <div className="card-2d p-8 lg:p-10 bg-white">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                Our Mission & Message
              </span>
              <h3 className="text-xl lg:text-2xl font-serif text-primary mb-4">
                Vision Fulfillment
              </h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed">
                We are committed to achieving the customer's vision by shaping premium wood products to desired specifications in record time and at highly competitive prices.
              </p>
            </div>

            {/* Vision */}
            <div className="card-2d p-8 lg:p-10 bg-white">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                Our Vision
              </span>
              <h3 className="text-xl lg:text-2xl font-serif text-primary mb-4">
                The First Option
              </h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed mb-4">
                To be the first option for wood products in Saudi Arabia, and the leading specialist option for wood products in healthcare facilities throughout the Kingdom.
              </p>
            </div>

            {/* Goals */}
            <div className="card-2d p-8 lg:p-10 bg-white">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                Our Goals
              </span>
              <h3 className="text-xl lg:text-2xl font-serif text-primary mb-4">
                Strategic Targets
              </h3>
              <ul className="text-stone-500 font-light text-sm leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">&#8212;</span>
                  Deliver unique wood products and icons.
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">&#8212;</span>
                  Expand market presence within Saudi Arabia.
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">&#8212;</span>
                  Cultivate client trust and long-term satisfaction.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Why Us & Certifications */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Why Us */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block">
                Why KhashabSA
              </span>
              <h2 className="text-3xl font-serif text-primary">
                Differentiating Strengths
              </h2>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-serif text-lg text-primary mb-2">Innovation & Creativity</h4>
                  <p className="text-stone-500 font-light text-xs leading-relaxed">
                    Continuously designing unique wood icons that bring joy and beauty to spaces.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary mb-2">Commitment to Quality</h4>
                  <p className="text-stone-500 font-light text-xs leading-relaxed">
                    Selecting prime lumber and processing under rigorous manufacturing audits.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary mb-2">Record Lead Times</h4>
                  <p className="text-stone-500 font-light text-xs leading-relaxed">
                    Precision high-capacity CNC plants ensure swift engineering and shipping.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary mb-2">After-Sales Service</h4>
                  <p className="text-stone-500 font-light text-xs leading-relaxed">
                    Comprehensive maintenance support and project callbacks to build customer trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-6 space-y-6 bg-stone-50 p-8 border border-stone-200">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                Quality Credentials
              </span>
              <h3 className="text-2xl font-serif text-primary">
                ISO 9001 & GMP Standards
              </h3>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                All wood components manufactured at our Riyadh facility are audited under international quality protocols. 
                KhashabSA is proud to hold **ISO 9001:2015 Quality Management Systems Certification** and strictly adheres to **Good Manufacturing Practice (GMP)** guidelines to ensure cleanroom and commercial wood safety.
              </p>
              <div className="flex gap-4 pt-2">
                <span className="border border-stone-300 text-stone-600 font-semibold text-[10px] tracking-wider uppercase px-3 py-2 bg-white">
                  ISO 9001:2015 Certified
                </span>
                <span className="border border-stone-300 text-stone-600 font-semibold text-[10px] tracking-wider uppercase px-3 py-2 bg-white">
                  GMP Standards Compliant
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sand-light py-24 text-center border-t border-stone-100">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-primary mb-6">
            Partner With Us
          </h2>
          <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
            Experience the unique woodworking capability that brings beauty, joy, and compliance to your spaces.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
