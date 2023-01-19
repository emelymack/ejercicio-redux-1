import React, {useEffect, useState} from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import {buscarPokemons} from "../queries/pokemon.queries";
import {Pokemon} from "../types/pokemon.types";
import {extractPokemonId} from "../services/pokemon.services";


/**
 * Visualiza una lista de pokemons
 *
 * Ej:
 * <pre>
 *     <ListadoPokemons />
 * </pre>
 * @param {string} name nombre del pokemon a buscar
 * @author Digital House
 */
const ListadoPokemons = () => {
    const [isLoading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

    useEffect(() => {
        //Deberan realizar la busqueda con la variable correspondiente
        buscarPokemons("").then(data => {
            setLoading(false);
            setPokemons(data);
        });
    },[])

    if (isLoading) return <div>Cargando pokemons...</div>

    return (
        <div id="listadoCategorias">
            {pokemons && pokemons.map((pokemon: Pokemon) => (
                <ListadoPokemonsItem pokemon={pokemon}
                                     seleccionarPokemon={() => {}}
                                     key={extractPokemonId(pokemon.url)}/>
            ))}
        </div>
    );
}

export default ListadoPokemons;
