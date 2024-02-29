<script setup>
const name = 'Directivas'
const active = true
const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
const frutas = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
    stock: 5,
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
    stock: 15,
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
    stock: 10,
  },
]
const auto = {
  marca: 'Ford',
  modelo: 2021,
  description: 'auto feo',
  id: 1
}
const users = [
  {
    id: 1,
    name: 'Juan',
    posts: [
      { id: 1, title: 'Mi primer post' },
      { id: 2, title: 'Mi segundo post' },
    ]
  },
  {
    id: 2,
    name: 'Maria',
    posts: [
      { id: 3, title: 'Mi tercer post' },
      { id: 4, title: 'Mi cuarto post' },
    ]
  }
]

</script>

<template>
  <h2>Las {{ name }}</h2>
  <ul>
    <li>
      Las directivas son atributos especiales con el prefijo v- .
    </li>
    <li>
      El trabajo de una directiva es aplicar actualizaciones de forma reactiva al DOM
      #v-if
    </li>
  </ul><br>

  <h3>v-if, v-else-if y v-else:</h3>
  <p>Siempre deben estar adyacentes</p>
  <br>
  <p v-if="active === true">v-if: cuando active = verdadero</p>
  <p v-else-if="active === false">v-else-if: cuando active= falso</p>
  <p v-else>v-else: si ninguno de los anteriores se cumple</p>

  <br>
  <h3>v-show:</h3>
  <p>cambia la propiedad display del elemento. Se usa cuando va a alternar algo con mucha frecuencia</p><br>
  <p v-show='active'>v-show: Activado </p>
  <br>
  <h3>v-for:</h3>
  <p>Se usa para iterar sobre una lista de elementos. </p>
  <p>Para darle a Vue una pista para que pueda rastrear la identidad de cada nodo y, por lo tanto, reutilizar y reordenar
    los elementos existentes, debe proporcionar un atributo key único para cada elemento.</p><br>
  <p style="font-weight: bold;">Iterando un array</p>
  <ol>
    <li v-for="(fruta, index) in arrayFrutas" :key="index + fruta">
      {{ fruta }}
    </li>
  </ol>
  <br>
  <p style="font-weight: bold;">Iterando un array de OL</p>
  <ol>
    <li v-for="fruta in frutas" :key="fruta.name">
      {{ fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
    </li>
  </ol>
  <br>
  <p style="font-weight: bold;">Iterando un solo OL</p>
  <ul>
    <li v-for="(value, propiedad, index) in auto" :key="value">
      {{ index }} - {{ propiedad }}: {{ value }}
    </li>
  </ul>
  <br>

  <h3>v-for y v-if</h3>
  <p>el v-if tiene prioridad sobre el v-for. Para que funcione el v-if con un v-for el v-for debe estar dentro una
    etiqueta 'template'</p>
  <ul>
    <template v-for="(fruta, index) in frutas" :key="fruta.name">
      <li v-if="fruta.stock >= 10">
        {{ fruta.name }} - {{ fruta.price }} - {{ fruta.stock }}
      </li>
    </template>
  </ul>
  <br>

  <h3>v-for anidados:</h3>
  <div>
    <p>Lista de usuarios:</p>
    <ol>
      <template v-for="(user, index) in users" :key="user.id">
        <li>
          <p>{{ user.name }}</p>
          <template v-for="(post, index) in user.posts" :key="post.id">
            <ul>
              <li>
                {{ post.title }}
              </li>
            </ul>
          </template>
        </li>
      </template>
    </ol>
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
