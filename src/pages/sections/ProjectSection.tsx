import React, { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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

const SortableProject: React.FC<{ project: Project }> = ({ project }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: project.name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = projectList.findIndex((p) => p.name === active.id);
      const newIndex = projectList.findIndex((p) => p.name === over.id);
      setProjectList(arrayMove(projectList, oldIndex, newIndex));
    }
  };

  return (
    <div className="w-full bg-transparent rounded-lg mt-2 p-4 flex flex-row gap-6">
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <SortableContext items={projectList.map((p) => p.name)} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-3 h-[490px] w-[250px] overflow-y-auto pr-2 scrollbar-hide">
            {projectList.map((project) => (
              <SortableProject key={project.name} project={project} />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <div className="flex-1 flex items-center justify-center border-2 border-dashed border-[var(--color-primary)] rounded-xl min-h-[310px]">
        <span className="text-[var(--color-text-subtle)] text-base font-medium">Drop Here</span>
      </div>
    </div>
  );
};

export default ProjectDefault;
