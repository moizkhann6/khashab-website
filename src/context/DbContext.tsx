"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Project } from "@/data/projects";
import {
  initDbAction,
  getLogoAction,
  updateLogoAction,
  getProjectsAction,
  addProjectAction,
  updateProjectAction,
  deleteProjectAction,
  getClientsAction,
  addClientAction,
  deleteClientAction,
  getSlidesAction,
  updateSlideAction,
  getInquiriesAction,
  addInquiryAction,
  deleteInquiryAction,
  markInquiryReadAction,
} from "@/app/actions/db";

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
  logo?: string;
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
  updateLogo: (text: string) => Promise<void>;
  addProject: (project: Omit<Project, "id">) => Promise<void>;
  updateProject: (project: Project) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  addInquiry: (inquiry: Omit<Inquiry, "id" | "date" | "read">) => Promise<void>;
  deleteInquiry: (id: string) => Promise<void>;
  markInquiryRead: (id: string) => Promise<void>;
  addClient: (client: Omit<ClientPartner, "id">) => Promise<void>;
  deleteClient: (id: string) => Promise<void>;
  updateSlide: (index: number, slide: HeroSlide) => Promise<void>;
}

const DbContext = createContext<DbContextType | undefined>(undefined);

export function DbProvider({ children }: { children: React.ReactNode }) {
  const [logo, setLogo] = useState("KhashabSA");
  const [projects, setProjects] = useState<Project[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [clients, setClients] = useState<ClientPartner[]>([]);
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize and load Postgres database on mount
  useEffect(() => {
    async function loadDatabase() {
      try {
        // A. Run Table Creation and Seeding (Safe, runs if tables don't exist)
        await initDbAction();

        // B. Fetch Data from Postgres via Server Actions
        const [dbLogo, dbProjects, dbClients, dbSlides, dbInquiries] = await Promise.all([
          getLogoAction(),
          getProjectsAction(),
          getClientsAction(),
          getSlidesAction(),
          getInquiriesAction(),
        ]);

        setLogo(dbLogo);
        setProjects(dbProjects);
        setClients(dbClients);
        setSlides(dbSlides);
        setInquiries(dbInquiries);
      } catch (error) {
        console.error("Error loading server database:", error);
      } finally {
        setIsLoaded(true);
      }
    }

    loadDatabase();
  }, []);

  // Write Helpers
  const updateLogo = async (text: string) => {
    // Optimistic Update
    setLogo(text);
    const result = await updateLogoAction(text);
    if (!result.success) {
      alert("Failed to update logo on database: " + result.error);
      // Revert
      const dbLogo = await getLogoAction();
      setLogo(dbLogo);
    }
  };

  const addProject = async (projectData: Omit<Project, "id">) => {
    const result = await addProjectAction(projectData);
    if (result.success) {
      const dbProjects = await getProjectsAction();
      setProjects(dbProjects);
    } else {
      alert("Failed to add project: " + result.error);
    }
  };

  const updateProject = async (updatedProj: Project) => {
    const result = await updateProjectAction(updatedProj);
    if (result.success) {
      const dbProjects = await getProjectsAction();
      setProjects(dbProjects);
    } else {
      alert("Failed to update project: " + result.error);
    }
  };

  const deleteProject = async (id: string) => {
    const result = await deleteProjectAction(id);
    if (result.success) {
      const dbProjects = await getProjectsAction();
      setProjects(dbProjects);
    } else {
      alert("Failed to delete project: " + result.error);
    }
  };

  const addInquiry = async (inquiryData: Omit<Inquiry, "id" | "date" | "read">) => {
    const result = await addInquiryAction(inquiryData);
    if (result.success) {
      const dbInquiries = await getInquiriesAction();
      setInquiries(dbInquiries);
    } else {
      alert("Failed to submit inquiry: " + result.error);
    }
  };

  const deleteInquiry = async (id: string) => {
    const result = await deleteInquiryAction(id);
    if (result.success) {
      const dbInquiries = await getInquiriesAction();
      setInquiries(dbInquiries);
    } else {
      alert("Failed to delete inquiry: " + result.error);
    }
  };

  const markInquiryRead = async (id: string) => {
    const result = await markInquiryReadAction(id);
    if (result.success) {
      const dbInquiries = await getInquiriesAction();
      setInquiries(dbInquiries);
    } else {
      alert("Failed to mark inquiry as read: " + result.error);
    }
  };

  const addClient = async (clientData: Omit<ClientPartner, "id">) => {
    const result = await addClientAction(clientData);
    if (result.success) {
      const dbClients = await getClientsAction();
      setClients(dbClients);
    } else {
      alert("Failed to add client partner: " + result.error);
    }
  };

  const deleteClient = async (id: string) => {
    const result = await deleteClientAction(id);
    if (result.success) {
      const dbClients = await getClientsAction();
      setClients(dbClients);
    } else {
      alert("Failed to delete client partner: " + result.error);
    }
  };

  const updateSlide = async (index: number, updatedSlide: HeroSlide) => {
    const result = await updateSlideAction(index, updatedSlide);
    if (result.success) {
      const dbSlides = await getSlidesAction();
      setSlides(dbSlides);
    } else {
      alert("Failed to update hero slide: " + result.error);
    }
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
