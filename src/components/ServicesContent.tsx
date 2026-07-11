"use client";

import Link from "next/link";
import ServicesList from "@/components/ServicesList";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesContent() {
  const { t } = useLanguage();

  const comprehensiveServices = [
    { titleKey: "services.comp_1_title", descKey: "services.comp_1_desc" },
    { titleKey: "services.comp_2_title", descKey: "services.comp_2_desc" },
    { titleKey: "services.comp_3_title", descKey: "services.comp_3_desc" },
    { titleKey: "services.comp_4_title", descKey: "services.comp_4_desc" },
    { titleKey: "services.comp_5_title", descKey: "services.comp_5_desc" },
    { titleKey: "services.comp_6_title", descKey: "services.comp_6_desc" },
  ];

  const steps = [
    { number: "01", nameKey: "services.step_1_name", descKey: "services.step_1_desc" },
    { number: "02", nameKey: "services.step_2_name", descKey: "services.step_2_desc" },
    { number: "03", nameKey: "services.step_3_name", descKey: "services.step_3_desc" },
    { number: "04", nameKey: "services.step_4_name", descKey: "services.step_4_desc" },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            {t("services.label")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary leading-tight max-w-2xl font-medium">
            {t("services.page_title")}
          </h1>
        </div>
      </section>

      {/* Services Grid (Dynamic DB Categories) */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ServicesList />
        </div>
      </section>

      {/* Comprehensive Services Sectors */}
      <section className="bg-sand-light py-24 lg:py-32 border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              {t("services.header_label")}
            </span>
            <h2 className="text-3xl font-serif text-primary font-medium">
              {t("services.comp_title")}
            </h2>
            <p className="text-stone-550 font-light text-sm leading-relaxed mt-4">
              {t("services.comp_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comprehensiveServices.map((comp, idx) => (
              <div key={idx} className="card-2d bg-white p-8 h-full flex flex-col justify-between">
                <div className="text-left">
                  <h3 className="font-serif text-lg text-primary mb-3 font-medium">
                    {t(comp.titleKey)}
                  </h3>
                  <p className="text-stone-550 font-light text-xs leading-relaxed">
                    {t(comp.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Process Workflow */}
      <section className="bg-white py-24 lg:py-32 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              {t("services.process_label")}
            </span>
            <h2 className="text-3xl font-serif text-primary font-medium">
              {t("services.process_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative bg-white border border-stone-200 p-8 h-full text-left">
                <span className="font-serif text-4xl font-light text-accent/20 block mb-6">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg text-primary mb-3 font-medium">
                  {t(step.nameKey)}
                </h3>
                <p className="text-stone-550 font-light text-xs leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sand-light py-24 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-primary mb-6 font-medium">
            {t("trust.title")}
          </h2>
          <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
            {t("services.cta_desc")}
          </p>
          <Link href="/contact" className="btn-primary">
            {t("services.cta_btn")}
          </Link>
        </div>
      </section>
    </div>
  );
}
