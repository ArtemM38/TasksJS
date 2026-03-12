<script setup lang="ts">
import AppHeader from './appHeader.vue';
import AppSidebar from './appSidebar.vue';



</script>

<template>
  <div class="layout">

    <AppSidebar />

    <div class="main">

      <AppHeader />

      <div class="page">
        <slot />
      </div>

    </div>

  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}
</style>
