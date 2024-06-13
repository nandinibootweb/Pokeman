import { addToStorage } from "./modules/storage.js";
import { fetchPokemon,   } from "./modules/fetch.js";
import { createPokemonCard } from "./modules/ui.js";




// fetchItems("https://pokeapi.co/api/v2/", "limit=5");

window.addEventListener("load", async () => {
let counter=10;
const pokemons=[];
for (let i = 1; i <= counter; i++) {
  const pokemonData = await fetchPokemon(
    "https://pokeapi.co/api/v2/pokemon/",
    i)
    pokemons.push(pokemonData);
     ;}




  console.log(pokemons);
  for (let i = 0; i < pokemons.length; i++) {
createPokemonCard(pokemons[i]);

  }
  
});


// let search = "";
// const input = document.querySelector("input");
// input.oninput = (e) => {
//   search = e.target.value;
// };

// const form = document.querySelector("form");
// form.onsubmit = (e) => {
//   e.preventDefault();
//   console.log(search);
// };
