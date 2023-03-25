import React, { useState } from "react";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";
import {Pokemon, PokemonWithProps} from "../types/pokemon.types";
import { getPokemon } from "../queries/pokemon.queries";

const BuscarPokemon = () => {
    const [ inputValue, setInputValue ] = useState<string>('')
    const [ inputSearch, setInputSearch ] = useState<string>('')
    const [ pokemonSeleccionado, setPokemonSeleccionado ] = useState<string>('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{      
      setInputValue(e.target.value);
    }

    const onBuscarClick = () => {
      console.log(inputValue);
      setInputSearch(inputValue) 
    }

    const seleccionarPokemon = (pokemon: Pokemon) => {
      setPokemonSeleccionado(pokemon.name)
      console.log(pokemonSeleccionado);
      
    }

    return (
        <>
            <div id="buscarPokemon">
                <label>Buscar pokemon</label>
                <input type="text" onChange={onChange} placeholder={"Pikachu, Charmander, Ditto, etc"}/>
                <button onClick={onBuscarClick}>Buscar</button>
            </div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <ListadoPokemons name={inputSearch} seleccionarPokemon={seleccionarPokemon} /> 
                <VistaPokemon pokemonSeleccionado={pokemonSeleccionado} />
            </div>
        </>
    );
}

export default BuscarPokemon;
