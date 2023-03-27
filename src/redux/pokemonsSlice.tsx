import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPokemons } from '../queries/pokemon.queries';
import { Pokemon } from '../types/pokemon.types';


interface PokemonsState {
  pokemons: Pokemon[]
}
const initialState: PokemonsState = {
  pokemons: [
    {
      name:"",
      url:""
    },
  ]
}

export const getPokemonsReducer = createAsyncThunk("pokemons/getPokemons", getPokemons)

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload
    }
  }
})

export default pokemonSlice;
export const { setPokemons } = pokemonSlice.actions;
