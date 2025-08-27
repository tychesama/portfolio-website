"use client";

import { useEffect, useState } from "react";

const themes = ["light", "dark", "alternate"] as const;
type Theme = typeof themes[number];

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensure client-only
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  return { theme, setTheme };
};
