"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            {t("nav.about")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary leading-tight max-w-2xl font-medium">
            {t("about.title")}
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
                <span className="font-serif text-6xl lg:text-7xl font-light text-primary block leading-none text-left">
                  {t("about.milestone_1_year")}
                </span>
                <span className="text-xs uppercase font-bold text-stone-400 tracking-wider block mt-2 text-left">
                  {t("about.milestone_1_title")}
                </span>
              </div>
            </div>

            {/* Narrative text */}
            <div className="lg:col-span-8 space-y-8 text-left">
              <h2 className="text-2xl lg:text-3xl font-serif text-primary font-medium">
                {t("about.narrative_title")}
              </h2>
              <p className="text-stone-600 font-light text-base leading-relaxed">
                {t("about.narrative_1")}
              </p>
              <p className="text-stone-600 font-light text-base leading-relaxed">
                {t("about.narrative_2")}
              </p>
              <p className="text-stone-600 font-light text-base leading-relaxed">
                {t("about.narrative_3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, & Goals Grid */}
      <section className="bg-sand-light py-24 lg:py-32 border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Message/Mission */}
            <div className="card-2d p-8 lg:p-10 bg-white">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                {t("contact.form_title").split(" ")[0]} {t("footer.navigation")}
              </span>
              <h3 className="text-xl lg:text-2xl font-serif text-primary mb-4 font-medium">
                {t("about.val_2_title")}
              </h3>
              <p className="text-stone-550 font-light text-sm leading-relaxed">
                {t("about.val_2_desc")}
              </p>
            </div>

            {/* Vision */}
            <div className="card-2d p-8 lg:p-10 bg-white">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                {t("health.label")}
              </span>
              <h3 className="text-xl lg:text-2xl font-serif text-primary mb-4 font-medium">
                {t("health.intro_title")}
              </h3>
              <p className="text-stone-550 font-light text-sm leading-relaxed mb-4">
                {t("health.intro_desc_1")}
              </p>
            </div>

            {/* Goals */}
            <div className="card-2d p-8 lg:p-10 bg-white">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                {t("about.standards_label")}
              </span>
              <h3 className="text-xl lg:text-2xl font-serif text-primary mb-4 font-medium">
                {t("about.standards_title")}
              </h3>
              <p className="text-stone-550 font-light text-sm leading-relaxed">
                {t("about.standards_desc")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Us & Certifications */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Why Us */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block">
                {t("about.val_1_title")}
              </span>
              <h2 className="text-3xl font-serif text-primary font-medium">
                {t("about.val_3_title")}
              </h2>
              <p className="text-stone-500 font-light text-sm leading-relaxed">
                {t("about.val_3_desc")}
              </p>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-6 space-y-6 bg-stone-50 p-8 border border-stone-200 text-left">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                {t("about.standards_label")}
              </span>
              <h3 className="text-2xl font-serif text-primary font-medium">
                {t("about.standards_title")}
              </h3>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                {t("about.standards_desc")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sand-light py-24 text-center border-t border-stone-100">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-primary mb-6 font-medium">
            {t("trust.title")}
          </h2>
          <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
            {t("trust.desc")}
          </p>
          <Link href="/contact" className="btn-primary">
            {t("nav.contact")}
          </Link>
        </div>
      </section>
    </div>
  );
}
