# CREUP — Plantilla base (Nuxt 4 + Nuxt UI)

Plantilla para futuros proyectos web con **Nuxt 4**, **Nuxt UI v4** y **Tailwind CSS v4**.

## Qué incluye

- Estructura base con `app.vue` + `layouts/default.vue`.
- Header con imagotipo adaptable a modo claro/oscuro (`UColorModeImage`).
- Botón de cambio de tema (`UColorModeButton`).
- Footer simplificado con enlaces a redes sociales.
- Página de error personalizada (`error.vue`) manteniendo el mismo estilo de cabecera y pie.

## Estructura relevante

- `app/app.vue`: configuración global (`lang="es"`, favicon) y montaje de layout.
- `app/layouts/default.vue`: shell principal (header, contenido, footer).
- `error.vue`: estado de error con estilo consistente.
- `AGENTS.md`: guía de trabajo para agentes en esta plantilla.

## Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm lint
pnpm lint:fix
pnpm typecheck
pnpm format
pnpm format:check
```
