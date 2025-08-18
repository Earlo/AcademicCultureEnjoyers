'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/join', label: 'Join' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 text-gray-700 shadow-sm backdrop-blur">
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between p-4"
        aria-label="Main navigation"
      >
        <div className="flex gap-4">
          {navLinks.map(({ href, label }) => {
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded px-2 py-1 transition-colors hover:bg-gray-100 hover:no-underline ${isActive ? 'bg-gray-100 font-semibold' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
