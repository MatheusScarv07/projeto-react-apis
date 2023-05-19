import { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";

export const Pokedex = ({ capturedPokemon = [] }) => {
  const [pokemonList, setPokemonList] = useState(capturedPokemon);

  useEffect(() => {
    const pokemon = localStorage.getItem("capturedPokemon");
    if (pokemon) {
      setPokemonList(JSON.parse(pokemon));
    }
  }, []);

  const removePokemon = (id) => {
    const filteredList = pokemonList.filter((pokemon) => pokemon.id !== id);
    setPokemonList(filteredList);
    localStorage.setItem("capturedPokemon", JSON.stringify(filteredList));
  };

  return (
    <div>
      <Header />
      <ul>
        {pokemonList.map((pokemon) => (
          <PokemonCard
            pokemons={{ data: pokemon }}
            key={pokemon.id}
            captured={true}
            onRemove={() => removePokemon(pokemon.id)}
          />
        ))}
      </ul>
    </div>
  );
};
