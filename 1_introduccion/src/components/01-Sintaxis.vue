<script setup>

const tittle = 'Sintaxis'
const name = 'Martin'
const styleColor = 'color: yellow'
const arrayColors = ['black', 'red', 'yellow']
</script>

<template>
  <div>
    <h2>Como es la {{ tittle }}</h2>
    <h2 v-pre>Las {{ }}:</h2><!-- v-pre trata todo el contenido como texto plano. -->
    <p>Permite introducir propiedades al template, no sirve para atributos html y acepta expreciones de JS.</p>
    <p>Hola <span style="color: red;">{{ name.toUpperCase() }}</span></p>
  </div>
  <div>
    <h2 v-pre>v-bind:</h2>
    <p>La directiva v-bind se utiliza para enlazar atributos de HTML a expresiones en el modelo de datos de Vue.</p><br>
    <p style="{{ styleColor }}">Atributo style mal escrito</p><br>

    <!-- Esto no funciona asi se debe usar  v-bind: o anreviado : -->
    <p v-bind:style=styleColor>Atributo style con v-bind</p><br><!-- ahora si   -->

    <p :style=styleColor>Atributo style con v-bind abreviado</p><br><!-- Abreviatura de vbind   --><br>

    <p>Dando color de otra forma:</p>
    <p :style="`color:${arrayColors[1]}`">{{ arrayColors }}</p><!-- Otra forma poco usada -->
  </div>
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