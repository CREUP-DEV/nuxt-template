<template>
  <div class="flex min-h-svh flex-col">
    <a
      href="#main-navigation"
      class="bg-primary text-primary-foreground sr-only z-50 rounded px-4 py-2 focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
    >
      Saltar a la navegación
    </a>
    <a
      href="#main-content"
      class="bg-primary text-primary-foreground sr-only z-50 rounded px-4 py-2 focus:not-sr-only focus:absolute focus:top-4 focus:left-20"
    >
      Saltar al contenido
    </a>

    <AppHeader />

    <UMain id="main-content" class="flex-1">
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
