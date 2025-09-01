"use client";
import React, { useState, useEffect } from "react";

export interface Project {
  name: string;
  description: string;
  techstack: string[];
  link: string;
  images?: string[];
  color: string;
}


interface ProjectCardProps {
  project: Project;
  className?: string;
  type?: "normal" | "expanded";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className, type = "normal" }) => {
  const [showContent, setShowContent] = useState(false);

  const baseStyles = `bg-[var(--color-mini-card)] p-2 flex flex-col gap-2 rounded-lg shadow-lg border-l-4`;

  useEffect(() => {
    if (type === "expanded") {
      setShowContent(false); 
      const timeout = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timeout);
    } else {
      setShowContent(true);
    }
  }, [type]);

  if (type === "normal") {
    return (
      <div className={`${baseStyles} flex-1 ${className || ""}`} style={{ borderLeftColor: project.color }}>
        <div className="bg-[var(--color-card-bg)] p-3 rounded-lg flex flex-col">
          <p className="text-sm font-medium text-[var(--color-primary)]">{project.name}</p>
          <p className="text-xs text-[var(--color-text-subtle)] mt-1 line-clamp-2">{project.description}</p>
          <p className="text-[10px] text-[var(--color-text-subtle)] mt-1 italic">{project.techstack.join(", ")}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${baseStyles} w-full h-full ${className || ""}`}
      style={{ borderLeftColor: project.color }}
    >
      <div
        className={`bg-[var(--color-card-bg)] p-4 rounded-lg flex flex-col gap-3 h-full transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-[var(--color-primary)]">{project.name}</h2>
          <span className="text-sm text-[var(--color-text-subtle)]">Last updated: 2025-08-28</span>
        </div>

        <div className="bg-[var(--color-mini-card)] rounded-md w-full h-28 flex items-center justify-center text-[var(--color-text-subtle)] text-sm">
          Image Preview
        </div>

        <p className="text-sm text-[var(--color-text-subtle)]">{project.description}</p>

        <p className="text-xs text-[var(--color-text-subtle)] italic">
          Tech Stack: {project.techstack.join(", ")}
        </p>

        <div className="flex flex-row gap-4 text-[var(--color-text-subtle)] text-xs mt-auto">
          <div>
            <p className="font-medium">Commits</p>
            <p>42</p>
          </div>
          <div>
            <p className="font-medium">Created</p>
            <p>2025-01-15</p>
          </div>
          <div>
            <p className="font-medium">Updated</p>
            <p>2025-08-28</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
