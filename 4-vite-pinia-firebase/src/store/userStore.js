import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const userData = ref("aleordoh@gmail.com");

  const mayusculas = computed(() => userData.value.toUpperCase()); //propiedad computada, no modifica  a useData

  const registerUser = (name) => (userData.value = name);

  return {
    userData,
    mayusculas,
    registerUser,
  };
});
