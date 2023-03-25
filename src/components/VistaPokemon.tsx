import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import {PokemonWithProps} from "../types/pokemon.types";
import {Sprite} from "../types/sprite.types";
import { getPokemon } from "../queries/pokemon.queries";

const pokemonMock: PokemonWithProps = {
  id: 1,
  name: 'Bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  sprites: {
      "default": 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      other: {home: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png'}}
  } as Sprite
}

/**
 * Visualiza un pokemon seleccionado
 *
 * @param {string | null} pokemonSeleccionado pokemon almacenado con la funcion seleccionarPokemon
 * @author Digital House
 */
interface Props{
  pokemonSeleccionado: string 
}
const VistaPokemon = ({pokemonSeleccionado}: Props) => {
    const [ pokemon, setPokemon ] = useState<PokemonWithProps>(pokemonMock)
  
    const getPokemonView = async () =>{
      const result =  await getPokemon(pokemonSeleccionado)
      setPokemon(result)
    }

    useEffect(() =>{
      getPokemonView()
    }, [pokemonSeleccionado])

    return pokemon ? (
        <div id="vistaPokemon" className="vistaPokemon">
            <h4>Pokemon: {pokemon.name}</h4>
            <h5>#{pokemon.id}</h5>
            <div style={{width: '40%'}}>
              <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
            </div>
        </div>
    ): null;
}

VistaPokemon.propTypes = {
    item:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default VistaPokemon;
