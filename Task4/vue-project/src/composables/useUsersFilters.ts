import { computed, ref, type Ref } from "vue";
import type { User, FilterStatus } from "@/types/users";

export function useUsersFilters(users: Ref<User[]>) {
  const currentFilter = ref<FilterStatus>("all");

  const filteredUsers = computed(() => {
    if (currentFilter.value === "all") return users.value;
    return users.value.filter((u) => u.status === currentFilter.value);
  });

  return { currentFilter, filteredUsers };
}
