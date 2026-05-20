# Project Template - Agent Instructions

## Project Scope

This repository is a **Nuxt 4 template** for future web projects.

Primary goals:

- Keep a fast, accessible, and maintainable baseline.
- Prefer framework conventions over custom abstractions.
- Provide a clean starting point for product-specific extensions.

---

## Tech Stack

- **Framework:** Nuxt 4 + Nitro
- **UI:** Nuxt UI v4
- **Styling:** Tailwind CSS v4
- **Fonts:** `@nuxt/fonts`
- **Icons:** `@nuxt/icon` with local Iconify bundles
- **Accessibility:** `@nuxt/a11y` in development
- **Tooling:** ESLint, Prettier, strict TypeScript

> Do not assume additional services (DB, auth, CMS, i18n module, external APIs) unless they are explicitly added to the project.

---

## Repository Structure

```text
app/
  app.vue            Global app shell and Nuxt UI locale
  app.config.ts      Nuxt UI theme settings
  assets/css/        Tailwind theme and global CSS
  components/        Reusable Vue components
  composables/       Shared Vue composables
  layouts/           Page layouts
  pages/             Route pages
public/
  favicon.*          Browser icons
  img/               Public brand assets
```

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
- Prefer `@nuxt/icon`/Iconify icon names over inline SVG for common interface icons.

### Accessibility (Mandatory)

- Use semantic HTML (`header`, `nav`, `main`, `section`, `button`, etc.).
- Ensure keyboard accessibility and visible focus states.
- Provide meaningful `alt` text for informative images.
- Use ARIA attributes only when needed and keep them accurate.
- Do not rely on color alone to communicate meaning.
- Preserve skip links, route announcements, and color-mode behavior unless a replacement provides the same accessibility value.

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
- Keep route pages focused on content and composition. Move reusable behavior into composables only when it is shared or meaningfully complex.
- Do not introduce project-specific content structures, admin workflows, or external integrations into the template without an explicit requirement.

---

## Configuration Conventions

- Keep `nuxt.config.ts` limited to reusable baseline configuration.
- Do not add environment variables unless a feature requires them.
- Keep `app/assets/css/main.css` focused on theme tokens, global accessibility behavior, and genuinely shared component utilities.
- Use `app/app.config.ts` for Nuxt UI theme customization.
- Keep TypeScript strictness enabled.

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

Run this validation set before handing off implemented changes:

```sh
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

`pnpm peers check` can report ecosystem peer warnings around ESLint 10. Treat those as informational when the validation set above succeeds.

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
- Type checking passes (`pnpm typecheck`).
- Lint passes (`pnpm lint`).
- Build passes (`pnpm build`).
- Documentation updated if behavior or structure changed.
