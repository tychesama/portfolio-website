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

interface RepoData {
  repoName: string;
  repoLink: string;
  commits: Commit[];
}

const ActivityDefault: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);

  useEffect(() => {
    async function loadCommits() {
      const res = await fetch("/api/github", { cache: "no-store" });
      const data = await res.json();

      const flatCommits: Commit[] = [];
      data.commitsData?.forEach((repo: RepoData) => {
        repo.commits.forEach((c: Commit) => {
          flatCommits.push({ ...c, repoName: repo.repoName, repoLink: repo.repoLink });
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
    <div className="w-full -mt-1 relative">
      {commits.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-md">
          <img
            src="https://media.tenor.com/WX_LDjYUrMsAAAAi/loading.gif"
            alt="Loading..."
            className="w-6 h-6"
          />
        </div>
      )}
      <div className="mt-1 bg-gradient-to-b from-[var(--color-mini-card)] to-[color-mix(in_srgb,var(--color-mini-card)_65%,black)] shadow-md w-full h-[320px] overflow-y-auto flex flex-col gap-[1px] scrollbar-hide">
        <div className="sticky -top-px top-0 z-10 px-3 py-2 bg-[var(--color-mini-card)]">
          <p className="text-xs font-semibold text-[var(--color-text-subtle)] tracking-wide">
            Sourced from GitHub
          </p>
        </div>
        {commits.map((commit, idx) => (
          <div
            key={idx}
            className="bg-[color-mix(in_srgb,var(--color-mini-card)_65%,black] hover:bg-[--color-mini-card-hover] py-2 px-3 min-h-[auto] flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow duration-150 "
          >
            <img
              src="https://media1.tenor.com/m/yvNOUKbCavQAAAAC/anime-blue-archive.gif"
              alt="Extra"
              className="w-[35px] h-[35px] rounded-sm object-cover flex-shrink-0"
            />
            <div className="flex flex-col gap-0 min-w-0">
              <a
                href={commit.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--color-text-main)] hover:text-[var(--color-text-subtle)] hover:underline truncate"
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityDefault;
