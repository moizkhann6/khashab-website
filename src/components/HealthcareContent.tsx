"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HealthcareContent() {
  const { t } = useLanguage();

  const complianceStandards = [
    {
      title: t("nav.home") === "الرئيسية" ? "أسطح مضادة للميكروبات" : "Anti-Microbial Surfaces",
      description: t("nav.home") === "الرئيسية" ? "معالجة برقائق خشبية طبية وتشطيبات تقضي بنشاط على نمو البكتيريا والفطريات والفيروسات. مجربة للتحمل ضد المعقمات الطبية." : "Treated with medical-grade antimicrobial laminates and finishes that actively suppress the growth of bacteria, fungi, and viruses. Tested and proven to withstand regular exposure to clinical disinfectants.",
      benefit: t("nav.home") === "الرئيسية" ? "تقلل العدوى المكتسبة في المستشفيات وتضمن سهولة التنظيف والتعقيم." : "Reduces hospital-acquired infections (HAIs) and ensures easy cleaning protocols.",
    },
    {
      title: t("nav.home") === "الرئيسية" ? "مقاومة حريق معتمدة" : "Certified Fire Resistance",
      description: t("nav.home") === "الرئيسية" ? "مصنعة بقلوب معدنية وعلاجات خشبية مقاومة للحريق، تقدم تصنيفات من ٣٠ إلى ١٢٠ دقيقة. متوافقة تماماً مع لوائح الدفاع المدني وساسو." : "Manufactured with mineral cores and fire-retardant timber treatments, offering certified ratings from 30 up to 120 minutes. Fully compliant with SASO and Saudi Civil Defense regulations.",
      benefit: t("nav.home") === "الرئيسية" ? "تضمن مسارات إخلاء آمنة في ممرات المستشفيات والغرف الطبية." : "Ensures evacuation safety paths in hospital corridors and clinical chambers.",
    },
    {
      title: t("nav.home") === "الرئيسية" ? "مقاومة الرطوبة والانتفاخ" : "Moisture & Humidity Resistance",
      description: t("nav.home") === "الرئيسية" ? "مصممة باستخدام نوى البولي يوريثين عالية الكثافة ولاصق مقاوم للماء يمنع التمدد أو التمزق في البيئات عالية الرطوبة." : "Constructed using high-density polyurethane cores and water-resistant adhesives. Formulated specifically to prevent swelling, warping, or delamination in high-humidity areas like clinical kitchens or utility rooms.",
      benefit: t("nav.home") === "الرئيسية" ? "تطيل عمر المنتجات تحت ظروف التطهير والغسيل الشاملة." : "Extends product lifespan under intense sanitization washdowns.",
    },
    {
      title: t("nav.home") === "الرئيسية" ? "تصميم مفاصل خالي من الأتربة" : "Dust-Free Joint Design",
      description: t("nav.home") === "الرئيسية" ? "نجارة مستوية مخصصة تلغي الأخاديد العميقة حيث يمكن أن يستقر الغبار والمواد العضوية. جميع المقابض مدمجة ومستوية لمنع تراكم الأتربة." : "Custom flush joinery designed to eliminate deep grooves and recesses where dust and organic matter could settle. All cabinet handles are integrated or flush to prevent infection nesting.",
      benefit: t("nav.home") === "الرئيسية" ? "تحافظ على معايير النظافة المطلقة في غرف العمليات الجراحية والغرف النظيفة." : "Maintains absolute hygiene standards in surgery theaters and cleanrooms.",
    },
  ];

  const medicalProducts = [
    {
      name: t("nav.home") === "الرئيسية" ? "أبواب سريرية معتمدة من وزارة الصحة" : "MOH-Spec Clinical Doors",
      use: t("nav.home") === "الرئيسية" ? "غرف المرضى، الممرات، العناية المركزة" : "Patient rooms, corridors, ICU",
      specs: t("nav.home") === "الرئيسية" ? "إطار خشب صلب، خيار تبطين رصاص، صفائح حماية مخصصة، زجاج مراقبة مستوي بالكامل." : "Solid wood frame, lead-lined option, custom kickplates, integrated observation glass with flush seals.",
    },
    {
      name: t("nav.home") === "الرئيسية" ? "أبواب أشعة مبطنة بالرصاص" : "Lead-Lined Radiology Doors",
      use: t("nav.home") === "الرئيسية" ? "غرف الأشعة السينية والتشخيص والمغناطيس" : "X-Ray, CT Scan, MRI rooms",
      specs: t("nav.home") === "الرئيسية" ? "سمك الرصاص الداخلي من ١ ملم إلى ٣ ملم، مفصلات ثقيلة الحمل، إغلاق حوافي محكم." : "Internal lead sheet thickness from 1mm to 3mm, heavy-duty pivots, hermetic edge sealings.",
    },
    {
      name: t("nav.home") === "الرئيسية" ? "خزائن وتجهيزات مختبرات معقمة" : "Clinical Casework & Cabinetry",
      use: t("nav.home") === "الرئيسية" ? "المختبرات، الصيدليات، أجنحة العلاج" : "Laboratories, pharmacies, treatment suites",
      specs: t("nav.home") === "الرئيسية" ? "قلب معاكس بحري، طلاءات مقاومة للمواد الكيميائية والميكروبات، غلق ناعم للأبراج." : "Marine-ply core, chemical-resistant anti-microbial coatings, soft-close heavy hinges, dust-proof seals.",
    },
    {
      name: t("nav.home") === "الرئيسية" ? "تكسية حوائط مضادة للميكروبات" : "Anti-Microbial Wall Cladding",
      use: t("nav.home") === "الرئيسية" ? "صالات غرف العمليات، ممرات المستشفيات" : "Operation theater lobbies, corridor corridors",
      specs: t("nav.home") === "الرئيسية" ? "رقائق مقاومة للصدمات، وصلات سلسة، طبقة خلفية مقاومة للرطوبة، تشطيب سهل التطهير." : "High-impact laminates, seamless joints, moisture-proof barrier backing, easy sanitize veneer finish.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-sand-light py-20 lg:py-28 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            {t("health.label")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif text-primary leading-tight max-w-3xl font-medium">
            {t("nav.home") === "الرئيسية" ? "أعمال خشبية وأبواب متوافقة مع وزارة الصحة السعودية" : "Saudi MOH Compliant Woodwork & Doors"}
          </h1>
          <p className="mt-4 text-stone-500 font-light text-base max-w-xl">
            {t("nav.home") === "الرئيسية" ? "حلول أعمال خشبية دقيقة مصممة للبيئات السريرية والمختبرات والعمليات الجراحية التي تتطلب نظافة وسلامة مطلقة." : "Precision-engineered woodwork solutions designed for clinical, laboratory, and surgical environments requiring absolute hygiene and safety compliance."}
          </p>
        </div>
      </section>

      {/* Compliance Standards Detail */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              {t("journey.standard_label")}
            </span>
            <h2 className="text-3xl font-serif text-primary font-medium">
              {t("nav.home") === "الرئيسية" ? "مواصفات الرعاية الصحية الأساسية" : "Core Healthcare Specifications"}
            </h2>
            <p className="text-stone-500 font-light text-sm mt-2">
              {t("nav.home") === "الرئيسية" ? "تم اختبار وتصنيع جميع منتجات الرعاية الصحية من خشب لتتوافق مع معايير المستشفيات العالمية ووزارة الصحة السعودية." : "All KhashabSA healthcare products are tested and manufactured to align with standard international hospital designs and local Saudi Ministry of Health guidelines."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {complianceStandards.map((std, i) => (
              <div key={i} className="border border-stone-200 p-8 lg:p-10 hover:border-accent transition-all duration-200 bg-white text-left">
                <h3 className="font-serif text-xl text-primary mb-4 flex items-center font-medium">
                  <span className="w-1.5 h-6 bg-accent mr-3 block shrink-0"></span>
                  {std.title}
                </h3>
                <p className="text-stone-600 font-light text-sm leading-relaxed mb-6">
                  {std.description}
                </p>
                <div className="bg-stone-50 p-4 border-l-2 border-stone-300">
                  <span className="text-[10px] font-bold uppercase text-stone-500 tracking-wider block mb-1">
                    {t("nav.home") === "الرئيسية" ? "الفائدة التشغيلية للمنشأة" : "Operational Benefit"}
                  </span>
                  <p className="text-stone-600 font-light text-xs leading-relaxed">
                    {std.benefit}
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
              {t("services.label")}
            </span>
            <h2 className="text-3xl font-serif text-primary font-medium">
              {t("nav.home") === "الرئيسية" ? "مصفوفة المنتجات الطبية المعالجة" : "Healthcare-Grade Product Matrix"}
            </h2>
          </div>

          {/* 2D Responsive Table/List */}
          <div className="overflow-x-auto border border-stone-200 bg-white rounded-none">
            <table className="min-w-full divide-y divide-stone-200 text-left text-sm font-light">
              <thead className="bg-stone-50 text-stone-700 text-xs font-semibold uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left">{t("nav.home") === "الالرئيسية" ? "الفئة" : "Product Category"}</th>
                  <th scope="col" className="px-6 py-4 text-left">{t("nav.home") === "الرئيسية" ? "التطبيق النموذجي" : "Typical Application"}</th>
                  <th scope="col" className="px-6 py-4 text-left">{t("nav.home") === "الرئيسية" ? "التفاصيل الهندسية" : "Technical Details"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-600">
                {medicalProducts.map((prod, i) => (
                  <tr key={i} className="hover:bg-stone-50/50 transition-colors duration-150 text-left">
                    <td className="px-6 py-4 font-serif text-primary font-medium text-base text-left">{prod.name}</td>
                    <td className="px-6 py-4 text-xs font-semibold text-accent uppercase tracking-wider text-left">{prod.use}</td>
                    <td className="px-6 py-4 text-xs leading-relaxed font-light text-stone-500 max-w-xs text-left">{prod.specs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Certification Note */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
            {t("about.standards_label")}
          </span>
          <h2 className="text-3xl font-serif text-primary mb-6 font-medium">
            {t("about.standards_title")}
          </h2>
          <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
            {t("about.standards_desc")}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              {t("nav.home") === "الرئيسية" ? "طلب استشارة هندسية" : "Request Spec Consultation"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
