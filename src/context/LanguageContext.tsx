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
    // ── Navbar ──────────────────────────────────────────────────────────────
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services & Products",
    "nav.healthcare": "Healthcare Solutions",
    "nav.contact": "Contact & Partners",

    // ── Hero Slider ──────────────────────────────────────────────────────────
    "hero.btn_specs": "Request Specifications",
    "hero.loading": "Loading Presentation...",

    // ── Brand Story Section ──────────────────────────────────────────────────
    "brand.est": "Est. 2015 / Jeddah, KSA",
    "brand.hero_title": "Shaping Customer Visions Into Premium Wood Icons",
    "brand.desc_1": "Founded in Jeddah in 2015, KhashabSA is committed to achieving the customer's vision by shaping products to desired specifications in record time and at highly competitive prices. We design and manufacture unique, high-end wood icons that bring beauty and joy to spaces.",
    "brand.desc_2": "Operating from Jeddah's Second Industrial City, our ISO 9001:2015 certified plant blends advanced CNC precision with artisanal carpentry, serving as the first choice for architectural and clinical woodwork in Saudi Arabia.",
    "brand.read_story": "Read Our Story & Differentiators →",

    // ── Products & Services Section ──────────────────────────────────────────
    "services.label": "Our Products",
    "services.title": "Premium Wood Manufacturing",
    "services.subtitle": "From doors and windows to luxury bespoke closets, kitchens, and office fit-outs, we shape timber to your precise specifications.",
    "services.view_details": "View Details →",
    "services.header_label": "Where We Apply Our Craft",
    "services.comp_title": "Comprehensive Fitting & Fit-Out Services",
    "services.comp_desc": "We design and construct wooden installations for a broad range of sectors, ensuring excellence in both commercial scale and private aesthetics.",
    "services.process_label": "Our Process",
    "services.process_title": "How We Deliver Custom Bespoke Solutions",
    "services.cta_desc": "Do you need material samples, architectural specifications, or custom shop drawings for your tender?",
    "services.cta_btn": "Request Spec Consultation",
    "services.page_title": "Bespoke Woodwork Engineered to Specification",

    // Comprehensive sector items
    "services.comp_1_title": "Interior & Exterior Decorations",
    "services.comp_1_desc": "Premium architectural wooden wall paneling, ceiling grids, slatted features, and entrance claddings.",
    "services.comp_2_title": "Exhibitions & Showrooms",
    "services.comp_2_desc": "Sophisticated wooden booths and product showcase stands engineered for high-traffic presentation.",
    "services.comp_3_title": "Restaurants & Cafes",
    "services.comp_3_desc": "Durable custom tables, counters, wall cladding, and booth seating crafted to hospitality specifications.",
    "services.comp_4_title": "Children's Play Areas",
    "services.comp_4_desc": "Sanded, non-toxic, safe wooden structures, playhouses, and modular activity furniture.",
    "services.comp_5_title": "Clinics & Laboratories",
    "services.comp_5_desc": "Sterile, non-porous chemical casework, hygiene panels, and custom treatment cabinets.",
    "services.comp_6_title": "Premium Homes & Villas",
    "services.comp_6_desc": "Complete bespoke home fit-out packages encompassing doors, closets, kitchens, and wall decor.",

    // Process steps
    "services.step_1_name": "CAD Consultation",
    "services.step_1_desc": "Our engineering office translates architectural designs into precise CAD shop drawings.",
    "services.step_2_name": "Material Selection",
    "services.step_2_desc": "Select from curated, sustainably-sourced premium hardwoods dried to local relative humidity specs.",
    "services.step_3_name": "Precision CNC",
    "services.step_3_desc": "Computer-controlled milling ensures absolute dimensional accuracy for all custom panels and joins.",
    "services.step_4_name": "Assembly & Finish",
    "services.step_4_desc": "Traditional carpenters handle final assembly, sandings, and hand-oil applications.",

    // ── Manufacturing Journey ────────────────────────────────────────────────
    "journey.label": "Manufacturing Journey",
    "journey.title": "The Art of Bespoke Carpentry",
    "journey.desc": "Scroll down to witness how our Jeddah plant translates raw sustainable lumber into highly engineered, unique wood icons.",
    "journey.stage": "Active Manufacturing Stage",
    "journey.standard_label": "Audited Standard",
    "journey.sop": "Standard Operating Procedure",
    "journey.iso": "ISO 9001 & GMP",
    "journey.of": "of",

    // ── Healthcare Parallax Section ──────────────────────────────────────────
    "health.label": "Healthcare Specialty",
    "health.title": "First Option for Wood Products in Saudi Healthcare Facilities",
    "health.desc": "We design and engineer specialized wood fittings matching strict Ministry of Health standards: moisture resistant, bacteria resistant, fire resistant, and easy to sterilize and clean.",
    "health.btn_specs": "Explore Clinical Specs",
    "health.btn_rfq": "Request Healthcare RFQ",

    // Healthcare page
    "health.page_label": "Specialized Division",
    "health.page_title": "Saudi MOH Compliant Woodwork & Doors",
    "health.page_subtitle": "Precision-engineered woodwork solutions designed for clinical, laboratory, and surgical environments requiring absolute hygiene and safety compliance.",
    "health.specs_section_label": "Clinical Quality",
    "health.specs_section_title": "Core Healthcare Specifications",
    "health.specs_section_desc": "All KhashabSA healthcare products are tested and manufactured to align with standard international hospital designs and local Saudi Ministry of Health guidelines.",
    "health.benefit_label": "Operational Benefit",
    "health.catalog_label": "Catalog & Specs",
    "health.catalog_title": "Healthcare-Grade Product Matrix",
    "health.table_col_1": "Product Category",
    "health.table_col_2": "Typical Application",
    "health.table_col_3": "Technical Details",
    "health.cta_title": "Saudi MOH & ISO Certified",
    "health.cta_btn": "Request Spec Consultation",

    // Compliance standards
    "health.std_1_title": "Anti-Microbial Surfaces",
    "health.std_1_desc": "Treated with medical-grade antimicrobial laminates and finishes that actively suppress the growth of bacteria, fungi, and viruses. Tested and proven to withstand regular exposure to clinical disinfectants.",
    "health.std_1_benefit": "Reduces hospital-acquired infections (HAIs) and ensures easy cleaning protocols.",
    "health.std_2_title": "Certified Fire Resistance",
    "health.std_2_desc": "Manufactured with mineral cores and fire-retardant timber treatments, offering certified ratings from 30 up to 120 minutes. Fully compliant with SASO and Saudi Civil Defense regulations.",
    "health.std_2_benefit": "Ensures evacuation safety paths in hospital corridors and clinical chambers.",
    "health.std_3_title": "Moisture & Humidity Resistance",
    "health.std_3_desc": "Constructed using high-density polyurethane cores and water-resistant adhesives. Formulated specifically to prevent swelling, warping, or delamination in high-humidity areas like clinical kitchens or utility rooms.",
    "health.std_3_benefit": "Extends product lifespan under intense sanitization washdowns.",
    "health.std_4_title": "Dust-Free Joint Design",
    "health.std_4_desc": "Custom flush joinery designed to eliminate deep grooves and recesses where dust and organic matter could settle. All cabinet handles are integrated or flush to prevent infection nesting.",
    "health.std_4_benefit": "Maintains absolute hygiene standards in surgery theaters and cleanrooms.",

    // Medical products table
    "health.prod_1_name": "MOH-Spec Clinical Doors",
    "health.prod_1_use": "Patient rooms, corridors, ICU",
    "health.prod_1_specs": "Solid wood frame, lead-lined option, custom kickplates, integrated observation glass with flush seals.",
    "health.prod_2_name": "Lead-Lined Radiology Doors",
    "health.prod_2_use": "X-Ray, CT Scan, MRI rooms",
    "health.prod_2_specs": "Internal lead sheet thickness from 1mm to 3mm, heavy-duty pivots, hermetic edge sealings.",
    "health.prod_3_name": "Clinical Casework & Cabinetry",
    "health.prod_3_use": "Laboratories, pharmacies, treatment suites",
    "health.prod_3_specs": "Marine-ply core, chemical-resistant anti-microbial coatings, soft-close heavy hinges, dust-proof seals.",
    "health.prod_4_name": "Anti-Microbial Wall Cladding",
    "health.prod_4_use": "Operation theater lobbies, corridors",
    "health.prod_4_specs": "High-impact laminates, seamless joints, moisture-proof barrier backing, easy sanitize veneer finish.",

    // ── Portfolio ────────────────────────────────────────────────────────────
    "portfolio.label": "Featured Portfolio",
    "portfolio.title": "Our High-End Projects",
    "portfolio.desc": "Explore a curated selection of our healthcare, commercial, and residential installations completed across Saudi Arabia.",

    // ── Networks ─────────────────────────────────────────────────────────────
    "networks.label": "Our Networks",
    "networks.title": "Trusted B2B Collaborators",
    "networks.desc": "We supply custom woodwork and certified doors to leading developers and public institutions in Saudi Arabia.",

    // ── Trust Banner ─────────────────────────────────────────────────────────
    "trust.title": "Have an active tender or custom design inquiry?",
    "trust.desc": "Our engineers in Jeddah will estimate prices and project lead times within 48 hours.",
    "trust.btn": "Submit Specifications →",

    // ── Footer ───────────────────────────────────────────────────────────────
    "footer.navigation": "Navigation",
    "footer.hq": "Headquarters",
    "footer.factory": "KhashabSA Factory",
    "footer.address": "Second Industrial City, Jeddah,\nKingdom of Saudi Arabia",
    "footer.contact": "Contact Details",
    "footer.cr": "CR Registration",
    "footer.vat": "VAT Number",
    "footer.copy": "All rights reserved.",

    // ── Newsletter Popup ─────────────────────────────────────────────────────
    "newsletter.tag": "Bespoke Woodwork Insights",
    "newsletter.title": "Join the Collector's List",
    "newsletter.desc": "Subscribe to receive exclusive catalogues, giga-project highlights, and seasonal private collections directly from our Jeddah joinery workshop.",
    "newsletter.placeholder": "Enter your email address",
    "newsletter.btn": "Request Access",
    "newsletter.subscribing": "Subscribing...",
    "newsletter.success_title": "Invitation Accepted",
    "newsletter.success_desc": "Thank you. You have been added to the KhashabSA private list.",

    // ── About Page ───────────────────────────────────────────────────────────
    "about.label": "Our History",
    "about.title": "Engineering Wood Since 2015",
    "about.milestone_1_year": "2015",
    "about.milestone_1_title": "Company Founded in Jeddah",
    "about.narrative_title": "A Journey of Craftsmanship & Industrial Scaling",
    "about.narrative_1": "KhashabSA began as a small boutique workshop in Jeddah, established by master wood craftsmen who recognized the need for premium, architecturally precise woodwork in the local Saudi market. By combining traditional joinery skills with strict manufacturing tolerances, the company quickly earned a reputation for quality.",
    "about.narrative_2": "In 2019, we expanded operations by establishing our state-of-the-art facility in Jeddah's Second Industrial City. Equipping the plant with automated CNC machinery allowed us to scale from bespoke single-residence fittings to large-scale B2B commercial, educational, and healthcare contract deliveries.",
    "about.narrative_3": "Today, KhashabSA is a trusted partner for Saudi Arabia's leading developers and construction firms, trusted for our deep material knowledge, engineering capabilities, and rigorous compliance with local building standards.",
    "about.mission_label": "Our Mission & Message",
    "about.mission_title": "Vision Fulfillment",
    "about.mission_desc": "We are committed to achieving the customer's vision by shaping premium wood products to desired specifications in record time and at highly competitive prices.",
    "about.vision_label": "Our Vision",
    "about.vision_title": "The First Option",
    "about.vision_desc": "To be the first option for wood products in Saudi Arabia, and the leading specialist option for wood products in healthcare facilities throughout the Kingdom.",
    "about.goals_label": "Our Goals",
    "about.goals_title": "Strategic Targets",
    "about.goals_1": "Deliver unique wood products and icons.",
    "about.goals_2": "Expand market presence within Saudi Arabia.",
    "about.goals_3": "Cultivate client trust and long-term satisfaction.",
    "about.why_label": "Why KhashabSA",
    "about.why_title": "Differentiating Strengths",
    "about.why_1_title": "Innovation & Creativity",
    "about.why_1_desc": "Continuously designing unique wood icons that bring joy and beauty to spaces.",
    "about.why_2_title": "Commitment to Quality",
    "about.why_2_desc": "Selecting prime lumber and processing under rigorous manufacturing audits.",
    "about.why_3_title": "Record Lead Times",
    "about.why_3_desc": "Precision high-capacity CNC plants ensure swift engineering and shipping.",
    "about.why_4_title": "After-Sales Service",
    "about.why_4_desc": "Comprehensive maintenance support and project callbacks to build customer trust.",
    "about.cert_label": "Quality Credentials",
    "about.cert_title": "ISO 9001 & GMP Standards",
    "about.cert_desc": "All wood components manufactured at our Jeddah facility are audited under international quality protocols. KhashabSA holds ISO 9001:2015 Quality Management Systems Certification and strictly adheres to Good Manufacturing Practice (GMP) guidelines.",
    "about.cta_title": "Partner With Us",
    "about.cta_desc": "Experience the unique woodworking capability that brings beauty, joy, and compliance to your spaces.",
    "about.cta_btn": "Get in Touch",
    // keep old keys for backward compat
    "about.standards_label": "Quality Audit",
    "about.standards_title": "ISO 9001 & GMP Standards",
    "about.standards_desc": "All wood components manufactured at our Jeddah facility are audited under international quality protocols. KhashabSA is proud to hold ISO 9001:2015 Quality Management Systems Certification and strictly adheres to Good Manufacturing Practice (GMP) guidelines.",
    "about.val_1_title": "CNC Engineering Precision",
    "about.val_2_title": "Certified Compliance",
    "about.val_2_desc": "Our doors and fittings carry full ISO 9001:2015 certification, civil defense fire ratings, and MoH compliance guidelines.",
    "about.val_3_title": "Sustainable Sourcing",
    "about.val_3_desc": "We sustainably import premium timber, including solid American Walnut, White Oak, Ash, and Teak, dried specifically for Gulf humidity ranges.",
    "health.intro_title": "The First Choice for Saudi Clinical Facilities",
    "health.intro_desc_1": "Healthcare facilities require wood installations that combine absolute structural durability with strict hygiene controls.",

    // ── Contact Page ─────────────────────────────────────────────────────────
    "contact.label": "Connect With Us",
    "contact.title": "Partner with KhashabSA for Premium Timber Engineering",
    "contact.info_title": "KhashabSA Factory Complex",
    "contact.address": "Second Industrial City, Phase 3\nJeddah, Kingdom of Saudi Arabia",
    "contact.hq_label": "Jeddah Headquarters & Factory",
    "contact.hours_label": "Business Hours",
    "contact.hours_title": "Operation Times",
    "contact.hours_text": "Saturday to Thursday: 8:00 AM — 5:00 PM\nFriday: Closed",
    "contact.direct_label": "Direct Inquiries",
    "contact.direct_title": "Get in Touch",
    "contact.phone_label": "Phone",
    "contact.form_title": "RFQ / Specification Request Form",
    "contact.networks_label": "Our Networks",
    "contact.networks_title": "Trusted by Leading Saudi Developers & Institutions",
    "contact.networks_desc": "We supply custom bespoke woodwork and certified doors to private developers, corporate headquarters, and government initiatives.",
    "contact.form_desc": "Provide your tender specifications or custom request details, and our engineering office will follow up with pricing.",
    "contact.input_name": "Contact Name",
    "contact.input_company": "Company / Organization",
    "contact.input_email": "Work Email",
    "contact.input_phone": "Phone Number",
    "contact.input_category": "Product Category",
    "contact.cat_doors": "Architectural Doors",
    "contact.cat_kitchens": "Kitchens & Wardrobes",
    "contact.cat_healthcare": "Healthcare Cassettes & Doors",
    "contact.cat_commercial": "Commercial Fit-outs",
    "contact.cat_general": "Other Custom Joinery",
    "contact.input_volume": "Estimated Volume",
    "contact.vol_single": "Single Custom Project",
    "contact.vol_mid": "10 - 50 units (Small Batch)",
    "contact.vol_large": "200+ units (Large Commercial/Healthcare)",
    "contact.input_details": "Project Specifications & Requirements",
    "contact.btn_submit": "Submit B2B Specification Request",
    "contact.submitting": "Processing...",
    "contact.success_title": "Request Received",
    "contact.success_desc": "Thank you for reaching out. A KhashabSA B2B project consultant will review your specifications and contact you within 24 business hours.",
    "contact.btn_another": "Submit Another Request",
    "contact.cr_label": "CR Registration",
    "contact.vat_label": "VAT Number",

    // ── Dynamic DB category titles & descriptions (seeded defaults) ──────────
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

    // ── Journey stage DB defaults ────────────────────────────────────────────
    "01. Material Sourcing": "01. Material Sourcing",
    "02. Shop Drawings & CAD": "02. Shop Drawings & CAD",
    "03. Computerized CNC Milling": "03. Computerized CNC Milling",
    "04. Assembly & Sanding": "04. Assembly & Sanding",
    "Sustainable, Prime Hardwood Selection": "Sustainable, Prime Hardwood Selection",
    "Micron-Level Engineering Precision": "Micron-Level Engineering Precision",
    "Automated Industrial Scaling": "Automated Industrial Scaling",
    "SOP Audited Hand-Finishing": "SOP Audited Hand-Finishing",
  },

  ar: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "الخدمات والمنتجات",
    "nav.healthcare": "حلول الرعاية الصحية",
    "nav.contact": "اتصل بنا وشركاؤنا",

    // ── Hero Slider ──────────────────────────────────────────────────────────
    "hero.btn_specs": "طلب المواصفات",
    "hero.loading": "جارٍ تحميل العرض...",

    // ── Brand Story Section ──────────────────────────────────────────────────
    "brand.est": "تأسست عام ٢٠١٥ / جدة، المملكة العربية السعودية",
    "brand.hero_title": "تجسيد رؤى العملاء في أيقونات خشبية فاخرة",
    "brand.desc_1": "تأسست شركة خشب في جدة عام ٢٠١٥، وتلتزم بتحقيق رؤية العميل من خلال تشكيل المنتجات وفقاً للمواصفات المطلوبة في وقت قياسي وبأسعار تنافسية. نصمم ونصنع أيقونات خشبية فريدة تضفي الجمال والبهجة على المساحات.",
    "brand.desc_2": "من المدينة الصناعية الثانية بجدة، يجمع مصنعنا المعتمد بـ ISO 9001:2015 بين دقة ماكينات الـ CNC المتقدمة والنجارة الحرفية، ليكون الخيار الأول للأعمال الخشبية المعمارية والطبية في المملكة.",
    "brand.read_story": "اقرأ قصتنا ومميزاتنا ←",

    // ── Products & Services Section ──────────────────────────────────────────
    "services.label": "منتجاتنا",
    "services.title": "تصنيع الخشب الفاخر",
    "services.subtitle": "من الأبواب والنوافذ إلى الخزائن الفاخرة والمطابخ وتجهيز المكاتب، نشكل الخشب ليلائم مواصفاتك الدقيقة.",
    "services.view_details": "عرض التفاصيل ←",
    "services.header_label": "مجالات تطبيق حرفتنا",
    "services.comp_title": "خدمات التجهيز الخشبي الشاملة",
    "services.comp_desc": "نصمم وننشئ تجهيزات خشبية لمجموعة واسعة من القطاعات لضمان التميز في الحجم التجاري والجماليات الخاصة.",
    "services.process_label": "منهجيتنا",
    "services.process_title": "كيف نقدم حلولاً خشبية مخصصة متكاملة",
    "services.cta_desc": "هل تحتاج لعينات مواد، مواصفات معمارية، أو رسومات ورشة عمل لمناقصتك؟",
    "services.cta_btn": "طلب استشارة للمواصفات",
    "services.page_title": "أعمال خشبية مخصصة مصممة حسب الطلب",

    // Comprehensive sector items
    "services.comp_1_title": "الديكورات الداخلية والخارجية",
    "services.comp_1_desc": "تكسية الجدران الخشبية المعمارية الفاخرة، والأسقف المستعارة، وتجهيزات المداخل.",
    "services.comp_2_title": "المعارض وصالات العرض",
    "services.comp_2_desc": "أجنحة عرض خشبية متطورة ومنصات لعرض المنتجات مصممة للمحافل الكبرى.",
    "services.comp_3_title": "المطاعم والمقاهي",
    "services.comp_3_desc": "طاولات مخصصة متينة، كاونترات استقبال، تكسية جدران، وجلسات مصنوعة بمواصفات الضيافة.",
    "services.comp_4_title": "مناطق ألعاب الأطفال",
    "services.comp_4_desc": "هياكل خشبية آمنة ومصقولة وغير سامة، بيوت لعب وأثاث نشاط معياري للأطفال.",
    "services.comp_5_title": "العيادات والمختبرات الطبية",
    "services.comp_5_desc": "تجهيزات خشبية معقمة وغير مسامية، ألواح صحية، وخزائن علاج مخصصة للمنشآت الطبية.",
    "services.comp_6_title": "المنازل والفيلات الفاخرة",
    "services.comp_6_desc": "باقات تجهيز خشبية منزلية كاملة تشمل الأبواب الفاخرة، المطابخ، وخزائن الملابس.",

    // Process steps
    "services.step_1_name": "استشارات CAD والرسومات",
    "services.step_1_desc": "يقوم مكتبنا الهندسي بترجمة المخططات المعمارية إلى رسومات ورش عمل دقيقة.",
    "services.step_2_name": "اختيار المواد الفاخرة",
    "services.step_2_desc": "اختر من بين مجموعة من الأخشاب الصلبة الفاخرة المجففة لتناسب الرطوبة المحلية.",
    "services.step_3_name": "خرط CNC الدقيق",
    "services.step_3_desc": "يضمن الفرم بالكمبيوتر دقة أبعاد مطلقة للألواح والوصلات الخشبية.",
    "services.step_4_name": "التجميع والتشطيب اليدوي",
    "services.step_4_desc": "يقوم الحرفيون بالتجميع النهائي، السنفرة، وتطبيق الزيوت الطبيعية الحامية.",

    // ── Manufacturing Journey ────────────────────────────────────────────────
    "journey.label": "رحلة التصنيع",
    "journey.title": "فن النجارة المصممة حسب الطلب",
    "journey.desc": "قم بالتمرير لأسفل لتشهد كيف يحول مصنعنا بجدة الخشب المستدام الخام إلى أيقونات خشبية عالية الهندسة.",
    "journey.stage": "مرحلة التصنيع النشطة",
    "journey.standard_label": "المعيار المعتمد",
    "journey.sop": "إجراء التشغيل القياسي",
    "journey.iso": "ISO 9001 وممارسات التصنيع الجيدة",
    "journey.of": "من",

    // ── Healthcare Parallax ──────────────────────────────────────────────────
    "health.label": "تخصص الرعاية الصحية",
    "health.title": "الخيار الأول للمنتجات الخشبية في المنشآت الصحية السعودية",
    "health.desc": "نصمم وننفذ تجهيزات خشبية متخصصة مطابقة لمعايير وزارة الصحة الصارمة: مقاومة للرطوبة، مقاومة للبكتيريا، مقاومة للحريق، وسهلة التعقيم والتنظيف.",
    "health.btn_specs": "اكتشف المواصفات السريرية",
    "health.btn_rfq": "طلب عرض أسعار طبي",

    // Healthcare page
    "health.page_label": "القسم المتخصص",
    "health.page_title": "أعمال خشبية وأبواب متوافقة مع وزارة الصحة السعودية",
    "health.page_subtitle": "حلول أعمال خشبية دقيقة مصممة للبيئات السريرية والمختبرات وغرف العمليات التي تتطلب نظافة وسلامة مطلقة.",
    "health.specs_section_label": "الجودة السريرية",
    "health.specs_section_title": "المواصفات الأساسية للرعاية الصحية",
    "health.specs_section_desc": "تم اختبار وتصنيع جميع منتجاتنا الخشبية للرعاية الصحية لتتوافق مع معايير المستشفيات الدولية ووزارة الصحة السعودية.",
    "health.benefit_label": "الفائدة التشغيلية للمنشأة",
    "health.catalog_label": "الكتالوج والمواصفات",
    "health.catalog_title": "مصفوفة المنتجات الطبية المعالجة",
    "health.table_col_1": "فئة المنتج",
    "health.table_col_2": "التطبيق النموذجي",
    "health.table_col_3": "التفاصيل الهندسية",
    "health.cta_title": "معتمد من وزارة الصحة و ISO",
    "health.cta_btn": "طلب استشارة هندسية",

    // Compliance standards
    "health.std_1_title": "أسطح مضادة للميكروبات",
    "health.std_1_desc": "معالجة برقائق خشبية طبية وتشطيبات تقضي بنشاط على نمو البكتيريا والفطريات والفيروسات. مجربة للتحمل ضد المعقمات الطبية.",
    "health.std_1_benefit": "تقلل العدوى المكتسبة في المستشفيات وتضمن سهولة التنظيف والتعقيم.",
    "health.std_2_title": "مقاومة حريق معتمدة",
    "health.std_2_desc": "مصنعة بقلوب معدنية وعلاجات خشبية مقاومة للحريق، تقدم تصنيفات من ٣٠ إلى ١٢٠ دقيقة. متوافقة تماماً مع لوائح الدفاع المدني وساسو.",
    "health.std_2_benefit": "تضمن مسارات إخلاء آمنة في ممرات المستشفيات والغرف الطبية.",
    "health.std_3_title": "مقاومة الرطوبة والانتفاخ",
    "health.std_3_desc": "مصممة باستخدام نوى البولي يوريثين عالية الكثافة ولاصق مقاوم للماء يمنع التمدد أو التمزق في البيئات عالية الرطوبة.",
    "health.std_3_benefit": "تطيل عمر المنتجات تحت ظروف التطهير والغسيل الشاملة.",
    "health.std_4_title": "تصميم مفاصل خالٍ من الأتربة",
    "health.std_4_desc": "نجارة مستوية مخصصة تلغي الأخاديد العميقة حيث يمكن أن يستقر الغبار والمواد العضوية. جميع المقابض مدمجة ومستوية لمنع تراكم الأتربة.",
    "health.std_4_benefit": "تحافظ على معايير النظافة المطلقة في غرف العمليات والغرف النظيفة.",

    // Medical products table
    "health.prod_1_name": "أبواب سريرية معتمدة من وزارة الصحة",
    "health.prod_1_use": "غرف المرضى، الممرات، العناية المركزة",
    "health.prod_1_specs": "إطار خشب صلب، خيار تبطين رصاص، صفائح حماية مخصصة، زجاج مراقبة مستوٍ بالكامل.",
    "health.prod_2_name": "أبواب أشعة مبطنة بالرصاص",
    "health.prod_2_use": "غرف الأشعة السينية والتشخيص والرنين المغناطيسي",
    "health.prod_2_specs": "سمك الرصاص الداخلي من ١ ملم إلى ٣ ملم، مفصلات ثقيلة الحمل، إغلاق حوافٍ محكم.",
    "health.prod_3_name": "خزائن وتجهيزات مختبرات معقمة",
    "health.prod_3_use": "المختبرات، الصيدليات، أجنحة العلاج",
    "health.prod_3_specs": "قلب معاكس بحري، طلاءات مقاومة للمواد الكيميائية والميكروبات، غلق ناعم للأبواب.",
    "health.prod_4_name": "تكسية حوائط مضادة للميكروبات",
    "health.prod_4_use": "صالات غرف العمليات، ممرات المستشفيات",
    "health.prod_4_specs": "رقائق مقاومة للصدمات، وصلات سلسة، طبقة خلفية مقاومة للرطوبة، تشطيب سهل التطهير.",

    // ── Portfolio ────────────────────────────────────────────────────────────
    "portfolio.label": "المعرض المتميز",
    "portfolio.title": "مشاريعنا الراقية",
    "portfolio.desc": "اكتشف مجموعة مختارة من تركيباتنا الصحية والتجارية والسكنية المكتملة في أنحاء المملكة العربية السعودية.",

    // ── Networks ─────────────────────────────────────────────────────────────
    "networks.label": "شبكاتنا",
    "networks.title": "شركاء الأعمال الموثوقين",
    "networks.desc": "نوّرد الأعمال الخشبية المخصصة والأبواب المعتمدة للمطورين الرائدين والمؤسسات العامة في المملكة.",

    // ── Trust Banner ─────────────────────────────────────────────────────────
    "trust.title": "لديك مناقصة نشطة أو استفسار عن تصميم مخصص؟",
    "trust.desc": "سيقوم مهندسونا بجدة بتقدير الأسعار وأوقات إنجاز المشروع في غضون ٤٨ ساعة.",
    "trust.btn": "تقديم المواصفات ←",

    // ── Footer ───────────────────────────────────────────────────────────────
    "footer.navigation": "التصفح",
    "footer.hq": "المقر الرئيسي",
    "footer.factory": "مصنع خشب",
    "footer.address": "المدينة الصناعية الثانية، جدة،\nالمملكة العربية السعودية",
    "footer.contact": "تفاصيل الاتصال",
    "footer.cr": "السجل التجاري",
    "footer.vat": "الرقم الضريبي",
    "footer.copy": "جميع الحقوق محفوظة.",

    // ── Newsletter Popup ─────────────────────────────────────────────────────
    "newsletter.tag": "أفكار الأعمال الخشبية المخصصة",
    "newsletter.title": "انضم إلى قائمة الجامعين",
    "newsletter.desc": "اشترك لتلقّي الكتالوجات الحصرية وأبرز مشاريع الجيجا والمجموعات الخاصة الموسمية مباشرةً من ورشة النجارة في جدة.",
    "newsletter.placeholder": "أدخل بريدك الإلكتروني",
    "newsletter.btn": "طلب الانضمام",
    "newsletter.subscribing": "جارٍ الاشتراك...",
    "newsletter.success_title": "تمت الموافقة على الدعوة",
    "newsletter.success_desc": "شكراً لك. لقد تمت إضافتك إلى القائمة الخاصة لـ خشب.",

    // ── About Page ───────────────────────────────────────────────────────────
    "about.label": "تاريخنا",
    "about.title": "هندسة الأخشاب منذ عام ٢٠١٥",
    "about.milestone_1_year": "٢٠١٥",
    "about.milestone_1_title": "تأسيس الشركة في جدة",
    "about.narrative_title": "رحلة الحرفية والتوسع الصناعي",
    "about.narrative_1": "بدأت شركة خشب كورشة عمل صغيرة في جدة، أسسها حرفيون خبراء أدركوا الحاجة إلى أعمال خشبية معمارية دقيقة وعالية الجودة في السوق السعودي. من خلال الجمع بين مهارات النجارة التقليدية ومعايير التصنيع الصارمة، سرعان ما اكتسبت الشركة سمعة طيبة في الجودة.",
    "about.narrative_2": "في عام ٢٠١٩، وسّعنا عملياتنا بإنشاء مصنعنا المتطور في المدينة الصناعية الثانية بجدة. تجهيز المصنع بآلات CNC المؤتمتة أتاح لنا التوسع من التجهيزات الفردية إلى عقود التوريد التجارية والتعليمية والصحية الكبرى.",
    "about.narrative_3": "اليوم، تعد شركة خشب شريكاً موثوقاً لكبار المطورين وشركات الإنشاءات في المملكة، بفضل معرفتنا العميقة بالمواد، وقدراتنا الهندسية، وامتثالنا الصارم لمعايير البناء المحلية.",
    "about.mission_label": "رسالتنا وهدفنا",
    "about.mission_title": "تحقيق رؤية العميل",
    "about.mission_desc": "نلتزم بتحقيق رؤية العميل من خلال تشكيل منتجات خشبية فاخرة وفق المواصفات المطلوبة في وقت قياسي وبأسعار تنافسية.",
    "about.vision_label": "رؤيتنا",
    "about.vision_title": "الخيار الأول",
    "about.vision_desc": "أن نكون الخيار الأول للمنتجات الخشبية في المملكة العربية السعودية، والخيار المتخصص الرائد في منشآت الرعاية الصحية بالمملكة.",
    "about.goals_label": "أهدافنا",
    "about.goals_title": "الأهداف الاستراتيجية",
    "about.goals_1": "تسليم منتجات وأيقونات خشبية فريدة.",
    "about.goals_2": "التوسع في حضورنا بالسوق السعودي.",
    "about.goals_3": "بناء ثقة العملاء ورضاهم على المدى الطويل.",
    "about.why_label": "لماذا خشب",
    "about.why_title": "نقاط قوتنا التميزية",
    "about.why_1_title": "الابتكار والإبداع",
    "about.why_1_desc": "نصمم باستمرار أيقونات خشبية فريدة تضفي البهجة والجمال على المساحات.",
    "about.why_2_title": "الالتزام بالجودة",
    "about.why_2_desc": "اختيار أفضل الأخشاب ومعالجتها تحت عمليات تدقيق تصنيع صارمة.",
    "about.why_3_title": "أوقات تسليم قياسية",
    "about.why_3_desc": "مصانع CNC عالية الطاقة والدقة تضمن هندسة وشحناً سريعاً.",
    "about.why_4_title": "خدمة ما بعد البيع",
    "about.why_4_desc": "دعم صيانة شامل ومتابعة مشاريع لبناء ثقة العملاء.",
    "about.cert_label": "الاعتمادات والشهادات",
    "about.cert_title": "معايير ISO 9001 وممارسات التصنيع الجيدة",
    "about.cert_desc": "تخضع جميع المكونات الخشبية المصنعة في مصنعنا بجدة لتدقيق بروتوكولات الجودة الدولية. تفخر شركة خشب بحصولها على شهادة ISO 9001:2015 والالتزام الصارم بمعايير GMP.",
    "about.cta_title": "شاركونا",
    "about.cta_desc": "اختبر قدرة النجارة الفريدة التي تجلب الجمال والبهجة والامتثال لمساحاتك.",
    "about.cta_btn": "تواصل معنا",
    // backward compat
    "about.standards_label": "تدقيق الجودة",
    "about.standards_title": "معايير ISO 9001 وممارسات التصنيع الجيدة",
    "about.standards_desc": "تخضع جميع المكونات الخشبية المصنعة في مصنعنا لتدقيق بروتوكولات الجودة الدولية.",
    "about.val_1_title": "دقة هندسية CNC",
    "about.val_2_title": "الامتثال المعتمد",
    "about.val_2_desc": "تحمل أبوابنا وتجهيزاتنا شهادة ISO 9001:2015 الكاملة، وتصنيفات مقاومة الحريق من الدفاع المدني، ومعايير وزارة الصحة.",
    "about.val_3_title": "توريد مستدام",
    "about.val_3_desc": "نستورد أخشاباً ممتازة ومستدامة مجففة خصيصاً لمقاومة مستويات رطوبة الخليج.",
    "health.intro_title": "الخيار الأول للمنشآت الطبية السعودية",
    "health.intro_desc_1": "تتطلب منشآت الرعاية الصحية تركيبات خشبية تجمع بين المتانة الهيكلية المطلقة وضوابط النظافة الصارمة.",

    // ── Contact Page ─────────────────────────────────────────────────────────
    "contact.label": "تواصل معنا",
    "contact.title": "شراكة مع خشب للهندسة الخشبية الفاخرة",
    "contact.info_title": "مجمع مصنع خشب",
    "contact.address": "المدينة الصناعية الثانية، المرحلة الثالثة\nجدة، المملكة العربية السعودية",
    "contact.hq_label": "المقر الرئيسي والمصنع بجدة",
    "contact.hours_label": "ساعات العمل",
    "contact.hours_title": "أوقات التشغيل",
    "contact.hours_text": "من السبت إلى الخميس: ٨:٠٠ صباحاً — ٥:٠٠ مساءً\nالجمعة: مغلق",
    "contact.direct_label": "الاستفسارات المباشرة",
    "contact.direct_title": "تواصل معنا",
    "contact.phone_label": "الهاتف",
    "contact.form_title": "نموذج طلب عرض الأسعار / المواصفات",
    "contact.networks_label": "شبكاتنا",
    "contact.networks_title": "موثوق به من قبل كبار المطورين السعوديين والمؤسسات",
    "contact.networks_desc": "نوّرد الأعمال الخشبية المخصصة والأبواب المعتمدة للمطورين الخاصين والمقار الشركاتية والمبادرات الحكومية.",
    "contact.form_desc": "يرجى تقديم تفاصيل مواصفات المناقصة أو طلبك المخصص، وسيتابع مكتبنا الهندسي الأسعار معك.",
    "contact.input_name": "اسم جهة الاتصال",
    "contact.input_company": "الشركة / المنظمة",
    "contact.input_email": "البريد الإلكتروني للعمل",
    "contact.input_phone": "رقم الهاتف",
    "contact.input_category": "فئة المنتج",
    "contact.cat_doors": "الأبواب المعمارية",
    "contact.cat_kitchens": "المطابخ وخزائن الملابس",
    "contact.cat_healthcare": "تجهيزات الرعاية الصحية والأبواب الطبية",
    "contact.cat_commercial": "تجهيز المكاتب التجارية",
    "contact.cat_general": "أعمال خشبية مخصصة أخرى",
    "contact.input_volume": "الكمية التقديرية",
    "contact.vol_single": "مشروع مخصص واحد",
    "contact.vol_mid": "١٠ - ٥٠ وحدة (دفعة صغيرة)",
    "contact.vol_large": "٢٠٠+ وحدة (تجاري / صحي كبير)",
    "contact.input_details": "مواصفات المشروع ومتطلباته",
    "contact.btn_submit": "إرسال طلب المواصفات",
    "contact.submitting": "جارٍ المعالجة...",
    "contact.success_title": "تم استلام الطلب",
    "contact.success_desc": "شكراً لتواصلكم. سيراجع مستشار مشاريع B2B في خشب مواصفاتكم ويتواصل معكم خلال ٢٤ ساعة عمل.",
    "contact.btn_another": "تقديم طلب آخر",
    "contact.cr_label": "السجل التجاري",
    "contact.vat_label": "الرقم الضريبي",

    // ── Dynamic DB category titles & descriptions (seeded defaults) ──────────
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

    // ── Journey stage DB defaults ────────────────────────────────────────────
    "01. Material Sourcing": "٠١. توريد المواد الخام",
    "02. Shop Drawings & CAD": "٠٢. الرسومات التنفيذية وتصميم CAD",
    "03. Computerized CNC Milling": "٠٣. خرط وحفر CNC المؤتمت",
    "04. Assembly & Sanding": "٠٤. التجميع والتنعيم اليدوي",
    "Sustainable, Prime Hardwood Selection": "اختيار الأخشاب الصلبة المستدامة والممتازة",
    "Micron-Level Engineering Precision": "هندسة دقيقة بمستوى الميكرون",
    "Automated Industrial Scaling": "الإنتاج الصناعي المؤتمت",
    "SOP Audited Hand-Finishing": "التشطيب اليدوي الخاضع للتدقيق",
  },
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
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key] ?? translations["en"][key] ?? key;
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
