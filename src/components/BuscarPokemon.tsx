import React, { useEffect, useState } from "react";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";

const BuscarPokemon = () => {
    const [ inputValue, setInputValue ] = useState<string>('')
    const [ inputSearch, setInputSearch ] = useState<string>('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{      
      setInputValue(e.target.value);
    }

    const onBuscarClick = () => {
      console.log(inputValue);
      setInputSearch(inputValue) 
    }

    return (
        <>
            <div id="buscarPokemon">
                <label>Buscar pokemon</label>
                <input type="text" onChange={onChange} placeholder={"Pikachu, Charmander, Ditto, etc"}/>
                <button onClick={onBuscarClick}>Buscar</button>
            </div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <ListadoPokemons name={inputSearch} seleccionarPokemon={() =>{}} /> 
                <VistaPokemon />
            </div>
        </>
    );
}

export default BuscarPokemon;
