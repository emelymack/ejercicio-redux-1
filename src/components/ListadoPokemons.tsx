import React, {useEffect, useState} from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import {buscarPokemons} from "../queries/pokemon.queries";
import {Pokemon} from "../types/pokemon.types";
import {extractPokemonId} from "../services/pokemon.services";
import {useQuery, useQueryClient} from 'react-query'
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { getPokemonsReducer } from "../redux/pokemonsSlice";
import { setPokemons } from "../redux/pokemonsSlice";

/**
 * Visualiza una lista de pokemons
 *
 * Ej:
 * <pre>
 *     <ListadoPokemons />
 * </pre>
 * @param {string} name nombre del pokemon a buscar
 * @param seleccionarPokemon una funcion que se ejecuta al hacer click en el pokemon y guarda en un estado el pokemon seleccionado
 * @author Digital House
 */
interface Props {
  name: string;
  seleccionarPokemon: (pokemon: Pokemon) => void;
}
const ListadoPokemons = ({name, seleccionarPokemon}: Props) => {
  const [isLoading, setLoading] = useState(true);
  const pokemons = useAppSelector(state => state.pokemons.pokemons)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
      buscarPokemons(name).then((data) => {
          setLoading(false);
          dispatch(setPokemons(data));
      });
  },[name])


    if (isLoading) return <div>Cargando pokemons...</div>

    return  (
        <div id="listadoCategorias">
            {pokemons && pokemons.map((pokemon: Pokemon) => (
                <ListadoPokemonsItem pokemon={pokemon}
                                     seleccionarPokemon={seleccionarPokemon}
                                     key={extractPokemonId(pokemon.url)}/>
            ))}
        </div>
    );
}

export default ListadoPokemons;
