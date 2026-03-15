import { getBodyContent } from '@/lib/html-loader';

/**
 * Server Component — reads public/kaizen.html at request time via fs.
 * No client-side fetch, no loading state, full SSR for SEO.
 * Scripts are loaded separately by <SiteScripts /> in layout.tsx.
 */
export default function Home() {
  const bodyContent = getBodyContent();

  return (
    <div
      data-barba="wrapper"
      dangerouslySetInnerHTML={{ __html: bodyContent }}
    />
  );
}
