'use client';

import Script from 'next/script';

/**
 * Loads all third-party scripts required by the Webflow/KaizenSpark site.
 * Rendered inside <body> via layout.tsx.
 *
 * Order matters — each script depends on the ones above it:
 *   jQuery → barba → GSAP plugins → lenis → hls → Outseta shim → Slater → Webflow JS
 *
 * strategy="afterInteractive" ensures Next.js hydration completes first,
 * then loads scripts sequentially in declaration order.
 */
export default function SiteScripts() {
  return (
    <>
      {/* 1 — jQuery (required by Webflow JS) */}
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68a5787bba0829184628bd51"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* 2 — Barba.js (page transitions) */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@barba/core@2.10.3/dist/barba.umd.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/@barba/prefetch@2.2.0/dist/barba-prefetch.umd.js"
        strategy="afterInteractive"
      />

      {/* 3 — GSAP + plugins */}
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/Draggable.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/InertiaPlugin.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/CustomEase.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/Observer.min.js"
        strategy="afterInteractive"
      />

      {/* 4 — Lenis (smooth scroll) */}
      <Script
        src="https://cdn.jsdelivr.net/npm/lenis@1.3.1/dist/lenis.min.js"
        strategy="afterInteractive"
      />

      {/* 5 — HLS.js (video streaming) */}
      <Script
        src="https://cdn.jsdelivr.net/npm/hls.js@1.6.11"
        strategy="afterInteractive"
      />

      {/* 6 — Outseta shim (prevents ReferenceError before Slater loads) */}
      <Script id="outseta-shim" strategy="afterInteractive">
        {`window.Outseta = window.Outseta || {};`}
      </Script>

      {/* 7 — Slater (Webflow utilities) */}
      <Script
        src="https://slater.app/16596/55554.js"
        strategy="afterInteractive"
      />

      {/* 8 — Webflow JS (must load last) */}
      <Script
        src="https://cdn.prod.website-files.com/68a5787bba0829184628bd51/js/osmo-v2.a0aa6ca1.4b4f86b3d4ad42e7.js"
        integrity="sha384-HUxayXE4ExW50vAnynd70japcGyjcPl1uW+CcgLihpP1qPPGwFG8AgXCf7YsCuT0"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  );
}
