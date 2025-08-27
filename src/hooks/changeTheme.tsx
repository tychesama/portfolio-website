"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "alternate"; 

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  return { theme, setTheme };
};
