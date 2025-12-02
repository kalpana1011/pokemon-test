import type { Response } from './response'
import './style.css'

function getPokemonId(url: string) {
  //url:  https://pokeapi.co/api/v2/pokemon/5/
  return url.substr(url.lastIndexOf('/') - 1).split('/')[0];
}
/* fetch("https://omdbapi.com/?apikey=416ed51a&s=star")
  .then((response) => response.json())
  .then((data: OmdbResponse) => {
    createHtml(data.Search);
  }); */
  fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
  .then((response)=>response.json())
  .then((data: Response)=>{
    console.log('DATA ', data);
    const pokemonContainer = document.createElement('div');
    const { results } = data;

    results.forEach(pokemon => {
      const { name, url } = pokemon;
      const pokemonName = document.createElement('p');
      const pokemonImage = document.createElement('img');

      pokemonName.innerHTML = name;
      //const pokemonId = url.
      const pokemonId = getPokemonId(url);
      pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

      pokemonContainer.appendChild(pokemonName);
      pokemonContainer.appendChild(pokemonImage)
      document.getElementById('pokedex')?.appendChild(pokemonContainer);
    })
  })