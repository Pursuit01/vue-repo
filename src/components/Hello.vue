<template>
  <div>age: {{ age }}</div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    age: number
  }>()
</script>

<style scoped></style>
