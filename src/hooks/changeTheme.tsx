import { useEffect, useState } from 'react';

const themes = ['light', 'dark', 'alternate'] as const;
type Theme = typeof themes[number];

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};