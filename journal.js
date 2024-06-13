document.addEventListener('DOMContentLoaded', async function ()
{
    const favoritePokemon = JSON.parse(localStorage.getItem('favoritePokemon')) || ['pikachu', 'bulbasaur', 'charmander', 'squirtle'];
   
   
    const renderPokemon = async () =>
    {
        const favoritePokemonContainer = document.getElementById('favoritePokemon');
        favoritePokemonContainer.innerHTML = '';

        if (favoritePokemon.length === 0)
        {
            const message = document.createElement('p');
            message.textContent = 'No favorite Pokémon found.';
            message.classList.add('text-lg', 'text-gray-500');
            favoritePokemonContainer.appendChild(message);
            return;
        }

        for (const pokemon of favoritePokemon)
        {
            try
            {
                
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                if (!response.ok) throw new Error('Network response was not ok.');

                const data = await response.json();

                const card = document.createElement('div');
                card.classList.add('p-4', 'bg-gray-100', 'rounded', 'shadow');

                const image = document.createElement('img');
                image.src = data.sprites.front_default;
                image.alt = data.name;
                image.classList.add('w-full', 'mb-2');

                const name = document.createElement('h3');
                name.textContent = data.name;
                name.classList.add('text-xl', 'font-semibold', 'text-center');

                const stats = document.createElement('ul');
                stats.classList.add('text-sm', 'text-gray-700');
                data.stats.forEach(stat =>
                {
                    const statItem = document.createElement('li');
                    statItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
                    stats.appendChild(statItem);
                });

                card.appendChild(image);
                card.appendChild(name);
                card.appendChild(stats);

                favoritePokemonContainer.appendChild(card);
            } catch (error)
            {
                console.error('Error fetching Pokemon data:', error);
            }
        }
    };

    renderPokemon();
});
