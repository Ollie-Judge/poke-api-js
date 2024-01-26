const PokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

const originalPokemonUrl = "?limit=150";

const loadPokemonButton = document.getElementById("loadPokemonButton");
const pokemonOutputContainer = document.getElementById(
  "pokemonOutputContainer"
);

const refreshPage = () => {
  location.reload();
};

const searchByName = () => {
  const pokemonNameSearch = document
    .getElementById("pokemonNameSearch")
    .value.toLowerCase();
  const url = PokemonUrl + pokemonNameSearch;
  loadPokemon(url);
};

const searchOriginalPokemon = () => {
  const url = PokemonUrl + originalPokemonUrl;
  loadPokemon(url);
};

const loadPokemon = (url) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.results) {
        outputMultiplePokemon(data);
      } else {
        outputSinglePokemon(data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const outputSinglePokemon = (data) => {
  const pokemonCard = document.createElement("div");
  pokemonCard.className = "singularPokemonCard";

  const imageContainer = document.createElement("div");
  const pokemonImage = document.createElement("img");

  pokemonImage.src = data.sprites.back_default;

  const nameContainer = document.createElement("div");
  nameContainer.innerHTML = data.name;

  pokemonOutputContainer.appendChild(pokemonCard);

  pokemonOutputContainer.appendChild(imageContainer);
  pokemonCard.appendChild(imageContainer);
  imageContainer.appendChild(pokemonImage);

  pokemonCard.appendChild(nameContainer);
};

const outputMultiplePokemon = (data) => {
  data.results.forEach((pokemon) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.className = "orignalPokemonCard";

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
};
