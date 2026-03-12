<script setup lang="ts">
import { ref, computed } from 'vue'

const sortKey = ref<'id' | 'active'>('id')
const sortDirection = ref<'asc' | 'desc'>('asc')

function sortBy(key: 'id' | 'active') {
    if (sortKey.value === key) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
    } else {
        sortKey.value = key
        sortDirection.value = 'asc'
    }
}
const sortedBadges = computed(() => {
    return [...badges].sort((a, b) => {
        const aValue = a[sortKey.value]
        const bValue = b[sortKey.value]

        if (aValue < bValue) {
            return sortDirection.value === 'asc' ? -1 : 1
        }

        if (aValue > bValue) {
            return sortDirection.value === 'asc' ? 1 : -1

        }

        return 0
    })
})
const badges = [
    {
        id: 1,
        name: "Новинки",
        active: true
    },
    {
        id: 3,
        name: "Акция",
        active: true
    },
    {
        id: 2,
        name: "Хит",
        active: false
    }
]

</script>

<template>

    <div class="table-wrapper">

        <table class="table">

            <thead>
                <tr class="bg-1">
                    <th @click="sortBy('id')" class="sortable">ID<svg width="8" height="10" viewBox="0 0 8 10"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.146176 3.86954C0.341254 4.04333 0.657742 4.04351 0.853071 3.86994L4.00034 1.07331L7.14689 3.86991C7.3422 4.0435 7.65869 4.04334 7.85379 3.86957C8.04889 3.6958 8.04872 3.41421 7.85341 3.24062L4.35364 0.130091C4.15849 -0.0433507 3.84233 -0.0433656 3.64716 0.130057L0.14663 3.24059C-0.0486992 3.41416 -0.0489025 3.69575 0.146176 3.86954Z"
                                fill="#5B5B5B" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.85382 6.13046C7.65875 5.95667 7.34226 5.95649 7.14693 6.13006L3.99966 8.92669L0.85311 6.13009C0.657801 5.95651 0.341314 5.95666 0.146214 6.13043C-0.0488852 6.3042 -0.0487164 6.58579 0.146592 6.75938L3.64636 9.86991C3.84151 10.0434 4.15767 10.0434 4.35284 9.86994L7.85337 6.75941C8.0487 6.58584 8.0489 6.30425 7.85382 6.13046Z"
                                fill="#5B5B5B" />
                        </svg>
                    </th>
                    <th>Название</th>
                    <th @click="sortBy('active')" class="sortable">Активность<svg width="8" height="10" viewBox="0 0 8 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.146176 3.86954C0.341254 4.04333 0.657742 4.04351 0.853071 3.86994L4.00034 1.07331L7.14689 3.86991C7.3422 4.0435 7.65869 4.04334 7.85379 3.86957C8.04889 3.6958 8.04872 3.41421 7.85341 3.24062L4.35364 0.130091C4.15849 -0.0433507 3.84233 -0.0433656 3.64716 0.130057L0.14663 3.24059C-0.0486992 3.41416 -0.0489025 3.69575 0.146176 3.86954Z"
                                fill="#5B5B5B" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.85382 6.13046C7.65875 5.95667 7.34226 5.95649 7.14693 6.13006L3.99966 8.92669L0.85311 6.13009C0.657801 5.95651 0.341314 5.95666 0.146214 6.13043C-0.0488852 6.3042 -0.0487164 6.58579 0.146592 6.75938L3.64636 9.86991C3.84151 10.0434 4.15767 10.0434 4.35284 9.86994L7.85337 6.75941C8.0487 6.58584 8.0489 6.30425 7.85382 6.13046Z"
                                fill="#5B5B5B" />
                        </svg>
                    </th>
                    <th></th>
                </tr>
            </thead>

            <tbody>

                <tr v-for="badge in sortedBadges" :key="badge.id">
                    <td>{{ badge.id }}</td>
                    <td>{{ badge.name }}</td>

                    <td>
                        <span :class="badge.active ? 'active' : 'inactive'">
                            {{ badge.active ? "Да" : "Нет" }}
                        </span>
                    </td>

                    <td class="actions">
                        <button class="edit"><svg width="17" height="4" viewBox="0 0 17 4" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="1.75" cy="1.75" r="1.75" fill="#ADADAD" />
                                <circle cx="8.25" cy="1.75" r="1.75" fill="#ADADAD" />
                                <circle cx="14.75" cy="1.75" r="1.75" fill="#ADADAD" />
                            </svg>
                        </button>
                    </td>
                </tr>

            </tbody>

        </table>

    </div>

</template>

<style scoped>
.table-wrapper {
    margin-top: 24px;
    background: white;
    overflow: hidden;
    font-family: "Inter", sans-serif;
}

.table {
    width: 100%;
    border-collapse: collapse;
}

.bg-1 {
    background-color: #F6F6F6;
}

th {
    text-align: left;
    padding: 14px 20px;
    font-size: 14px;
    color: #494949;
    border-bottom: 1px solid #eee;
}

td {
    padding: 16px 20px;
    border-bottom: 1px solid #f2f2f2;
    color: #1B60C8;
    font-size: 14px;
}

.actions button {
    background: none;
    border: none;
    color: #2563eb;
    cursor: pointer;
}

svg {
    margin-left: 9px;
}

th:nth-child(1),
td:nth-child(1) {
    width: 90px;
}

th:nth-child(2),
td:nth-child(2) {
    width: 1200px;
}

.active,
.inactive {
    font-size: 14px;
    color: #494949;
}
</style>
