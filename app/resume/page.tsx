'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { THEMES, ACCENT_LIGHT, ACCENT_DARK } from '../../lib/themes';

const RESUME_PATH = '/Garth_Puckerin_AI_Native_Learning_Systems_Architect_Resume.pdf';

export default function ResumePage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('wm-theme') as 'light' | 'dark' | null;
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('wm-theme', next);
  };

  const t = THEMES[theme];
  const accent = theme === 'light' ? ACCENT_LIGHT : ACCENT_DARK;

  if (!mounted) return null;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: t.bg,
        fontFamily: "'Epilogue', sans-serif",
        color: t.text,
        transition: 'background 0.25s ease, color 0.25s ease',
      }}
    >
      {/* Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: t.headerBg,
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${t.border}`,
          padding: '0 40px',
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            color: t.text,
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          ← Back
        </Link>
        <span
          style={{
            fontFamily: "'Syne Mono', monospace",
            fontSize: 10,
            color: accent,
            letterSpacing: '0.12em',
          }}
        >
          RESUME · GARTH PUCKERIN
        </span>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button
            onClick={toggleTheme}
            type="button"
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 10,
              background: t.toggleBg,
              color: t.toggleColor,
              border: 'none',
              padding: '0 10px',
              height: 30,
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
              letterSpacing: '0.08em',
            }}
          >
            {theme === 'light' ? '◐ Dark' : '◑ Light'}
          </button>
          <a
            href={RESUME_PATH}
            download
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: '#fff',
              background: accent,
              padding: '0 14px',
              height: 30,
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}
          >
            Download PDF
          </a>
        </div>
      </header>

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '48px 40px 80px' }}>
        {/* Title row */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 10,
              color: accent,
              letterSpacing: '0.14em',
              marginBottom: 10,
            }}
          >
            LMS ADMINISTRATOR APPLICATION · WALMART CONNECT ACADEMY
          </div>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 32,
              fontWeight: 800,
              color: t.text,
              letterSpacing: '-0.025em',
              marginBottom: 8,
            }}
          >
            Garth Puckerin — Resume
          </h1>
          <p style={{ fontSize: 14, color: t.textMuted }}>
            AI Native Learning Systems Architect · LMS Administrator
          </p>
        </div>

        {/* PDF Embed */}
        <div
          style={{
            border: `1.5px solid ${t.border}`,
            background: t.surface,
            overflow: 'hidden',
            marginBottom: 24,
          }}
        >
          <iframe
            src={RESUME_PATH}
            width="100%"
            height="900"
            style={{ display: 'block', border: 'none' }}
            title="Garth Puckerin Resume"
          />
        </div>

        {/* Fallback notice */}
        <div
          style={{
            padding: '20px 24px',
            background: t.surface2,
            border: `1px solid ${t.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <p style={{ fontSize: 13, color: t.textMuted, lineHeight: 1.6 }}>
            If the PDF doesn&apos;t render inline, use the download button to open it directly.
          </p>
          <a
            href={RESUME_PATH}
            download
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: '#fff',
              background: accent,
              padding: '9px 18px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            Download PDF
          </a>
        </div>
      </main>
    </div>
  );
}
