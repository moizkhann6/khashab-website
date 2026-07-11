"use server";

import { sql } from "@vercel/postgres";
import { Project } from "@/data/projects";
import { Inquiry, ClientPartner, HeroSlide } from "@/context/DbContext";

// DEFAULT MOCK DATA FOR SEEDING
const defaultProjects: Omit<Project, "id">[] = [
  {
    title: "King Faisal Specialist Hospital",
    category: "healthcare",
    location: "Jeddah, KSA",
    description: "Supply and installation of 220+ solid wood clinical doors with lead lining for radiology, antimicrobial wood paneling, and pharmacy cabinets matching strict MoH standards.",
    image: "/images/healthcare.jpg",
    specs: ["MOH Compliant", "Anti-microbial", "Fire-Rated 90min", "Lead-Lined"]
  },
  {
    title: "ROSHN Sedra Community",
    category: "residential",
    location: "Jeddah, KSA",
    description: "Custom supply of luxury double-swing walnut entrance pivot doors and flush veneer interior bedroom doors for 45 luxury villas.",
    image: "/images/residential.jpg",
    specs: ["Prime Walnut", "Pivot Hinge", "Hidden Frames", "Satin Finish"]
  },
  {
    title: "SABIC Headquarters",
    category: "commercial",
    location: "Jubail, KSA",
    description: "Bespoke executive office walnut desks, seamless meeting room tables with integrated cable runs, and acoustic oak-slatted ceiling panels.",
    image: "/images/commercial.jpg",
    specs: ["Acoustic Oak", "CNC Milling", "CAD Custom", "SABIC Spec"]
  },
  {
    title: "Dar Al Arkan Luxury Villa",
    category: "residential",
    location: "Jeddah, KSA",
    description: "Bespoke full-height walk-in closets with integrated leather lining, automated LED strip lights, and glass-door wardrobes.",
    image: "/images/residential.jpg",
    specs: ["Bespoke Closets", "Integrated LED", "Glass Joinery", "Jeddah Real Estate"]
  },
  {
    title: "Sulaiman Al Habib Medical Center",
    category: "healthcare",
    location: "Khobar, KSA",
    description: "Corridor panel cladding, custom nurse reception hubs, and specialized sterile woodwork accessories for ICU suites.",
    image: "/images/healthcare.jpg",
    specs: ["ICU Compliant", "Sterilization Easy", "Corridor Panels", "GMP Grade"]
  },
  {
    title: "Jeddah Financial District Office",
    category: "commercial",
    location: "Jeddah, KSA",
    description: "High-volume custom fire-rated fire corridor doors, acoustic wall claddings, and flush office entry cabinets.",
    image: "/images/commercial.jpg",
    specs: ["Jeddah Spec", "Acoustic Walls", "Fire Rated 60min"]
  }
];

const defaultSlides: HeroSlide[] = [
  {
    image: "/images/residential.jpg",
    category: "Residential Bespoke",
    title: "Quality that lasts, Elegance that impresses.",
    subtitle: "Sleek architectural doors, built-in wardrobes, and custom interior carpentry designed for luxury residential living.",
    linkText: "Explore Residential Solutions",
    linkHref: "/services#doors",
  },
  {
    image: "/images/commercial.jpg",
    category: "Commercial Fit-Outs",
    title: "Precision engineering for modern B2B spaces.",
    subtitle: "Custom boardrooms, reception counters, and acoustic slatted wood panelling crafted to corporate specifications.",
    linkText: "Explore Commercial Services",
    linkHref: "/services#furniture",
  },
  {
    image: "/images/healthcare.jpg",
    category: "Specialized Division",
    title: "MOH-compliant clinical wood solutions.",
    subtitle: "Anti-microbial laminates, seamless joints, and certified fire-rated door assemblies engineered for safety and hygiene.",
    linkText: "Explore Healthcare Specs",
    linkHref: "/healthcare",
  },
];

const defaultClients: ClientPartner[] = [
  { id: "partner-1", name: "Ministry of Health", role: "MOH Compliance Approved", logo: "" },
  { id: "partner-2", name: "ROSHN", role: "Giga-Project Partner", logo: "" },
  { id: "partner-3", name: "Dar Al Arkan", role: "Real Estate Supplier", logo: "" },
  { id: "partner-4", name: "Diriyah Gate Authority", role: "Joinery Consultant", logo: "" },
  { id: "partner-5", name: "National Housing Co.", role: "Door Manufacturer", logo: "" },
  { id: "partner-6", name: "KFSHRC", role: "Clinical Casework Client", logo: "" },
];

export interface Certification {
  id: string;
  name: string;
  logo: string;
}

const defaultCerts: Certification[] = [
  { id: "cert-1", name: "ISO 9001:2015", logo: "ISO 9001" },
  { id: "cert-2", name: "IFC Certified", logo: "IFC" },
  { id: "cert-3", name: "Saudi Made", logo: "Saudi Made" },
  { id: "cert-4", name: "SASO Compliant", logo: "SASO" },
  { id: "cert-5", name: "Saudi Civil Defense", logo: "Civil Defense" },
  { id: "cert-6", name: "FSC Certified", logo: "FSC" }
];

export interface CategoryItem {
  id: string;
  title: string;
  image: string;
  description: string;
  href: string;
}

export interface JourneyStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
}

const defaultCategories: CategoryItem[] = [
  { id: "doors", title: "Bespoke Doors", image: "/images/residential.jpg", description: "Solid pivot and flush interior doors built to custom specs.", href: "/services#doors" },
  { id: "windows", title: "Premium Windows", image: "/images/commercial.jpg", description: "Climate-adapted timber windows with dual-seal barriers.", href: "/services#windows" },
  { id: "kitchens", title: "Bespoke Kitchens", image: "/images/residential.jpg", description: "Handle-less luxury cabinetry with moisture-resistant cores.", href: "/services#kitchens" },
  { id: "wardrobes", title: "Custom Wardrobes", image: "/images/residential.jpg", description: "Seamless integrated dressings and built-in closet units.", href: "/services#wardrobes" },
  { id: "closets", title: "Luxury Closets", image: "/images/residential.jpg", description: "High-end storage units featuring leather linings and custom lights.", href: "/services#closets" },
  { id: "bedrooms", title: "Bespoke Bedrooms", image: "/images/residential.jpg", description: "Bed frames, nightstands, and panelings matched to your space.", href: "/services#bedrooms" },
  { id: "office-furniture", title: "Office Furniture", image: "/images/commercial.jpg", description: "Acoustic panels and monolithic desks built to CAD spec.", href: "/services#office-furniture" },
  { id: "general-furniture", title: "Custom Furniture", image: "/images/commercial.jpg", description: "Unique wood icons designed to bring joy and beauty to spaces.", href: "/services#general-furniture" },
];

const defaultJourney: JourneyStep[] = [
  {
    id: 1,
    title: "01. Material Sourcing",
    subtitle: "Sustainable, Prime Hardwood Selection",
    description: "Every project starts with selecting the finest raw timber. We sustainably import prime walnut, white oak, ash, and beech. The wood is stored and dried under climate-controlled conditions to match Saudi relative humidity specs, preventing warping and cracking.",
    image: "/images/residential.jpg",
    accent: "Walnut & Oak"
  },
  {
    id: 2,
    title: "02. Shop Drawings & CAD",
    subtitle: "Micron-Level Engineering Precision",
    description: "Our Jeddah engineering department translates architectural sketches and tender specifications into detailed CAD shop drawings. We pre-plan internal structural reinforcement, cable pathways, and joinery details before milling.",
    image: "/images/commercial.jpg",
    accent: "Engineering Shop"
  },
  {
    id: 3,
    title: "03. Computerized CNC Milling",
    subtitle: "Automated Industrial Scaling",
    description: "Using automated, high-precision German CNC machinery, wood panels and frames are cut to within 0.1mm of specifications. This guarantees consistent joints, matching grains, and rapid lead times for high-volume B2B orders.",
    image: "/images/commercial.jpg",
    accent: "CNC Machinery"
  },
  {
    id: 4,
    title: "04. Sanding & Sterile Coating",
    subtitle: "ISO 9001 & GMP Hand Finishing",
    description: "Traditional carpenters sand each piece to a flawless touch. We then apply specialized coatings, including Ministry of Health compliant anti-microbial treatments and fire-retardant sealants, audited under ISO 9001 and GMP standards.",
    image: "/images/healthcare.jpg",
    accent: "Anti-Microbial Polish"
  }
];

// 1. DATABASE INITIALIZATION ACTION
export async function initDbAction() {
  try {
    // A. Create Tables
    await sql`
      CREATE TABLE IF NOT EXISTS khashab_logo (
        id SERIAL PRIMARY KEY,
        logo_text TEXT NOT NULL,
        healthcare_bg TEXT DEFAULT '/images/healthcare.jpg'
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS khashab_projects (
        id VARCHAR(255) PRIMARY KEY,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        location TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        specs TEXT[] NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS khashab_clients (
        id VARCHAR(255) PRIMARY KEY,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        logo TEXT DEFAULT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS khashab_slides (
        id INT PRIMARY KEY,
        image TEXT NOT NULL,
        category TEXT NOT NULL,
        title TEXT NOT NULL,
        subtitle TEXT NOT NULL,
        link_text TEXT NOT NULL,
        link_href TEXT NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS khashab_inquiries (
        id VARCHAR(255) PRIMARY KEY,
        name TEXT NOT NULL,
        company TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        category TEXT NOT NULL,
        volume TEXT NOT NULL,
        details TEXT NOT NULL,
        date TEXT NOT NULL,
        read BOOLEAN DEFAULT FALSE
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS khashab_categories (
        id VARCHAR(255) PRIMARY KEY,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        description TEXT NOT NULL,
        href TEXT NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS khashab_journey (
        id INT PRIMARY KEY,
        title TEXT NOT NULL,
        subtitle TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        accent TEXT NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS khashab_certifications (
        id VARCHAR(255) PRIMARY KEY,
        name TEXT NOT NULL,
        logo TEXT NOT NULL
      );
    `;

    // Alter column types to TEXT if the tables were previously created with VARCHAR(255) limits
    await sql`ALTER TABLE khashab_logo ALTER COLUMN logo_text TYPE TEXT;`;
    
    await sql`ALTER TABLE khashab_projects ALTER COLUMN title TYPE TEXT;`;
    await sql`ALTER TABLE khashab_projects ALTER COLUMN category TYPE TEXT;`;
    await sql`ALTER TABLE khashab_projects ALTER COLUMN location TYPE TEXT;`;
    await sql`ALTER TABLE khashab_projects ALTER COLUMN image TYPE TEXT;`;

    await sql`ALTER TABLE khashab_clients ALTER COLUMN name TYPE TEXT;`;
    await sql`ALTER TABLE khashab_clients ALTER COLUMN role TYPE TEXT;`;

    await sql`ALTER TABLE khashab_slides ALTER COLUMN image TYPE TEXT;`;
    await sql`ALTER TABLE khashab_slides ALTER COLUMN category TYPE TEXT;`;
    await sql`ALTER TABLE khashab_slides ALTER COLUMN title TYPE TEXT;`;
    await sql`ALTER TABLE khashab_slides ALTER COLUMN link_text TYPE TEXT;`;
    await sql`ALTER TABLE khashab_slides ALTER COLUMN link_href TYPE TEXT;`;

    await sql`ALTER TABLE khashab_inquiries ALTER COLUMN name TYPE TEXT;`;
    await sql`ALTER TABLE khashab_inquiries ALTER COLUMN company TYPE TEXT;`;
    await sql`ALTER TABLE khashab_inquiries ALTER COLUMN email TYPE TEXT;`;
    await sql`ALTER TABLE khashab_inquiries ALTER COLUMN phone TYPE TEXT;`;
    await sql`ALTER TABLE khashab_inquiries ALTER COLUMN category TYPE TEXT;`;
    await sql`ALTER TABLE khashab_inquiries ALTER COLUMN volume TYPE TEXT;`;
    await sql`ALTER TABLE khashab_inquiries ALTER COLUMN date TYPE TEXT;`;

    // Database migrations to ensure new settings and logo columns exist
    try {
      await sql`ALTER TABLE khashab_logo ADD COLUMN IF NOT EXISTS healthcare_bg TEXT DEFAULT '/images/healthcare.jpg';`;
    } catch (e) {
      console.error("Migration error adding healthcare_bg to khashab_logo:", e);
    }

    try {
      await sql`ALTER TABLE khashab_clients ADD COLUMN IF NOT EXISTS logo TEXT DEFAULT NULL;`;
    } catch (e) {
      console.error("Migration error adding logo column to khashab_clients:", e);
    }

    try {
      await sql`ALTER TABLE khashab_logo ADD COLUMN IF NOT EXISTS about_bg TEXT DEFAULT '/images/residential.jpg';`;
      await sql`ALTER TABLE khashab_logo ADD COLUMN IF NOT EXISTS services_bg TEXT DEFAULT '/images/commercial.jpg';`;
      await sql`ALTER TABLE khashab_logo ADD COLUMN IF NOT EXISTS healthcare_page_bg TEXT DEFAULT '/images/healthcare.jpg';`;
      await sql`ALTER TABLE khashab_logo ADD COLUMN IF NOT EXISTS contact_bg TEXT DEFAULT '/images/residential.jpg';`;
    } catch (e) {
      console.error("Migration error adding background fields to khashab_logo:", e);
    }

    // B. Seed Default Settings & Logo
    const logoCheck = await sql`SELECT * FROM khashab_logo LIMIT 1`;
    if (logoCheck.rowCount === 0) {
      await sql`INSERT INTO khashab_logo (logo_text, healthcare_bg) VALUES ('KhashabSA', '/images/healthcare.jpg')`;
    }

    // C. Seed Default Projects
    const projectsCheck = await sql`SELECT * FROM khashab_projects LIMIT 1`;
    if (projectsCheck.rowCount === 0) {
      for (let i = 0; i < defaultProjects.length; i++) {
        const p = defaultProjects[i];
        const id = `proj-${i + 1}`;
        await sql`
          INSERT INTO khashab_projects (id, title, category, location, description, image, specs)
          VALUES (${id}, ${p.title}, ${p.category}, ${p.location}, ${p.description}, ${p.image}, ${p.specs as any})
        `;
      }
    }

    // D. Seed Default Clients
    const clientsCheck = await sql`SELECT * FROM khashab_clients LIMIT 1`;
    if (clientsCheck.rowCount === 0) {
      for (const c of defaultClients) {
        await sql`
          INSERT INTO khashab_clients (id, name, role, logo)
          VALUES (${c.id}, ${c.name}, ${c.role}, ${c.logo || null})
        `;
      }
    }

    // E. Seed Default Slides
    const slidesCheck = await sql`SELECT * FROM khashab_slides LIMIT 1`;
    if (slidesCheck.rowCount === 0) {
      for (let i = 0; i < defaultSlides.length; i++) {
        const s = defaultSlides[i];
        await sql`
          INSERT INTO khashab_slides (id, image, category, title, subtitle, link_text, link_href)
          VALUES (${i}, ${s.image}, ${s.category}, ${s.title}, ${s.subtitle}, ${s.linkText}, ${s.linkHref})
        `;
      }
    }

    // F. Seed Default Product Categories
    const categoriesCheck = await sql`SELECT * FROM khashab_categories LIMIT 1`;
    if (categoriesCheck.rowCount === 0) {
      for (const cat of defaultCategories) {
        await sql`
          INSERT INTO khashab_categories (id, title, image, description, href)
          VALUES (${cat.id}, ${cat.title}, ${cat.image}, ${cat.description}, ${cat.href})
        `;
      }
    }

    // G. Seed Default Journey Steps
    const journeyCheck = await sql`SELECT * FROM khashab_journey LIMIT 1`;
    if (journeyCheck.rowCount === 0) {
      for (const step of defaultJourney) {
        await sql`
          INSERT INTO khashab_journey (id, title, subtitle, description, image, accent)
          VALUES (${step.id}, ${step.title}, ${step.subtitle}, ${step.description}, ${step.image}, ${step.accent})
        `;
      }
    }

    // H. Seed Default Certifications
    const certsCheck = await sql`SELECT * FROM khashab_certifications LIMIT 1`;
    if (certsCheck.rowCount === 0) {
      for (const cert of defaultCerts) {
        await sql`
          INSERT INTO khashab_certifications (id, name, logo)
          VALUES (${cert.id}, ${cert.name}, ${cert.logo})
        `;
      }
    }

    return { success: true, message: "Database initialized and seeded successfully!" };
  } catch (error) {
    console.error("Database seed error:", error);
    return { success: false, error: String(error) };
  }
}

// 2. LOGO & GENERAL SETTINGS ACTIONS
export async function getLogoAction() {
  try {
    const { rows } = await sql`SELECT logo_text FROM khashab_logo ORDER BY id ASC LIMIT 1`;
    if (rows.length > 0) return rows[0].logo_text;
    return "KhashabSA";
  } catch (error) {
    console.error("Error fetching logo:", error);
    return "KhashabSA";
  }
}

export async function updateLogoAction(logoText: string) {
  try {
    // Check if row exists, if yes update logo_text, if not insert
    const check = await sql`SELECT * FROM khashab_logo LIMIT 1`;
    if (check.rows.length > 0) {
      await sql`UPDATE khashab_logo SET logo_text = ${logoText}`;
    } else {
      await sql`INSERT INTO khashab_logo (logo_text, healthcare_bg) VALUES (${logoText}, '/images/healthcare.jpg')`;
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating logo:", error);
    return { success: false, error: String(error) };
  }
}

export async function getHealthcareBgAction(): Promise<string> {
  try {
    const { rows } = await sql`SELECT healthcare_bg FROM khashab_logo LIMIT 1`;
    if (rows.length > 0 && rows[0].healthcare_bg) return rows[0].healthcare_bg;
    return "/images/healthcare.jpg";
  } catch (error) {
    console.error("Error fetching healthcare bg:", error);
    return "/images/healthcare.jpg";
  }
}

export async function updateHealthcareBgAction(url: string) {
  try {
    const check = await sql`SELECT * FROM khashab_logo LIMIT 1`;
    if (check.rows.length > 0) {
      await sql`UPDATE khashab_logo SET healthcare_bg = ${url}`;
    } else {
      await sql`INSERT INTO khashab_logo (logo_text, healthcare_bg) VALUES ('KhashabSA', ${url})`;
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating healthcare bg:", error);
    return { success: false, error: String(error) };
  }
}

export async function getAboutBgAction(): Promise<string> {
  try {
    const { rows } = await sql`SELECT about_bg FROM khashab_logo LIMIT 1`;
    if (rows.length > 0 && rows[0].about_bg) return rows[0].about_bg;
    return "/images/residential.jpg";
  } catch (error) {
    console.error("Error fetching about bg:", error);
    return "/images/residential.jpg";
  }
}

export async function updateAboutBgAction(url: string) {
  try {
    const check = await sql`SELECT * FROM khashab_logo LIMIT 1`;
    if (check.rows.length > 0) {
      await sql`UPDATE khashab_logo SET about_bg = ${url}`;
    } else {
      await sql`INSERT INTO khashab_logo (logo_text, about_bg) VALUES ('KhashabSA', ${url})`;
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating about bg:", error);
    return { success: false, error: String(error) };
  }
}

export async function getServicesBgAction(): Promise<string> {
  try {
    const { rows } = await sql`SELECT services_bg FROM khashab_logo LIMIT 1`;
    if (rows.length > 0 && rows[0].services_bg) return rows[0].services_bg;
    return "/images/commercial.jpg";
  } catch (error) {
    console.error("Error fetching services bg:", error);
    return "/images/commercial.jpg";
  }
}

export async function updateServicesBgAction(url: string) {
  try {
    const check = await sql`SELECT * FROM khashab_logo LIMIT 1`;
    if (check.rows.length > 0) {
      await sql`UPDATE khashab_logo SET services_bg = ${url}`;
    } else {
      await sql`INSERT INTO khashab_logo (logo_text, services_bg) VALUES ('KhashabSA', ${url})`;
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating services bg:", error);
    return { success: false, error: String(error) };
  }
}

export async function getHealthcarePageBgAction(): Promise<string> {
  try {
    const { rows } = await sql`SELECT healthcare_page_bg FROM khashab_logo LIMIT 1`;
    if (rows.length > 0 && rows[0].healthcare_page_bg) return rows[0].healthcare_page_bg;
    return "/images/healthcare.jpg";
  } catch (error) {
    console.error("Error fetching healthcare page bg:", error);
    return "/images/healthcare.jpg";
  }
}

export async function updateHealthcarePageBgAction(url: string) {
  try {
    const check = await sql`SELECT * FROM khashab_logo LIMIT 1`;
    if (check.rows.length > 0) {
      await sql`UPDATE khashab_logo SET healthcare_page_bg = ${url}`;
    } else {
      await sql`INSERT INTO khashab_logo (logo_text, healthcare_page_bg) VALUES ('KhashabSA', ${url})`;
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating healthcare page bg:", error);
    return { success: false, error: String(error) };
  }
}

export async function getContactBgAction(): Promise<string> {
  try {
    const { rows } = await sql`SELECT contact_bg FROM khashab_logo LIMIT 1`;
    if (rows.length > 0 && rows[0].contact_bg) return rows[0].contact_bg;
    return "/images/residential.jpg";
  } catch (error) {
    console.error("Error fetching contact bg:", error);
    return "/images/residential.jpg";
  }
}

export async function updateContactBgAction(url: string) {
  try {
    const check = await sql`SELECT * FROM khashab_logo LIMIT 1`;
    if (check.rows.length > 0) {
      await sql`UPDATE khashab_logo SET contact_bg = ${url}`;
    } else {
      await sql`INSERT INTO khashab_logo (logo_text, contact_bg) VALUES ('KhashabSA', ${url})`;
    }
    return { success: true };
  } catch (error) {
    console.error("Error updating contact bg:", error);
    return { success: false, error: String(error) };
  }
}

// 3. PROJECTS ACTIONS
export async function getProjectsAction(): Promise<Project[]> {
  try {
    const { rows } = await sql`SELECT * FROM khashab_projects ORDER BY id DESC`;
    return rows as Project[];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function addProjectAction(p: Omit<Project, "id">) {
  try {
    const id = `proj-${Date.now()}`;
    await sql`
      INSERT INTO khashab_projects (id, title, category, location, description, image, specs)
      VALUES (${id}, ${p.title}, ${p.category}, ${p.location}, ${p.description}, ${p.image}, ${p.specs as any})
    `;
    return { success: true };
  } catch (error) {
    console.error("Error adding project:", error);
    return { success: false, error: String(error) };
  }
}

export async function updateProjectAction(p: Project) {
  try {
    await sql`
      UPDATE khashab_projects
      SET title = ${p.title}, category = ${p.category}, location = ${p.location}, 
          description = ${p.description}, image = ${p.image}, specs = ${p.specs as any}
      WHERE id = ${p.id}
    `;
    return { success: true };
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, error: String(error) };
  }
}

export async function deleteProjectAction(id: string) {
  try {
    await sql`DELETE FROM khashab_projects WHERE id = ${id}`;
    return { success: true };
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, error: String(error) };
  }
}

// 4. CLIENTS / PARTNERS ACTIONS
export async function getClientsAction(): Promise<ClientPartner[]> {
  try {
    const { rows } = await sql`SELECT * FROM khashab_clients ORDER BY id ASC`;
    return rows as ClientPartner[];
  } catch (error) {
    console.error("Error fetching partners:", error);
    return [];
  }
}

export async function addClientAction(c: Omit<ClientPartner, "id">) {
  try {
    const id = `partner-${Date.now()}`;
    await sql`
      INSERT INTO khashab_clients (id, name, role, logo)
      VALUES (${id}, ${c.name}, ${c.role}, ${c.logo || null})
    `;
    return { success: true };
  } catch (error) {
    console.error("Error adding partner:", error);
    return { success: false, error: String(error) };
  }
}

export async function deleteClientAction(id: string) {
  try {
    await sql`DELETE FROM khashab_clients WHERE id = ${id}`;
    return { success: true };
  } catch (error) {
    console.error("Error deleting partner:", error);
    return { success: false, error: String(error) };
  }
}

// 5. HERO SLIDES ACTIONS
export async function getSlidesAction(): Promise<HeroSlide[]> {
  try {
    const { rows } = await sql`SELECT * FROM khashab_slides ORDER BY id ASC`;
    return rows.map(r => ({
      image: r.image,
      category: r.category,
      title: r.title,
      subtitle: r.subtitle,
      linkText: r.link_text,
      linkHref: r.link_href
    }));
  } catch (error) {
    console.error("Error fetching slides:", error);
    return [];
  }
}

export async function updateSlideAction(index: number, s: HeroSlide) {
  try {
    await sql`
      UPDATE khashab_slides
      SET image = ${s.image}, category = ${s.category}, title = ${s.title},
          subtitle = ${s.subtitle}, link_text = ${s.linkText}, link_href = ${s.linkHref}
      WHERE id = ${index}
    `;
    return { success: true };
  } catch (error) {
    console.error("Error updating slide:", error);
    return { success: false, error: String(error) };
  }
}

// 6. INQUIRIES ACTIONS
export async function getInquiriesAction(): Promise<Inquiry[]> {
  try {
    const { rows } = await sql`SELECT * FROM khashab_inquiries ORDER BY id DESC`;
    return rows as Inquiry[];
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return [];
  }
}

export async function addInquiryAction(inq: Omit<Inquiry, "id" | "date" | "read">) {
  try {
    const id = `inq-${Date.now()}`;
    const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" });
    const read = false;
    await sql`
      INSERT INTO khashab_inquiries (id, name, company, email, phone, category, volume, details, date, read)
      VALUES (${id}, ${inq.name}, ${inq.company}, ${inq.email}, ${inq.phone}, ${inq.category}, ${inq.volume}, ${inq.details}, ${date}, ${read})
    `;
    return { success: true };
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return { success: false, error: String(error) };
  }
}

export async function markInquiryReadAction(id: string) {
  try {
    await sql`UPDATE khashab_inquiries SET read = TRUE WHERE id = ${id}`;
    return { success: true };
  } catch (error) {
    console.error("Error marking inquiry read:", error);
    return { success: false, error: String(error) };
  }
}

export async function deleteInquiryAction(id: string) {
  try {
    await sql`DELETE FROM khashab_inquiries WHERE id = ${id}`;
    return { success: true };
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    return { success: false, error: String(error) };
  }
}

// 7. PRODUCT CATEGORY ACTIONS
export async function getCategoriesAction(): Promise<CategoryItem[]> {
  try {
    const { rows } = await sql`SELECT * FROM khashab_categories ORDER BY id ASC`;
    return rows as CategoryItem[];
  } catch (error) {
    console.error("Error fetching product categories:", error);
    return [];
  }
}

export async function updateCategoryAction(id: string, cat: Omit<CategoryItem, "id" | "href">) {
  try {
    await sql`
      UPDATE khashab_categories
      SET title = ${cat.title}, image = ${cat.image}, description = ${cat.description}
      WHERE id = ${id}
    `;
    return { success: true };
  } catch (error) {
    console.error("Error updating category:", error);
    return { success: false, error: String(error) };
  }
}

// 8. JOURNEY / SCROLLYTELLING ACTIONS
export async function getJourneyAction(): Promise<JourneyStep[]> {
  try {
    const { rows } = await sql`SELECT * FROM khashab_journey ORDER BY id ASC`;
    return rows as JourneyStep[];
  } catch (error) {
    console.error("Error fetching journey steps:", error);
    return [];
  }
}

export async function updateJourneyAction(id: number, step: Omit<JourneyStep, "id">) {
  try {
    await sql`
      UPDATE khashab_journey
      SET title = ${step.title}, subtitle = ${step.subtitle}, 
          description = ${step.description}, image = ${step.image}, accent = ${step.accent}
      WHERE id = ${id}
    `;
    return { success: true };
  } catch (error) {
    console.error("Error updating journey step:", error);
    return { success: false, error: String(error) };
  }
}

// 9. CERTIFICATION ACTIONS
export async function getCertificationsAction(): Promise<Certification[]> {
  try {
    // Self-healing table creation
    await sql`
      CREATE TABLE IF NOT EXISTS khashab_certifications (
        id VARCHAR(255) PRIMARY KEY,
        name TEXT NOT NULL,
        logo TEXT NOT NULL
      );
    `;
    
    // Self-healing seed check
    const check = await sql`SELECT COUNT(*) as count FROM khashab_certifications`;
    if (check.rows[0].count === '0' || check.rows[0].count === 0) {
      for (const cert of defaultCerts) {
        await sql`
          INSERT INTO khashab_certifications (id, name, logo)
          VALUES (${cert.id}, ${cert.name}, ${cert.logo})
        `;
      }
    }

    const { rows } = await sql`SELECT * FROM khashab_certifications ORDER BY id ASC`;
    return rows as Certification[];
  } catch (error) {
    console.error("Error fetching certifications:", error);
    return [];
  }
}

export async function addCertificationAction(cert: Omit<Certification, "id">) {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS khashab_certifications (
        id VARCHAR(255) PRIMARY KEY,
        name TEXT NOT NULL,
        logo TEXT NOT NULL
      );
    `;
    const id = `cert-${Date.now()}`;
    await sql`
      INSERT INTO khashab_certifications (id, name, logo)
      VALUES (${id}, ${cert.name}, ${cert.logo})
    `;
    return { success: true };
  } catch (error) {
    console.error("Error adding certification:", error);
    return { success: false, error: String(error) };
  }
}

export async function deleteCertificationAction(id: string) {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS khashab_certifications (
        id VARCHAR(255) PRIMARY KEY,
        name TEXT NOT NULL,
        logo TEXT NOT NULL
      );
    `;
    await sql`DELETE FROM khashab_certifications WHERE id = ${id}`;
    return { success: true };
  } catch (error) {
    console.error("Error deleting certification:", error);
    return { success: false, error: String(error) };
  }
}
