import React, { useState } from "react";

interface HighlightProps {
  highlight: {
    messageOfTheDay: string;
  };
}

const HighlightDefault: React.FC<HighlightProps> = ({ highlight }) => {
  const [activeTab, setActiveTab] = useState<"motd" | "playlist" | "extra">(
    "motd"
  );

  return (
    <div className="w-full bg-transparent rounded-lg -mt-6 flex flex-col">
      <div className="flex justify-end relative z-0">
        <button
          className={`bg-[var(--color-mini-card)] text-sm font-medium rounded-tl-lg transition-transform duration-200
    ${activeTab === "motd"
              ? "text-[var(--color-primary)] border-t-2 border-[var(--color-primary)] translate-y-1 rounded-tr-lg"
              : "text-[var(--color-text-subtle)] translate-y-3 hover:translate-y-0"
            } px-2 py-1`}
          onClick={() => setActiveTab("motd")}
        >
          ❤️
        </button>

        <button
          className={`bg-[var(--color-mini-card)] text-sm font-medium transition-transform duration-200
    ${activeTab === "playlist"
              ? "text-[var(--color-primary)] border-t-2 border-[var(--color-primary)] translate-y-1 rounded-t-lg"
              : "text-[var(--color-text-subtle)] translate-y-3 hover:translate-y-0"
            } px-2 py-1`}
          onClick={() => setActiveTab("playlist")}
        >
          🎵
        </button>

        <button
          className={`bg-[var(--color-mini-card)] text-sm font-medium rounded-tr-lg transition-transform duration-200
    ${activeTab === "extra"
              ? "text-[var(--color-primary)] border-t-2 border-[var(--color-primary)] translate-y-1 rounded-tl-lg"
              : "text-[var(--color-text-subtle)] translate-y-3 hover:translate-y-0"
            } px-2 py-1`}
          onClick={() => setActiveTab("extra")}
        >
          📖
        </button>
      </div>


      <div className="relative z-1 bg-[var(--color-mini-card)] p-6 min-h-[100px] max-h-[100px] flex items-start gap-4 rounded-tl-lg rounded-b-lg shadow-md">
        {activeTab === "motd" && (
          <>
            <img
              src="https://media1.tenor.com/m/yvNOUKbCavQAAAAC/anime-blue-archive.gif"
              alt="thumb"
              className="w-[50px] h-[50px] rounded-md object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-main)]">
                Message of the Day
              </p>
              <p className="text-sm text-[var(--color-text-subtle)]">
                {highlight.messageOfTheDay}
              </p>
            </div>
          </>
        )}

        {activeTab === "playlist" && (
          <p className="text-sm text-[var(--color-text-subtle)]">
            🎵 Spotify playlist goes here
          </p>
        )}

        {activeTab === "extra" && (
          <p className="text-sm text-[var(--color-text-subtle)]">
            🌟 Some other highlight or info
          </p>
        )}
      </div>
    </div>
  );
};

export default HighlightDefault;
