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
  getHealthcareBgAction,
  updateHealthcareBgAction,
  getCategoriesAction,
  updateCategoryAction,
  getJourneyAction,
  updateJourneyAction,
  CategoryItem,
  JourneyStep,
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
  categories: CategoryItem[];
  journeySteps: JourneyStep[];
  healthcareBg: string;
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
  updateHealthcareBg: (url: string) => Promise<void>;
  updateCategory: (id: string, cat: Omit<CategoryItem, "id" | "href">) => Promise<void>;
  updateJourney: (id: number, step: Omit<JourneyStep, "id">) => Promise<void>;
}

const DbContext = createContext<DbContextType | undefined>(undefined);

export function DbProvider({ children }: { children: React.ReactNode }) {
  const [logo, setLogo] = useState("KhashabSA");
  const [projects, setProjects] = useState<Project[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [clients, setClients] = useState<ClientPartner[]>([]);
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [journeySteps, setJourneySteps] = useState<JourneyStep[]>([]);
  const [healthcareBg, setHealthcareBg] = useState("/images/healthcare.jpg");
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize and load Postgres database on mount
  useEffect(() => {
    async function loadDatabase() {
      try {
        // A. Fetch Data from Postgres directly (extremely fast bypass)
        const [dbLogo, dbProjects, dbClients, dbSlides, dbInquiries, dbCategories, dbJourney, dbHealthcareBg] = await Promise.all([
          getLogoAction(),
          getProjectsAction(),
          getClientsAction(),
          getSlidesAction(),
          getInquiriesAction(),
          getCategoriesAction(),
          getJourneyAction(),
          getHealthcareBgAction(),
        ]);

        setLogo(dbLogo);
        setProjects(dbProjects);
        setClients(dbClients);
        setSlides(dbSlides);
        setInquiries(dbInquiries);
        setCategories(dbCategories);
        setJourneySteps(dbJourney);
        setHealthcareBg(dbHealthcareBg);
      } catch (error) {
        console.warn("Database tables might not exist, self-healing initialization in progress...", error);
        try {
          // B. Table creation and Seeding Fallback (runs only if direct fetches fail)
          await initDbAction();

          // C. Re-fetch after seeding completes
          const [dbLogo, dbProjects, dbClients, dbSlides, dbInquiries, dbCategories, dbJourney, dbHealthcareBg] = await Promise.all([
            getLogoAction(),
            getProjectsAction(),
            getClientsAction(),
            getSlidesAction(),
            getInquiriesAction(),
            getCategoriesAction(),
            getJourneyAction(),
            getHealthcareBgAction(),
          ]);

          setLogo(dbLogo);
          setProjects(dbProjects);
          setClients(dbClients);
          setSlides(dbSlides);
          setInquiries(dbInquiries);
          setCategories(dbCategories);
          setJourneySteps(dbJourney);
          setHealthcareBg(dbHealthcareBg);
        } catch (initError) {
          console.error("Critical error during self-healing database load:", initError);
        }
      } finally {
        setIsLoaded(true);
      }
    }

    loadDatabase();
  }, []);

  // Write Helpers
  const updateLogo = async (text: string) => {
    setLogo(text);
    const result = await updateLogoAction(text);
    if (!result.success) {
      alert("Failed to update logo on database: " + result.error);
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

  const updateHealthcareBg = async (url: string) => {
    setHealthcareBg(url);
    const result = await updateHealthcareBgAction(url);
    if (!result.success) {
      alert("Failed to update healthcare background: " + result.error);
      const dbBg = await getHealthcareBgAction();
      setHealthcareBg(dbBg);
    }
  };

  const updateCategory = async (id: string, catData: Omit<CategoryItem, "id" | "href">) => {
    const result = await updateCategoryAction(id, catData);
    if (result.success) {
      const dbCategories = await getCategoriesAction();
      setCategories(dbCategories);
    } else {
      alert("Failed to update product category: " + result.error);
    }
  };

  const updateJourney = async (id: number, stepData: Omit<JourneyStep, "id">) => {
    const result = await updateJourneyAction(id, stepData);
    if (result.success) {
      const dbJourney = await getJourneyAction();
      setJourneySteps(dbJourney);
    } else {
      alert("Failed to update journey step: " + result.error);
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
        categories,
        journeySteps,
        healthcareBg,
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
        updateHealthcareBg,
        updateCategory,
        updateJourney,
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
