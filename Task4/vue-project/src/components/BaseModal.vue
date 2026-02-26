<script setup lang="ts">
defineProps<{ modelValue: boolean }>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const close = () => emit('update:modelValue', false)
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal__overlay" @click.self="close">
      <div class="modal__content">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}
</style>
