"use client";

import QuoteForm from "@/components/QuoteForm";
import ContactPartners from "@/components/ContactPartners";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            {t("contact.label")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary leading-tight max-w-2xl font-medium">
            {t("contact.title")}
          </h1>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-12 text-left">
              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-3">
                  {t("footer.hq")}
                </span>
                <h3 className="font-serif text-2xl text-primary mb-4 font-medium">
                  {t("contact.info_title")}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed mb-4 whitespace-pre-line">
                  {t("contact.address")}
                </p>
                <div className="border-t border-stone-100 pt-4 flex flex-col space-y-2 text-xs font-light text-stone-500">
                  <span><strong className="text-primary font-medium">{t("footer.cr")}:</strong> 1010484920</span>
                  <span><strong className="text-primary font-medium">{t("footer.vat")}:</strong> 300482930200003</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-3">
                  {t("footer.hq").split(" ")[0]} {t("footer.navigation")}
                </span>
                <h3 className="font-serif text-2xl text-primary mb-4 font-medium">
                  {t("about.Milestone_2_title") || "Operating Times"}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">
                  {t("nav.home") === "الرئيسية" ? "من السبت إلى الخميس: ٨:٠٠ صباحاً — ٥:٠٠ مساءً" : "Saturday to Thursday: 8:00 AM — 5:00 PM"}<br />
                  {t("nav.home") === "الرئيسية" ? "الجمعة: مغلق" : "Friday: Closed"}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-3">
                  {t("contact.form_title").split(" ")[0]} {t("nav.contact").split(" ")[0]}
                </span>
                <h3 className="font-serif text-2xl text-primary mb-4 font-medium">
                  {t("footer.contact")}
                </h3>
                <div className="space-y-3 text-sm font-light text-stone-600">
                  <p>
                    <span className="block text-xs font-semibold text-stone-400 uppercase">{t("contact.input_phone").split(" ")[0]}</span>
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
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-4 text-left">
                {t("contact.form_title")}
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
              {t("networks.label")}
            </span>
            <h2 className="text-3xl font-serif text-primary font-medium">
              {t("networks.title")}
            </h2>
            <p className="text-stone-500 font-light text-sm mt-4">
              {t("networks.desc")}
            </p>
          </div>

          {/* Elegant 2D minimalist client logo cards */}
          <ContactPartners />
        </div>
      </section>
    </div>
  );
}
