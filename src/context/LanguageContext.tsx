"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services & Products",
    "nav.healthcare": "Healthcare Solutions",
    "nav.contact": "Contact & Partners",
    
    // Brand Story
    "brand.est": "Est. 2015 / Jeddah, KSA",
    "brand.hero_title": "Shaping Customer Visions Into Premium Wood Icons",
    "brand.desc_1": "Founded in Jeddah in 2015, KhashabSA is committed to achieving the customer's vision by shaping products to desired specifications in record time and at highly competitive prices. We design and manufacture unique, high-end wood icons that bring beauty and joy to spaces.",
    "brand.desc_2": "Operating from Jeddah's Second Industrial City, our ISO 9001:2015 certified plant blends advanced CNC precision with artisanal carpentry, serving as the first choice for architectural and clinical woodwork in Saudi Arabia.",
    "brand.read_story": "Read Our Story & Differentiators \u2192",

    // Products & Services Section
    "services.label": "Our Products",
    "services.title": "Premium Wood Manufacturing",
    "services.subtitle": "From doors and windows to luxury bespoke closets, kitchens, and office fit-outs, we shape timber to your precise specifications.",
    "services.view_details": "View Details \u2192",

    // Journey
    "journey.label": "Manufacturing Journey",
    "journey.title": "The Art of Bespoke Carpentry",
    "journey.desc": "Scroll down to witness how our Jeddah plant translates raw sustainable lumber into highly engineered, unique wood icons.",
    "journey.stage": "Active Manufacturing Stage",
    "journey.standard_label": "Audited Standard",
    "journey.sop": "Standard Operating Procedure",
    "journey.iso": "ISO 9001 & GMP",

    // Healthcare
    "health.label": "Healthcare Specialty",
    "health.title": "First Option for Wood Products in Saudi Healthcare Facilities",
    "health.desc": "We design and engineer specialized wood fittings matching strict Ministry of Health standards: moisture resistant, bacteria resistant, fire resistant, and easy to sterilize and clean.",
    "health.btn_specs": "Explore Clinical Specs",
    "health.btn_rfq": "Request Healthcare RFQ",

    // Portfolio
    "portfolio.label": "Featured Portfolio",
    "portfolio.title": "Our High-End Projects",
    "portfolio.desc": "Explore a curated selection of our healthcare, commercial, and residential installations completed across Saudi Arabia.",

    // Networks
    "networks.label": "Our Networks",
    "networks.title": "Trusted B2B Collaborators",
    "networks.desc": "We supply custom woodwork and certified doors to leading developers and public institutions in Saudi Arabia.",

    // Trust Banner
    "trust.title": "Have an active tender or custom design inquiry?",
    "trust.desc": "Our engineers in Jeddah will estimate prices and project lead times within 48 hours.",
    "trust.btn": "Submit Specifications \u2192",

    // Footer
    "footer.navigation": "Navigation",
    "footer.hq": "Headquarters",
    "footer.factory": "KhashabSA Factory",
    "footer.address": "Second Industrial City, Jeddah,\nKingdom of Saudi Arabia",
    "footer.contact": "Contact Details",
    "footer.cr": "CR Registration",
    "footer.vat": "VAT Number",
    "footer.copy": "All rights reserved.",
    
    // Dynamic database seed translations (fallbacks for categories)
    "Bespoke Doors": "Bespoke Doors",
    "Premium Windows": "Premium Windows",
    "Bespoke Kitchens": "Bespoke Kitchens",
    "Custom Wardrobes": "Custom Wardrobes",
    "Luxury Closets": "Luxury Closets",
    "Bespoke Bedrooms": "Bespoke Bedrooms",
    "Office Furniture": "Office Furniture",
    "Custom Furniture": "Custom Furniture",

    "Solid pivot and flush interior doors built to custom specs.": "Solid pivot and flush interior doors built to custom specs.",
    "Climate-adapted timber windows with dual-seal barriers.": "Climate-adapted timber windows with dual-seal barriers.",
    "Handle-less luxury cabinetry with moisture-resistant cores.": "Handle-less luxury cabinetry with moisture-resistant cores.",
    "Seamless integrated dressings and built-in closet units.": "Seamless integrated dressings and built-in closet units.",
    "High-end storage units featuring leather linings and custom lights.": "High-end storage units featuring leather linings and custom lights.",
    "Bed frames, nightstands, and panelings matched to your space.": "Bed frames, nightstands, and panelings matched to your space.",
    "Acoustic panels and monolithic desks built to CAD spec.": "Acoustic panels and monolithic desks built to CAD spec.",
    "Unique wood icons designed to bring joy and beauty to spaces.": "Unique wood icons designed to bring joy and beauty to spaces.",

    // Journey stages defaults
    "01. Material Sourcing": "01. Material Sourcing",
    "02. Shop Drawings & CAD": "02. Shop Drawings & CAD",
    "03. Computerized CNC Milling": "03. Computerized CNC Milling",
    "04. Assembly & Sanding": "04. Assembly & Sanding",
    "Sustainable, Prime Hardwood Selection": "Sustainable, Prime Hardwood Selection",
    "Micron-Level Engineering Precision": "Micron-Level Engineering Precision",
    "Automated Industrial Scaling": "Automated Industrial Scaling",
    "SOP Audited Hand-Finishing": "SOP Audited Hand-Finishing",

    // Contact page
    "contact.label": "Connect With Us",
    "contact.title": "Partner with KhashabSA for Premium Timber Engineering",
    "contact.info_title": "KhashabSA Factory Complex",
    "contact.address": "Second Industrial City, Phase 3\nJeddah, Kingdom of Saudi Arabia",
    "contact.form_title": "Request a B2B Specification Quote",
    "contact.form_desc": "Provide your tender specifications or custom request details, and our engineering office will follow up with pricing.",
    "contact.input_name": "Full Name",
    "contact.input_company": "Company / Contractor Name",
    "contact.input_email": "Corporate Email Address",
    "contact.input_phone": "Phone Number (with Country Code)",
    "contact.input_category": "Woodwork Category",
    "contact.cat_doors": "Architectural Doors",
    "contact.cat_kitchens": "Kitchens & Wardrobes",
    "contact.cat_healthcare": "Healthcare Cassettes & Doors",
    "contact.cat_commercial": "Commercial Fit-outs",
    "contact.cat_general": "Other Custom Joinery",
    "contact.input_volume": "Project Volume / Est. Quantity",
    "contact.vol_single": "Single Residential Fit-out",
    "contact.vol_mid": "Mid-Scale (10-50 units / doors)",
    "contact.vol_large": "Large-Scale / Commercial Tender",
    "contact.input_details": "Specification details, woods, dimensions",
    "contact.btn_submit": "Submit Specification Details",
    "contact.submitting": "Submitting details...",
    "contact.success_title": "Specifications Submitted Successfully",
    "contact.success_desc": "Our engineering department has received your request and will provide estimations within 48 hours.",
    "contact.btn_another": "Submit Another Spec Request",

    // About page
    "about.label": "Our History",
    "about.title": "Engineering Wood Since 2015",
    "about.milestone_1_year": "2015",
    "about.milestone_1_title": "Company Founded in Jeddah",
    "about.milestone_2_year": "2019",
    "about.milestone_2_title": "Expanded to 2nd Industrial Complex",
    "about.milestone_3_year": "2023",
    "about.milestone_3_title": "ISO 9001 & MOH Certified",
    "about.narrative_title": "A Journey of Craftsmanship & Industrial Scaling",
    "about.narrative_1": "KhashabSA began as a small boutique workshop in Jeddah, established by master wood craftsmen who recognized the need for premium, architecturally precise woodwork in the local Saudi market. By combining traditional joinery skills with strict manufacturing tolerances, the company quickly earned a reputation for quality.",
    "about.narrative_2": "In 2019, we expanded operations by establishing our state-of-the-art facility in Jeddah's Second Industrial City. Equipping the plant with automated CNC machinery allowed us to scale from bespoke single-residence fittings to large-scale B2B commercial, educational, and healthcare contract deliveries.",
    "about.narrative_3": "Today, KhashabSA is a trusted partner for Saudi Arabia's leading developers and construction firms, trusted for our deep material knowledge, engineering capabilities, and rigorous compliance with local building standards.",
    "about.values_title": "Core Foundations",
    "about.val_1_title": "CNC Engineering Precision",
    "about.val_1_desc": "We use modern, automated European machinery to mill to structural tolerances within 0.1mm, ensuring seamless finishes and exact CAD specifications.",
    "about.val_2_title": "Certified Compliance",
    "about.val_2_desc": "Our doors and fittings carry full ISO 9001:2015 certification, civil defense fire ratings, and MoH compliance guidelines.",
    "about.val_3_title": "Sustainable Sourcing",
    "about.val_3_desc": "We sustainably import premium timber, including solid American Walnut, White Oak, Ash, and Teak, dried specifically for Gulf humidity ranges.",
    "about.standards_label": "Quality Audit",
    "about.standards_title": "ISO 9001 & GMP Standards",
    "about.standards_desc": "All wood components manufactured at our Jeddah facility are audited under international quality protocols. KhashabSA is proud to hold **ISO 9001:2015 Quality Management Systems Certification** and strictly adheres to **Good Manufacturing Practice (GMP)** guidelines to ensure cleanroom and commercial wood safety.",

    // Healthcare page
    "health.title_main": "Healthcare CASSO Case Woodwork",
    "health.subtitle_main": "Sterile, non-porous, antibacterial, and fire-resistant wood products compliant with Saudi Ministry of Health (MoH) regulations.",
    "health.intro_title": "The First Choice for Saudi Clinical Facilities",
    "health.intro_desc_1": "Healthcare facilities require wood installations that combine absolute structural durability with strict hygiene controls. KhashabSA designs and manufactures MoH-compliant doors, corridor protective casework, patient room cabinets, and custom reception desks specifically engineered for clinical workflows.",
    "health.intro_desc_2": "Utilizing specialized high-pressure laminates (HPL) and solid wood cores treated with antibacterial sealants, our products withstand heavy hospital sterilization cycles without swelling, cracking, or harbor bacteria growth.",
    "health.specs_title": "Technical Performance Specifications",
    "health.spec_1_title": "Antibacterial Coatings",
    "health.spec_1_desc": "Cascades of protective resins contain silver-ion technology that eliminates 99.9% of bacteria and microbes on contact surfaces.",
    "health.spec_2_title": "Fire-Rated 90 Min",
    "health.spec_2_desc": "Solid timber door cores reinforced with fire-retardant composites. Audited and certified to SASO and Saudi Civil Defense emergency criteria.",
    "health.spec_3_title": "Moisture & Chemical Casework",
    "health.spec_3_desc": "Plywood substrates bonded under extreme pressure with water-resistant resins. Fully resistant to saline, medical disinfectants, and heavy cleaning friction.",
    "health.spec_4_title": "Radiation Lead Linings",
    "health.spec_4_desc": "X-ray and radiology clinical doors lined with internal sheet lead cores matching specific MeV radiation containment designs.",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات والمنتجات",
    "nav.healthcare": "حلول الرعاية الصحية",
    "nav.contact": "اتصل بنا وشركاؤنا",
    
    // Brand Story
    "brand.est": "تأسست عام ٢٠١٥ / جدة، المملكة العربية السعودية",
    "brand.hero_title": "تجسيد رؤى العملاء في أيقونات خشبية فاخرة",
    "brand.desc_1": "تأسست شركة خشب في جدة عام ٢٠١٥، وتلتزم بتحقيق رؤية العميل من خلال تشكيل المنتجات وفقًا للمواصفات المطلوبة في وقت قياسي وبأسعار تنافسية للغاية. نحن نصمم ونصنع أيقونات خشبية فريدة من نوعها تضفي الجمال والبهجة على المساحات.",
    "brand.desc_2": "من خلال العمل في المدينة الصناعية الثانية بجدة، يجمع مصنعنا المعتمد من قبل آيزو ٩٠٠١:٢٠١٥ بين دقة ماكينات الـ CNC المتقدمة والنجارة الحرفية التقليدية، ليكون الخيار الأول للأعمال الخشبية المعمارية والطبية في المملكة العربية السعودية.",
    "brand.read_story": "اقرأ قصتنا ومميزاتنا \u2190",

    // Products & Services Section
    "services.label": "منتجاتنا",
    "services.title": "تصنيع الخشب الفاخر",
    "services.subtitle": "من الأبواب والنوافذ إلى الخزائن الفاخرة والمطابخ وتجهيز المكاتب، نشكل الخشب ليلائم مواصفاتك الدقيقة.",
    "services.view_details": "عرض التفاصيل \u2190",

    // Journey
    "journey.label": "رحلة التصنيع",
    "journey.title": "فن النجارة المصممة حسب الطلب",
    "journey.desc": "قم بالتمرير لأسفل لتشهد كيف يقوم مصنعنا بجدة بتحويل الخشب المستدام الخام إلى أيقونات خشبية عالية الهندسة والتميز.",
    "journey.stage": "مرحلة التصنيع النشطة",
    "journey.standard_label": "المعيار المعتمد",
    "journey.sop": "إجراء التشغيل القياسي",
    "journey.iso": "آيزو ٩٠٠١ وممارسات التصنيع الجيدة",

    // Healthcare
    "health.label": "تخصص الرعاية الصحية",
    "health.title": "الخيار الأول للمنتجات الخشبية في المنشآت الصحية السعودية",
    "health.desc": "نقوم بتصميم وهندسة التجهيزات الخشبية المتخصصة المطابقة لمعايير وزارة الصحة الصارمة: مقاومة للرطوبة، مقاومة للبكتيريا، مقاومة للحريق، وسهلة التعقيم والتنظيف.",
    "health.btn_specs": "اكتشف المواصفات السريرية",
    "health.btn_rfq": "طلب عرض أسعار للرعاية الصحية",

    // Portfolio
    "portfolio.label": "المعرض المتميز",
    "portfolio.title": "مشاريعنا الراقية",
    "portfolio.desc": "اكتشف مجموعة مختارة من تركيباتنا الصحية والتجارية والسكنية المكتملة في جميع أنحاء المملكة العربية السعودية.",

    // Networks
    "networks.label": "شبكاتنا",
    "networks.title": "شركاء الأعمال الموثوقين",
    "networks.desc": "نقوم بتوريد الأعمال الخشبية المخصصة والأبواب المعتمدة للمطورين الرائدين والمؤسسات العامة في المملكة العربية السعودية.",

    // Trust Banner
    "trust.title": "لديك مناقصة نشطة أو استفسار عن تصميم مخصص؟",
    "trust.desc": "سيقوم مهندسونا بجدة بتقدير الأسعار وأوقات إنجاز المشروع في غضون ٤٨ ساعة.",
    "trust.btn": "تقديم المواصفات \u2190",

    // Footer
    "footer.navigation": "التصفح",
    "footer.hq": "المقر الرئيسي",
    "footer.factory": "مصنع خشب",
    "footer.address": "المدينة الصناعية الثانية، جدة،\nالمملكة العربية السعودية",
    "footer.contact": "تفاصيل الاتصال",
    "footer.cr": "السجل التجاري",
    "footer.vat": "الرقم الضريبي",
    "footer.copy": "جميع الحقوق محفوظة.",
    
    // Dynamic database seed translations (fallbacks for categories)
    "Bespoke Doors": "أبواب مخصصة",
    "Premium Windows": "نوافذ فاخرة",
    "Bespoke Kitchens": "مطابخ فاخرة",
    "Custom Wardrobes": "خزائن ملابس مخصصة",
    "Luxury Closets": "خزائن ملابس فاخرة",
    "Bespoke Bedrooms": "غرف نوم مخصصة",
    "Office Furniture": "أثاث مكتبي",
    "Custom Furniture": "أثاث مخصص",

    "Solid pivot and flush interior doors built to custom specs.": "أبواب داخلية مفصلية ومسطحة متينة مصنوعة بمواصفات مخصصة.",
    "Climate-adapted timber windows with dual-seal barriers.": "نوافذ خشبية تتكيف مع المناخ بحواجز إغلاق مزدوجة.",
    "Handle-less luxury cabinetry with moisture-resistant cores.": "خزائن فاخرة بدون مقابض ذات قلوب مقاومة للرطوبة.",
    "Seamless integrated dressings and built-in closet units.": "خزائن ملابس مدمجة وسلسة ووحدات تخزين مدمجة.",
    "High-end storage units featuring leather linings and custom lights.": "وحدات تخزين راقية تتميز ببطانات جلدية وإضاءة مخصصة.",
    "Bed frames, nightstands, and panelings matched to your space.": "إطارات سرير وطاولات جانبية وألواح حائط ملائمة لمساحتك.",
    "Acoustic panels and monolithic desks built to CAD spec.": "ألواح صوتية ومكاتب ضخمة مبنية بمواصفات CAD.",
    "Unique wood icons designed to bring joy and beauty to spaces.": "قطع أثاث خشبية فريدة مصممة لتضفي الجمال والبهجة على المساحات.",

    // Journey stages defaults
    "01. Material Sourcing": "٠١. توريد المواد",
    "02. Shop Drawings & CAD": "٠٢. الرسومات التنفيذية وتصميم CAD",
    "03. Computerized CNC Milling": "٠٣. خرط وحفر CNC الكمبيوتر",
    "04. Assembly & Sanding": "٠٤. التجميع والتنعيم اليدوي",
    "Sustainable, Prime Hardwood Selection": "اختيار الأخشاب الصلبة المستدامة والممتازة",
    "Micron-Level Engineering Precision": "هندسة دقيقة بمستوى الميكرون",
    "Automated Industrial Scaling": "الإنتاج الصناعي المؤتمت",
    "SOP Audited Hand-Finishing": "التشطيب اليدوي الخاضع للتدقيق",

    // Contact page
    "contact.label": "تواصل معنا",
    "contact.title": "شراكة مع خشب للهندسة الخشبية الفاخرة",
    "contact.info_title": "مجمع مصنع خشب",
    "contact.address": "المدينة الصناعية الثانية، المرحلة الثالثة\nجدة، المملكة العربية السعودية",
    "contact.form_title": "طلب عرض أسعار لمواصفات B2B",
    "contact.form_desc": "يرجى تقديم تفاصيل مواصفات المناقصة أو تفاصيل طلبك المخصص، وسيقوم مكتبنا الهندسي بمتابعة الأسعار معك.",
    "contact.input_name": "الاسم الكامل",
    "contact.input_company": "اسم الشركة / المقاول",
    "contact.input_email": "البريد الإلكتروني للعمل",
    "contact.input_phone": "رقم الهاتف (مع رمز الدولة)",
    "contact.input_category": "فئة الأعمال الخشبية",
    "contact.cat_doors": "الأبواب المعمارية",
    "contact.cat_kitchens": "المطابخ وخزائن الملابس",
    "contact.cat_healthcare": "تجهيزات الرعاية الصحية والأبواب الطبية",
    "contact.cat_commercial": "تجهيز المكاتب التجارية",
    "contact.cat_general": "أعمال خشبية مخصصة أخرى",
    "contact.input_volume": "حجم المشروع / الكمية التقريبية",
    "contact.vol_single": "تجهيز فيلا سكنية واحدة",
    "contact.vol_mid": "حجم متوسط (١٠ - ٥٠ وحدة / باب)",
    "contact.vol_large": "حجم كبير / مناقصة تجارية",
    "contact.input_details": "تفاصيل المواصفات، أنواع الأخشاب، المقاسات",
    "contact.btn_submit": "إرسال تفاصيل المواصفات",
    "contact.submitting": "جاري الإرسال...",
    "contact.success_title": "تم تقديم المواصفات بنجاح",
    "contact.success_desc": "لقد تلقى قسمنا الهندسي طلبك وسيقدم التقديرات في غضون ٤٨ ساعة.",
    "contact.btn_another": "تقديم طلب مواصفات آخر",

    // About page
    "about.label": "تاريخنا",
    "about.title": "هندسة الأخشاب منذ عام ٢٠١٥",
    "about.milestone_1_year": "٢٠١٥",
    "about.milestone_1_title": "تأسيس الشركة في جدة",
    "about.milestone_2_year": "٢٠١٩",
    "about.milestone_2_title": "التوسع للمجمع الصناعي الثاني",
    "about.milestone_3_year": "٢٠٢٣",
    "about.milestone_3_title": "اعتماد شهادة ISO 9001 ووزارة الصحة",
    "about.narrative_title": "رحلة الحرفية والتوسع الصناعي",
    "about.narrative_1": "بدأت شركة خشب كورشة عمل صغيرة ومتميزة في جدة، أسسها حرفيون خبراء في مجال الخشب ممن أدركوا الحاجة إلى أعمال خشبية معمارية دقيقة وعالية الجودة في السوق السعودي المحلي. من خلال الجمع بين مهارات النجارة التقليدية ومعايير التصنيع الصارمة، سرعان ما اكتسبت الشركة سمعة طيبة في الجودة.",
    "about.narrative_2": "في عام ٢٠١٩، قمنا بتوسيع عملياتنا من خلال إنشاء مصنعنا المتطور في المدينة الصناعية الثانية بجدة. أتاح لنا تجهيز المصنع بآلات CNC المؤتمتة التوسع من التجهيزات الفردية المصممة للمنازل الخاصة إلى عمليات توريد عقود تجارية وتعليمية وصحية واسعة النطاق لمختلف قطاعات الأعمال (B2B).",
    "about.narrative_3": "اليوم، تعد شركة خشب شريكًا موثوقًا لكبار المطورين وشركات الإنشاءات في المملكة العربية السعودية، بفضل معرفتنا العميقة بالمواد، وقدراتنا الهندسية، وامتثالنا الصارم لمعايير البناء المحلية.",
    "about.values_title": "أسسنا الأساسية",
    "about.val_1_title": "دقة هندسية CNC",
    "about.val_1_desc": "نستخدم آلات أوروبية مؤتمتة وحديثة للخرط والحفر بهوامش دقة ضمن ٠.١ ملم، مما يضمن تشطيبات خالية من العيوب ومطابقة تماماً لرسومات CAD.",
    "about.val_2_title": "الامتثال المعتمد",
    "about.val_2_desc": "تحمل أبوابنا وتجهيزاتنا شهادة ISO 9001:2015 الكاملة، وتصنيفات مقاومة الحريق من الدفاع المدني، ومعايير الامتثال المعتمدة لدى وزارة الصحة.",
    "about.val_3_title": "توريد مستدام",
    "about.val_3_desc": "نستورد أخشاباً ممتازة ومستدامة، بما في ذلك الجوز الأمريكي الصلب، البلوط الأبيض، والرماد والتيك، المجففة خصيصاً لمقاومة مستويات الرطوبة في الخليج.",
    "about.standards_label": "تدقيق الجودة",
    "about.standards_title": "معايير ISO 9001 وممارسات التصنيع الجيدة",
    "about.standards_desc": "تخضع جميع المكونات الخشبية المصنعة في مصنعنا بجدة لتدقيق بروتوكولات الجودة الدولية. تفخر شركة خشب بحصولها على **شهادة آيزو ٩٠٠١:٢٠١٥ لنظام إدارة الجودة** والالتزام الصارم بتوجيهات **ممارسات التصنيع الجيدة (GMP)** لضمان سلامة الخشب في الغرف النظيفة والمنشآت التجارية.",

    // Healthcare page
    "health.title_main": "أعمال خشب كاسيت الطبية",
    "health.subtitle_main": "منتجات خشبية معقمة، غير مسامية، مضادة للبكتيريا ومقاومة للحريق متوافقة مع لوائح وزارة الصحة السعودية.",
    "health.intro_title": "الخيار الأول للمنشآت الطبية السعودية",
    "health.intro_desc_1": "تتطلب منشآت الرعاية الصحية تركيبات خشبية تجمع بين المتانة الهيكلية المطلقة وضوابط النظافة الصارمة. تقوم شركة خشب بتصميم وتصنيع الأبواب المعتمدة من وزارة الصحة، وحواجز الحماية للممرات، وخزائن غرف المرضى، ومكاتب الاستقبال المصممة خصيصاً لسير العمل الطبي.",
    "health.intro_desc_2": "باستخدام شرائح الضغط العالي المتخصصة (HPL) وقلوب الخشب الصلب المعالجة بمواد مانعة للتسرب ومضادة للبكتيريا، تتحمل منتجاتنا دورات تعقيم المستشفيات الشديدة دون انتفاخ أو تشقق أو التسبب في نمو البكتيريا.",
    "health.specs_title": "مواصفات الأداء الفني",
    "health.spec_1_title": "طلاءات مضادة للبكتيريا",
    "health.spec_1_desc": "تحتوي طبقات الراتنجات الواقية على تقنية أيونات الفضة التي تقضي على ٩٩.٩٪ من البكتيريا والميكروبات على أسطح التلامس.",
    "health.spec_2_title": "مقاومة الحريق ٩٠ دقيقة",
    "health.spec_2_desc": "أبواب خشبية متينة مدعمة بمركبات مقاومة للحريق. معتمدة ومطابقة لمعايير الهيئة السعودية للمواصفات والمقاييس (SASO) والدفاع المدني السعودي.",
    "health.spec_3_title": "هيكل مقاوم للرطوبة والمواد الكيميائية",
    "health.spec_3_desc": "طبقات خشبية مترابطة تحت ضغط شديد مع راتنجات مقاومة للماء. مقاومة تماماً للمحاليل الملحية، والمطهرات الطبية، واحتكاك التنظيف الثقيل.",
    "health.spec_4_title": "تبطين رصاص للحماية من الإشعاع",
    "health.spec_4_desc": "أبواب العيادات للأشعة السينية والتشخيصية مبطنة من الداخل بألواح رصاص مطابقة لتصميمات احتواء الإشعاع المطلوبة MeV."
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("khashab_language") as Language;
    if (savedLang === "en" || savedLang === "ar") {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("khashab_language", language);
    // Apply layout direction mirroring for Arabic
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  const isRtl = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
