import fetch from "node-fetch";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

async function getAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
}

export default async function handler(req, res) {
  const { access_token } = await getAccessToken();
  console.log(access_token);

  // Check currently playing
  const nowPlaying = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  if (nowPlaying.status === 204 || nowPlaying.status > 400) {
    // If nothing is playing → fallback to last played
    const lastPlayed = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const recent = await lastPlayed.json();
    const track = recent.items[0].track;

    return res.status(200).json({
      isPlaying: false,
      title: track.name,
      artist: track.artists.map((a) => a.name).join(", "),
      albumImageUrl: track.album.images[0].url,
      songUrl: track.external_urls.spotify,
      lastPlayed: true,
    });
  }

  // If playing → return current
  const song = await nowPlaying.json();

  res.status(200).json({
    isPlaying: true,
    title: song.item.name,
    artist: song.item.artists.map((a) => a.name).join(", "),
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
    lastPlayed: false,
  });
}
