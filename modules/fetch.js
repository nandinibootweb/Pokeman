export async function fetchPokemon(url, query) {
    try {
      const response = await fetch(`${url}${query}`);
      const pokemons = await response.json();

      return pokemons;

    } catch (error) {
      console.log(error);
    }
  }
   

  