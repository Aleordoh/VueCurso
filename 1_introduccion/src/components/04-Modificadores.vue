<script setup>
const name='Modificadores'
const handleClick = (mensaje) => {
  console.log(mensaje)
}
</script>

<template>
  <h2>Usando {{ name }}:</h2>
  <button @click.right.prevent="handleClick('CLick Derecho')">Click Derecho
  </button>
  <button @click.middle.prevent="handleClick('Click Central')">Click del medio
  </button>
  <button @click.left="handleClick('Click Izquierdo')">Click Hizquierdo
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