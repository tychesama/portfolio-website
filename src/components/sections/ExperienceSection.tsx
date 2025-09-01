"use client";

import React from "react";
import ExperienceCard from "../common/ExperienceCard";


const ExperienceSection: React.FC = () => {
  return (
    <div className="p-6">
      <ExperienceCard
        experience={{
          company: "idk lmao",
          logo: "/assets/titlegif.gif",
        }}
      />
    </div>
  );
};

export default ExperienceSection;
