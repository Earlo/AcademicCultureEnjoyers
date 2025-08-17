'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/join', label: 'Join' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/60 text-gray-700 backdrop-blur shadow-sm dark:bg-gray-900/60 dark:text-gray-300">
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <nav className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <div className="flex gap-4">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded px-2 py-1 transition-colors hover:bg-gray-100 hover:no-underline dark:hover:bg-gray-800 ${isActive ? 'font-semibold bg-gray-100 dark:bg-gray-800' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
