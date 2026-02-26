<script setup lang="ts">
import UsersPage from '@/pages/UsersPage.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <UsersPage />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
