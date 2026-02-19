# Contributing

## Development Setup

```bash
npm install
npm run dev
```

## Quality Gates

Before committing, ensure all checks pass:

```bash
npm run validate
# Runs: typecheck → lint → format:check → test
```

Individual checks:

```bash
npm run typecheck      # TypeScript strict mode
npm run lint           # ESLint (Next.js rules)
npm run format:check   # Prettier check
npm run test           # Vitest
```

## Commit Convention

Uses [Conventional Commits](https://www.conventionalcommits.org/). Run the interactive prompt:

```bash
npm run commit
```

**Format**: `type(scope): description`

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`

**Scopes**: `ui`, `data`, `config`, `docs`, `ci`, `deps`, `theme`

**Examples**:

```
feat(ui): add closing thesis line above contact section
fix(ui): correct scroll tracking for last nav sections
style(theme): adjust yellow badge contrast for light mode
chore(deps): upgrade vitest to 4.x
```

## Pre-commit Hooks

Husky runs `lint-staged` on every commit:

- TypeScript/JS files → ESLint fix + Prettier format
- JSON/MD/YAML files → Prettier format

Commitlint validates the commit message format automatically.

## Releases

```bash
npm run release
```

Bumps `package.json` version, updates `CHANGELOG.md`, and creates a git tag based on conventional commit history. Push the tag to trigger a production deployment.
