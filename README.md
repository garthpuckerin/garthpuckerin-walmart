# Garth Puckerin — Walmart Connect Academy Application

A targeted job application site for the LMS Administrator role at Walmart Connect Academy. Built with Next.js 16, TypeScript, and inline styles — no external UI libraries.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                  | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `npm run dev`           | Start development server                             |
| `npm run build`         | Production build                                     |
| `npm run typecheck`     | TypeScript type check                                |
| `npm run lint`          | ESLint check                                         |
| `npm run format`        | Prettier format (write)                              |
| `npm run format:check`  | Prettier format (check only)                         |
| `npm run test`          | Run tests                                            |
| `npm run test:coverage` | Run tests with coverage                              |
| `npm run validate`      | Full quality gate (typecheck + lint + format + test) |
| `npm run commit`        | Commitizen interactive commit                        |
| `npm run release`       | Bump version, update CHANGELOG, tag                  |

## Structure

```
app/
  page.tsx            — main application site
  resume/page.tsx     — /resume route (resume viewer)
  layout.tsx
  globals.css
components/
  JobPosting.tsx
  ResumeCard.tsx
lib/
  data.ts             — all site content (projects, experience, skills)
  themes.ts           — light/dark token system
public/
  *.pdf               — resume PDF
```

## Commits

Uses [Conventional Commits](https://www.conventionalcommits.org/) enforced via Commitlint. Use `npm run commit` for an interactive prompt.

Valid scopes: `ui`, `data`, `config`, `docs`, `ci`, `deps`, `theme`

## Releases

```bash
npm run release
```

Updates `CHANGELOG.md`, bumps `package.json` version, and creates a git tag. Push the tag to trigger deployment.
