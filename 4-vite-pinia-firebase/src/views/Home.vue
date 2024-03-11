<script setup>
import { useUserStore } from '../store/userStore';
const userStore = useUserStore()
</script>

<template>
  <div>
    <h1>Hola: {{ userStore.userData.email }}</h1>

  </div>
</template>

<style scoped></style>
