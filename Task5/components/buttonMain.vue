<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <button class="btn">
    {{ label }}
  </button>
</template>

<style scoped>
.btn {
  background: #E40A33;
  color: white;

  border: none;
  border-radius: 8px;

  padding: 11px 16px;
  gap: 4px;

  font-size: 14px;
  font-family: "Inter", sans-serif;

  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background: #c00511;
}
</style>
