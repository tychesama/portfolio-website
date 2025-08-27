// src/app/api/tenor/route.ts
export async function GET() {
  const TENOR_API_KEY = process.env.TENOR_API_KEY;

  try {
    const response = await fetch(
      `https://tenor.googleapis.com/v2/search?q=anime&key=${TENOR_API_KEY}&limit=1&media_filter=gif`
    );
    const data = await response.json();

    const gifUrl =
      data?.results?.[0]?.media_formats?.gif?.url ||
      data?.results?.[0]?.media_formats?.tinygif?.url ||
      "";

    return new Response(JSON.stringify({ url: gifUrl }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Tenor API error:", error);
    return new Response(JSON.stringify({ url: "" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
