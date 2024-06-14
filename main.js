import { addToStorage } from "./modules/storage.js";
import { fetchPokemon } from "./modules/fetch.js";
import { createPokemonCard } from "./modules/ui.js";

// fetchItems("https://pokeapi.co/api/v2/", "limit=5");

window.addEventListener("load", async () => {
  let counter = 21;
  const pokemons = [];
  for (let i = 1; i <= counter; i++) {
    const pokemonData = await fetchPokemon(
      "https://pokeapi.co/api/v2/pokemon/",
      i
    );
    pokemons.push(pokemonData);
  }

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
const nbt = document.getElementById("subbtn");
const ninput = document.querySelector("#Search-input");
const showSearch = document.querySelector("#show");
const reslt = document.querySelector("#r");
//console.log(ninput.textContent);
let userInput = "";
let pokemons = {
  name: "",
  id: "",
  ige: "",
};

ninput.addEventListener(
  "input",
  enteredPokemn
  //alert(e.target.value);
);

function SearchedPokemon(event) {
  event.preventDefault();

  //tet.innerHTML = "lll";
  console.log(showSearch);

  if (userInput) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
      .then((response) => {
        if (!response.ok) throw new Error("Fetching failed");
        return response.json();
      })
      .then((data) => {
        pokemons.name = data.name;
        pokemons.id = data.id;
        pokemons.ige = data.sprites.front_shiny;
        console.log(data);
      });
    //console.log(pokemons);

    //if (ninput.innerext) console.log(te);
  }

  showSearch.textContent = pokemons.name;
  let front_shiny = document.createElement("img");
  front_shiny.setAttribute("src", pokemons.ige);
  reslt.appendChild(front_shiny);
  //showSearch.appendChild(front_shiny);
  document.body.appendChild(front_shiny);

  showSearch.appendChild(front_shiny);
  console.log(pokemons.ige);
  showSearch.open = true;
}
console.log(pokemons);
nbt.addEventListener("click", SearchedPokemon);

function enteredPokemn(event) {
  event.preventDefault();
  userInput = event.target.value;
}
