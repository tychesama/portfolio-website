"use client";
import { useEffect, useState } from "react";

interface Commit {
  message: string;
  author: string;
  date: string;
  link: string;
  repoName: string;
  repoLink: string;
}

const ActivityDefault: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);

  useEffect(() => {
    async function loadCommits() {
      const res = await fetch("/api/github", { cache: "no-store" });
      const data = await res.json();

      const flatCommits: Commit[] = [];
      data.commitsData?.forEach((repo: { commits?: any[] }) => {
        repo.commits?.forEach((commit) => {
          console.log(commit);
        });
      });

      flatCommits.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      setCommits(flatCommits);
    }
    loadCommits();
  }, []);

  function timeAgo(dateStr: string) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 2) return date.toLocaleDateString();
    if (days >= 1) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours >= 1) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes >= 1) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }

  return (
    <div className="w-full mt-2">
      <div className="bg-[var(--color-mini-card)] w-full h-[310px] overflow-y-auto flex flex-col gap-[1px] rounded-lg shadow-inner shadow-black/20 scrollbar-hide">
        {commits.map((commit, idx) => (
          <div
            key={idx}
            className="bg-[var(--color-alt-card)] py-2 px-4 min-h-[auto] flex flex-col gap-1 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-150 "
          >

            <a
              href={commit.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[var(--color-text-main)] hover:text-[var(--color-text-subtle)] hover:underline"
            >
              {commit.repoName}
            </a>

            <a
              href={commit.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-xs text-[var(--color-text-subtle)] hover:text-[var(--color-text-main)] hover:underline truncate"
            >
              {commit.message}
            </a>


            <span className="text-[0.7rem] text-[var(--color-text-subtle)]">
              {timeAgo(commit.date)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityDefault;
