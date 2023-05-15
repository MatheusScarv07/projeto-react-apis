/* 
 import pokeball from '../../assets/pokebola.png' 

import { CatchButton, Container, Containerimg, PokemonName, PokemonNumber, TypesContainer } from "./cardStyled";


export const PokemonCard = (props) => {

  const types = props.pokemons.data.types.map((type) => getTypes(type.type.name));
  const color = props.pokemons.data.types.map((typecolor) => getColors(typecolor.type.name));
  
  const [captured, setCaptured] = useState(false);

  useEffect(() => {
    const capturedPokemon = JSON.parse(localStorage.getItem('capturedPokemon'));
    if (capturedPokemon && capturedPokemon.includes(props.pokemons.data.id)) {
      setCaptured(true);
    }
  }, [props.pokemons.data.id]);

  const capturePokemon = (pokemon) => {
    let capturedPokemon = JSON.parse(localStorage.getItem('capturedPokemon'));
    if (!Array.isArray(capturedPokemon)) {
      capturedPokemon = [];
    }
    capturedPokemon.push(pokemon.id);
    localStorage.setItem('capturedPokemon', JSON.stringify(capturedPokemon));
    setCaptured(true);
  };

  const removePokemon = (pokemon) => {
    let capturedPokemon = JSON.parse(localStorage.getItem('capturedPokemon'));
    capturedPokemon = capturedPokemon.filter(id => id !== pokemon.id);
    localStorage.setItem('capturedPokemon', JSON.stringify(capturedPokemon));
    setCaptured(false);
  };
  
  return (
    <Container color={color}>
      <div>
        <PokemonNumber>{props.pokemons.data.id}</PokemonNumber>
        <PokemonName>{props.pokemons.data.name}</PokemonName>
        <TypesContainer>
          {types.map((typeUrl) => (
            <img src={typeUrl} alt="" />
          ))}
        </TypesContainer>
        <a href={`/list/detail/${props.pokemons.data.id}`}>Ver detalhes</a>
      </div>
      <Containerimg>
        {<Pokemon src={`${props.pokemons.data.sprites.front_default}`} alt="" />}
        {captured ?
          <CatchButton onClick={() => removePokemon(props.pokemons.data)}>Remover</CatchButton> :
          <CatchButton onClick={() => capturePokemon(props.pokemons.data)}>Capturar!</CatchButton>
        }
      </Containerimg>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  )
} */