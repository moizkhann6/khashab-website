"use client";

import Link from "next/link";
import ServicesList from "@/components/ServicesList";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesContent() {
  const { t } = useLanguage();

  const comprehensiveServices = [
    { 
      title: t("nav.home") === "الرئيسية" ? "الديكورات الداخلية والخارجية" : "Interior & Exterior Decorations", 
      desc: t("nav.home") === "الرئيسية" ? "تكسية الجدران الخشبية المعمارية الفاخرة، والأسقف المستعارة، وتجهيزات المداخل." : "Premium architectural wooden wall paneling, ceiling grids, slatted features, and entrance claddings." 
    },
    { 
      title: t("nav.home") === "الرئيسية" ? "المعارض وصالات العرض" : "Exhibitions & Showrooms", 
      desc: t("nav.home") === "الرئيسية" ? "أجنحة العرض الخشبية المتطورة ومنصات عرض المنتجات المصممة للمعارض والمحافل الكبرى." : "Sophisticated wooden booths and product showcase stands engineered for high-traffic presentation." 
    },
    { 
      title: t("nav.home") === "الرئيسية" ? "المطاعم والمقاهي" : "Restaurants & Cafes", 
      desc: t("nav.home") === "الرئيسية" ? "طاولات مخصصة متينة، كاونترات استقبال، تكسية جدران، وجلسات طعام مصنوعة بمواصفات الضيافة." : "Durable custom tables, counters, wall cladding, and booth seating crafted to hospitality specifications." 
    },
    { 
      title: t("nav.home") === "الرئيسية" ? "مناطق ألعاب الأطفال" : "Children's Play Areas", 
      desc: t("nav.home") === "الرئيسية" ? "هياكل خشبية آمنة ومصقولة وغير سامة، بيوت لعب وأثاث نشاط معياري للأطفال." : "Sanded, non-toxic, safe wooden structures, playhouses, and modular activity furniture." 
    },
    { 
      title: t("nav.home") === "الرئيسية" ? "العيادات والمختبرات الطبية" : "Clinics & Laboratories", 
      desc: t("nav.home") === "الرئيسية" ? "تجهيزات خشبية معقمة وغير مسامية، ألواح صحية، وخزائن علاج مخصصة للمنشآت الطبية." : "Sterile, non-porous chemical casework, hygiene panels, and custom treatment cabinets." 
    },
    { 
      title: t("nav.home") === "الرئيسية" ? "المنازل والفيلات الفاخرة" : "Premium Homes & Villas", 
      desc: t("nav.home") === "الرئيسية" ? "باقات تجهيز خشبية منزلية كاملة تشمل الأبواب الفاخرة، المطابخ، وخزائن الملابس." : "Complete bespoke home fit-out packages encompassing doors, closets, kitchens, and wall decor." 
    },
  ];

  const steps = [
    { 
      number: "01", 
      name: t("nav.home") === "الرئيسية" ? "استشارات CAD والرسومات" : "CAD Consultation", 
      desc: t("nav.home") === "الرئيسية" ? "يقوم مكتبنا الهندسي بترجمة المخططات المعمارية إلى رسومات ورش عمل دقيقة." : "Our engineering office translates architectural designs into precise CAD shop drawings." 
    },
    { 
      number: "02", 
      name: t("nav.home") === "الرئيسية" ? "اختيار المواد الفاخرة" : "Material Selection", 
      desc: t("nav.home") === "الرئيسية" ? "اختر من بين مجموعة من الأخشاب الصلبة الفاخرة المجففة لتناسب الرطوبة المحلية." : "Select from curated, sustainably-sourced premium hardwoods dried to local relative humidity specs." 
    },
    { 
      number: "03", 
      name: t("nav.home") === "الرئيسية" ? "خرط CNC الدقيق" : "Precision CNC", 
      desc: t("nav.home") === "الرئيسية" ? "يضمن الفرم بالكمبيوتر دقة أبعاد مطلقة للألواح والوصلات الخشبية." : "Computer-controlled milling ensures absolute dimensional accuracy for all custom panels and joins." 
    },
    { 
      number: "04", 
      name: t("nav.home") === "الرئيسية" ? "التجميع والتشطيب اليدوي" : "Assembly & Finish", 
      desc: t("nav.home") === "الرئيسية" ? "يقوم الحرفيون بالتجميع النهائي، السنفرة، وتطبيق الزيوت الطبيعية الحامية." : "Traditional carpenters handle final assembly, sandings, and hand-oil applications." 
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            {t("services.label")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary leading-tight max-w-2xl text-left font-medium">
            {t("nav.home") === "الرئيسية" ? "أعمال خشبية مخصصة مصممة حسب الطلب" : "Bespoke Woodwork Engineered to Specification"}
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
              {t("nav.home") === "الرئيسية" ? "أين نطبق مهاراتنا" : "Where We Apply Our Craft"}
            </span>
            <h2 className="text-3xl font-serif text-primary font-medium">
              {t("nav.home") === "الرئيسية" ? "خدمات التجهيز الخشبي الشاملة" : "Comprehensive Fitting & Fit-Out Services"}
            </h2>
            <p className="text-stone-550 font-light text-sm leading-relaxed mt-4">
              {t("nav.home") === "الرئيسية" ? "نصمم وننشئ تجهيزات خشبية لمجموعة واسعة من القطاعات لضمان التميز التجاري والسكني." : "We design and construct wooden installations for a broad range of sectors, ensuring excellence in both commercial scale and private aesthetics."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comprehensiveServices.map((comp, idx) => (
              <div key={idx} className="card-2d bg-white p-8 h-full flex flex-col justify-between">
                <div className="text-left">
                  <h3 className="font-serif text-lg text-primary mb-3 font-medium">
                    {comp.title}
                  </h3>
                  <p className="text-stone-550 font-light text-xs leading-relaxed">
                    {comp.desc}
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
              {t("footer.hq").split(" ")[0]} {t("footer.navigation")}
            </span>
            <h2 className="text-3xl font-serif text-primary font-medium">
              {t("nav.home") === "الرئيسية" ? "كيف نقدم حلولاً خشبية متكاملة" : "How We Deliver Custom Bespoke Solutions"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative bg-white border border-stone-200 p-8 h-full text-left">
                <span className="font-serif text-4xl font-light text-accent/20 block mb-6">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg text-primary mb-3 font-medium">
                  {step.name}
                </h3>
                <p className="text-stone-550 font-light text-xs leading-relaxed">
                  {step.desc}
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
            {t("nav.home") === "الرئيسية" ? "هل تحتاج لعينات مواد، مواصفات معمارية، أو رسومات ورشة عمل لمناقصتك؟" : "Do you need material samples, architectural specifications, or custom shop drawings for your tender?"}
          </p>
          <Link href="/contact" className="btn-primary">
            {t("nav.home") === "الرئيسية" ? "طلب استشارة للمواصفات" : "Request Spec Consultation"}
          </Link>
        </div>
      </section>
    </div>
  );
}
