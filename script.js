const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";

const loadPokemonButton = document.getElementById("loadPokemonButton");
const pokemonOutputContainer = document.getElementById(
  "pokemonOutputContainer"
);

loadPokemonButton.addEventListener(
  "click",
  fetch(apiUrl)
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
    })
);

const outputPokemon = (data) => {
  data.results.forEach((pokemon) => {
    let item = document.createElement("div");
    item.innerHTML = pokemon.name;
    pokemonOutputContainer.appendChild(item);
  });
  console.log(data);
};
