<script setup lang="ts">
import { es } from '@nuxt/ui/locale'

useHead({
  htmlAttrs: { lang: 'es' },
  meta: [
    { name: 'theme-color', content: '#792225' },
    { name: 'author', content: 'CREUP' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
    { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})
</script>

<template>
  <UApp :locale="es">
    <NuxtLoadingIndicator color="var(--ui-primary)" :height="3" />
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
