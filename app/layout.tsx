import React from 'react';
import type { Viewport } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
