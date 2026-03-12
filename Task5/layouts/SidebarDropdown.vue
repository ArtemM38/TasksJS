<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function toggle() {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <div class="dropdown_header" @click="toggle">
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.5796 0.100006H1.05961C0.805001 0.100006 0.560822 0.18092 0.380787 0.324948C0.200752 0.468976 0.0996094 0.66432 0.0996094 0.868006C0.0996094 1.07169 0.200752 1.26704 0.380787 1.41106C0.560822 1.55509 0.805001 1.63601 1.05961 1.63601H12.5796C12.8342 1.63601 13.0784 1.55509 13.2584 1.41106C13.4385 1.26704 13.5396 1.07169 13.5396 0.868006C13.5396 0.66432 13.4385 0.468976 13.2584 0.324948C13.0784 0.18092 12.8342 0.100006 12.5796 0.100006Z"
                fill="#494949" stroke="#494949" stroke-width="0.2" />
            <path
                d="M13.5396 7.78012C13.5396 7.57643 13.4385 7.38109 13.2584 7.23706C13.0784 7.09303 12.8342 7.01212 12.5796 7.01212H1.05961C0.805001 7.01212 0.560822 7.09303 0.380787 7.23706C0.200752 7.38109 0.0996094 7.57643 0.0996094 7.78012C0.0996094 7.9838 0.200752 8.17915 0.380787 8.32317C0.560822 8.4672 0.805001 8.54812 1.05961 8.54812H12.5796C12.8342 8.54812 13.0784 8.4672 13.2584 8.32317C13.4385 8.17915 13.5396 7.9838 13.5396 7.78012Z"
                fill="#494949" stroke="#494949" stroke-width="0.2" />
            <path
                d="M3.69926 10.468C3.44465 10.468 3.20047 10.549 3.02044 10.693C2.8404 10.837 2.73926 11.0324 2.73926 11.236C2.73926 11.4397 2.8404 11.6351 3.02044 11.7791C3.20047 11.9231 3.44465 12.004 3.69926 12.004H9.93926C10.1939 12.004 10.438 11.9231 10.6181 11.7791C10.7981 11.6351 10.8993 11.4397 10.8993 11.236C10.8993 11.0324 10.7981 10.837 10.6181 10.693C10.438 10.549 10.1939 10.468 9.93926 10.468H3.69926Z"
                fill="#494949" stroke="#494949" stroke-width="0.2" />
            <path
                d="M9.93926 5.09206C10.1939 5.09206 10.438 5.01115 10.6181 4.86712C10.7981 4.72309 10.8993 4.52775 10.8993 4.32406C10.8993 4.12037 10.7981 3.92503 10.6181 3.781C10.438 3.63697 10.1939 3.55606 9.93926 3.55606H3.69926C3.44465 3.55606 3.20047 3.63697 3.02044 3.781C2.8404 3.92503 2.73926 4.12037 2.73926 4.32406C2.73926 4.52775 2.8404 4.72309 3.02044 4.86712C3.20047 5.01115 3.44465 5.09206 3.69926 5.09206H9.93926Z"
                fill="#494949" stroke="#494949" stroke-width="0.2" />
        </svg>

        <span>Контент</span>
        <img src="/img/ArrowDown.png" class="arrow" :class="{ open: isOpen }">

    </div>
    <Transition name="dropdown">
        <div v-if="isOpen" class="dropdown_items">

            <div class="sidebar_data">
                <span>Баннеры</span>
            </div>

            <div class="sidebar_data">
                <span>Хедер</span>
            </div>

            <div class="sidebar_data">
                <span>Подборки в каталоге</span>
            </div>
            <div class="sidebar_data">
                <span>Конструктор бейджей</span>
            </div>
            <div class="sidebar_data">
                <span>Слайдер на главной</span>
            </div>
            <div class="sidebar_data">
                <span>Слайдер в каталоге</span>
            </div>
            <div class="sidebar_data">
                <span>Блок на главной</span>
            </div>
            <div class="sidebar_data">
                <span>Всплывающие баннеры</span>
            </div>
            <div class="sidebar_data">
                <span>Новости</span>
            </div>
            <div class="sidebar_data">
                <span>Любимы бренды</span>
            </div>
            <div class="sidebar_data">
                <span>Гастроклуб</span>
            </div>
            <div class="sidebar_data">
                <span>Квизы</span>
            </div>

        </div>

    </Transition>
    <div class="dropdown_header">
        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 0.752914C0 0.337091 0.386663 0 0.863636 0H4.00413C4.41861 0 4.77464 0.256702 4.85242 0.611624L5.5041 3.5853H18.1364C18.3925 3.5853 18.6354 3.68441 18.7995 3.85585C18.9636 4.02729 19.0319 4.25338 18.986 4.47306L17.7287 10.4946C17.621 10.9899 17.3245 11.4419 16.8814 11.7677C16.4398 12.0923 15.8813 12.2698 15.3022 12.2617H7.68621C7.10715 12.2698 6.54862 12.0923 6.107 11.7677C5.66403 11.442 5.36763 10.9902 5.25984 10.495L3.94837 4.51064C3.943 4.49066 3.93854 4.47036 3.93504 4.4498L3.28987 1.50583H0.863636C0.386663 1.50583 0 1.16874 0 0.752914ZM5.8341 5.09113L6.95678 10.2141C6.99266 10.3791 7.08951 10.5202 7.22055 10.6165C7.35062 10.7122 7.50675 10.7588 7.66118 10.7561L7.67851 10.7559H15.3099L15.3272 10.7561C15.4817 10.7588 15.6378 10.7122 15.7679 10.6165C15.8984 10.5206 15.9949 10.3803 16.0312 10.2162L16.0316 10.2141L17.1013 5.09113H5.8341Z"
                fill="#494949" />
            <path
                d="M9.56155 15.2564C9.56155 16.0881 8.78822 17 7.83427 17C6.88033 17 6.107 16.0881 6.107 15.2564C6.107 14.4248 6.88033 13.5128 7.83427 13.5128C8.78822 13.5128 9.56155 14.4248 9.56155 15.2564Z"
                fill="#494949" />
            <path
                d="M15.607 17C16.5609 17 17.3343 16.0881 17.3343 15.2564C17.3343 14.4248 16.5609 13.5128 15.607 13.5128C14.6531 13.5128 13.8797 14.4248 13.8797 15.2564C13.8797 16.0881 14.6531 17 15.607 17Z"
                fill="#494949" />
        </svg>
        <span>Магазин</span>
        <img src="/img/ArrowDown.png" class="arrow" :class="{ open: isOpen }">

    </div>
</template>

<style scoped>
.dropdown_header {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 12px 0px 12px 24px;
    gap: 8px;
    user-select: none;
}

.dropdown_items {
    transition: all 1s;
}

.sidebar_data {
    display: flex;
    align-items: center;
    padding: 12px 0px 12px 46px;
    gap: 8px;
}

span {
    font-size: 14px;
    font-family: "Inter", sans-serif;
    color: #494949;
    font-weight: 400;
    font-style: normal;
    line-height: 18px;
}

.arrow {
    margin-left: 92px;
    transition: transform 0.2s;
}

.arrow.open {
    transform: rotate(180deg);
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.25s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
