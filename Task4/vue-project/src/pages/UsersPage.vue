<script setup lang="ts">
import { onMounted, ref, defineAsyncComponent } from 'vue'
import { useUsersStore } from '@/stores/users'
import { storeToRefs } from 'pinia'
import { useUsersFilters } from '@/composables/useUsersFilters'
import UsersList from '@/components/UsersList.vue'
import BaseModal from '@/components/BaseModal.vue'

const UserFormModal = defineAsyncComponent(() =>
    import('@/components/UserFormModal.vue')
)

const isOpen = ref(false)

const store = useUsersStore()
const { users, loading, error } = storeToRefs(store)

const { filteredUsers } = useUsersFilters(users)

onMounted(() => store.fetchUsers())

function add(user: any) {
    store.addUser(user)
    isOpen.value = false
}

function remove(id: number) {
    store.deleteUser(id)
}
</script>

<template>
    <div class="page">
        <div class="page__header">
            <h1>Все пользователи</h1>
            <button class="primary-btn" @click="isOpen = true">
                Добавить пользователя
            </button>
        </div>

        <div v-if="loading" class="state">Загрузка...</div>
        <div v-else-if="error" class="state error">{{ error }}</div>

        <UsersList v-else :users="filteredUsers" @delete="remove" />

        <BaseModal v-model="isOpen">
            <UserFormModal @add="add" />
        </BaseModal>
    </div>
</template>

<style scoped>
.page {
    max-width: 900px;
    margin: 60px auto;
    padding: 0 20px;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

.page__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

h1 {
    font-size: 28px;
    font-weight: 600;
}

.primary-btn {
    background: #68945d;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;
}

.primary-btn:hover {
    background: #2d6139;
}

.state {
    text-align: center;
    padding: 40px;
    opacity: 0.7;
}

.error {
    color: #dc2626;
}
</style>
