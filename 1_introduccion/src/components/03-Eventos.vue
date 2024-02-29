<script setup>
const name='Eventos'
/* Metodo para v-on:
los metodos pueden recibir varios parametros  */
const handleClick = (mensaje) => {
  console.log(mensaje)
}
</script>
<template>
  <h2>Usando {{ name }}:</h2>
  <p>Podemos usar la directiva v-on, que normalmente acortamos al símbolo @, para escuchar eventos DOM y ejecutar
    JavaScript cuando se activan. El uso sería v-on:click="handler" o con el atajo, @click="handler".</p>
  <button v-on:click="handleClick('Apretaste 1')">
    Click Aqui_1
  </button>
  <button @click="handleClick('Apretaste 2')">
    Click Aqui_2
  </button>
 </template>

<style>
html {
  font-family: Arial, Helvetica, sans-serif;
  color: white;

}

h1 {
  font-size: 32px;
  color: rgb(255, 255, 255)
}

h2 {
  color: rgb(14, 129, 20);
  font-size: 24px;
  text-align: justify;
}

h3 {
  color: rgb(173, 115, 226);
  text-decoration: underline;
}

p {
  font-style: italic;
}
</style>