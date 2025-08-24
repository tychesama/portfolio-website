import React, { useState } from "react";

interface ActivityProps {
  activity: {
  };
}

const ActivityDefault: React.FC<ActivityProps> = ({ activity }) => {
  return (
    <div className="w-full bg-transparent rounded-lg mt-2 flex flex-col">
      <div className="flex h-[310px]">
        <div className="bg-[var(--color-mini-card)] p-4 w-full h-full overflow-y-auto flex flex-col gap-4 rounded-tl-lg rounded-b-lg shadow-md
                    scrollbar-hide">
          {/* Card Item 1 */}
          <div className="bg-[var(--color-card-bg)] p-3 rounded-lg shadow-sm flex flex-col">
            <p className="text-sm font-medium text-[var(--color-primary)]">Title 1</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-1">
              This is a short description for the first card item.
            </p>
          </div>

          {/* Card Item 2 */}
          <div className="bg-[var(--color-card-bg)] p-3 rounded-lg shadow-sm flex flex-col">
            <p className="text-sm font-medium text-[var(--color-primary)]">Title 2</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-1">
              Another description goes here, stacked below the title.
            </p>
          </div>

          {/* Card Item 3 */}
          <div className="bg-[var(--color-card-bg)] p-3 rounded-lg shadow-sm flex flex-col">
            <p className="text-sm font-medium text-[var(--color-primary)]">Title 3</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-1">
              Additional dummy content for the third card item.
            </p>
          </div>

          {/* Card Item 4 */}
          <div className="bg-[var(--color-card-bg)] p-3 rounded-lg shadow-sm flex flex-col">
            <p className="text-sm font-medium text-[var(--color-primary)]">Title 4</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-1">
              More dummy content to demonstrate scrolling in dark mode.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ActivityDefault;
