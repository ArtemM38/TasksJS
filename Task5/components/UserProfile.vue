<script setup lang="ts">
const name = "Криштиану Роналдо"
const email = "cr7@elite.ooo"
</script>

<template>

    <div class="user">

        <img src="/img/bell_icon_24px.png" class="bell">

        <img src="/img/Performer Profile 32px.png" class="avatar">

        <div class="info">
            <span class="name">{{ name }}</span>
            <span class="email">{{ email }}</span>
        </div>

        <img src="/img/Icon Color.png" class="arrow">

    </div>

</template>

<style scoped>
.user {
    display: flex;
    align-items: center;
    gap: 16px;
}

.avatar {
    width: 32px;
    height: 32px;
}

.info {
    display: flex;
    flex-direction: column;
    font-family: "Inter", sans-serif;
    font-size: 14px;
}

.name {
    color: #1C1C1C;
}

.email {
    color: #ADADAD;
}
</style>
