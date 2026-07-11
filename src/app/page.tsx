"use client";

import Link from "next/link";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import HeroSlider from "@/components/HeroSlider";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import { useDb } from "@/context/DbContext";

export default function Home() {
  const { clients, categories, healthcareBg } = useDb();

  return (
    <div className="bg-white">
      {/* 1. Hero Image Slider */}
      <HeroSlider />

      {/* 2. Brand Story Summary */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
                Est. 2015 / Riyadh, KSA
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif text-primary leading-tight">
                Shaping Customer Visions Into Premium Wood Icons
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-stone-600 font-light text-base leading-relaxed">
                Founded in Riyadh in 2015, KhashabSA is committed to achieving the customer's vision by shaping products 
                to desired specifications in record time and at highly competitive prices. We design and manufacture 
                unique, high-end wood icons that bring beauty and joy to spaces.
              </p>
              <p className="text-stone-600 font-light text-base leading-relaxed">
                Operating from Riyadh's Second Industrial City, our ISO 9001:2015 certified plant blends advanced CNC precision with artisanal carpentry, serving as the first choice for architectural and clinical woodwork in Saudi Arabia.
              </p>
              <div className="pt-4">
                <Link href="/about" className="text-sm font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors duration-200 link-underline">
                  Read Our Story & Differentiators &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products & Services Section (With Visual Grid) */}
      <section className="bg-white py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Our Products
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-primary">
              Premium Wood Manufacturing
            </h2>
            <p className="text-stone-500 font-light text-sm mt-2">
              From doors and windows to luxury bespoke closets, kitchens, and office fit-outs, we shape timber to your precise specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((service, idx) => (
              <div key={idx} className="card-2d flex flex-col group h-full">
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100 border-b border-stone-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-primary mb-2 group-hover:text-accent transition-colors text-left font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-stone-500 font-light text-xs leading-relaxed mb-4 text-left">
                      {service.description}
                    </p>
                  </div>
                  <Link href={service.href} className="text-[10px] font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors link-underline self-start">
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Scrollytelling Section */}
      <section className="bg-sand-light py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Manufacturing Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-primary">
              The Art of Bespoke Carpentry
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed mt-4">
              Scroll down to witness how our Riyadh plant translates raw sustainable lumber into highly engineered, unique wood icons.
            </p>
          </div>

          <ScrollytellingSection />
        </div>
      </section>

      {/* 5. Healthcare Specialty Parallax Section */}
      <section 
        className="relative h-[550px] bg-fixed bg-cover bg-center flex items-center border-b border-stone-900" 
        style={{ backgroundImage: `url('${healthcareBg}')` }}
      >
        {/* Parallax Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl bg-white p-8 lg:p-12 border border-stone-200">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Healthcare Specialty
            </span>
            <h2 className="text-3xl font-serif text-primary leading-tight mb-4">
              First Option for Wood Products in Saudi Healthcare Facilities
            </h2>
            <p className="text-stone-600 font-light text-sm leading-relaxed mb-8">
              We design and engineer specialized wood fittings matching strict Ministry of Health standards: moisture resistant, bacteria resistant, fire resistant, and easy to sterilize and clean.
            </p>
            <div className="flex gap-4">
              <Link href="/healthcare" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
                Explore Clinical Specs
              </Link>
              <Link href="/contact" className="btn-secondary py-3 px-6 text-xs uppercase tracking-wider">
                Request Healthcare RFQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Dynamic Showcase Gallery */}
      <ImageGallery />

      {/* 7. Client Partners logos (B2B Networks) */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Our Networks
            </span>
            <h2 className="text-3xl font-serif text-primary">
              Trusted B2B Collaborators
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed mt-4">
              We supply custom woodwork and certified doors to leading developers and public institutions in Saudi Arabia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((partner) => (
              <div
                key={partner.id}
                className="bg-white border border-stone-200 p-6 flex flex-col justify-center items-center text-center h-28 hover:border-accent transition-colors duration-200 overflow-hidden"
              >
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-full object-contain animate-fade-in" />
                ) : (
                  <>
                    <span className="font-serif text-sm font-semibold tracking-wider text-stone-850 uppercase block mb-1">
                      {partner.name}
                    </span>
                    <span className="text-[9px] font-light text-stone-400 uppercase tracking-widest block">
                      {partner.role}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Trust Banner / RFQ Link */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-2 text-white">Have an active tender or custom design inquiry?</h3>
            <p className="text-stone-400 font-light text-sm">Our engineers in Riyadh will estimate prices and project lead times within 48 hours.</p>
          </div>
          <Link href="/contact" className="bg-white text-stone-900 hover:bg-stone-100 transition-colors py-4 px-8 text-xs uppercase tracking-widest font-semibold shrink-0">
            Submit Specifications &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
