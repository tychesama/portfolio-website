"use client";
import React, { useState, useEffect } from "react";
import { DndContext, DragOverlay, pointerWithin, useDroppable } from "@dnd-kit/core";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { snapCenterToCursor } from "@dnd-kit/modifiers";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ProjectCard from "../common/ProjectCard";

interface Project {
  name: string;
  description: string;
  techstack: string[];
  link: string;
  images?: string[];
  color: string;
}

interface ProjectProps {
  projects: Project[];
}

interface DropZoneProps {
  droppedProject?: Project;
}

const DropZone: React.FC<DropZoneProps & { activeProject?: Project | null }> = ({ droppedProject, activeProject }) => {
  const { setNodeRef, isOver } = useDroppable({ id: "drop-zone" });

  const [showDropped, setShowDropped] = useState(false);

  useEffect(() => {
    if (droppedProject) {
      const timeout = setTimeout(() => setShowDropped(true), 50); // small delay for fade-in
      return () => clearTimeout(timeout);
    } else {
      setShowDropped(false);
    }
  }, [droppedProject]);

  return (
    <div
      ref={setNodeRef}
      className={`relative flex-1 rounded-xl min-h-[310px] transition-colors duration-300 
        ${droppedProject
          ? "border-none"
          : isOver
            ? "border-2 border-[var(--color-accept)] bg-[var(--color-primary)/10]"
            : "border-2 border-dashed border-[var(--color-primary)]"
        } flex items-center justify-center`}
    >
      {!droppedProject && !isOver && (
        <span className="absolute inset-0 flex items-center justify-center text-[var(--color-text-subtle)] text-base font-medium">
          Drop Here
        </span>
      )}

      {/* Hover preview */}
      {isOver && !droppedProject && activeProject && (
        <div className="absolute w-full h-full flex items-center justify-center opacity-50">
          <ProjectCard project={activeProject} type="expanded" className="w-full h-full" />
        </div>
      )}

      {/* Dropped project with fade-in */}
      {droppedProject && (
        <div
          className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-500 ${showDropped ? "opacity-100" : "opacity-0"
            }`}
        >
          <ProjectCard project={droppedProject} type="expanded" className="w-full h-full" />
        </div>
      )}
    </div>
  );
};



const SortableProject: React.FC<{ project: Project }> = ({ project }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: project.name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, borderLeftColor: project.color }}
      {...attributes}
      {...listeners}
      className="bg-[var(--color-mini-card)] p-2 w-[220px] h-[120px] flex flex-col gap-2 rounded-lg shadow-md border-l-4"
    >
      <div className="bg-[var(--color-card-bg)] p-3 rounded-lg flex flex-col">
        <p className="text-sm font-medium text-[var(--color-primary)]">{project.name}</p>
        <p className="text-xs text-[var(--color-text-subtle)] mt-1 line-clamp-2">{project.description}</p>
        <p className="text-[10px] text-[var(--color-text-subtle)] mt-1 italic">{project.techstack.join(", ")}</p>
      </div>
    </div>
  );
};

const ProjectDefault: React.FC<ProjectProps> = ({ projects }) => {
  const [projectList, setProjectList] = useState(projects);
  const [droppedProjects, setDroppedProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const handleDragStart = (event: DragStartEvent) => {
    const project = projectList.find((p) => p.name === event.active.id);
    if (project) setActiveProject(project);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      setActiveProject(null);
      return;
    }

    if (over.id === "drop-zone" && activeProject) {
      setDroppedProjects((prev) => [...prev, activeProject]);
      setProjectList((prev) => prev.filter((p) => p.name !== activeProject.name));
    } else if (active.id !== over.id) {
      const oldIndex = projectList.findIndex((p) => p.name === active.id);
      const newIndex = projectList.findIndex((p) => p.name === over.id);
      setProjectList(arrayMove(projectList, oldIndex, newIndex));
    }

    setActiveProject(null);
  };

  if (!client) return null;

  return (
    <div className="w-full bg-transparent rounded-lg mt-2 p-4 flex flex-row gap-6">
      <DndContext
        collisionDetection={pointerWithin}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        autoScroll={{ layoutShiftCompensation: false }}
      >
        <SortableContext
          items={projectList.map((p) => p.name)}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-3 h-[490px] w-[250px] overflow-y-auto pr-2 scrollbar-hide">
            {projectList.map((project) => (
              <SortableProject key={project.name} project={project} />
            ))}
          </div>
        </SortableContext>

        <DragOverlay modifiers={[snapCenterToCursor]}>
          {activeProject ? (
            <div className="pointer-events-none">
              <ProjectCard project={activeProject} />
            </div>
          ) : null}
        </DragOverlay>
        <DropZone droppedProject={droppedProjects[0]} activeProject={activeProject} />
      </DndContext>
    </div>
  );
};

export default ProjectDefault;

