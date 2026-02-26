<script setup lang="ts">
import type { User } from '@/types/users'
import UserRow from './UserRow.vue'

defineProps<{ users: User[] }>()

const emit = defineEmits<{ (e: 'delete', id: number): void }>()
</script>

<template>
    <div class="users-list" v-if="users.length">
        <UserRow v-for="u in users" :key="u.id" :user="u" @delete="emit('delete', $event)" />
    </div>

    <div v-else class="empty">
        Нет пользователей
    </div>
</template>

<style scoped>
.users-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.empty {
    text-align: center;
    padding: 40px;
    opacity: 0.6;
}
</style>
