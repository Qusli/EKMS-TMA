<script setup lang="ts">
import { onMounted } from 'vue';
import { useAppStore, useThemeStore } from './store';
import { ServerTemplate, TelegramInitErrorTemplate } from './template';

const appStore = useAppStore()
const themeStore = useThemeStore()

// hooks
onMounted(() => {
  appStore.init()

  if (!appStore.userEmpty) {
    themeStore.init()
  }
})
</script>

<template>
  <!-- Шаблон для управления сервером майнкрафта -->
  <ServerTemplate v-if="!appStore.userEmpty" />

  <!-- Шаблон для отображения ошибки инициализации -->
  <TelegramInitErrorTemplate v-else />
</template>