import { NextResponse } from "next/server";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  updated_at: string;
}

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/user/repos?sort=updated&per_page=5",
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_PAT}`,
          Accept: "application/vnd.github+json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: await response.text() },
        { status: response.status }
      );
    }

    const repos: GitHubRepo[] = await response.json();

    return NextResponse.json({
      lastUpdatedRepos: repos.slice(0, 10).map((repo) => ({
        name: repo.name,
        description: repo.description,
        link: repo.html_url,
        lastUpdated: repo.updated_at,
      })),
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unexpected server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
