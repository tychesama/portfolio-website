import React, {  } from "react";

interface ActivityProps {
  activity: {
  };
}

const ActivityDefault: React.FC<ActivityProps> = ({  }) => {
  return (
    <div className="w-full bg-transparent rounded-lg mt-2 flex flex-col">
      <div className="flex h-[310px]">
        <div className="bg-[var(--color-mini-card)] p-4 w-full h-full overflow-y-auto flex flex-col gap-4 rounded-lg shadow-md
                    scrollbar-hide ">
          <div className="bg-[var(--color-card-bg)] p-3 rounded-lg shadow-sm flex flex-col">
            <p className="text-sm font-medium text-[var(--color-primary)]">Title 1</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-1">
              sadasd asdasdasdasdasd asd asd asd asd sadasd asdasdasdasdasd asd asd asd asdsadasd asdasdasdasdasd asd asd asd asdsadasd asdasdasdasdasd asd asd asd asdsadasd asdasdasdasdasd asd asd asd asd
            </p>
          </div>

          <div className="bg-[var(--color-card-bg)] p-3 rounded-lg shadow-sm flex flex-col">
            <p className="text-sm font-medium text-[var(--color-primary)]">Title 2</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-1">
              asdasd as dasda asd asdasd 
            </p>
          </div>

          <div className="bg-[var(--color-card-bg)] p-3 rounded-lg shadow-sm flex flex-col">
            <p className="text-sm font-medium text-[var(--color-primary)]">Title 3</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-1">
              sadasda sd asd asda sdasdasd asd 
            </p>
          </div>

          <div className="bg-[var(--color-card-bg)] p-3 rounded-lg shadow-sm flex flex-col">
            <p className="text-sm font-medium text-[var(--color-primary)]">Title 4</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-1">
              asdads asda sda sda 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ActivityDefault;
