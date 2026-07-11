"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    id: "step-1",
    title: "01. Material Sourcing",
    subtitle: "Sustainable, Prime Hardwood Selection",
    desc: "Every project starts with selecting the finest raw timber. We sustainably import prime walnut, white oak, ash, and beech. The wood is stored and dried under climate-controlled conditions to match Saudi relative humidity specs, preventing warping and cracking.",
    image: "/images/residential.jpg",
    accent: "Walnut & Oak"
  },
  {
    id: "step-2",
    title: "02. Shop Drawings & CAD",
    subtitle: "Micron-Level Engineering Precision",
    desc: "Our Riyadh engineering department translates architectural sketches and tender specifications into detailed CAD shop drawings. We pre-plan internal structural reinforcement, cable pathways, and joinery details before milling.",
    image: "/images/commercial.jpg",
    accent: "Engineering Shop"
  },
  {
    id: "step-3",
    title: "03. Computerized CNC Milling",
    subtitle: "Automated Industrial Scaling",
    desc: "Using automated, high-precision German CNC machinery, wood panels and frames are cut to within 0.1mm of specifications. This guarantees consistent joints, matching grains, and rapid lead times for high-volume B2B orders.",
    image: "/images/commercial.jpg",
    accent: "CNC Machinery"
  },
  {
    id: "step-4",
    title: "04. Sanding & Sterile Coating",
    subtitle: "ISO 9001 & GMP Hand Finishing",
    desc: "Traditional carpenters sand each piece to a flawless touch. We then apply specialized coatings, including Ministry of Health compliant anti-microbial treatments and fire-retardant sealants, audited under ISO 9001 and GMP standards.",
    image: "/images/healthcare.jpg",
    accent: "Anti-Microbial Polish"
  }
];

export default function ScrollytellingSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -25% 0px", // Trigger when card occupies central 50% of screen
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = steps.findIndex(s => s.id === entry.target.id);
          if (idx !== -1) {
            setActiveStep(idx);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Select all step divs to observe
    const stepElements = containerRef.current?.querySelectorAll(".scrolly-step");
    stepElements?.forEach(el => observer.observe(el));

    return () => {
      stepElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative py-12">
      
      {/* LEFT PANEL: Sticky Image Viewer (Strictly 2D, no shadows) */}
      <div className="lg:col-span-6 lg:sticky lg:top-28 z-20 w-full aspect-4/3 lg:aspect-square overflow-hidden bg-stone-100 border border-stone-200">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === activeStep ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Dark overlay with active step indicators */}
            <div className="absolute inset-0 bg-stone-950/40 flex flex-col justify-between p-8 text-white">
              <span className="bg-accent text-white font-semibold text-[10px] tracking-widest uppercase px-3 py-1.5 self-start">
                {step.accent}
              </span>
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">
                  Active Manufacturing Stage
                </span>
                <p className="font-serif text-lg text-white">
                  {step.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT PANEL: Scrolling Detail Cards */}
      <div className="lg:col-span-6 space-y-16 lg:space-y-32 lg:pb-32">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            id={step.id}
            className="scrolly-step border border-stone-200 p-8 lg:p-12 bg-white transition-all duration-300 relative group flex flex-col justify-between min-h-[380px]"
            style={{
              borderColor: idx === activeStep ? "#8c6239" : "#e7e5e4"
            }}
          >
            {/* Step Counter */}
            <div className="flex justify-between items-center mb-6">
              <span className={`font-serif text-4xl font-light transition-colors duration-300 ${
                idx === activeStep ? "text-accent" : "text-stone-300"
              }`}>
                0{idx + 1}
              </span>
              <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">
                Step {idx + 1} of 4
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-primary font-medium">
                {step.title.split(".")[1].trim()}
              </h3>
              <h4 className="text-xs font-semibold text-accent uppercase tracking-wider">
                {step.subtitle}
              </h4>
              <p className="text-stone-500 font-light text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Active Indicator Bar */}
            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                Audited Standard
              </span>
              <span className="text-[10px] font-semibold text-stone-600 bg-stone-100 px-2 py-1 uppercase tracking-wider">
                {idx === 3 ? "ISO 9001 & GMP" : "Standard Operating Procedure"}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
