import { addToStorage } from "./storage.js";
export function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('p-4', 'bg-gray-100', 'rounded', 'shadow','hover:scale-[1.05]','flex', 'flex-col', 'items-center','drop-shadow-lg');

    const image = document.createElement('img');
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;
    image.classList.add('w-full', 'mb-2');

    const name = document.createElement('h3');
    name.textContent = pokemon.name;
    name.classList.add('text-xl', 'font-semibold', 'text-center','uppercase','mb-2','tracking-wider');

    const stats = document.createElement('ul');
    stats.classList.add('text-sm', 'text-gray-700');
    pokemon.stats.forEach(stat =>
    {
        const statItem = document.createElement('li');
        statItem.classList.add('text-sm','px-1','py-[0.2rem]','text-gray-900','font-medium','text-center','uppercase','border-2','hover:border-4','shadow-inner')
        statItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        stats.appendChild(statItem);
    });


    const button = document.createElement("button");
  button.innerText = "Favorite";
  button.classList.add(
    "bg-gray-500",
    "text-white",
    "px-4",
    "mt-3",
    "text-center",
    "cursor-pointer",
    'rounded'
    
    
  );

     button.addEventListener("click", () => {
       addToStorage(pokemon, "favoritePokemon");
     });

  button.onclick = (e) => {
    addToStorage(pokemon, "favoritePokemon");
    button.innerHTML='Added to favorites!';
  };

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(stats);
  card.appendChild(button);
  
  const pokemonContainer = document.querySelector("#pokemons-container");
  pokemonContainer.appendChild(card);
}