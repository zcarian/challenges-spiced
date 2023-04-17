import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  function handlePreviousPage() {
    setUrl(pokemon.previous);
  }

  function handleNextPage() {
    setUrl(pokemon.next);
  }
  return (
    <main>
      {pokemon && pokemon.previous && (
        <button
          type="button"
          disabled={!pokemon.previous}
          onClick={handlePreviousPage}
        >
          Previous Page
        </button>
      )}
      {pokemon && pokemon.next && (
        <button type="button" onClick={handleNextPage}>
          Next Page
        </button>
      )}
      <ul>
        {pokemon &&
          pokemon.results &&
          pokemon.results.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>
    </main>
  );
}
