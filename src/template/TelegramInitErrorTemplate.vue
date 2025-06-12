<script setup lang='ts'>
import { useAppStore } from '../store';

const appStore = useAppStore()
</script>

<template>
    <h1 v-if="appStore.userEmpty">Ошибка инициализации телеграмма</h1>
    <h1 v-else-if="!appStore.accessed">У вас не прав на пользование приложением</h1>
</template>

<style lang='scss' module='$s'>

</style>