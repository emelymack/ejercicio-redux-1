import { useEffect } from "react";
import PropTypes from "prop-types";
import { AppDispatch, RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { setPokemonViewReducer } from "../redux/pokemonViewSlice";

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
    const dispatch: AppDispatch = useAppDispatch()
    const pokemon = useAppSelector((state: RootState) => state.pokemonView.pokemon)


    useEffect(() =>{
      dispatch(setPokemonViewReducer(pokemonSeleccionado))
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
