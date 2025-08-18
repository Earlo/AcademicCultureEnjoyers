'use client';

import { useTheme } from './Providers';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={theme === 'dark'}
      className="rounded p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
      >
      {theme === 'dark' ? '🌙' : '☀️'}
      </button>
  );
}
