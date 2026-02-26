import { ref } from "vue";
import type { User } from "@/types/users";

export function useUserForm() {
  const name = ref("");
  const email = ref("");
  const phone = ref<string | undefined>();
  const status = ref();
  const role = ref();

  const errors = ref<{ name?: string; email?: string }>({});

  const validate = () => {
    errors.value = {};

    if (!name.value.trim()) errors.value.name = "Введите имя";
    if (!email.value.trim()) errors.value.email = "Введите почту";

    return Object.keys(errors.value).length === 0;
  };

  const reset = () => {
    name.value = "";
    email.value = "";
    phone.value = undefined;
  };

  return { name, email, phone, status, role, errors, validate, reset };
}
