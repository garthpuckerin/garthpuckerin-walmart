'use client';

import { useState, useEffect, useCallback } from 'react';
import { ROLE_ALIGNMENT, EXPERIENCE, SKILLS, PROJECTS, PLATFORM_PROJECTS } from '../lib/data';
import { THEMES, ACCENT_LIGHT, ACCENT_DARK } from '../lib/themes';
import type { Project, PlatformProject } from '../lib/data';
import type { ThemeColors } from '../lib/themes';

const RESUME_PATH = '/Garth_Puckerin_AI_Native_Learning_Systems_Architect_Resume.pdf';

const NAV_SECTIONS = [
  'overview',
  'fit',
  'philosophy',
  'projects',
  'experience',
  'skills',
  'contact',
] as const;

const IMPACT_STATS = [
  { num: '10,000+', label: 'Users managed\nEntrust Corporation' },
  { num: '5', label: 'LMS platforms\nadministered' },
  { num: '6 / 6', label: 'Role requirements\nmatched' },
  { num: '2', label: 'AI tools\nin production' },
];

// ── Project Modal ──────────────────────────────────────────────────────────────

function ProjectModal({
  project,
  accent,
  t,
  yellow,
  onClose,
}: {
  project: Project | PlatformProject;
  accent: string;
  t: ThemeColors;
  yellow: string;
  onClose: () => void;
}) {
  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [handleClose]);

  return (
    <div
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: t.surface,
          border: `1px solid ${t.border}`,
          maxWidth: 640,
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px 24px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
            position: 'sticky',
            top: 0,
            background: t.surface,
            zIndex: 1,
            borderBottom: `1px solid ${t.border}`,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: accent,
                letterSpacing: '0.12em',
                marginBottom: 6,
              }}
            >
              {project.type}
            </div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 22,
                fontWeight: 800,
                color: t.text,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h2>
          </div>
          <button
            onClick={handleClose}
            type="button"
            style={{
              background: 'none',
              border: `1px solid ${t.border}`,
              color: t.textMuted,
              width: 32,
              height: 32,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: 16,
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = accent;
              (e.currentTarget as HTMLButtonElement).style.color = accent;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = t.border;
              (e.currentTarget as HTMLButtonElement).style.color = t.textMuted;
            }}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px' }}>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: t.textSubtle,
                letterSpacing: '0.12em',
                marginBottom: 10,
              }}
            >
              OVERVIEW
            </div>
            <p style={{ fontSize: 14, color: t.textBody, lineHeight: 1.75 }}>
              {project.modal.overview}
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: t.textSubtle,
                letterSpacing: '0.12em',
                marginBottom: 10,
              }}
            >
              KEY CAPABILITIES
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              {project.modal.capabilities.map((cap, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: yellow, flexShrink: 0, marginTop: 5, fontSize: 6 }}>◆</span>
                  <span style={{ fontSize: 13.5, color: t.textSecondary, lineHeight: 1.65 }}>
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              borderLeft: `3px solid ${accent}`,
              background: t.surface2,
              padding: '16px 20px',
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: accent,
                letterSpacing: '0.12em',
                marginBottom: 8,
              }}
            >
              ENTERPRISE VALUE
            </div>
            <p
              style={{
                fontSize: 14,
                color: t.text,
                lineHeight: 1.7,
                fontFamily: "'Syne', sans-serif",
                fontWeight: 500,
              }}
            >
              {project.modal.enterpriseValue}
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: t.textSubtle,
                letterSpacing: '0.12em',
                marginBottom: 10,
              }}
            >
              EXAMPLE APPLICATIONS
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              {project.modal.useCases.map((uc, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: t.textSubtle, flexShrink: 0, marginTop: 1 }}>·</span>
                  <span style={{ fontSize: 13.5, color: t.textMuted, lineHeight: 1.6 }}>{uc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: t.textSubtle,
                letterSpacing: '0.12em',
                marginBottom: 10,
              }}
            >
              TECHNOLOGY
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "'Syne Mono', monospace",
                    fontSize: 11,
                    color: t.tagColor,
                    background: t.tagBg,
                    border: `1px solid ${t.border}`,
                    padding: '4px 10px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Project Card ───────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  accent,
  t,
  onOpen,
}: {
  project: Project;
  accent: string;
  t: ThemeColors;
  onOpen: (_: Project) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const activate = () => onOpen(project);
  return (
    <div
      onClick={activate}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Explore ${project.title}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: 'pointer',
        border: `1.5px solid ${hovered ? accent : t.border}`,
        padding: '24px 24px 20px',
        background: hovered ? t.cardHoverBg : t.surface,
        transition: 'all 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 10,
            fontWeight: 600,
            color: hovered ? 'rgba(255,255,255,0.6)' : t.textSubtle,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            transition: 'color 0.2s ease',
          }}
        >
          {project.label}
        </span>
        {project.platformLabel ? (
          <span
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 9,
              color: hovered ? '#fff' : accent,
              background: hovered ? 'rgba(255,255,255,0.15)' : accent + '18',
              border: `1px solid ${hovered ? 'rgba(255,255,255,0.25)' : accent + '35'}`,
              padding: '2px 7px',
              letterSpacing: '0.05em',
              transition: 'all 0.2s ease',
            }}
          >
            {project.platformLabel}
          </span>
        ) : (
          <span
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 10,
              color: hovered ? '#fff' : accent,
              background: hovered ? 'rgba(255,255,255,0.15)' : accent + '18',
              padding: '2px 8px',
              letterSpacing: '0.08em',
              transition: 'all 0.2s ease',
            }}
          >
            ● LIVE
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 18,
          fontWeight: 700,
          color: hovered ? t.cardHoverText : t.text,
          marginBottom: 8,
          letterSpacing: '-0.02em',
          transition: 'color 0.2s ease',
          lineHeight: 1.2,
        }}
      >
        {project.title}
      </div>
      <div
        style={{
          fontFamily: "'Epilogue', sans-serif",
          fontSize: 13,
          color: hovered ? t.cardHoverMuted : t.textBody,
          lineHeight: 1.7,
          marginBottom: 16,
          transition: 'color 0.2s ease',
          flex: 1,
        }}
      >
        {project.description}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 6,
        }}
      >
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {project.tech.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: hovered ? 'rgba(255,255,255,0.75)' : t.tagColor,
                border: `1px solid ${hovered ? 'rgba(255,255,255,0.25)' : t.border}`,
                padding: '2px 7px',
                transition: 'all 0.2s ease',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            color: hovered ? '#fff' : accent,
            transition: 'color 0.2s ease',
          }}
        >
          Learn more →
        </span>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Page() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState('overview');
  const [mounted, setMounted] = useState(false);
  const [activeModal, setActiveModal] = useState<Project | PlatformProject | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('wm-theme') as 'light' | 'dark' | null;
    if (saved === 'light' || saved === 'dark') setTheme(saved);

    const checkMobile = () => setIsMobile(window.innerWidth < 720);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Separate effect — only runs after mounted=true so sections exist in the DOM
  // Uses scroll position rather than IntersectionObserver — reliably handles short sections at page bottom
  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => {
      const threshold = window.scrollY + 100; // 100px below top of viewport (clears the 56px header)
      let active: string = NAV_SECTIONS[0];
      for (const id of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const docTop = el.getBoundingClientRect().top + window.scrollY;
          if (docTop <= threshold) active = id;
        }
      }
      setActiveSection(active);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [mounted]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('wm-theme', next);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const t = THEMES[theme];
  const accent = theme === 'light' ? ACCENT_LIGHT : ACCENT_DARK;
  const yellow = theme === 'light' ? '#C49B00' : '#FFD24D';
  const yellowBadgeBg = theme === 'light' ? '#FFFBEB' : '#FFD24D18';
  const yellowBadgeBorder = theme === 'light' ? '#E6B800' : '#FFD24D55';
  const yellowBadgeText = theme === 'light' ? '#9B6C00' : '#FFD24D';

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Syne+Mono&family=Epilogue:wght@400;500&display=swap');
        ::selection { background: ${accent}; color: #fff; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${t.bg}; }
        ::-webkit-scrollbar-thumb { background: ${t.border}; border-radius: 2px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        *:focus-visible { outline: 2px solid ${accent}; outline-offset: 3px; }
        button:focus-visible, [role="button"]:focus-visible { outline: 2px solid ${accent}; outline-offset: 2px; }
        .skip-link { position: absolute; top: -60px; left: 16px; z-index: 9999; background: ${accent}; color: #fff; padding: 8px 16px; font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; text-decoration: none; transition: top 0.15s ease; }
        .skip-link:focus { top: 8px; }
        .nav-link:hover { color: ${accent} !important; }
        .skill-tag:hover { background: ${accent} !important; color: #fff !important; border-color: ${accent} !important; }
        .exp-row:hover { background: ${t.expHover} !important; }
        .theme-btn:hover { opacity: 0.8 !important; }
        .cta-dl:hover { opacity: 0.85 !important; transform: translateY(-1px) !important; }
        .align-card:hover { border-color: ${accent} !important; }
        .platform-row:hover { background: ${t.expHover} !important; }
      `}</style>

      {/* Skip to content */}
      <a href="#overview" className="skip-link">
        Skip to content
      </a>

      {/* ── Header ── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: t.headerBg,
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${t.border}`,
          padding: isMobile ? '0 20px' : '0 40px',
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.25s ease, border-color 0.25s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 14,
              fontWeight: 800,
              color: t.text,
              letterSpacing: '-0.02em',
            }}
          >
            GP
          </span>
          {!isMobile && (
            <span
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: accent,
                background: accent + '18',
                border: `1px solid ${accent}30`,
                padding: '2px 9px',
                letterSpacing: '0.1em',
              }}
            >
              WALMART APPLICATION
            </span>
          )}
        </div>
        {!isMobile && (
          <nav aria-label="Page sections" style={{ display: 'flex', gap: 26 }}>
            {NAV_SECTIONS.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(s);
                }}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  color: activeSection === s ? accent : t.textMuted,
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  textTransform: 'capitalize',
                  paddingBottom: 2,
                  borderBottom: `1.5px solid ${activeSection === s ? yellow : 'transparent'}`,
                  transition: 'all 0.15s ease',
                }}
              >
                {s === 'fit'
                  ? 'Role Fit'
                  : s === 'philosophy'
                    ? 'Philosophy'
                    : s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </nav>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            className="theme-btn"
            onClick={toggleTheme}
            type="button"
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 10,
              background: t.toggleBg,
              color: t.toggleColor,
              border: 'none',
              padding: '5px 10px',
              cursor: 'pointer',
              letterSpacing: '0.08em',
              transition: 'opacity 0.15s ease',
            }}
          >
            {theme === 'light' ? '◐ Dark' : '◑ Light'}
          </button>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            className="cta-dl"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: '#fff',
              background: accent,
              padding: '6px 14px',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'opacity 0.15s ease, transform 0.15s ease',
            }}
          >
            {isMobile ? 'Resume' : 'Download Resume'}
          </a>
        </div>
      </header>

      <main
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: isMobile ? '0 20px 80px' : '0 40px 120px',
        }}
      >
        {/* ── Hero ── */}
        <section
          id="overview"
          style={{ paddingTop: 88, paddingBottom: 80, borderBottom: `1px solid ${t.border}` }}
        >
          <div
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 10,
              color: accent,
              letterSpacing: '0.16em',
              marginBottom: 28,
              animation: 'fadeUp 0.45s ease forwards',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                background: yellowBadgeBg,
                border: `1px solid ${yellowBadgeBorder}`,
                padding: '4px 12px',
                letterSpacing: '0.12em',
                color: yellowBadgeText,
              }}
            >
              ✦ APPLYING
            </span>
            <span style={{ color: t.textSubtle }}>LMS ADMINISTRATOR · WALMART CONNECT ACADEMY</span>
          </div>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(38px, 6vw, 66px)',
              fontWeight: 800,
              color: t.text,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: 12,
              animation: 'fadeUp 0.45s ease 0.07s forwards',
              opacity: 0,
            }}
          >
            Garth Puckerin
          </h1>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? 15 : 18,
              fontWeight: 500,
              color: accent,
              letterSpacing: '-0.01em',
              marginBottom: 32,
              animation: 'fadeUp 0.45s ease 0.1s forwards',
              opacity: 0,
            }}
          >
            Senior LMS Administrator · AI-Native Learning Systems Architect
          </div>
          <div style={{ maxWidth: 620, animation: 'fadeUp 0.45s ease 0.14s forwards', opacity: 0 }}>
            <p style={{ fontSize: 16, color: t.textBody, lineHeight: 1.8, marginBottom: 16 }}>
              I&apos;ve spent 10+ years making enterprise learning systems work at scale — Docebo,
              Workday Learning, SumTotal, SuccessFactors. The integrations, the permissions
              architecture, the data flows that keep learner records accurate when the org chart
              changes weekly.
            </p>
            <p style={{ fontSize: 16, color: t.textBody, lineHeight: 1.8, marginBottom: 16 }}>
              Recently I&apos;ve been extending traditional LMS operations with AI-assisted tooling:
              a Curriculum Builder that generates structured courses from a prompt, an integration
              control plane for enterprise HR and LMS systems, and a documentation drift detector
              that flags when training content falls behind product changes.
            </p>
            <p style={{ fontSize: 16, color: t.textBody, lineHeight: 1.8 }}>
              The Walmart Connect Academy LMS Administrator role combines everything I do best —
              platform administration at enterprise scale, AI-first system design, and
              cross-functional stakeholder work. Here&apos;s how my experience directly maps to the
              role.
            </p>
          </div>

          {/* Impact metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: 1,
              background: t.border,
              marginTop: 48,
              marginBottom: 32,
              animation: 'fadeUp 0.45s ease 0.17s forwards',
              opacity: 0,
            }}
          >
            {IMPACT_STATS.map((stat) => (
              <div
                key={stat.num}
                style={{ background: t.surface, padding: '20px 16px', textAlign: 'center' }}
              >
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: isMobile ? 22 : 28,
                    fontWeight: 800,
                    color: theme === 'light' ? accent : yellow,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: "'Syne Mono', monospace",
                    fontSize: 10,
                    color: t.textSubtle,
                    letterSpacing: '0.06em',
                    marginTop: 6,
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              gap: 20,
              flexWrap: 'wrap',
              alignItems: 'center',
              animation: 'fadeUp 0.45s ease 0.2s forwards',
              opacity: 0,
            }}
          >
            {[
              { text: 'garth.puckerin@me.com', href: 'mailto:garth.puckerin@me.com' },
              {
                text: 'linkedin.com/in/garthpuckerin',
                href: 'https://linkedin.com/in/garthpuckerin',
              },
              { text: 'github.com/garthpuckerin', href: 'https://github.com/garthpuckerin' },
            ].map((link) => (
              <a
                key={link.text}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Syne Mono', monospace",
                  fontSize: 12,
                  color: t.textMuted,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${t.border}`,
                  paddingBottom: 1,
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = accent;
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = accent;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = t.textMuted;
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = t.border;
                }}
              >
                {link.text}
              </a>
            ))}
            <span
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: '#16a34a',
                background: '#16a34a18',
                border: '1px solid #16a34a30',
                padding: '4px 12px',
                letterSpacing: '0.1em',
              }}
            >
              ● Available Now
            </span>
          </div>
        </section>

        {/* ── Role Fit ── */}
        <section
          id="fit"
          style={{ paddingTop: 72, paddingBottom: 72, borderBottom: `1px solid ${t.border}` }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 12,
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? 22 : 28,
                fontWeight: 700,
                color: t.text,
                letterSpacing: '-0.02em',
              }}
            >
              Why I&apos;m Built for This Role
            </h2>
            <span
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: t.textSubtle,
                letterSpacing: '0.1em',
              }}
            >
              6 OF 6 KEY REQUIREMENTS
            </span>
          </div>
          <p style={{ fontSize: 14, color: t.textMuted, marginBottom: 40, lineHeight: 1.6 }}>
            Each requirement from the job posting mapped directly to evidence from my work history.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 16,
            }}
          >
            {ROLE_ALIGNMENT.map((item, i) => (
              <div
                key={i}
                className="align-card"
                style={{
                  background: t.alignCardBg,
                  border: `1.5px solid ${t.alignCardBorder}`,
                  padding: '24px',
                  transition: 'border-color 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: t.text,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.3,
                    }}
                  >
                    <span style={{ color: yellow, marginRight: 8 }}>✓</span>
                    {item.requirement}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: t.textBody,
                    lineHeight: 1.7,
                    marginBottom: 16,
                    flex: 1,
                  }}
                >
                  {item.evidence}
                </p>
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: "'Syne Mono', monospace",
                    fontSize: 10,
                    color: t.badgeText,
                    background: t.badgeBg,
                    border: `1px solid ${accent}30`,
                    padding: '3px 10px',
                    letterSpacing: '0.08em',
                    alignSelf: 'flex-start',
                  }}
                >
                  {item.highlight}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Operational Philosophy ── */}
        <section
          id="philosophy"
          style={{ paddingTop: 72, paddingBottom: 72, borderBottom: `1px solid ${t.border}` }}
        >
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? 22 : 28,
              fontWeight: 700,
              color: t.text,
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}
          >
            Operational Philosophy
          </h2>
          <p
            style={{
              fontSize: 15,
              color: t.textMuted,
              marginBottom: 16,
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            Systems that keep working long after launch.
          </p>
          <p style={{ fontSize: 14, color: t.textBody, marginBottom: 32, lineHeight: 1.7 }}>
            My goal is always measurable operational outcomes: fewer support tickets, cleaner
            reporting, and faster program launches.
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              marginBottom: 40,
            }}
          >
            {[
              'Clean learner data and predictable enrollments — the foundation everything else depends on',
              'Audit-ready reporting that leadership can trust without preparing for it',
              'Stable integrations maintained through vendor changes, reorgs, and platform migrations',
              'Stakeholder trust built by being the person who flags issues before they become incidents',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ color: yellow, flexShrink: 0, marginTop: 5, fontSize: 7 }}>◆</span>
                <span style={{ fontSize: 15, color: t.textBody, lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
          <div
            style={{
              borderLeft: `3px solid ${accent}`,
              background: t.surface2,
              padding: '20px 28px',
              transition: 'background 0.25s ease',
            }}
          >
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? 14 : 16,
                fontWeight: 500,
                color: t.text,
                lineHeight: 1.75,
                letterSpacing: '-0.005em',
              }}
            >
              The best LMS is invisible — learners succeed, leaders get answers, and the platform
              simply works. AI enhances operations; it doesn&apos;t replace discipline.{' '}
              <span style={{ color: accent }}>Sustainable systems first, innovation second.</span>
            </p>
          </div>
        </section>

        {/* ── Projects ── */}
        <section
          id="projects"
          style={{ paddingTop: 72, paddingBottom: 72, borderBottom: `1px solid ${t.border}` }}
        >
          <div style={{ marginBottom: 12 }}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? 20 : 26,
                fontWeight: 700,
                color: t.text,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              Applied Systems Built on My Learning Platform Architecture
            </h2>
          </div>
          <p style={{ fontSize: 14, color: t.textMuted, marginBottom: 36, lineHeight: 1.6 }}>
            The AI-first mindset the job posting asks for — demonstrated through production systems,
            not prototypes.
          </p>

          {/* Platform Architecture block */}
          <div
            style={{
              background: t.surface2,
              border: `1.5px solid ${t.border}`,
              padding: isMobile ? '20px' : '24px 28px',
              marginBottom: 32,
            }}
          >
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: accent,
                letterSpacing: '0.14em',
                marginBottom: 10,
              }}
            >
              PLATFORM ARCHITECTURE
            </div>
            <p style={{ fontSize: 13.5, color: t.textBody, lineHeight: 1.65, marginBottom: 20 }}>
              The tools below are applied implementations built on three connected core systems.
              Click any to explore the architecture.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {PLATFORM_PROJECTS.map((pp, i) => (
                <div
                  key={pp.id}
                  className="platform-row"
                  onClick={() => setActiveModal(pp)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveModal(pp);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Explore ${pp.title}`}
                  style={{
                    display: 'flex',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    gap: isMobile ? 8 : 16,
                    padding: isMobile ? '14px 0' : '14px 28px',
                    margin: isMobile ? '0' : '0 -28px',
                    borderTop: i > 0 ? `1px solid ${t.border}` : 'none',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        color: t.text,
                        letterSpacing: '-0.01em',
                        marginBottom: 2,
                      }}
                    >
                      {pp.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Syne Mono', monospace",
                        fontSize: 10,
                        color: t.textSubtle,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {pp.type}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 5,
                      flexWrap: 'wrap',
                      justifyContent: isMobile ? 'flex-start' : 'flex-end',
                    }}
                  >
                    {pp.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "'Syne Mono', monospace",
                          fontSize: 10,
                          color: t.tagColor,
                          border: `1px solid ${t.border}`,
                          padding: '1px 6px',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: accent,
                      flexShrink: 0,
                    }}
                  >
                    Architecture Overview →
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Applied tools divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ flex: 1, height: 1, background: t.border }} />
            <span
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: t.textSubtle,
                letterSpacing: '0.1em',
                flexShrink: 0,
              }}
            >
              <span style={{ color: yellow }}>✦</span> APPLIED IMPLEMENTATIONS{' '}
              <span style={{ color: yellow }}>✦</span>
            </span>
            <div style={{ flex: 1, height: 1, background: t.border }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 16,
            }}
          >
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                accent={accent}
                t={t}
                onOpen={setActiveModal}
              />
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section
          id="experience"
          style={{ paddingTop: 72, paddingBottom: 72, borderBottom: `1px solid ${t.border}` }}
        >
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? 22 : 28,
              fontWeight: 700,
              color: t.text,
              letterSpacing: '-0.02em',
              marginBottom: 36,
            }}
          >
            Work History
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {EXPERIENCE.map((job, i) => (
              <div
                key={i}
                className="exp-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '200px 1fr',
                  gap: isMobile ? 6 : 24,
                  padding: isMobile ? '20px 12px' : '24px 20px',
                  borderTop: `1px solid ${t.border}`,
                  borderBottom: i === EXPERIENCE.length - 1 ? `1px solid ${t.border}` : 'none',
                  transition: 'background 0.15s ease',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne Mono', monospace",
                      fontSize: 11,
                      color: t.textSubtle,
                      letterSpacing: '0.06em',
                      marginBottom: 4,
                      lineHeight: 1.5,
                    }}
                  >
                    {job.period}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: t.textSecondary,
                      lineHeight: 1.4,
                    }}
                  >
                    {job.company}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: t.text,
                      marginBottom: 10,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {job.role}
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 5,
                    }}
                  >
                    {job.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: yellow, flexShrink: 0, marginTop: 5, fontSize: 7 }}>
                          ◆
                        </span>
                        <span style={{ fontSize: 13.5, color: t.textSecondary, lineHeight: 1.65 }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 20,
              padding: isMobile ? '16px 12px' : '20px',
              border: `1px solid ${t.border}`,
              background: t.surface2,
              transition: 'background 0.25s ease',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '200px 1fr',
                gap: isMobile ? 6 : 24,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Syne Mono', monospace",
                    fontSize: 11,
                    color: t.textSubtle,
                    letterSpacing: '0.06em',
                    marginBottom: 4,
                  }}
                >
                  2018
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: t.textSecondary,
                  }}
                >
                  NYC&amp;DA
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: t.text,
                    marginBottom: 4,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Full Stack Software Engineering
                </div>
                <div style={{ fontSize: 13.5, color: t.textMuted, lineHeight: 1.6 }}>
                  New York Code &amp; Design Academy · React, FastAPI, Django, PostgreSQL, REST API
                  design, Agile delivery
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section
          id="skills"
          style={{ paddingTop: 72, paddingBottom: 72, borderBottom: `1px solid ${t.border}` }}
        >
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? 22 : 28,
              fontWeight: 700,
              color: t.text,
              letterSpacing: '-0.02em',
              marginBottom: 36,
            }}
          >
            Capabilities
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? 28 : 36,
            }}
          >
            {SKILLS.map((group) => (
              <div key={group.group}>
                <div
                  style={{
                    fontFamily: "'Syne Mono', monospace",
                    fontSize: 10,
                    color: accent,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  {group.group}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="skill-tag"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 12,
                        fontWeight: 500,
                        color: t.tagColor,
                        background: t.tagBg,
                        border: `1px solid ${t.border}`,
                        padding: '5px 12px',
                        cursor: 'default',
                        transition: 'all 0.15s ease',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Closing thesis ── */}
        <div style={{ padding: isMobile ? '56px 0 0' : '72px 0 0', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? 15 : 18,
              fontWeight: 500,
              color: t.textMuted,
              lineHeight: 1.7,
              letterSpacing: '-0.01em',
              maxWidth: 520,
              margin: '0 auto',
            }}
          >
            I build learning systems that organizations can depend on —<br />
            and evolve safely as technology changes.
          </p>
        </div>

        {/* ── Contact ── */}
        <section id="contact" style={{ paddingTop: 52 }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? 22 : 28,
              fontWeight: 700,
              color: t.text,
              letterSpacing: '-0.02em',
              marginBottom: 8,
            }}
          >
            Get in Touch
          </h2>
          <p style={{ fontSize: 14, color: t.textMuted, marginBottom: 40, lineHeight: 1.6 }}>
            Download the resume or reach out directly.
          </p>
          <div
            style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}
          >
            <div
              style={{
                background: t.surface,
                border: `1.5px solid ${t.border}`,
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Syne Mono', monospace",
                    fontSize: 10,
                    color: accent,
                    letterSpacing: '0.12em',
                    marginBottom: 8,
                  }}
                >
                  RESUME
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: t.text,
                    letterSpacing: '-0.02em',
                    marginBottom: 8,
                  }}
                >
                  Garth Puckerin
                </div>
                <p style={{ fontSize: 13.5, color: t.textBody, lineHeight: 1.6 }}>
                  AI Native Learning Systems Architect · Senior LMS Administrator
                </p>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-dl"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#fff',
                    background: accent,
                    padding: '10px 20px',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'opacity 0.15s ease, transform 0.15s ease',
                    display: 'inline-block',
                  }}
                >
                  Download PDF
                </a>
                <a
                  href="/resume"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: accent,
                    border: `1.5px solid ${accent}`,
                    padding: '10px 20px',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'all 0.15s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = accent;
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.color = accent;
                  }}
                >
                  View Online
                </a>
              </div>
            </div>
            <div
              style={{
                background: t.surface2,
                border: `1.5px solid ${t.border}`,
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Syne Mono', monospace",
                    fontSize: 10,
                    color: accent,
                    letterSpacing: '0.12em',
                    marginBottom: 8,
                  }}
                >
                  CONTACT
                </div>
                <p style={{ fontSize: 13.5, color: t.textBody, lineHeight: 1.6 }}>
                  Reach out directly or connect on LinkedIn. I respond within one business day.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  {
                    label: 'Email',
                    value: 'garth.puckerin@me.com',
                    href: 'mailto:garth.puckerin@me.com',
                  },
                  {
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/garthpuckerin',
                    href: 'https://linkedin.com/in/garthpuckerin',
                  },
                  {
                    label: 'GitHub',
                    value: 'github.com/garthpuckerin',
                    href: 'https://github.com/garthpuckerin',
                  },
                ].map((c) => (
                  <div key={c.label} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                    <span
                      style={{
                        fontFamily: "'Syne Mono', monospace",
                        fontSize: 10,
                        color: t.textSubtle,
                        letterSpacing: '0.1em',
                        minWidth: 54,
                      }}
                    >
                      {c.label}
                    </span>
                    <a
                      href={c.href}
                      target={c.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Syne Mono', monospace",
                        fontSize: 12,
                        color: accent,
                        textDecoration: 'none',
                        borderBottom: `1px solid ${accent}40`,
                        paddingBottom: 1,
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = accent;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderBottomColor =
                          accent + '40';
                      }}
                    >
                      {c.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: `1px solid ${t.border}`,
          padding: isMobile ? '24px 20px' : '24px 40px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 16 : 0,
          background: t.footerBg,
          transition: 'background 0.25s ease, border-color 0.25s ease',
          marginTop: 80,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: t.text,
            }}
          >
            Garth Puckerin
          </span>
          <span
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 10,
              color: theme === 'light' ? t.textMuted : t.textSubtle,
              fontWeight: theme === 'light' ? 600 : 400,
              letterSpacing: '0.08em',
            }}
          >
            LMS ADMINISTRATOR APPLICATION · WALMART CONNECT ACADEMY
          </span>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { text: 'Email', href: 'mailto:garth.puckerin@me.com' },
            { text: 'LinkedIn', href: 'https://linkedin.com/in/garthpuckerin' },
            { text: 'Resume', href: RESUME_PATH },
          ].map((l) => (
            <a
              key={l.text}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 11,
                color: t.textSubtle,
                textDecoration: 'none',
                letterSpacing: '0.06em',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = accent;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = t.textSubtle;
              }}
            >
              {l.text}
            </a>
          ))}
        </div>
      </footer>

      {/* ── Modal ── */}
      {activeModal && (
        <ProjectModal
          project={activeModal}
          accent={accent}
          t={t}
          yellow={yellow}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
