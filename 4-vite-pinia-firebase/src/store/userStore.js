import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const userData = ref("aleordoh@gmail.com");
  
  return {
    userData,
  };
});
