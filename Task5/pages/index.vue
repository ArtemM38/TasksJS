<template>

<div class="page">

  <div class="top">

    <h1>Конструктор бейджей</h1>

    <ButtonMain label="+ Добавить бейдж"/>

  </div>

  <BadesBadgesTable/>

</div>

</template>

<style scoped>

.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1{
font-family: "Inter", sans-serif;
font-style: normal;
font-weight: 500;
font-size: 32px;
letter-spacing: 0.01em;

color: #1C1C1C;
}

</style>
