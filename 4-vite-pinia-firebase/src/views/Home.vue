<script setup>
import { useUserStore } from '../store/userStore';
const userStore = useUserStore()
</script>

<template>
  <div>
    <h1 v-if="userStore.userData">Bienvenido: {{ userStore.userData.email }}</h1>
    <h1 v-else>No hay usuarios Logueados</h1>

  </div>
</template>

<style scoped></style>
