<script setup lang='ts'>
import { useAppStore } from '../store';

const appStore = useAppStore()
</script>

<template>
    <h1 :class="$s.title">Привет {{ appStore.user!.first_name }}!</h1>
</template>

<style lang='scss' module='$s'>
.title {
    margin-bottom: functions.rem(12px);
}
</style>