const originalPokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

const loadPokemonButton = document.getElementById("loadPokemonButton");
const pokemonOutputContainer = document.getElementById(
  "pokemonOutputContainer"
);

const loadPokemon = () => {
  fetch(originalPokemonUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      outputPokemon(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const outputPokemon = (data) => {
  data.results.forEach((pokemon) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "pokemonCard";

    const imageContainer = document.createElement("div");
    const pokemonImage = document.createElement("img");

    pokemonImage.src = pokemon.url;

    const nameContainer = document.createElement("div");
    nameContainer.innerHTML = pokemon.name;

    pokemonOutputContainer.appendChild(pokemonCard);

    pokemonOutputContainer.appendChild(imageContainer);
    pokemonCard.appendChild(imageContainer);
    imageContainer.appendChild(pokemonImage);

    pokemonCard.appendChild(nameContainer);
  });
  console.log(data.results[0]);
};
