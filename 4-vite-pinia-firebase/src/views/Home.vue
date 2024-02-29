<script setup>
import { useUserStore } from "../store/userStore";
const userStore = useUserStore();
const { userData } = userStore;
</script>

<template>
  <div>
    <h1>Bienvenido: {{ userData }}</h1>
  </div>
</template>

<style scoped></style>
