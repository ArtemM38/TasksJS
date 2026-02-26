<script setup lang="ts">
import { UserStatus, UserRole, type User } from '@/types/users'
import { useUserForm } from '@/composables/useUserForm'

const emit = defineEmits<{
    (e: 'add', user: Omit<User, 'id'>): void
}>()

const { name, email, phone, errors, validate, reset } = useUserForm()

function submit() {
    if (!validate()) return

    emit('add', {
        name: name.value,
        email: email.value,
        phone: phone.value,
        status: UserStatus.Active,
        role: UserRole.User
    })

    reset()
}
</script>

<template>
    <div class="form">
        <h2>Добавить пользователя</h2>

        <div class="field">
            <input v-model="name" placeholder="Имя" />
            <span class="error">{{ errors.name }}</span>
        </div>

        <div class="field">
            <input v-model="email" placeholder="Эл. почта" />
            <span class="error">{{ errors.email }}</span>
        </div>

        <div class="field">
            <input v-model="phone" placeholder="Телефона (необязательно)" />
        </div>

        <button class="submit" @click="submit">
            Добавить
        </button>
    </div>
</template>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

h2 {
    margin-bottom: 10px;
}

.field {
    display: flex;
    flex-direction: column;
}

input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
}

input:focus {
    outline: none;
    border-color: #2563eb;
}

.error {
    font-size: 12px;
    color: #dc2626;
}

.submit {
    background: #24727c;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
}

</style>
