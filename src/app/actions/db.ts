"use server";

import { sql } from "@vercel/postgres";
import { Project } from "@/data/projects";
import { Inquiry, ClientPartner, HeroSlide } from "@/context/DbContext";

// DEFAULT MOCK DATA FOR SEEDING
const defaultProjects: Omit<Project, "id">[] = [
  {
    title: "King Faisal Specialist Hospital",
    category: "healthcare",
    location: "Riyadh, KSA",
    description: "Supply and installation of 220+ solid wood clinical doors with lead lining for radiology, antimicrobial wood paneling, and pharmacy cabinets matching strict MoH standards.",
    image: "/images/healthcare.jpg",
    specs: ["MOH Compliant", "Anti-microbial", "Fire-Rated 90min", "Lead-Lined"]
  },
  {
    title: "ROSHN Sedra Community",
    category: "residential",
    location: "Riyadh, KSA",
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
    title: "Riyadh Financial District Office",
    category: "commercial",
    location: "KAFD, Riyadh",
    description: "High-volume custom fire-rated fire corridor doors, acoustic wall claddings, and flush office entry cabinets.",
    image: "/images/commercial.jpg",
    specs: ["KAFD Spec", "Acoustic Walls", "Fire Rated 60min"]
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
  { id: "partner-1", name: "Ministry of Health", role: "MOH Compliance Approved" },
  { id: "partner-2", name: "ROSHN", role: "Giga-Project Partner" },
  { id: "partner-3", name: "Dar Al Arkan", role: "Real Estate Supplier" },
  { id: "partner-4", name: "Diriyah Gate Authority", role: "Joinery Consultant" },
  { id: "partner-5", name: "National Housing Co.", role: "Door Manufacturer" },
  { id: "partner-6", name: "KFSHRC", role: "Clinical Casework Client" },
];

// 1. DATABASE INITIALIZATION ACTION
export async function initDbAction() {
  try {
    // A. Create Tables
    await sql`
      CREATE TABLE IF NOT EXISTS khashab_logo (
        id SERIAL PRIMARY KEY,
        logo_text VARCHAR(255) NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS khashab_projects (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        image VARCHAR(255) NOT NULL,
        specs TEXT[] NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS khashab_clients (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS khashab_slides (
        id INT PRIMARY KEY,
        image VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        subtitle TEXT NOT NULL,
        link_text VARCHAR(255) NOT NULL,
        link_href VARCHAR(255) NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS khashab_inquiries (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        volume VARCHAR(255) NOT NULL,
        details TEXT NOT NULL,
        date VARCHAR(255) NOT NULL,
        read BOOLEAN DEFAULT FALSE
      );
    `;

    // B. Seed Default Logo
    const logoCheck = await sql`SELECT * FROM khashab_logo LIMIT 1`;
    if (logoCheck.rowCount === 0) {
      await sql`INSERT INTO khashab_logo (logo_text) VALUES ('KhashabSA')`;
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
          INSERT INTO khashab_clients (id, name, role)
          VALUES (${c.id}, ${c.name}, ${c.role})
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

    return { success: true, message: "Database initialized and seeded successfully!" };
  } catch (error) {
    console.error("Database seed error:", error);
    return { success: false, error: String(error) };
  }
}

// 2. LOGO ACTIONS
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
    await sql`UPDATE khashab_logo SET logo_text = ${logoText} WHERE id = 1`;
    return { success: true };
  } catch (error) {
    console.error("Error updating logo:", error);
    return { success: false, error: String(error) };
  }
}

// 3. PROJECTS ACTIONS
export async function getProjectsAction(): Promise<Project[]> {
  try {
    const { rows } = await sql`SELECT * FROM khashab_projects ORDER BY id DESC`;
    // Map database field formatting to client keys if necessary (here database exactly matches layout schema)
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
      INSERT INTO khashab_clients (id, name, role)
      VALUES (${id}, ${c.name}, ${c.role})
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
