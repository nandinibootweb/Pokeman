import { addToStorage } from "./storage.js";
export function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('p-4', 'bg-gray-100', 'rounded', 'shadow');

    const image = document.createElement('img');
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;
    image.classList.add('w-full', 'mb-2');

    const name = document.createElement('h3');
    name.textContent = pokemon.name;
    name.classList.add('text-xl', 'font-semibold', 'text-center');

    const stats = document.createElement('ul');
    stats.classList.add('text-sm', 'text-gray-700');
    pokemon.stats.forEach(stat =>
    {
        const statItem = document.createElement('li');
        statItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        stats.appendChild(statItem);
    });


    const button = document.createElement("button");
  button.innerText = "Favorite";
  button.classList.add(
    "bg-blue-500",
    "text-white",
    "px-4",
    "py-1",
    "text-center",
    "cursor-pointer"
  );

     button.addEventListener("click", () => {
       addToStorage(pokemon, "favorites");
     });

  button.onclick = (e) => {
    addToStorage(pokemon, "favorites");
  };

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(stats);
  card.appendChild(button);
  
  const pokemonContainer = document.querySelector("#pokemons-container");
  pokemonContainer.appendChild(card);
}