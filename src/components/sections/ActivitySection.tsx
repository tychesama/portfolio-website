"use client";
import { useEffect, useState } from "react";

interface Repo {
  name: string;
  description: string | null;
  link: string;
  lastUpdated: string;
}

const ActivityDefault: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function loadRepos() {
      const res = await fetch("/api/github", { cache: "no-store" });
      const data = await res.json();
      setRepos(data.lastUpdatedRepos || []);
    }
    loadRepos();
  }, []);

  return (
    <div className="w-full bg-transparent rounded-lg mt-2 flex flex-col">
      <div className="flex h-[310px]">
        <div className="bg-[var(--color-mini-card)] p-2 w-full h-full overflow-y-auto flex flex-col gap-4 rounded-lg shadow-inner shadow-black/20 scrollbar-hide">
          {repos.map((repo, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-card-bg)] p-3 rounded-lg flex flex-col"
            >
              <p className="text-sm font-medium text-[var(--color-primary)]">
                {repo.name}
              </p>
              <p className="text-xs text-[var(--color-text-subtle)] mt-1">
                {repo.description || "No description provided"}
              </p>
              <a
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500 hover:underline mt-1"
              >
                View Repo
              </a>
              <p className="text-xs text-[var(--color-text-subtle)] mt-1">
                Last updated: {new Date(repo.lastUpdated).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityDefault;
