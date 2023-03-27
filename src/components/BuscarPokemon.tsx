import React, { useState } from "react";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";
import {Pokemon, PokemonWithProps} from "../types/pokemon.types";
import { getPokemon } from "../queries/pokemon.queries";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import inputSlice from "../redux/inputSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hook";

const BuscarPokemon = () => {
    const [ inputValue, setInputValue ] = useState<string>('')
    const [ pokemonSeleccionado, setPokemonSeleccionado ] = useState<string>('')
    const dispatch: AppDispatch = useAppDispatch()
    const inputState = useAppSelector((state: RootState) => state.input.input)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{      
      setInputValue(e.target.value);
    }

    const onBuscarClick = () => {
      dispatch(inputSlice.actions.setInput(inputValue))
    }
    
    const seleccionarPokemon = (pokemon: Pokemon) => {
      setPokemonSeleccionado(pokemon.name)
      // console.log(pokemon);
    }

    return (
        <>
            <div id="buscarPokemon">
                <label>Buscar pokemon</label>
                <input type="text" onChange={onChange} placeholder={"Pikachu, Charmander, Ditto, etc"}/>
                <button onClick={onBuscarClick}>Buscar</button>
            </div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <ListadoPokemons name={inputState} seleccionarPokemon={seleccionarPokemon} /> 
                <VistaPokemon pokemonSeleccionado={pokemonSeleccionado} />
            </div>
        </>
    );
}

export default BuscarPokemon;
