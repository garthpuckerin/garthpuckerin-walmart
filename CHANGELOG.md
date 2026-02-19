# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and
[Conventional Commits](https://www.conventionalcommits.org/). This repository uses
`standard-version` to generate changelog entries and bump versions on release.

---

## [Unreleased]

### Styling

- **Yellow bullet points**: all `◆` list markers (modal capabilities, philosophy section, experience bullets) changed from `accent` (Walmart blue) to `yellow` token — consistent warm accent in both light and dark themes
- **Yellow ✦ sparks**: `✦ APPLIED IMPLEMENTATIONS ✦` divider ✦ characters now use `yellow` token (were inheriting `t.textSubtle` which rendered blue on light theme)

### Documentation

- `LICENSE`: MIT license added; GitHub now displays license badge
- `package.json`: add `description`, `homepage`, and `repository` fields
- PR template: add test plan section (validate, light/dark, mobile) and CHANGELOG checklist item

### Config

- Align repo tooling standards with workspace conventions:
  - `tsconfig.json`: enable `strict: true`, `moduleResolution: bundler`, add `@/*` path alias
  - `.prettierrc`: `trailingComma` changed from `all` → `es5` (consistent across workspace)
  - `commitlint.config.cjs`: add `header-max-length` rule and `scope-enum` (`ui`, `data`, `config`, `docs`, `ci`, `deps`, `theme`)
  - `package.json`: add `validate` script (typecheck + lint + format:check + test)
  - `.versionrc.json`: standard-version type/section mappings for structured CHANGELOG output
  - `.husky`: remove deprecated Husky v8 shebang lines (v9 convention)
- Add `CONTRIBUTING.md`: quality gates, commit convention with examples, release process
- Rewrite `README.md`: setup, scripts table, project structure, release docs

---

## [0.1.0] — 2025 (initial build)

### Features

**Platform Architecture Block**

- Added three-row "PLATFORM ARCHITECTURE" block above the applied project grid
- Each row (MIMIR², Aether SDK, Janus) opens a full-detail modal on click
- Rows are keyboard-accessible (`tabIndex`, `role="button"`, `onKeyDown`)
- `platformLabel` badge on each applied project card connects tools to their platform layer

**Project Modals**

- `ProjectModal` component: fixed overlay with blur backdrop, sticky header, Escape-to-close, body scroll lock
- Five sections per modal: OVERVIEW / KEY CAPABILITIES / ENTERPRISE VALUE / EXAMPLE APPLICATIONS / TECHNOLOGY
- Accessible: `role="dialog"`, `aria-modal`, `aria-label`, close button with focus state
- Applied to all 7 projects (3 platform + 4 applied tools)

**Navigation**

- Sticky header with scroll-aware active section highlighting
- Scroll tracking via `getBoundingClientRect().top + scrollY` (reliable document-relative position; avoids `offsetTop` ancestor-relative bug)
- Two-effect pattern: init effect + separate scroll effect that depends on `mounted`, ensuring sections exist in DOM before tracking begins
- Yellow underline on active nav item; accent color on active label
- Skip-to-content link (`.skip-link`) for keyboard navigation

**Responsive Layout**

- `isMobile` state (< 720px) with resize listener
- Header: hides nav and WALMART APPLICATION badge on mobile; "Resume" replaces "Download Resume"
- All 2-col grids collapse to 1-col on mobile
- Experience rows collapse from 2-col grid to single column
- Footer stacks vertically on mobile
- Platform rows stack vertically on mobile

**Accessibility**

- `*:focus-visible` CSS outline on all interactive elements
- `role="button"`, `tabIndex={0}`, `onKeyDown` (Enter/Space) on all non-anchor interactive divs
- `aria-label` on nav, modal, and card elements

**Yellow Accent System**

- `yellow` token: `#C49B00` (light) / `#FFD24D` (dark)
- `yellowBadge*` tokens for the ✦ APPLYING badge (pale yellow bg, amber border, dark amber text on light; transparent tint on dark)
- Applied to: APPLYING badge, ✓ checkmarks in Role Fit cards, nav active underline, dark-mode stat numbers
- Light mode stat numbers remain Walmart blue (`accent`) for contrast

**Impact Metrics Row**

- 4-stat grid in hero: 10,000+ users / 5 LMS platforms / 6/6 requirements / 2 AI tools in production
- 1px gap between cells creates hairline grid effect
- Stat numbers theme-aware (blue on light, yellow on dark)

**Closing Thesis**

- Centered statement above Contact section: _"I build learning systems that organizations can depend on — and evolve safely as technology changes."_

**Section Rename**

- "Apply" → "Contact" / "Get in Touch"
- Section title: "Applied Systems Built on My Learning Platform Architecture"
- `✦ APPLIED IMPLEMENTATIONS ✦` divider between platform block and project cards

### Styling

- `footerBg`: `theme === 'light'` footer label uses `t.textMuted` + `fontWeight: 600` for legibility (was `t.textSubtle` in both modes)
- Card flex-column layout: `display: flex, flexDirection: column` on cards; `flex: 1` on description text; `alignSelf: flex-start` on badge spans — ensures bottom-aligned footers across unequal-height cards
- Experience row hover: `t.expHover` (light `#eef4fb` / dark `#0b1c30`)
- Platform row hover: same `t.expHover` token

### Bug Fixes

- **Scroll tracking**: replaced `offsetTop` (relative to positioned ancestor) with `getBoundingClientRect().top + scrollY` — fixes Contact and Skills never becoming active
- **Nav highlight race**: split scroll-tracking into a separate `useEffect` dependent on `[mounted]`, so sections exist in DOM when the observer attaches
- **Role Fit badge stretch**: added `alignSelf: flex-start` to prevent badge from stretching full card width in flex-column layout

### Infrastructure

- `git init` — project was not under version control at project start
- `.gitignore`: exclude `.next/`, `node_modules/`
- `.github/workflows/ci.yml`: typecheck → lint → format:check → test → coverage → build + security audit on push/PR
- `.github/workflows/deploy.yml`: Vercel production deploy on push to main
- Husky + lint-staged: ESLint + Prettier on staged TS/JS; Prettier on JSON/MD/YAML
- Commitlint: conventional commits enforced on commit-msg
- Commitizen: interactive prompt via `npm run commit`
- standard-version: `npm run release` bumps version, updates CHANGELOG, creates git tag
