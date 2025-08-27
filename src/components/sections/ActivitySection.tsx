interface ActivityProps {
  activity: {
    lastUpdatedRepo: {
      name: string;
      description: string;
      link: string;
      lastUpdated: string;
    };
  };
}

const ActivityDefault: React.FC<ActivityProps> = ({ activity }) => {
  return (
    <div className="w-full bg-transparent rounded-lg mt-2 flex flex-col">
      <div className="flex h-[310px]">
        <div className="bg-[var(--color-mini-card)] p-2 w-full h-full overflow-y-auto flex flex-col gap-4 rounded-lg
                    shadow-inner shadow-black/20 scrollbar-hide">
          <div className="bg-[var(--color-card-bg)] p-3 rounded-lg flex flex-col">
            <p className="text-sm font-medium text-[var(--color-primary)]">{activity.lastUpdatedRepo.name}</p>
            <p className="text-xs text-[var(--color-text-subtle)] mt-1">
              {activity.lastUpdatedRepo.description}
            </p>
            <a 
              href={activity.lastUpdatedRepo.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-blue-500 hover:underline mt-1"
            >
              View Repo
            </a>
            <p className="text-xs text-[var(--color-text-subtle)] mt-1">
              Last updated: {activity.lastUpdatedRepo.lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDefault;
