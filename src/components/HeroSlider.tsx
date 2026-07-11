"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/residential.jpg",
    category: "Residential Bespoke",
    title: "Quality that lasts, Elegance that impresses.",
    subtitle: "Sleek architectural doors, built-in wardrobes, and custom interior carpentry designed for luxury residential living.",
    linkText: "Explore Residential Solutions",
    linkHref: "/services#doors",
  },
  {
    image: "/images/commercial.jpg",
    category: "Commercial Fit-Outs",
    title: "Precision engineering for modern B2B spaces.",
    subtitle: "Custom boardrooms, reception counters, and acoustic slatted wood panelling crafted to corporate specifications.",
    linkText: "Explore Commercial Services",
    linkHref: "/services#furniture",
  },
  {
    image: "/images/healthcare.jpg",
    category: "Specialized Division",
    title: "MOH-compliant clinical wood solutions.",
    subtitle: "Anti-microbial laminates, seamless joints, and certified fire-rated door assemblies engineered for safety and hygiene.",
    linkText: "Explore Healthcare Specs",
    linkHref: "/healthcare",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[650px] lg:h-[750px] bg-white overflow-hidden border-b border-stone-100">
      {/* Background Image Slides (Smooth Crossfade, 2D) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              className="object-cover"
              sizes="100vw"
            />
            {/* Minimalist Solid White/Beige Overlay (85% opacity to keep text legible and maintain white background tone) */}
            <div className="absolute inset-0 bg-white/85" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
        <div className="max-w-3xl">
          {/* Active slide content */}
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ease-out ${
                idx === current
                  ? "block opacity-100 translate-y-0"
                  : "hidden opacity-0 translate-y-4"
              }`}
            >
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
                {slide.category}
              </span>
              <h1 className="text-4xl sm:text-6xl font-serif text-primary leading-[1.1] mb-6">
                {slide.title.split(",")[0]},<br />
                <span className="italic font-light text-stone-500">
                  {slide.title.split(",")[1]?.trim() || ""}
                </span>
              </h1>
              <p className="text-stone-600 font-light text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Request Specifications
                </Link>
                <Link href={slide.linkHref} className="btn-secondary">
                  {slide.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls & Slide Indicators */}
      <div className="absolute bottom-10 right-6 lg:right-12 z-20 flex items-center space-x-6 bg-white border border-stone-200 p-4">
        {/* Slide Fraction Counter */}
        <span className="font-serif text-xs font-medium tracking-widest text-stone-500">
          {(current + 1).toString().padStart(2, "0")} / {slides.length.toString().padStart(2, "0")}
        </span>

        {/* Action Arrows */}
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors duration-200 cursor-pointer"
          >
            &larr;
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors duration-200 cursor-pointer"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
