import { addToStorage, getAllPokemonNames, removeFromStorage } from "./modules/storage.js";

const key = 'favoritePokemon';

document.addEventListener('DOMContentLoaded', async function ()
{
    const favoritePokemon = getAllPokemonNames(key) || [];

    const renderPokemon = async () =>
    {
        const favoritePokemonContainer = document.getElementById(key);
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

                const card = CreateCard(data);

                favoritePokemonContainer.appendChild(card);
            } catch (error)
            {
                console.error('Error fetching Pokemon data:', error);
            }
        }
    };

    renderPokemon();
});

function CreateCard(data)
{
    const card = document.createElement('div');
    card.classList.add('p-4', 'bg-gray-100', 'rounded', 'shadow', 'relative');

    const toggleButton = document.createElement('button');
    toggleButton.textContent = '❤️';
    toggleButton.classList.add('absolute', 'top-2', 'right-2', 'text-xl', 'focus:outline-none');

    toggleButton.addEventListener('click', () =>
    {
        toggleButton.classList.toggle('active');
        if (toggleButton.classList.contains('active'))
        {
            toggleButton.textContent = '💔';
            removeFromStorage(data.id, key);
        } else
        {
            toggleButton.textContent = '❤️';
            addToStorage(data, key);
        }
    });

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

    card.appendChild(toggleButton); // Add toggle button to the card
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(stats);
    return card;
}

