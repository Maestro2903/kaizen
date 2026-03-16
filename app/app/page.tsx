'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

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
          setHtml(text);
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
    <>
      <Script
        id="organization-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "KaizenSpark Tech",
            url: "https://kaizenspark.com",
            logo: "https://kaizenspark.com/logo.png",
            sameAs: ["https://linkedin.com/company/kaizenspark"],
            description:
              "KaizenSpark Tech builds websites, AI automation systems, and scalable digital platforms.",
          }),
        }}
      />
      <main
        className="min-h-screen"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}

