<script setup lang="ts">
import type { User } from '@/types/users'

const props = defineProps<{
  user: User
}>()

const emit = defineEmits<{
  (e: 'delete', id: number): void
}>()

function handleDelete() {
  emit('delete', props.user.id)
}
</script>

<template>
  <div class="card">
    <div class="card__left">
      <div class="info">
        <div class="name">{{ user.name }}</div>
        <div class="email">{{ user.email }}</div>
        <div class="phone" v-if="user.phone">
          {{ user.phone }}
        </div>
      </div>
    </div>

    <button class="delete" @click="handleDelete">
      Удалить
    </button>
  </div>
</template>

<style scoped>
.card {
  background: white;
  padding: 18px;
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-2px);
}

.card__left {
  display: flex;
  gap: 14px;
  align-items: center;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
}

.email {
  font-size: 14px;
  opacity: 0.7;
}

.phone {
  font-size: 13px;
  opacity: 0.6;
}

.delete {
  background: #ef444470;
  border: none;
  color: white;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

.delete:hover {
  background: #dc2626;
}
</style>
