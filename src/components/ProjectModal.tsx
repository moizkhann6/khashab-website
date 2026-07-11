"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 2D Flat Backdrop Mask */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-stone-900/60 transition-opacity duration-300"
      />

      {/* Modal Dialog Card (Strictly 2D, no shadows) */}
      <div className="relative bg-white border border-stone-200 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 flex flex-col md:flex-row transition-all duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center border border-stone-200 bg-white text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors duration-200 cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Left Side: Large Image */}
        <div className="w-full md:w-1/2 aspect-3/2 md:aspect-auto relative bg-stone-100 border-b md:border-b-0 md:border-r border-stone-200">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Detailed Copy */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
                {project.category}
              </span>
              <h2 className="font-serif text-2xl lg:text-3xl text-primary leading-tight">
                {project.title}
              </h2>
              <span className="text-xs font-light text-stone-400 uppercase tracking-widest block mt-2">
                {project.location}
              </span>
            </div>

            <div className="border-t border-stone-100 pt-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                Project Overview
              </h4>
              <p className="text-stone-600 font-light text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.specs && project.specs.length > 0 && (
              <div className="border-t border-stone-100 pt-4">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Technical Specifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="bg-stone-50 border border-stone-200 text-stone-600 text-[10px] px-2.5 py-1.5 uppercase tracking-wider font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-4">
            <Link 
              href={`/contact?category=${encodeURIComponent(project.category)}`}
              onClick={onClose}
              className="btn-primary text-center py-3.5 text-xs font-bold tracking-widest w-full"
            >
              Request Specs & RFQ
            </Link>
            <button
              onClick={onClose}
              className="btn-secondary py-3.5 text-xs font-bold tracking-widest w-full cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
