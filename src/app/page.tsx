"use client";

import Link from "next/link";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import HeroSlider from "@/components/HeroSlider";
import ScrollytellingSection from "@/components/ScrollytellingSection";
import { useDb } from "@/context/DbContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { clients, categories, healthcareBg, certifications } = useDb();
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* 1. Hero Image Slider */}
      <HeroSlider />

      {/* 2. Brand Story Summary */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4 text-left">
                  {t("brand.est")}
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif text-primary leading-tight text-left font-medium mb-6">
                  {t("brand.hero_title")}
                </h2>
              </div>

              {/* Certification Logos Grid */}
              <div className="flex flex-wrap gap-6 lg:gap-8 mt-6 justify-start items-center">
                {certifications && certifications.map((cert) => (
                  <div 
                    key={cert.id}
                    className="flex items-center justify-center select-none"
                    title={cert.name}
                  >
                    {cert.logo.startsWith("http") || cert.logo.startsWith("data:") ? (
                      <img src={cert.logo} alt={cert.name} className="h-10 md:h-12 w-auto object-contain transition-transform duration-200 hover:scale-105" />
                    ) : (
                      <span className="text-xs font-sans font-bold uppercase tracking-widest text-accent whitespace-nowrap">
                        {cert.logo}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-stone-600 font-light text-base leading-relaxed text-left">
                {t("brand.desc_1")}
              </p>
              <p className="text-stone-600 font-light text-base leading-relaxed text-left">
                {t("brand.desc_2")}
              </p>
              <div className="pt-4 flex justify-start">
                <Link href="/about" className="text-sm font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors duration-200 link-underline">
                  {t("brand.read_story")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products & Services Section (With Visual Grid) */}
      <section className="bg-white py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              {t("services.label")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-primary font-medium">
              {t("services.title")}
            </h2>
            <p className="text-stone-500 font-light text-sm mt-2">
              {t("services.subtitle")}
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
                      {t(service.title)}
                    </h3>
                    <p className="text-stone-500 font-light text-xs leading-relaxed mb-4 text-left">
                      {t(service.description)}
                    </p>
                  </div>
                  <Link href={service.href} className="text-[10px] font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors link-underline self-start">
                    {t("services.view_details")}
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
              {t("journey.label")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-primary font-medium">
              {t("journey.title")}
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed mt-4">
              {t("journey.desc")}
            </p>
          </div>

          <ScrollytellingSection />
        </div>
      </section>

      {/* 5. Healthcare Specialty Parallax Section */}
      <section 
        className="relative h-[550px] bg-scroll lg:bg-fixed bg-cover bg-center flex items-center border-b border-stone-900" 
        style={{ backgroundImage: `url('${healthcareBg}')` }}
      >
        {/* Parallax Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl bg-white p-8 lg:p-12 border border-stone-200 text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              {t("health.label")}
            </span>
            <h2 className="text-3xl font-serif text-primary leading-tight mb-4 font-medium">
              {t("health.title")}
            </h2>
            <p className="text-stone-600 font-light text-sm leading-relaxed mb-8">
              {t("health.desc")}
            </p>
            <div className="flex gap-4">
              <Link href="/healthcare" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
                {t("health.btn_specs")}
              </Link>
              <Link href="/contact" className="btn-secondary py-3 px-6 text-xs uppercase tracking-wider">
                {t("health.btn_rfq")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Portfolio Showcase Gallery */}
      <section className="bg-white py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              {t("portfolio.label")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-4 font-medium">
              {t("portfolio.title")}
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed">
              {t("portfolio.desc")}
            </p>
          </div>

          <ImageGallery />
        </div>
      </section>

      {/* 7. Client Partners logos (B2B Networks) */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              {t("networks.label")}
            </span>
            <h2 className="text-3xl font-serif text-primary font-medium">
              {t("networks.title")}
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed mt-4">
              {t("networks.desc")}
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-left">
          <div>
            <h3 className="font-serif text-2xl mb-2 text-white font-medium">{t("trust.title")}</h3>
            <p className="text-stone-400 font-light text-sm">{t("trust.desc")}</p>
          </div>
          <Link href="/contact" className="bg-white text-stone-900 hover:bg-stone-100 transition-colors py-4 px-8 text-xs uppercase tracking-widest font-semibold shrink-0">
            {t("trust.btn")}
          </Link>
        </div>
      </section>
    </div>
  );
}
