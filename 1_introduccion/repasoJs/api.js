//onst fetch = require('node-fetch')

const { default: fetch } = require("node-fetch")

const url = 'https://pokeapi.co/api/v2/pokemon'
/* con fetch */
fetch(url)
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      console.log(element.name);
    });
  })
  .catch(error => console.error(error))

/* con async await */
const pokemones = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data.results);
    const names = data.results.map(pokemon => pokemon.name)//.map() genera un array nuevo dependiendo de la funcion indicada
    const filtro = data.results.filter(pokemon => pokemon.name !== 'bulbasaur')//excluye todos lo que se llame bulbasaur
    console.log({ names, filtro });
  } catch (error) {
    console.error(error);
  }
}
pokemones()

