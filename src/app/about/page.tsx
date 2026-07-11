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
            
            {/* Mission */}
            <div className="card-2d p-8 lg:p-10 bg-white">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                Our Mission
              </span>
              <h3 className="text-xl lg:text-2xl font-serif text-primary mb-4">
                Precision & Quality
              </h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed">
                To deliver world-class wood engineering and custom woodwork solutions that surpass client 
                expectations, supporting Saudi contractors with reliable lead times and impeccable build quality.
              </p>
            </div>

            {/* Vision */}
            <div className="card-2d p-8 lg:p-10 bg-white">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                Our Vision
              </span>
              <h3 className="text-xl lg:text-2xl font-serif text-primary mb-4">
                Regional Leadership
              </h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed">
                To become the premier B2B manufacturer of custom architectural timber products and specialized medical-grade wood systems in the Gulf region, driving innovation through technology.
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
                  Maintain 100% Saudi MOH compliance.
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">&#8212;</span>
                  Increase Saudization in engineering roles.
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">&#8212;</span>
                  Promote sustainable wood sourcing.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-primary mb-6">
            Partner With Us
          </h2>
          <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
            Let's discuss how KhashabSA can engineer custom doors, panels, or furniture solutions for your next project.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
