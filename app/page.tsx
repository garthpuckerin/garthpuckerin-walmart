'use client';

import { useState, useEffect } from 'react';
import { ROLE_ALIGNMENT, EXPERIENCE, SKILLS, PROJECTS, PLATFORM_PROJECTS } from '../lib/data';
import type { Project, PlatformProject } from '../lib/data';

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
  onClose,
}: {
  project: Project | PlatformProject;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
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
          background: 'var(--surface)',
          border: '1px solid var(--border)',
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
            background: 'var(--surface)',
            zIndex: 1,
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: 'var(--accent)',
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
                color: 'var(--text)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
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
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
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
                color: 'var(--text-subtle)',
                letterSpacing: '0.12em',
                marginBottom: 10,
              }}
            >
              OVERVIEW
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.75 }}>
              {project.modal.overview}
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: 'var(--text-subtle)',
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
                  <span
                    style={{ color: 'var(--yellow)', flexShrink: 0, marginTop: 5, fontSize: 6 }}
                  >
                    ◆
                  </span>
                  <span
                    style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.65 }}
                  >
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              borderLeft: '3px solid var(--accent)',
              background: 'var(--surface2)',
              padding: '16px 20px',
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: 'var(--accent)',
                letterSpacing: '0.12em',
                marginBottom: 8,
              }}
            >
              ENTERPRISE VALUE
            </div>
            <p
              style={{
                fontSize: 14,
                color: 'var(--text)',
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
                color: 'var(--text-subtle)',
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
                  <span style={{ color: 'var(--text-subtle)', flexShrink: 0, marginTop: 1 }}>
                    ·
                  </span>
                  <span style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {uc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: 'var(--text-subtle)',
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
                    color: 'var(--tag-color)',
                    background: 'var(--tag-bg)',
                    border: '1px solid var(--border)',
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
  onOpen,
}: {
  project: Project;
  onOpen: (_project: Project) => void;
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
        border: `1.5px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        padding: '24px 24px 20px',
        background: hovered ? 'var(--card-hover-bg)' : 'var(--surface)',
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
            color: hovered ? 'rgba(255,255,255,0.6)' : 'var(--text-subtle)',
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
              color: hovered ? '#fff' : 'var(--accent)',
              background: hovered ? 'rgba(255,255,255,0.15)' : 'var(--accent-10)',
              border: `1px solid ${hovered ? 'rgba(255,255,255,0.25)' : 'var(--accent-35)'}`,
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
              color: hovered ? '#fff' : 'var(--accent)',
              background: hovered ? 'rgba(255,255,255,0.15)' : 'var(--accent-10)',
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
          color: hovered ? 'var(--card-hover-text)' : 'var(--text)',
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
          color: hovered ? 'var(--card-hover-muted)' : 'var(--text-body)',
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
                color: hovered ? 'rgba(255,255,255,0.75)' : 'var(--tag-color)',
                border: `1px solid ${hovered ? 'rgba(255,255,255,0.25)' : 'var(--border)'}`,
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
            color: hovered ? '#fff' : 'var(--accent)',
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
  const [activeModal, setActiveModal] = useState<Project | PlatformProject | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('wm-theme') as 'light' | 'dark' | null;
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }

    const checkMobile = () => setIsMobile(window.innerWidth < 720);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Uses scroll position rather than IntersectionObserver — reliably handles short sections at page bottom
  useEffect(() => {
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
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('wm-theme', next);
    document.documentElement.dataset.theme = next;
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        fontFamily: "'Epilogue', sans-serif",
        color: 'var(--text)',
        transition: 'background 0.25s ease, color 0.25s ease',
      }}
    >
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
          background: 'var(--header-bg)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid var(--border)',
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
              color: 'var(--text)',
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
                color: 'var(--accent)',
                background: 'var(--accent-10)',
                border: '1px solid var(--accent-20)',
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
                  color: activeSection === s ? 'var(--accent)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  textTransform: 'capitalize',
                  paddingBottom: 2,
                  borderBottom: `1.5px solid ${activeSection === s ? 'var(--yellow)' : 'transparent'}`,
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
              background: 'var(--toggle-bg)',
              color: 'var(--toggle-color)',
              border: 'none',
              padding: '0 10px',
              height: 30,
              display: 'inline-flex',
              alignItems: 'center',
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
              background: 'var(--accent)',
              padding: '0 14px',
              height: 30,
              display: 'inline-flex',
              alignItems: 'center',
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
          style={{ paddingTop: 88, paddingBottom: 80, borderBottom: '1px solid var(--border)' }}
        >
          <div
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 10,
              color: 'var(--accent)',
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
                background: 'var(--yellow-badge-bg)',
                border: '1px solid var(--yellow-badge-border)',
                padding: '4px 12px',
                letterSpacing: '0.12em',
                color: 'var(--yellow-badge-text)',
              }}
            >
              ✦ APPLYING
            </span>
            <span style={{ color: 'var(--text-subtle)' }}>
              LMS ADMINISTRATOR · WALMART CONNECT ACADEMY
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(38px, 6vw, 66px)',
              fontWeight: 800,
              color: 'var(--text)',
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
              color: 'var(--accent)',
              letterSpacing: '-0.01em',
              marginBottom: 32,
              animation: 'fadeUp 0.45s ease 0.1s forwards',
              opacity: 0,
            }}
          >
            Senior LMS Administrator · AI-Native Learning Systems Architect
          </div>
          <div style={{ maxWidth: 620, animation: 'fadeUp 0.45s ease 0.14s forwards', opacity: 0 }}>
            <p
              style={{ fontSize: 16, color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 16 }}
            >
              I&apos;ve spent 10+ years making enterprise learning systems work at scale — Docebo,
              Workday Learning, SumTotal, SuccessFactors. The integrations, the permissions
              architecture, the data flows that keep learner records accurate when the org chart
              changes weekly.
            </p>
            <p
              style={{ fontSize: 16, color: 'var(--text-body)', lineHeight: 1.8, marginBottom: 16 }}
            >
              Recently I&apos;ve been extending traditional LMS operations with AI-assisted tooling:
              a Curriculum Builder that generates structured courses from a prompt, an integration
              control plane for enterprise HR and LMS systems, and a documentation drift detector
              that flags when training content falls behind product changes.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-body)', lineHeight: 1.8 }}>
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
              background: 'var(--border)',
              marginTop: 48,
              marginBottom: 32,
              animation: 'fadeUp 0.45s ease 0.17s forwards',
              opacity: 0,
            }}
          >
            {IMPACT_STATS.map((stat) => (
              <div
                key={stat.num}
                style={{ background: 'var(--surface)', padding: '20px 16px', textAlign: 'center' }}
              >
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: isMobile ? 22 : 28,
                    fontWeight: 800,
                    color: theme === 'light' ? 'var(--accent)' : 'var(--yellow)',
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
                    color: 'var(--text-subtle)',
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
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: 1,
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)';
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)';
                  (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--border)';
                }}
              >
                {link.text}
              </a>
            ))}
            <span
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: 'var(--status-green)',
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
          style={{ paddingTop: 72, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}
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
                color: 'var(--text)',
                letterSpacing: '-0.02em',
              }}
            >
              Why I&apos;m Built for This Role
            </h2>
            <span
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: 'var(--text-subtle)',
                letterSpacing: '0.1em',
              }}
            >
              6 OF 6 KEY REQUIREMENTS
            </span>
          </div>
          <p
            style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 40, lineHeight: 1.6 }}
          >
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
                  background: 'var(--align-card-bg)',
                  border: '1.5px solid var(--align-card-border)',
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
                      color: 'var(--text)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.3,
                    }}
                  >
                    <span style={{ color: 'var(--yellow)', marginRight: 8 }}>✓</span>
                    {item.requirement}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--text-body)',
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
                    color: 'var(--badge-text)',
                    background: 'var(--badge-bg)',
                    border: '1px solid var(--accent-20)',
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
          style={{ paddingTop: 72, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}
        >
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? 22 : 28,
              fontWeight: 700,
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}
          >
            Operational Philosophy
          </h2>
          <p
            style={{
              fontSize: 15,
              color: 'var(--text-muted)',
              marginBottom: 16,
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            Systems that keep working long after launch.
          </p>
          <p style={{ fontSize: 14, color: 'var(--text-body)', marginBottom: 32, lineHeight: 1.7 }}>
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
                <span style={{ color: 'var(--yellow)', flexShrink: 0, marginTop: 5, fontSize: 7 }}>
                  ◆
                </span>
                <span style={{ fontSize: 15, color: 'var(--text-body)', lineHeight: 1.7 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div
            style={{
              borderLeft: '3px solid var(--accent)',
              background: 'var(--surface2)',
              padding: '20px 28px',
              transition: 'background 0.25s ease',
            }}
          >
            <p
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? 14 : 16,
                fontWeight: 500,
                color: 'var(--text)',
                lineHeight: 1.75,
                letterSpacing: '-0.005em',
              }}
            >
              The best LMS is invisible — learners succeed, leaders get answers, and the platform
              simply works. AI enhances operations; it doesn&apos;t replace discipline.{' '}
              <span style={{ color: 'var(--accent)' }}>
                Sustainable systems first, innovation second.
              </span>
            </p>
          </div>
        </section>

        {/* ── Projects ── */}
        <section
          id="projects"
          style={{ paddingTop: 72, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}
        >
          <div style={{ marginBottom: 12 }}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: isMobile ? 20 : 26,
                fontWeight: 700,
                color: 'var(--text)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              Applied Systems Built on My Learning Platform Architecture
            </h2>
          </div>
          <p
            style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 36, lineHeight: 1.6 }}
          >
            The AI-first mindset the job posting asks for — demonstrated through production systems,
            not prototypes.
          </p>

          {/* Platform Architecture block */}
          <div
            style={{
              background: 'var(--surface2)',
              border: '1.5px solid var(--border)',
              padding: isMobile ? '20px' : '24px 28px',
              marginBottom: 32,
            }}
          >
            <div
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: 'var(--accent)',
                letterSpacing: '0.14em',
                marginBottom: 10,
              }}
            >
              PLATFORM ARCHITECTURE
            </div>
            <p
              style={{
                fontSize: 13.5,
                color: 'var(--text-body)',
                lineHeight: 1.65,
                marginBottom: 20,
              }}
            >
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
                    borderTop: i > 0 ? '1px solid var(--border)' : 'none',
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
                        color: 'var(--text)',
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
                        color: 'var(--text-subtle)',
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
                          color: 'var(--tag-color)',
                          border: '1px solid var(--border)',
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
                      color: 'var(--accent)',
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
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
            <span
              style={{
                fontFamily: "'Syne Mono', monospace",
                fontSize: 10,
                color: 'var(--text-subtle)',
                letterSpacing: '0.1em',
                flexShrink: 0,
              }}
            >
              <span style={{ color: 'var(--yellow)' }}>✦</span> APPLIED IMPLEMENTATIONS{' '}
              <span style={{ color: 'var(--yellow)' }}>✦</span>
            </span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: 16,
            }}
          >
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setActiveModal} />
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section
          id="experience"
          style={{ paddingTop: 72, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}
        >
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? 22 : 28,
              fontWeight: 700,
              color: 'var(--text)',
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
                  borderTop: '1px solid var(--border)',
                  borderBottom: i === EXPERIENCE.length - 1 ? '1px solid var(--border)' : 'none',
                  transition: 'background 0.15s ease',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne Mono', monospace",
                      fontSize: 11,
                      color: 'var(--text-subtle)',
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
                      color: 'var(--text-secondary)',
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
                      color: 'var(--text)',
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
                        <span
                          style={{
                            color: 'var(--yellow)',
                            flexShrink: 0,
                            marginTop: 5,
                            fontSize: 7,
                          }}
                        >
                          ◆
                        </span>
                        <span
                          style={{
                            fontSize: 13.5,
                            color: 'var(--text-secondary)',
                            lineHeight: 1.65,
                          }}
                        >
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
              border: '1px solid var(--border)',
              background: 'var(--surface2)',
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
                    color: 'var(--text-subtle)',
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
                    color: 'var(--text-secondary)',
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
                    color: 'var(--text)',
                    marginBottom: 4,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Full Stack Software Engineering
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.6 }}>
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
          style={{ paddingTop: 72, paddingBottom: 72, borderBottom: '1px solid var(--border)' }}
        >
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: isMobile ? 22 : 28,
              fontWeight: 700,
              color: 'var(--text)',
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
                    color: 'var(--accent)',
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
                        color: 'var(--tag-color)',
                        background: 'var(--tag-bg)',
                        border: '1px solid var(--border)',
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
              color: 'var(--text-muted)',
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
              color: 'var(--text)',
              letterSpacing: '-0.02em',
              marginBottom: 8,
            }}
          >
            Get in Touch
          </h2>
          <p
            style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 40, lineHeight: 1.6 }}
          >
            Download the resume or reach out directly.
          </p>
          <div
            style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}
          >
            <div
              style={{
                background: 'var(--surface)',
                border: '1.5px solid var(--border)',
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
                    color: 'var(--accent)',
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
                    color: 'var(--text)',
                    letterSpacing: '-0.02em',
                    marginBottom: 8,
                  }}
                >
                  Garth Puckerin
                </div>
                <p style={{ fontSize: 13.5, color: 'var(--text-body)', lineHeight: 1.6 }}>
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
                    background: 'var(--accent)',
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
                    color: 'var(--accent)',
                    border: '1.5px solid var(--accent)',
                    padding: '10px 20px',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'all 0.15s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)';
                  }}
                >
                  View Online
                </a>
              </div>
            </div>
            <div
              style={{
                background: 'var(--surface2)',
                border: '1.5px solid var(--border)',
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
                    color: 'var(--accent)',
                    letterSpacing: '0.12em',
                    marginBottom: 8,
                  }}
                >
                  CONTACT
                </div>
                <p style={{ fontSize: 13.5, color: 'var(--text-body)', lineHeight: 1.6 }}>
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
                        color: 'var(--text-subtle)',
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
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        borderBottom: '1px solid var(--accent-10)',
                        paddingBottom: 1,
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderBottomColor =
                          'var(--accent)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderBottomColor =
                          'var(--accent-10)';
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
          borderTop: '1px solid var(--border)',
          padding: isMobile ? '24px 20px' : '24px 40px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? 16 : 0,
          background: 'var(--footer-bg)',
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
              color: 'var(--text)',
            }}
          >
            Garth Puckerin
          </span>
          <span
            style={{
              fontFamily: "'Syne Mono', monospace",
              fontSize: 10,
              color: theme === 'light' ? 'var(--text-muted)' : 'var(--text-subtle)',
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
                color: 'var(--text-subtle)',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-subtle)';
              }}
            >
              {l.text}
            </a>
          ))}
        </div>
      </footer>

      {/* ── Modal ── */}
      {activeModal && <ProjectModal project={activeModal} onClose={() => setActiveModal(null)} />}
    </div>
  );
}
