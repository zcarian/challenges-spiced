import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  function handlePreviousPage() {
    setOffset(offset - 20);
  }

  function handleNextPage() {
    setOffset(offset + 20);
  }
  return (
    <main>
      <button
        type="button"
        hidden={offset === 0 ? true : false}
        onClick={handlePreviousPage}
      >
        Previous Page
      </button>
      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
