"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useDb } from "@/context/DbContext";

export default function HealthcareContent() {
  const { t } = useLanguage();
  const { healthcarePageBg } = useDb();

  const complianceStandards = [
    {
      titleKey: "health.std_1_title",
      descKey: "health.std_1_desc",
      benefitKey: "health.std_1_benefit",
    },
    {
      titleKey: "health.std_2_title",
      descKey: "health.std_2_desc",
      benefitKey: "health.std_2_benefit",
    },
    {
      titleKey: "health.std_3_title",
      descKey: "health.std_3_desc",
      benefitKey: "health.std_3_benefit",
    },
    {
      titleKey: "health.std_4_title",
      descKey: "health.std_4_desc",
      benefitKey: "health.std_4_benefit",
    },
  ];

  const medicalProducts = [
    { nameKey: "health.prod_1_name", useKey: "health.prod_1_use", specsKey: "health.prod_1_specs" },
    { nameKey: "health.prod_2_name", useKey: "health.prod_2_use", specsKey: "health.prod_2_specs" },
    { nameKey: "health.prod_3_name", useKey: "health.prod_3_use", specsKey: "health.prod_3_specs" },
    { nameKey: "health.prod_4_name", useKey: "health.prod_4_use", specsKey: "health.prod_4_specs" },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section 
        className="relative py-28 lg:py-36 bg-cover bg-center border-b border-stone-900 overflow-hidden"
        style={{ backgroundImage: `url('${healthcarePageBg}')` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-stone-950/60 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-left text-white">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            {t("health.page_label")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight max-w-3xl font-medium">
            {t("health.page_title")}
          </h1>
          <p className="mt-4 text-stone-300 font-light text-base max-w-xl">
            {t("health.page_subtitle")}
          </p>
        </div>
      </section>

      {/* Compliance Standards Detail */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              {t("health.specs_section_label")}
            </span>
            <h2 className="text-3xl font-serif text-primary font-medium">
              {t("health.specs_section_title")}
            </h2>
            <p className="text-stone-500 font-light text-sm mt-2">
              {t("health.specs_section_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {complianceStandards.map((std, i) => (
              <div key={i} className="border border-stone-200 p-8 lg:p-10 hover:border-accent transition-all duration-200 bg-white text-left">
                <h3 className="font-serif text-xl text-primary mb-4 flex items-center font-medium">
                  <span className="w-1.5 h-6 bg-accent mr-3 block shrink-0"></span>
                  {t(std.titleKey)}
                </h3>
                <p className="text-stone-600 font-light text-sm leading-relaxed mb-6">
                  {t(std.descKey)}
                </p>
                <div className="bg-stone-50 p-4 border-l-2 border-stone-300">
                  <span className="text-[10px] font-bold uppercase text-stone-500 tracking-wider block mb-1">
                    {t("health.benefit_label")}
                  </span>
                  <p className="text-stone-600 font-light text-xs leading-relaxed">
                    {t(std.benefitKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specification Table */}
      <section className="bg-sand-light py-24 lg:py-32 border-t border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              {t("health.catalog_label")}
            </span>
            <h2 className="text-3xl font-serif text-primary font-medium">
              {t("health.catalog_title")}
            </h2>
          </div>

          <div className="overflow-x-auto border border-stone-200 bg-white rounded-none">
            <table className="min-w-full divide-y divide-stone-200 text-left text-sm font-light">
              <thead className="bg-stone-50 text-stone-700 text-xs font-semibold uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4">{t("health.table_col_1")}</th>
                  <th scope="col" className="px-6 py-4">{t("health.table_col_2")}</th>
                  <th scope="col" className="px-6 py-4">{t("health.table_col_3")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-600">
                {medicalProducts.map((prod, i) => (
                  <tr key={i} className="hover:bg-stone-50/50 transition-colors duration-150">
                    <td className="px-6 py-4 font-serif text-primary font-medium text-base">{t(prod.nameKey)}</td>
                    <td className="px-6 py-4 text-xs font-semibold text-accent uppercase tracking-wider">{t(prod.useKey)}</td>
                    <td className="px-6 py-4 text-xs leading-relaxed font-light text-stone-500 max-w-xs">{t(prod.specsKey)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certification CTA */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            {t("about.cert_label")}
          </span>
          <h2 className="text-3xl font-serif text-primary mb-6 font-medium">
            {t("health.cta_title")}
          </h2>
          <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
            {t("about.cert_desc")}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              {t("health.cta_btn")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
