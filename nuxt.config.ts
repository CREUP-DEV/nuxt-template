import tailwindcss from '@tailwindcss/vite'

const isDev = process.env.NODE_ENV !== 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-04-09',

  devtools: {
    enabled: isDev,
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: isDev ? ['localhost', '127.0.0.1', '.trycloudflare.com'] : undefined,
    },
  },

  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxt/icon', '@nuxt/eslint', '@nuxt/a11y'],

  css: ['~/assets/css/main.css'],

  icon: {
    provider: 'server',
    fallbackToApi: false,
    collections: ['tabler', 'lucide'],
    serverBundle: {
      collections: ['tabler', 'lucide'],
    },
  },

  fonts: {
    defaults: {
      subsets: ['latin'],
    },
    families: [
      {
        name: 'Raleway',
        provider: 'google',
        global: true,
        weights: [400, 700],
        styles: ['normal', 'italic'],
        subsets: ['latin'],
      },
      {
        name: 'Red Rose',
        provider: 'none',
      },
      {
        name: 'Fira Code',
        provider: 'none',
      },
    ],
  },

  a11y: {
    enabled: isDev,
    defaultHighlight: false,
    logIssues: true,
  },

  routeRules: {
    '/': { prerender: true },
  },
})
