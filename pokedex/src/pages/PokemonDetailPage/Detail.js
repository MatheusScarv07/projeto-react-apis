import { useEffect, useState } from "react";
import pokeball from "../../assets/pokebola.png";
import {
  BackeFrontImg,
  BaseStates,
  CardBack,
  CardContainer,
  CardFront,
  ContainerDetails,
  FrontBackImg,
  Info,
  Moves,
  MovesPoke,
  NameImg,
  PokeballD,
  Pokemon,
  PokemonNameD,
} from "./detailStyled";
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const pokemonId = id;

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      const data = await response.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [pokemonId]);

  if (pokemon === null) {
    return <div>Loading...</div>;
  }
  console.log(pokemon);

  return (
    <div>
      <Header />
      <ContainerDetails>
        <CardContainer>
          <FrontBackImg>
            <CardFront>
              <BackeFrontImg
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            </CardFront>
            <CardBack>
              <BackeFrontImg
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
              />
            </CardBack>
          </FrontBackImg>
          <BaseStates>
            <ul>
              {pokemon.stats.map((type) => (
                <li key={type.slot}>
                  {type.stat.name} : {type.base_stat}
                </li>
              ))}
            </ul>
          </BaseStates>
          <Info>
            <NameImg>
              <PokemonNameD>{pokemon.name}</PokemonNameD>
              <Pokemon src={pokemon.sprites.front_default} alt={pokemon.name} />
            </NameImg>
            <Moves>
              <ul>
                <MovesPoke>{pokemon.moves[0].move.name}</MovesPoke>
                <MovesPoke>{pokemon.moves[1].move.name}</MovesPoke>
                <MovesPoke>{pokemon.moves[2].move.name}</MovesPoke>
                <MovesPoke>{pokemon.moves[3].move.name}</MovesPoke>
                <MovesPoke>{pokemon.moves[4].move.name}</MovesPoke>
                <MovesPoke>{pokemon.moves[5].move.name}</MovesPoke>
              </ul>
            </Moves>
          </Info>
          <PokeballD src={pokeball} alt="pokeball" />
        </CardContainer>
      </ContainerDetails>
    </div>
  );
};
