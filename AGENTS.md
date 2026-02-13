# Project Template — Agent Instructions

## Project Scope

This repository is a **Nuxt 4 template** for future web projects.

Primary goals:
- Keep a fast, accessible, and maintainable baseline.
- Prefer framework conventions over custom abstractions.
- Provide a clean starting point for product-specific extensions.

---

## Tech Stack

- **Framework:** Nuxt 4
- **UI:** Nuxt UI v4
- **Styling:** Tailwind CSS v4

> Do not assume additional services (DB, auth, CMS, i18n module, external APIs) unless they are explicitly added to the project.

---

## Language Rules

- **Code and code comments must be in English.**
- **UI copy is currently Spanish-only.**
- If multilingual support is added later, keep the design and content structure scalable.

---

## Engineering Principles

### Keep It Simple

- Prefer the smallest clear solution that works.
- Avoid premature abstractions and unnecessary dependencies.
- Keep changes focused and easy to review.

### Prefer Nuxt UI Components

- Use Nuxt UI components first.
- Use Tailwind utilities mainly for layout and spacing.
- Keep visual consistency with the existing theme primitives.

### Accessibility (Mandatory)

- Use semantic HTML (`header`, `nav`, `main`, `section`, `button`, etc.).
- Ensure keyboard accessibility and visible focus states.
- Provide meaningful `alt` text for informative images.
- Use ARIA attributes only when needed and keep them accurate.
- Do not rely on color alone to communicate meaning.

### Validation and Safety

- Validate all untrusted input at boundaries (forms, query strings, route params, server endpoints).
- Never trust client-provided data implicitly.
- Keep error responses safe: avoid leaking internal details.

---

## Frontend Conventions

- Keep page/layout composition straightforward (`app.vue` + `layouts/default.vue` + pages).
- Use Nuxt UI primitives for app shell elements (header, main, footer, error states).
- Keep global head metadata centralized and minimal.
- Preserve color-mode support when using brand assets.

---

## Development Workflow

Common commands:
- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm preview`
- `pnpm lint`
- `pnpm lint:fix`
- `pnpm typecheck`
- `pnpm format`
- `pnpm format:check`

---

## Commit Guidelines

Use Conventional Commits:

```text
feat: add public contact section
fix: correct color mode toggle behavior
docs: update setup and usage instructions
chore(deps): bump Nuxt UI patch version
refactor: simplify default layout structure
perf: reduce image payload on homepage
test: add page rendering smoke test
ci: run lint and typecheck on pull requests
```

---

## Pull Request Checklist

- Uses Nuxt UI components where applicable.
- UI copy is Spanish and consistent.
- Accessibility basics verified (keyboard, labels, alt text, contrast).
- Lint passes (`pnpm lint`).
- Build passes (`pnpm build`).
- Documentation updated if behavior or structure changed.
