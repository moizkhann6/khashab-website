"use client";

import QuoteForm from "@/components/QuoteForm";
import ContactPartners from "@/components/ContactPartners";
import { useLanguage } from "@/context/LanguageContext";
import { useDb } from "@/context/DbContext";

export default function ContactContent() {
  const { t } = useLanguage();
  const { contactBg } = useDb();

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section 
        className="relative py-28 lg:py-36 bg-cover bg-center border-b border-stone-900 overflow-hidden"
        style={{ backgroundImage: `url('${contactBg}')` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-stone-950/60 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-left text-white">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            {t("contact.label")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-white leading-tight max-w-2xl font-medium">
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
                  {t("contact.hq_label")}
                </span>
                <h3 className="font-serif text-2xl text-primary mb-4 font-medium">
                  {t("contact.info_title")}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed mb-4 whitespace-pre-line">
                  {t("contact.address")}
                </p>
                <div className="border-t border-stone-100 pt-4 flex flex-col space-y-2 text-xs font-light text-stone-500">
                  <span><strong className="text-primary font-medium">{t("contact.cr_label")}:</strong> 1010484920</span>
                  <span><strong className="text-primary font-medium">{t("contact.vat_label")}:</strong> 300482930200003</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-3">
                  {t("contact.hours_label")}
                </span>
                <h3 className="font-serif text-2xl text-primary mb-4 font-medium">
                  {t("contact.hours_title")}
                </h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed whitespace-pre-line">
                  {t("contact.hours_text")}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-3">
                  {t("contact.direct_label")}
                </span>
                <h3 className="font-serif text-2xl text-primary mb-4 font-medium">
                  {t("contact.direct_title")}
                </h3>
                <div className="space-y-3 text-sm font-light text-stone-600">
                  <p>
                    <span className="block text-xs font-semibold text-stone-400 uppercase">{t("contact.phone_label")}</span>
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
              {t("contact.networks_label")}
            </span>
            <h2 className="text-3xl font-serif text-primary font-medium">
              {t("contact.networks_title")}
            </h2>
            <p className="text-stone-500 font-light text-sm mt-4">
              {t("contact.networks_desc")}
            </p>
          </div>

          <ContactPartners />
        </div>
      </section>
    </div>
  );
}
