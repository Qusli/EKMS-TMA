<script setup lang="ts">
import { onMounted } from 'vue';
import { useAppStore, useThemeStore } from './store';
import { ServerTemplate, TelegramInitErrorTemplate } from './template';

const appStore = useAppStore()
const themeStore = useThemeStore()

// hooks
onMounted(async () => {
  await appStore.init()

  if (!appStore.userEmpty) {
    themeStore.init()
  }
})
</script>

<template>

  <template v-if="!appStore.loading">
    <!-- Шаблон для управления сервером майнкрафта -->
    <ServerTemplate v-if="!appStore.userEmpty && appStore.accessed" />

    <!-- Шаблон для отображения ошибки инициализации -->
    <TelegramInitErrorTemplate v-else />
  </template>

  <template v-else>
    <h1>Загрузка...</h1>
  </template>

</template>