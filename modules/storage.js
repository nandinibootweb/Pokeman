export function addToStorage(pokemon, key)
{
  console.log(pokemon, key);
  // get the pokemons from the localStorage and parse them, if there no items then assign an empty array to the variable
  const pokemonArr = JSON.parse(localStorage.getItem(key)) || [];
  // we add the pokemon at the end of the PokemonArray
  pokemonArr.push(pokemon);
  // we add the pokemons to the localstorage
  localStorage.setItem(key, JSON.stringify(pokemonArr));
}

export function getAllPokemonNames(key)
{
  let pokemonIds = new Set();

  const pokemonArr = JSON.parse(localStorage.getItem(key)) || [];

  if (Array.isArray(pokemonArr))
  {
    pokemonArr.forEach(element =>
    {
      pokemonIds.add(element.id);
    });
  }

  const uniquePokemonIds = Array.from(pokemonIds);

  console.log("uniquePokemonIds: ", uniquePokemonIds);
  return uniquePokemonIds;
}