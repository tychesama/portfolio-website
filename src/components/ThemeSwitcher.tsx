"use client";

import { useTheme } from '../hooks/changeTheme';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="bg-[var(--color-card)] text-[var(--color-text-main)] border border-gray-300 dark:border-gray-600 text-sm rounded px-2 py-1 shadow transition-colors"
      >
        <option value="dark">Dark Mode</option>
        <option value="light">Light Mode</option>
        <option value="alternate">Alternate</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
