import React from 'react';
import type { Viewport } from 'next';
import './globals.css';

// Runs synchronously before React renders — sets data-theme on <html> from
// localStorage or prefers-color-scheme, eliminating the theme flash entirely.
const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem('wm-theme');document.documentElement.dataset.theme=s==='dark'||s==='light'?s:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}catch(e){}})();`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Garth Puckerin — LMS Administrator · Walmart Connect Academy',
  description:
    'Targeted application site for the LMS Administrator role at Walmart Connect Academy. 10+ years enterprise LMS experience, AI-first mindset, 10,000+ users managed.',
  keywords: [
    'Garth Puckerin',
    'LMS Administrator',
    'Walmart Connect Academy',
    'Intellum',
    'Docebo',
    'Learning Management',
    'AI-First Learning',
    'SCORM',
    'xAPI',
  ],
  openGraph: {
    title: 'Garth Puckerin — LMS Administrator · Walmart Connect Academy',
    description:
      'Targeted application. 10+ years enterprise LMS, AI-powered L&D tools, 10,000+ users at Entrust.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the blocking script above sets data-theme on
    // <html> before React hydrates, so the attribute intentionally differs
    // between server render (no data-theme) and client (data-theme set).
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
