<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/userStore";

const userStore = useUserStore();
const { mayusculas, userData } = storeToRefs(userStore);
</script>
<template>
  <div>
    <h1>Login: {{ mayusculas }}</h1>
  </div>
</template>

<style scoped></style>
