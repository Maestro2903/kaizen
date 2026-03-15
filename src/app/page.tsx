'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/kaizen.html')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load page: ${res.status}`);
        }
        return res.text();
      })
      .then((text) => {
        if (!cancelled) {
          const match = text.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
          const bodyContent = match ? match[1] : text;
          setHtml(bodyContent);
        }
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) {
          setError('Something went wrong loading the page.');
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <p>{error}</p>
      </main>
    );
  }

  if (!html) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <p>Loading…</p>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
