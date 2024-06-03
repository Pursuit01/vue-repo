<template>
  <div>name: {{ name }}</div>
  <button @click="update">update</button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    name: string
  }>()
  const emit = defineEmits<{
    update: [val: string]
  }>()
  const update = () => {
    emit("update", "test")
  }
</script>

<style scoped></style>
