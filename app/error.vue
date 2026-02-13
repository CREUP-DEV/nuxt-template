<script setup lang="ts">
import type { NuxtError } from '#app'

defineOptions({
  name: 'AppErrorPage'
})

const { error } = defineProps<{
  error: NuxtError
}>()

const status = computed(() => error.statusCode ?? 500)
const statusText = computed(
  () =>
    error.statusMessage || error.message || 'Ha ocurrido un error inesperado.'
)

const route = useRoute()

watch(
  () => route.fullPath,
  async (newPath, oldPath) => {
    if (newPath !== oldPath) {
      await clearError()
    }
  }
)

const handleError = async () => {
  await clearError({ redirect: '/' })
}
</script>

<template>
  <UApp>
    <div class="bg-background flex min-h-svh flex-col">
      <AppHeader />

      <UMain class="flex-1">
        <UContainer class="flex items-center justify-center px-4 py-16">
          <UCard
            class="w-full max-w-xl text-center"
            :ui="{ body: 'py-10 sm:py-12' }"
          >
            <p class="text-primary text-7xl font-bold sm:text-8xl">
              {{ status }}
            </p>

            <h1 class="text-foreground mt-4 text-2xl font-semibold">
              {{
                status === 404 ? 'Página no encontrada' : 'Ha ocurrido un error'
              }}
            </h1>

            <p class="text-muted mt-3 text-base">
              {{ statusText }}
            </p>

            <div class="mt-8 flex justify-center">
              <UButton size="lg" @click="handleError">
                Volver al inicio
              </UButton>
            </div>
          </UCard>
        </UContainer>
      </UMain>

      <AppFooter />
    </div>
  </UApp>
</template>
