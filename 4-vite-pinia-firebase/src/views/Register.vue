<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/userStore";

const userStore = useUserStore();
const { userData, mayusculas } = storeToRefs(userStore);
const { registerUser } = userStore;
</script>

<template>
  <div>
    <h1>Register</h1>
    <p>{{ userData }} - {{ mayusculas }}</p>

    <button class="button is-success" @click="registerUser('Martin')">
      Ingresar
    </button>
  </div>
</template>

<style scoped></style>
