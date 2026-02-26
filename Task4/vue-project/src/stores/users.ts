import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/types/users";
import { UserRole, UserStatus } from "@/types/users";

export const useUsersStore = defineStore("users", () => {
  const users = ref<User[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchUsers = async (): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const response = await new Promise<User[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: "John",
              email: "john@mail.com",
              status: UserStatus.Active,
              role: UserRole.User,
              phone: "123456",
            },
          ]);
        }, 800);
      });

      users.value = response;
    } catch {
      error.value = "Ошибка загрузки пользователя";
    } finally {
      loading.value = false;
    }
  };

  const addUser = (user: Omit<User, "id">): void => {
    users.value.push({ ...user, id: Date.now() });
  };

  const deleteUser = (id: number): void => {
    users.value = users.value.filter((u) => u.id !== id);
  };

  return {
    users,
    loading,
    error,
    fetchUsers,
    addUser,
    deleteUser,
  };
});
