<script setup lang="ts">
const socials = useSocials()
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-center text-sm sm:text-left">
        CREUP - Coordinadora de Representantes de Estudiantes de Universidades
        Públicas - {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UTooltip
        v-for="social in socials"
        :key="social.label"
        :text="social.label"
      >
        <UButton
          :icon="social.icon"
          color="neutral"
          variant="ghost"
          :to="social.to"
          target="_blank"
          :aria-label="social.label"
        />
      </UTooltip>
    </template>
  </UFooter>
</template>
