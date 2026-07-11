import { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import ContactPartners from "@/components/ContactPartners";

export const metadata: Metadata = {
  title: "Contact & Partners",
  description: "Get in touch with KhashabSA's Jeddah engineering office, request a B2B woodwork specification quote, or view our local Saudi development partners.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            Connect With Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary leading-tight max-w-2xl">
            Partner with KhashabSA for Premium Timber Engineering
          </h1>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-3">
                  Jeddah Headquarters & Factory
                </span>
                <h3 className="font-serif text-2xl text-primary mb-4">
                  KhashabSA Factory Complex
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed mb-4">
                  Second Industrial City, Phase 3<br />
                  Jeddah, Kingdom of Saudi Arabia
                </p>
                <div className="border-t border-stone-100 pt-4 flex flex-col space-y-2 text-xs font-light text-stone-500">
                  <span><strong className="text-primary font-medium">CR Registration:</strong> 1010484920</span>
                  <span><strong className="text-primary font-medium">VAT Number:</strong> 300482930200003</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-3">
                  Business Hours
                </span>
                <h3 className="font-serif text-2xl text-primary mb-4">
                  Operation Times
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  Saturday to Thursday: 8:00 AM — 5:00 PM<br />
                  Friday: Closed
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-3">
                  Direct Inquiries
                </span>
                <h3 className="font-serif text-2xl text-primary mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-3 text-sm font-light text-stone-600">
                  <p>
                    <span className="block text-xs font-semibold text-stone-400 uppercase">Phone</span>
                    <a href="tel:+966560603222" className="hover:text-accent transition-colors">+966 56 060 3222</a>
                  </p>
                  <p>
                    <span className="block text-xs font-semibold text-stone-400 uppercase">Email</span>
                    <a href="mailto:info@khashab.net" className="hover:text-accent transition-colors">info@khashab.net</a>
                  </p>
                </div>
              </div>
            </div>

            {/* B2B RFQ Form */}
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                RFQ / Specification Request Form
              </span>
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>

      {/* Partners / Client Logos Grid */}
      <section className="bg-sand-light py-24 lg:py-32 border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Our Networks
            </span>
            <h2 className="text-3xl font-serif text-primary">
              Trusted by Leading Saudi Developers & Institutions
            </h2>
            <p className="text-stone-500 font-light text-sm mt-4">
              We supply custom bespoke woodwork and certified doors to private developers, corporate headquarters, 
              and government initiatives.
            </p>
          </div>

          {/* Elegant 2D minimalist client logo cards */}
          <ContactPartners />
        </div>
      </section>
    </div>
  );
}
