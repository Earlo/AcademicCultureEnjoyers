'use client';

import { useTheme } from './Providers';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      aria-pressed={theme === 'dark'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M21.752 15.002A9 9 0 0112 3v0a9 9 0 109.752 12.002z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364 6.364l-1.414-1.414M8.05 8.05L6.636 6.636m12.728 0L17.95 8.05M8.05 15.95l-1.414 1.414" />
        </svg>
      )}
    </button>
  );
}
