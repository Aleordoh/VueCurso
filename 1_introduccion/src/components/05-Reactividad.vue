<script setup>
import { ref, computed } from "vue";//llamamos a ref
const name = 'Reactividad'
const favoritos = ref([])
const counter = ref(0)//inicializamos el ref con el valor 0
const increment = () => {
  counter.value++;//ahora counter es un objeto y su valor se guarda en la propiedad value
}
const decrement = () => {
  counter.value--
}
const reset = () => {
  counter.value = 0
}
const add = () => {
  favoritos.value.push(counter.value)//siempre que se usa  ref se debe aceder a .value!
}
const classCounter = computed(() => {
  if (counter.value == 0) {
    return 'zero'
  } else if (counter.value > 0) {
    return 'positive'
  } else {
    return 'negative'
  }
})

const bloqBtn = computed(() => {
  const numFind = favoritos.value.find((num) => num == counter.value) //find devuelve el numero que cumpe con la condicion
  return numFind || numFind === 0 //si se cumple cualquier condicion devuelve true
})

const numberColor = computed(()=>{
  favoritos.value.forEach(number => {
    if (number>0) {
      return 'positive';
    }
  });
})

</script>
<template>
  <div class="container">
    <div class="section">
      <h2> Usando {{ name }}</h2>
      <p :class="classCounter" class="number my-3 ml-2">{{ counter }}</p>
      <div class="buttons mt-2">
        <button class="button is-success is-normal " @click="increment">Aumentar</button>
        <button class="button is-light" @click="reset">Resetar</button>
        <button class="button is-danger" @click="decrement">Disminuir</button>
        <button class="button is-primary" :disabled="bloqBtn" @click="add">Add</button>
      </div>
      <div class="content">
        <ul>
          <li v-for="number in favoritos" :key="number" :class="number>0?'positive':'negative'">
            {{ number }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.zero {
  color: black;
}

.positive {
  color: rgb(8, 225, 8);
}

.negative {
  color: red;
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