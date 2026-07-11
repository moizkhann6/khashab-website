"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useDb } from "@/context/DbContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const { aboutBg } = useDb();

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section 
        className="relative py-28 lg:py-36 bg-cover bg-center border-b border-stone-900 overflow-hidden"
        style={{ backgroundImage: `url('${aboutBg}')` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-stone-950/60 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-left text-white">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            {t("about.label")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight max-w-2xl font-medium">
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
            
            {/* Mission */}
            <div className="card-2d p-8 lg:p-10 bg-white">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                {t("about.mission_label")}
              </span>
              <h3 className="text-xl lg:text-2xl font-serif text-primary mb-4 font-medium">
                {t("about.mission_title")}
              </h3>
              <p className="text-stone-550 font-light text-sm leading-relaxed">
                {t("about.mission_desc")}
              </p>
            </div>

            {/* Vision */}
            <div className="card-2d p-8 lg:p-10 bg-white">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                {t("about.vision_label")}
              </span>
              <h3 className="text-xl lg:text-2xl font-serif text-primary mb-4 font-medium">
                {t("about.vision_title")}
              </h3>
              <p className="text-stone-550 font-light text-sm leading-relaxed">
                {t("about.vision_desc")}
              </p>
            </div>

            {/* Goals */}
            <div className="card-2d p-8 lg:p-10 bg-white">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4">
                {t("about.goals_label")}
              </span>
              <h3 className="text-xl lg:text-2xl font-serif text-primary mb-4 font-medium">
                {t("about.goals_title")}
              </h3>
              <ul className="text-stone-550 font-light text-sm leading-relaxed space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold shrink-0">—</span>
                  {t("about.goals_1")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold shrink-0">—</span>
                  {t("about.goals_2")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold shrink-0">—</span>
                  {t("about.goals_3")}
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
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block">
                {t("about.why_label")}
              </span>
              <h2 className="text-3xl font-serif text-primary font-medium">
                {t("about.why_title")}
              </h2>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-serif text-lg text-primary mb-2 font-medium">{t("about.why_1_title")}</h4>
                  <p className="text-stone-500 font-light text-xs leading-relaxed">{t("about.why_1_desc")}</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary mb-2 font-medium">{t("about.why_2_title")}</h4>
                  <p className="text-stone-500 font-light text-xs leading-relaxed">{t("about.why_2_desc")}</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary mb-2 font-medium">{t("about.why_3_title")}</h4>
                  <p className="text-stone-500 font-light text-xs leading-relaxed">{t("about.why_3_desc")}</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary mb-2 font-medium">{t("about.why_4_title")}</h4>
                  <p className="text-stone-500 font-light text-xs leading-relaxed">{t("about.why_4_desc")}</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-6 space-y-6 bg-stone-50 p-8 border border-stone-200 text-left">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                {t("about.cert_label")}
              </span>
              <h3 className="text-2xl font-serif text-primary font-medium">
                {t("about.cert_title")}
              </h3>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                {t("about.cert_desc")}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="border border-stone-300 text-stone-600 font-semibold text-[10px] tracking-wider uppercase px-3 py-2 bg-white">
                  ISO 9001:2015
                </span>
                <span className="border border-stone-300 text-stone-600 font-semibold text-[10px] tracking-wider uppercase px-3 py-2 bg-white">
                  GMP {t("about.standards_label")}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sand-light py-24 text-center border-t border-stone-100">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-primary mb-6 font-medium">
            {t("about.cta_title")}
          </h2>
          <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
            {t("about.cta_desc")}
          </p>
          <Link href="/contact" className="btn-primary">
            {t("about.cta_btn")}
          </Link>
        </div>
      </section>
    </div>
  );
}
