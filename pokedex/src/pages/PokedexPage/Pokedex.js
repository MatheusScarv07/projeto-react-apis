import Header from "../../components/header/Header";
import { useEffect, useState, useRef } from "react";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { ContainerMsg } from "../PokemonListPage/listStyled";
import { Containerpokedex } from "./pokedexStyled";

export const Pokedex = () => {
  const [capturedPokemons, setCapturedPokemons] = useState({});
  const [RemoveMessage, setRemoveMessage] = useState(false);
  const captureMessageRef = useRef(null);

  useEffect(() => {
    const storedCapturedPokemons =
      JSON.parse(localStorage.getItem("capturedPokemons")) || {};
    setCapturedPokemons(storedCapturedPokemons);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        captureMessageRef.current &&
        !captureMessageRef.current.contains(event.target)
      ) {
        setRemoveMessage(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleRemovePokemon = (pokemonId) => {
    const updatedCapturedPokemons = { ...capturedPokemons };
    delete updatedCapturedPokemons[pokemonId];
    setCapturedPokemons(updatedCapturedPokemons);
    localStorage.setItem(
      "capturedPokemons",
      JSON.stringify(updatedCapturedPokemons)
    );
    setRemoveMessage(true);
  };

  return (
    <div>
      <Header />
      <Containerpokedex>
        {RemoveMessage && (
          <ContainerMsg ref={captureMessageRef}>
            <h1>Gotcha!</h1>
            <h3>The Pokémon has been removed from your Pokédex</h3>
          </ContainerMsg>
        )}
        {Object.values(capturedPokemons).map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemons={pokemon}
            onRemove={handleRemovePokemon}
          />
        ))}
      </Containerpokedex>
    </div>
  );
};
