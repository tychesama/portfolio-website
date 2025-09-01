"use client";
import React from "react";

interface Experience {
  company: string;
  logo: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-[var(--color-mini-card)] rounded-lg shadow-md p-4 flex flex-col items-center w-40 h-40">
      {/* Logo */}
      <div className="flex-grow flex items-center justify-center">
        <img
          src={experience.logo}
          alt={experience.company}
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Company Name */}
      <p className="mt-2 text-sm font-semibold text-center text-[var(--color-text)]">
        {experience.company}
      </p>
    </div>
  );
};

export default ExperienceCard;
