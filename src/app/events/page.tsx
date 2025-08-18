import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Explore upcoming events from Academic Culture Enjoyers.',
};

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Events</h1>
      <div className="grid gap-4">
        <Link
          href="/events/thomastag-2025"
          className="block rounded-lg border p-4 shadow-sm transition hover:border-blue-500 hover:shadow-md focus:outline-none focus-visible:ring"
        >
          <h2 className="mb-1 text-xl font-semibold">
            Thomastag 2025 – Southern German Traditions Weekend
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            19–21 December 2025 · Nürnberg, Germany
          </p>
        </Link>
      </div>
    </main>
  );
}
