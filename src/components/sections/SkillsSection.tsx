"use client";
import React from "react";

interface Skill {
  name: string;
  stars: number;
}

interface Skills {
  technical: Skill[];
  tools: Skill[];
  softSkills: Skill[];
}

interface SkillsCardProps {
  skills: Skills;
}

const renderStars = (count: number) => {
  return (
    <div className="flex -mt-1.5 gap-x-1.5 w-full flex justify-center">
  {[1,2,3].map((i) => (
    <span
      key={i}
      className={`text-yellow-500 text-lg drop-shadow-lg ${
        i <= count ? "opacity-100" : "opacity-30"
      }`}
  style={{ WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}
    >★</span>
  ))}
</div>

  );
};

const SkillsCard: React.FC<SkillsCardProps> = ({ skills }) => {
  return (
    <div className="flex flex-col gap-6 min-w-[930px]">
      <div>
        <p className="text-sm font-semibold text-blue-400 mb-2">Technical</p>
        <div className="flex flex-wrap gap-2">
          {skills.technical.map((skill, idx) => (
            <div
              key={idx}
              className="px-2 py-2 text-xs w-[140px] h-[35px] rounded-md bg-blue-500/70 text-white border border-blue-400/30 flex flex-col items-start"
            >
              <span>🟡 {skill.name}</span>
              {renderStars(skill.stars)}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-green-400 mb-2">Tools</p>
        <div className="flex flex-wrap gap-2">
          {skills.tools.map((tool, idx) => (
            <div
              key={idx}
              className="px-2 py-2 text-xs w-[140px] h-[35px] rounded-md bg-blue-500/70 text-white border border-blue-400/30 flex flex-col items-start"
            >
              <span>🟢 {tool.name}</span>
              {renderStars(tool.stars)}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-white mb-2">Soft Skills</p>
        <div className="flex flex-wrap gap-2">
          {skills.softSkills.map((soft, idx) => (
            <div
              key={idx}
              className="px-2 py-2 text-xs w-[140px] h-[35px] rounded-md bg-blue-500/70 text-white border border-blue-400/30 flex flex-col items-start"
            >
              <span>🟤 {soft.name}</span>
              {renderStars(soft.stars)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
