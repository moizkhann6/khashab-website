"use client";

import { useState } from "react";
import Image from "next/image";
import { useDb } from "@/context/DbContext";
import { Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

export default function ImageGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects } = useDb();

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "healthcare", label: "Healthcare Specialty" },
    { id: "commercial", label: "Commercial Offices" },
    { id: "residential", label: "Luxury Residential" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center mb-16 border-b border-stone-100 pb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 border transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-primary text-white border-primary"
                : "bg-transparent text-stone-600 border-stone-200 hover:border-primary hover:text-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <article 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className="card-2d flex flex-col group h-full cursor-pointer"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-3/2 w-full overflow-hidden bg-stone-100 border-b border-stone-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={project.id === "proj-1" || project.id === "proj-2"}
              />
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start gap-4 mb-3">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="text-[10px] font-light text-stone-400 uppercase tracking-wider">
                  {project.location}
                </span>
              </div>
              
              <h3 className="font-serif text-xl text-primary leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-stone-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Specs Tags */}
              {project.specs && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-100">
                  {project.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="bg-stone-50 text-stone-600 text-[10px] px-2 py-1 uppercase tracking-wider font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
