<script setup lang='ts'>
import { useAppStore } from '../store';

const appStore = useAppStore()
</script>

<template>
    <h1>Привет {{ appStore.user!.first_name }}</h1>
</template>

<style lang='scss' module='$s'>

</style>