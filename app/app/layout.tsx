import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaizenspark.com"),
  title: {
    default: "KaizenSpark Tech",
    template: "%s | KaizenSpark Tech",
  },
  description:
    "KaizenSpark Tech builds powerful websites, AI automation systems, and scalable digital products for startups and growing businesses.",
  keywords: [
    "AI automation",
    "web development agency",
    "startup technology partner",
    "AI product development",
    "cloud and devops",
    "automation systems",
    "digital engineering",
  ],
  creator: "KaizenSpark Tech",
  openGraph: {
    title: "KaizenSpark Tech",
    description:
      "Build websites, automate workflows, and scale your business with KaizenSpark Tech.",
    url: "https://kaizenspark.com",
    siteName: "KaizenSpark",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KaizenSpark Tech",
    description:
      "Build websites, automate workflows, and grow your business.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
