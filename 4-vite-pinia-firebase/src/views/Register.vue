<script setup>
import { ref } from "vue";
import { useUserStore } from "../store/userStore.js";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const userStore = useUserStore();
const router = useRouter();

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    return alert("El usuario y/o contraseña no púeden estar vacios lptm!");
  } else {
    await userStore.registerUser(email.value, password.value);
    router.push(
      "/login"
    ); /* router.push 'empuja' al usuario a la pagina establecida luego del registro en este caso lo llevamos al login */
  }
};
</script>

<template>
  <div>
    <h1>Registrarse</h1>
    <form @submit.prevent="handleSubmit">
      <input
        type="email"
        placeholder="Ingrese un email"
        v-model.trim="email"
      /><!-- v-model: toma el valor del input y lo envia a la propiedad mail del script. En este caso se usa con el modificador trim para eliminar los espacios delante y detras del mail  -->
      <input
        type="password"
        placeholder="Ingrese una contraseña"
        v-model.trim="password"
      />
      <button type="submit" :disabled="userStore.loadingUser">
        Crear usuario
      </button>
    </form>
  </div>
</template>

<style scoped></style>
