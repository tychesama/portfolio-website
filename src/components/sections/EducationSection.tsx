"use client";

import React from "react";


const EducationSection: React.FC = () => {
  return (
    <section className="w-full flex divide-x divide-[var(--color-primary)]">
      <div className="w-1/4 flex items-center justify-center p-4">
        <img
          src="/assets/title/title_icon_yui (5).png" 
          alt="Yui"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-2/3 flex flex-col">
        <div className="p-4">
          <h3 className="text-lg font-semibold">College</h3>
          <p className="text-sm text-gray-600">2016 – 2020</p>
          <p>Bachelor of Science in Computer Science</p>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold">Senior High School</h3>
          <p className="text-sm text-gray-600">2013 – 2016</p>
          <p>Science, Technology, Engineering, and Mathematics Strand — Pre-Science</p>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold">Elementary - Gradeschool - Junior High</h3>
          <p className="text-sm text-gray-600">2004 – 2013</p>
          <p>Example Elementary & Junior High School</p>
        </div>
      </div>
    </section>

  );
};

export default EducationSection;
