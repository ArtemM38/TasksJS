<template>
  <header class="header">

    <p class="title">Конструктор бейджей</p>

    <div class="profile">
      <UserProfile />
    </div>

  </header>
</template>

<style scoped>
.header {
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
  border-bottom: 1px solid #F2F2F2;
}

.title {
  font-size: 14px;
  font-family: "Inter", sans-serif;
  color: #494949;
}
</style>

