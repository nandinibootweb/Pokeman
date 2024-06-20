export async function fetchPokemon(url, query) {
    try {
      const response = await fetch(`${url}${query}`);
      const pokemons = await response.json();

      return pokemons;

    } catch (error) {
      console.log(error);
    }
  }
   
//fetches pokemon ("https://pokeapi.co/api/v2/", query)
   //if an error occurs logs it in the console
  