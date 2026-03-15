import type { Metadata } from 'next';
import './globals.css';
import './kaizenspark.css';
import SiteScripts from '@/components/SiteScripts';

export const metadata: Metadata = {
  title: 'KaizenSpark Tech — Technology & Digital Solutions',
  description:
    'KaizenSpark Tech helps businesses launch powerful websites, AI systems, and digital marketing engines. Full-stack development, AI automation, and growth strategies for modern companies.',
  openGraph: {
    type: 'website',
    title: 'KaizenSpark Tech — Technology & Digital Solutions',
    description:
      'KaizenSpark Tech helps businesses launch powerful websites, AI systems, and digital marketing engines. Full-stack development, AI automation, and growth strategies for modern companies.',
    url: 'https://kaizenspark.tech',
    siteName: 'KaizenSpark Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KaizenSpark Tech — Technology & Digital Solutions',
    description:
      'KaizenSpark Tech helps businesses launch powerful websites, AI systems, and digital marketing engines. Full-stack development, AI automation, and growth strategies for modern companies.',
  },
  verification: {
    google: 'ocS2KJG9OJE8Cc1vLa8D5Br4au3R7SrXHE4xCqmnoCA',
  },
  alternates: {
    canonical: 'https://kaizenspark.tech',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://kaizenspark.tech#organization',
      name: 'KaizenSpark Tech',
      alternateName: 'KaizenSpark Tech Pvt Ltd',
      url: 'https://kaizenspark.tech',
      description:
        'KaizenSpark Tech is a technology and digital solutions company helping businesses build websites, AI systems, full-stack software, and grow through digital marketing.',
      founder: [
        {
          '@type': 'Person',
          name: 'Shreeshanth Ramamurthy',
          url: 'https://kaizenspark.tech/',
          jobTitle: 'Founder',
        },
      ],
      keywords: [
        'website development',
        'AI solutions',
        'AI automation',
        'digital marketing',
        'full-stack development',
        'paid advertising',
        'social media growth',
        'brand strategy',
        'technology consulting',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://kaizenspark.tech#website',
      url: 'https://kaizenspark.tech',
      name: 'KaizenSpark Tech',
      publisher: { '@id': 'https://kaizenspark.tech#organization' },
      inLanguage: 'en',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-wf-page="68a57a9adcd7f453925e8592"
      data-wf-site="68a5787bba0829184628bd51"
    >
      <head>
        {/* Webflow shared CSS — loaded before any content renders */}
        <link
          rel="stylesheet"
          href="https://cdn.prod.website-files.com/68a5787bba0829184628bd51/css/osmo-v2.shared.3cfb29011.min.css"
          integrity="sha384-PPspARFNLQfK50FHuRoSUzu5ukIBv9cUmtASD7yaxrUJn+9FXGvz9vof3JrTFBq7"
          crossOrigin="anonymous"
        />

        {/* Webflow touch/JS detection — runs before page paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`,
          }}
        />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="body">
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
