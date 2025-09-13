"use client";
import React, { useState, useEffect } from "react";
import type { DraggableAttributes } from "@dnd-kit/core";

type DragListeners = { // for vercel
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onPointerDown?: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp?: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerMove?: (event: React.PointerEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};


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
  attributes?: DraggableAttributes;
  listeners?: DragListeners;
  setNodeRef?: (node: HTMLElement | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className, type = "normal", attributes,
  listeners,
  setNodeRef, }) => {
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
      <div
        ref={setNodeRef}
        {...(attributes || {})}
        {...(listeners || {})}
        className={`${baseStyles} flex-1 ${className || ""}`}
        style={{ borderLeftColor: project.color }}
      >
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
      ref={setNodeRef}
      className={`${baseStyles} w-full h-full ${className || ""}`}
      style={{ borderLeftColor: project.color }}
    >
      <div
        className={`bg-[var(--color-card-bg)] p-4 rounded-lg flex flex-col gap-3 h-full transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-[var(--color-primary)]">{project.name}</h2>

          {/* Drag Handle */}
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing px-2 py-1 rounded text-[var(--color-text-subtle)]"
          >
            ⠿⠿⠿⠿⠿⠿⠿⠿
          </div>
          <div>Random</div>
        </div>

        <div className="w-full h-full flex">
          {/* left */}
          <div className="flex flex-col h-full justify-between flex-2 pr-4 border-r" style={{ borderColor: "rgba(81, 86, 94, 0.3)" }}>
            <p className="text-sm text-[var(--color-text-subtle)]">{project.description}</p>
            <p className="text-xs text-[var(--color-text-subtle)] italic">
              Tech Stack: {project.techstack.join(", ")}
            </p>
          </div>

          {/* right */}
          <div className="pl-7 bg-[var(--color-mini-card)] rounded-md w-[600px] h-full flex items-center justify-center">
            <img
              src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=2048x2048&w=is&k=20&c=Xa_wH_pZFMWNX8EPtufv9KSvS1OzUPus7C0Br2ZIMDg="
              alt="Yui"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
