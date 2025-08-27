"use client";
import React, { useState, useEffect } from "react";

interface Song {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

interface HighlightProps {
  highlight: {
    messageOfTheDay: string;
  };
}

const HighlightDefault: React.FC<HighlightProps> = ({ highlight }) => {
  const [activeTab, setActiveTab] = useState<"motd" | "nowplaying" | "extra">(
    "motd"
  );
  const [motd, setMotd] = useState<string>("Loading...");
  const [song, setSong] = useState<Song | null>(null);
  const [animeGif, setAnimeGif] = useState<string>("");

  useEffect(() => {
    if (activeTab === "nowplaying") {
      fetch("/api/spotify")
        .then((res) => res.json())
        .then(setSong)
        .catch(() => setSong(null));
    }
  }, [activeTab]);
  useEffect(() => {
    fetch("/api/zenquotes")
      .then((res) => res.json())
      .then((data) => setMotd(data.quote))
      .catch(() => setMotd("Have a nice day!"));

    fetch("/api/tenor")
      .then((res) => res.json())
      .then((data) => setAnimeGif(data.url))
      .catch(() => setAnimeGif(""));
  }, []);



  return (
    <div className="w-full bg-transparent rounded-lg -mt-6 flex flex-col">
      <div className="flex justify-end relative z-0">
        <button
          className={`bg-[var(--color-mini-card)] text-sm font-medium rounded-tl-lg transition-transform duration-200
    ${activeTab === "motd"
              ? "text-[var(--color-primary)] border-t-2 border-[var(--color-primary)] translate-y-1 rounded-tr-lg"
              : "text-[var(--color-text-subtle)] translate-y-3 hover:translate-y-0 hover:rounded-t-lg"
            } px-2 py-1`}
          onClick={() => setActiveTab("motd")}
        >
          ❤️
        </button>

        <button
          className={`bg-[var(--color-mini-card)] text-sm font-medium transition-transform duration-200
    ${activeTab === "nowplaying"
              ? "text-[var(--color-primary)] border-t-2 border-[var(--color-primary)] translate-y-1 rounded-t-lg"
              : "text-[var(--color-text-subtle)] translate-y-3 hover:translate-y-0 hover:rounded-t-lg"
            } px-2 py-1`}
          onClick={() => setActiveTab("nowplaying")}
        >
          🎵
        </button>

        <button
          className={`bg-[var(--color-mini-card)] text-sm font-medium rounded-tr-lg transition-transform duration-200
    ${activeTab === "extra"
              ? "text-[var(--color-primary)] border-t-2 border-[var(--color-primary)] translate-y-1 rounded-tl-lg"
              : "text-[var(--color-text-subtle)] translate-y-3 hover:translate-y-0 hover:rounded-t-lg"
            } px-2 py-1`}
          onClick={() => setActiveTab("extra")}
        >
          📖
        </button>
      </div>


      <div className="relative z-1 bg-[var(--color-mini-card)] px-3 py-2 flex flex-col gap-2 rounded-tl-lg rounded-b-lg shadow-md min-h-[105px]">

        {activeTab === "motd" && (
          <div className="flex flex-col gap-1 w-full">
            <p className="text-xs font-semibold text-[var(--color-text-subtle)] mb-1">
              Message of the Day
            </p>
            <div className="flex items-center gap-3">
              {animeGif && (
                <img
                  src={animeGif}
                  alt="Anime GIF"
                  className="w-[60px] h-[60px] rounded-md object-cover flex-shrink-0"
                />
              )}
              <p className="text-sm text-[var(--color-text-subtle)] flex-1">
                {motd || highlight.messageOfTheDay}
              </p>

            </div>
          </div>
        )}


        {activeTab === "nowplaying" && (
          <div className="flex flex-col gap-1 w-full">
            {song && (
              <p className="text-xs font-semibold text-[var(--color-text-subtle)]  mb-1">
                {song.isPlaying ? "Now Playing ♫" : "Last Played ♫"}
              </p>
            )}
            <div className="flex items-center gap-3 overflow-hidden">
              <img
                src={song?.albumImageUrl || "https://via.placeholder.com/50"}
                alt={song?.title || "Nothing Playing"}
                className="w-[60px] h-[60px] rounded-md object-cover flex-shrink-0"
              />
              <div className="flex flex-col justify-center w-[calc(100%-55px)] gap-0.5">
                {song ? (
                  <div className="flex flex-col justify-center gap-0.5">
                    <div className="overflow-hidden-no-ellipsis max-w-full">
                      <a
                        href={song.songUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-[var(--color-text-main)] hover:underline hover:marquee-hover inline-block"
                      >
                        {song.title}
                      </a>
                    </div>

                    <div className="overflow-hidden-no-ellipsis max-w-full">
                      <a
                        href={song.songUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--color-text-subtle)] hover:underline hover:marquee-hover inline-block"
                      >
                        {song.artist}
                      </a>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-[var(--color-text-subtle)]">
                    🎶 Nothing playing right now
                  </p>
                )}

              </div>
            </div>
          </div>
        )}

        {activeTab === "extra" && (
          <div className="flex flex-col gap-1 w-full">
            <p className="text-xs font-semibold text-[var(--color-text-subtle)] mb-1">
              Extra Info
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://media1.tenor.com/m/yvNOUKbCavQAAAAC/anime-blue-archive.gif" // Replace with your extra image
                alt="Extra"
                className="w-[60px] h-[60px] rounded-md object-cover flex-shrink-0"
              />
              <p className="text-sm text-[var(--color-text-main)] flex-1">
                🌟 Some other highlight or info
              </p>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default HighlightDefault;
