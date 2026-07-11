"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Project, projects as defaultProjects } from "@/data/projects";

// Define Data Models
export interface Inquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  category: string;
  volume: string;
  details: string;
  date: string;
  read: boolean;
}

export interface ClientPartner {
  id: string;
  name: string;
  role: string;
}

export interface HeroSlide {
  image: string;
  category: string;
  title: string;
  subtitle: string;
  linkText: string;
  linkHref: string;
}

interface DbContextType {
  logo: string;
  projects: Project[];
  inquiries: Inquiry[];
  clients: ClientPartner[];
  slides: HeroSlide[];
  isLoaded: boolean;
  updateLogo: (text: string) => void;
  addProject: (project: Omit<Project, "id">) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  addInquiry: (inquiry: Omit<Inquiry, "id" | "date" | "read">) => void;
  deleteInquiry: (id: string) => void;
  markInquiryRead: (id: string) => void;
  addClient: (client: Omit<ClientPartner, "id">) => void;
  deleteClient: (id: string) => void;
  updateSlide: (index: number, slide: HeroSlide) => void;
}

const DbContext = createContext<DbContextType | undefined>(undefined);

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

export function DbProvider({ children }: { children: React.ReactNode }) {
  const [logo, setLogo] = useState("KhashabSA");
  const [projects, setProjects] = useState<Project[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [clients, setClients] = useState<ClientPartner[]>([]);
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Hydrate data from localStorage on mount (Client-only)
  useEffect(() => {
    try {
      const storedLogo = localStorage.getItem("khashab_logo");
      const storedProjects = localStorage.getItem("khashab_projects");
      const storedInquiries = localStorage.getItem("khashab_inquiries");
      const storedClients = localStorage.getItem("khashab_clients");
      const storedSlides = localStorage.getItem("khashab_slides");

      if (storedLogo) setLogo(JSON.parse(storedLogo));
      else localStorage.setItem("khashab_logo", JSON.stringify("KhashabSA"));

      if (storedProjects) {
        setProjects(JSON.parse(storedProjects));
      } else {
        setProjects(defaultProjects);
        localStorage.setItem("khashab_projects", JSON.stringify(defaultProjects));
      }

      if (storedInquiries) {
        setInquiries(JSON.parse(storedInquiries));
      } else {
        localStorage.setItem("khashab_inquiries", JSON.stringify([]));
      }

      if (storedClients) {
        setClients(JSON.parse(storedClients));
      } else {
        setClients(defaultClients);
        localStorage.setItem("khashab_clients", JSON.stringify(defaultClients));
      }

      if (storedSlides) {
        setSlides(JSON.parse(storedSlides));
      } else {
        setSlides(defaultSlides);
        localStorage.setItem("khashab_slides", JSON.stringify(defaultSlides));
      }
    } catch (e) {
      console.error("Local storage error:", e);
    }
    setIsLoaded(true);
  }, []);

  // Write Helpers
  const updateLogo = (text: string) => {
    setLogo(text);
    localStorage.setItem("khashab_logo", JSON.stringify(text));
  };

  const addProject = (projectData: Omit<Project, "id">) => {
    const newProject: Project = {
      ...projectData,
      id: `proj-${Date.now()}`
    };
    const updated = [newProject, ...projects];
    setProjects(updated);
    localStorage.setItem("khashab_projects", JSON.stringify(updated));
  };

  const updateProject = (updatedProj: Project) => {
    const updated = projects.map(p => p.id === updatedProj.id ? updatedProj : p);
    setProjects(updated);
    localStorage.setItem("khashab_projects", JSON.stringify(updated));
  };

  const deleteProject = (id: string) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    localStorage.setItem("khashab_projects", JSON.stringify(updated));
  };

  const addInquiry = (inquiryData: Omit<Inquiry, "id" | "date" | "read">) => {
    const newInquiry: Inquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }),
      read: false
    };
    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem("khashab_inquiries", JSON.stringify(updated));
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter(i => i.id !== id);
    setInquiries(updated);
    localStorage.setItem("khashab_inquiries", JSON.stringify(updated));
  };

  const markInquiryRead = (id: string) => {
    const updated = inquiries.map(i => i.id === id ? { ...i, read: true } : i);
    setInquiries(updated);
    localStorage.setItem("khashab_inquiries", JSON.stringify(updated));
  };

  const addClient = (clientData: Omit<ClientPartner, "id">) => {
    const newClient: ClientPartner = {
      ...clientData,
      id: `partner-${Date.now()}`
    };
    const updated = [...clients, newClient];
    setClients(updated);
    localStorage.setItem("khashab_clients", JSON.stringify(updated));
  };

  const deleteClient = (id: string) => {
    const updated = clients.filter(c => c.id !== id);
    setClients(updated);
    localStorage.setItem("khashab_clients", JSON.stringify(updated));
  };

  const updateSlide = (index: number, updatedSlide: HeroSlide) => {
    const updated = slides.map((s, idx) => idx === index ? updatedSlide : s);
    setSlides(updated);
    localStorage.setItem("khashab_slides", JSON.stringify(updated));
  };

  return (
    <DbContext.Provider
      value={{
        logo,
        projects,
        inquiries,
        clients,
        slides,
        isLoaded,
        updateLogo,
        addProject,
        updateProject,
        deleteProject,
        addInquiry,
        deleteInquiry,
        markInquiryRead,
        addClient,
        deleteClient,
        updateSlide,
      }}
    >
      {children}
    </DbContext.Provider>
  );
}

export function useDb() {
  const context = useContext(DbContext);
  if (!context) {
    throw new Error("useDb must be used within a DbProvider");
  }
  return context;
}
