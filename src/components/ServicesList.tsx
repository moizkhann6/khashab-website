"use client";

import { useDb } from "@/context/DbContext";
import { useLanguage } from "@/context/LanguageContext";

// Bilingual specifications mapping
const specificationsTranslations: Record<string, Record<string, string>> = {
  en: {
    "Timber & Core Specs": "Timber & Core Specs",
    "Performance Details": "Performance Details",
    "Solid Walnut": "Solid Walnut",
    "Oak Veneer": "Oak Veneer",
    "Teakwood": "Teakwood",
    "Fire-Rated Core": "Fire-Rated Core",
    "Acoustic sealing": "Acoustic sealing",
    "Heavy-duty hidden pivots": "Heavy-duty hidden pivots",
    "SASO certified": "SASO certified",
    "Mahogany": "Mahogany",
    "Iroko": "Iroko",
    "Double-glazed ready": "Double-glazed ready",
    "Weatherproof sealants": "Weatherproof sealants",
    "Thermal insulation": "Thermal insulation",
    "Marine plywood core": "Marine plywood core",
    "Premium veneers": "Premium veneers",
    "Matte lacquers": "Matte lacquers",
    "Soft-close hardware": "Soft-close hardware",
    "Moisture-resistant coating": "Moisture-resistant coating",
    "Tailored organizers": "Tailored organizers",
    "Smoked oak veneer": "Smoked oak veneer",
    "Fabric-lined drawers": "Fabric-lined drawers",
    "Lacquered panels": "Lacquered panels",
    "Seamless sliding rails": "Seamless sliding rails",
    "Built-in drawer systems": "Built-in drawer systems",
    "Modular framing": "Modular framing",
    "Cedar wood": "Cedar wood",
    "Eucalyptus veneer": "Eucalyptus veneer",
    "Leather lining": "Leather lining",
    "Hidden security safes": "Hidden security safes",
    "Custom glass display doors": "Custom glass display doors",
    "Anti-dust seals": "Anti-dust seals",
    "American Walnut": "American Walnut",
    "Ash Wood": "Ash Wood",
    "Premium upholstery backing": "Premium upholstery backing",
    "Floating bed frames": "Floating bed frames",
    "Integrated bedside panels": "Integrated bedside panels",
    "Touch-to-open drawers": "Touch-to-open drawers",
    "Brushed metal integration": "Brushed metal integration",
    "Hidden power pathways": "Hidden power pathways",
    "Acoustic absorption options": "Acoustic absorption options",
    "Durable scratch-proof surface oils": "Durable scratch-proof surface oils",
    "Oak": "Oak",
    "Ash": "Ash",
    "Maple": "Maple",
    "Exotic veneers": "Exotic veneers",
    "Precision hand-finishing": "Precision hand-finishing",
    "Custom stains & coloring": "Custom stains & coloring",
    "Sustainable sourcing": "Sustainable sourcing"
  },
  ar: {
    "Timber & Core Specs": "مواصفات الخشب والقلب",
    "Performance Details": "تفاصيل الأداء الفني",
    "Solid Walnut": "خشب جوز صلب",
    "Oak Veneer": "قشرة بلوط طبيعي",
    "Teakwood": "خشب تيك طبيعي",
    "Fire-Rated Core": "قلب مقاوم للحريق معتمد",
    "Acoustic sealing": "عزل صوتي متكامل",
    "Heavy-duty hidden pivots": "مفصلات مخفية ثقيلة الحمل",
    "SASO certified": "معتمد من SASO",
    "Mahogany": "خشب ماهوجني",
    "Iroko": "خشب إيروكو متين",
    "Double-glazed ready": "جاهز للزجاج المزدوج",
    "Weatherproof sealants": "مقاوم للعوامل الجوية والغبار",
    "Thermal insulation": "عزل حراري ممتاز",
    "Marine plywood core": "قلب معاكس بحري مقاوم للمياه",
    "Premium veneers": "قشرات خشبية فاخرة",
    "Matte lacquers": "طلاءات مطفأة فاخرة",
    "Soft-close hardware": "مفصلات غلق ناعم ذكي",
    "Moisture-resistant coating": "طلاء مقاوم للرطوبة والمياه",
    "Tailored organizers": "منظمات داخلية مصممة",
    "Smoked oak veneer": "قشرة بلوط مدخن",
    "Fabric-lined drawers": "أدراج مبطنة بالقماش الفاخر",
    "Lacquered panels": "ألواح مصقولة فاخرة",
    "Seamless sliding rails": "سكك انزلاق سلسة ومخفية",
    "Built-in drawer systems": "أنظمة أدراج مدمجة بالكامل",
    "Modular framing": "إطارات تركيب معيارية",
    "Cedar wood": "خشب الأرز الطبيعي",
    "Eucalyptus veneer": "قشرة خشب اليوكالبتوس",
    "Leather lining": "تبطين جلدي داخلي فاخر",
    "Hidden security safes": "خزائن أمان سرية مدمجة",
    "Custom glass display doors": "أبواب زجاجية مخصصة للعرض",
    "Anti-dust seals": "حواجز مانعة للأتربة والغبار",
    "American Walnut": "جوز أمريكي فاخر",
    "Ash Wood": "خشب الرماد المتين",
    "Premium upholstery backing": "تبطين خلفي فاخر للمساند",
    "Floating bed frames": "إطارات سرير عائمة عصرية",
    "Integrated bedside panels": "ألواح جانبية مدمجة للسرير",
    "Touch-to-open drawers": "أدراج تفتح باللمس",
    "Brushed metal integration": "دمج تفاصيل معدنية مصقولة",
    "Hidden power pathways": "مسارات كابلات كهربائية مخفية",
    "Acoustic absorption options": "خيارات عزل وامتصاص الصوت",
    "Durable scratch-proof surface oils": "زيوت حماية مقاومة للخدش",
    "Oak": "خشب بلوط طبيعي",
    "Ash": "خشب الرماد",
    "Maple": "خشب قيقب فاخر",
    "Exotic veneers": "قشرات خشبية نادرة",
    "Precision hand-finishing": "تشطيبات يدوية فائقة الدقة",
    "Custom stains & coloring": "صبغات وألوان مخصصة",
    "Sustainable sourcing": "مصادر توريد خشب مستدامة"
  }
};

// Static details lists that match the category IDs
const staticSpecsMap: Record<string, { materials: string[]; features: string[] }> = {
  doors: {
    materials: ["Solid Walnut", "Oak Veneer", "Teakwood", "Fire-Rated Core"],
    features: ["Acoustic sealing", "Heavy-duty hidden pivots", "SASO certified"],
  },
  windows: {
    materials: ["Teakwood", "Mahogany", "Iroko"],
    features: ["Double-glazed ready", "Weatherproof sealants", "Thermal insulation"],
  },
  kitchens: {
    materials: ["Marine plywood core", "Premium veneers", "Matte lacquers"],
    features: ["Soft-close hardware", "Moisture-resistant coating", "Tailored organizers"],
  },
  wardrobes: {
    materials: ["Smoked oak veneer", "Fabric-lined drawers", "Lacquered panels"],
    features: ["Seamless sliding rails", "Built-in drawer systems", "Modular framing"],
  },
  closets: {
    materials: ["Cedar wood", "Eucalyptus veneer", "Leather lining"],
    features: ["Hidden security safes", "Custom glass display doors", "Anti-dust seals"],
  },
  bedrooms: {
    materials: ["American Walnut", "Ash Wood", "Premium upholstery backing"],
    features: ["Floating bed frames", "Integrated bedside panels", "Touch-to-open drawers"],
  },
  "office-furniture": {
    materials: ["American Walnut", "Ash Wood", "Brushed metal integration"],
    features: ["Hidden power pathways", "Acoustic absorption options", "Durable scratch-proof surface oils"],
  },
  "general-furniture": {
    materials: ["Oak", "Ash", "Maple", "Exotic veneers"],
    features: ["Precision hand-finishing", "Custom stains & coloring", "Sustainable sourcing"],
  },
};

export default function ServicesList() {
  const { categories, isLoaded } = useDb();
  const { language, t } = useLanguage();

  if (!isLoaded || categories.length === 0) {
    return (
      <div className="w-full flex justify-center py-16">
        <div className="w-8 h-8 border-2 border-stone-200 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  const translateSpec = (text: string) => {
    return specificationsTranslations[language][text] || text;
  };

  return (
    <div className="space-y-16">
      {categories.map((service, index) => {
        // Fallback to defaults if no custom specs found
        const specs = staticSpecsMap[service.id] || {
          materials: ["Solid Hardwood", "Natural Veneers", "MDF Core"],
          features: ["Tailored Dimensions", "Sterile Finishes", "SASO Quality Audit"],
        };

        return (
          <div
            key={service.id}
            id={service.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-stone-200 last:border-0 items-start"
          >
            {/* Visual number / index */}
            <div className="lg:col-span-1">
              <span className="font-serif text-3xl font-light text-stone-300 block text-left">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-2xl font-serif text-primary font-medium text-left">
                {t(service.title)}
              </h2>
              <p className="text-stone-600 font-light text-sm leading-relaxed text-left">
                {t(service.description)}
              </p>
            </div>

            {/* Materials & Features List */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6 bg-stone-50 p-6 border border-stone-200">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent mb-3 text-left">
                  {translateSpec("Timber & Core Specs")}
                </h4>
                <ul className="space-y-2 text-xs font-light text-stone-600 text-left">
                  {specs.materials.map((mat, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1 h-1 bg-accent mr-2 shrink-0"></span>
                      {translateSpec(mat)}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-accent mb-3 text-left">
                  {translateSpec("Performance Details")}
                </h4>
                <ul className="space-y-2 text-xs font-light text-stone-600 text-left">
                  {specs.features.map((feat, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1 h-1 bg-accent mr-2 shrink-0"></span>
                      {translateSpec(feat)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
