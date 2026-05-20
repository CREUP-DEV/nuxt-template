# CREUP Template

Plantilla base para futuros proyectos web de CREUP. Está pensada como punto de partida ligero con Nuxt 4, Nuxt UI v4, Tailwind CSS v4 y una estructura preparada para crecer sin arrastrar servicios que cada proyecto quizá no necesite.

## Qué incluye

- Shell de aplicación con `app/app.vue`, `app/layouts/default.vue`, cabecera, contenido principal y pie.
- Nuxt UI configurado en español y con colores de marca CREUP.
- Tailwind CSS v4 mediante el plugin oficial de Vite.
- Fuentes base con `@nuxt/fonts` y colecciones de iconos locales con `@nuxt/icon`.
- Página inicial mínima para validar layout, estilos y modo de color.
- Página de error personalizada con metadatos `noindex`.
- Saltos accesibles a navegación y contenido principal.
- Configuración de lint, formato, typecheck estricto y accesibilidad en desarrollo.

## Stack

- Nuxt 4 + Nitro
- Nuxt UI v4 + Tailwind CSS v4
- `@nuxt/fonts`
- `@nuxt/icon`
- `@nuxt/a11y`
- ESLint + Prettier

## Estructura relevante

- `app/app.vue`: configuración global, locale español de Nuxt UI, favicon y montaje de layouts.
- `app/app.config.ts`: colores Nuxt UI y ajustes visuales compartidos.
- `app/assets/css/main.css`: tema Tailwind, tokens de marca y reglas globales de movimiento.
- `app/layouts/default.vue`: shell principal con enlaces de salto accesibles.
- `app/components/AppHeader.vue`: cabecera con imagotipo adaptable a modo claro/oscuro.
- `app/components/AppFooter.vue`: pie con descripción corta y redes sociales.
- `app/error.vue`: estado de error con estructura visual consistente.
- `AGENTS.md`: instrucciones de trabajo para agentes en esta plantilla.

## Fuera de alcance

La plantilla no incorpora base de datos, autenticación, CMS, administración, i18n multiidioma, analítica, colas, Redis, APIs externas ni despliegue Docker. Añade esos servicios solo cuando el proyecto que nace de la plantilla los necesite.

## Comandos

```sh
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

## Validación recomendada

Antes de entregar cambios en un proyecto basado en esta plantilla, ejecuta:

```sh
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

`pnpm peers check` puede mostrar avisos de paquetes del ecosistema ESLint que todavía no declaran compatibilidad con ESLint 10. La plantilla se considera válida si los comandos anteriores pasan.

## Desarrollo

Instala dependencias y arranca el servidor:

```sh
pnpm install
pnpm dev
```

Por defecto, Nuxt sirve la aplicación en `http://localhost:3000`.

## Convenciones

- El código y los comentarios se escriben en inglés.
- La copia visible para usuarios está en español.
- Usa componentes de Nuxt UI antes de crear primitivas propias.
- Mantén el head global mínimo y centralizado.
- Preserva soporte de modo claro/oscuro cuando uses recursos de marca.
- Valida datos no confiables en los límites del sistema cuando se añadan formularios, rutas o endpoints.
