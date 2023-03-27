import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPokemon } from '../queries/pokemon.queries';
import { PokemonWithProps } from '../types/pokemon.types';


interface PokemonViewState {
  pokemon: PokemonWithProps
}
const initialState: PokemonViewState = {
  pokemon: {
    id: 1,
    name: 'Bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    sprites: {
        "default": 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        other: {home: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png'}}
    }
  }
}

export const setPokemonViewReducer = createAsyncThunk("pokemons/getPokemon", getPokemon)

const pokemonViewSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<string>) => {
      // state.pokemon = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(setPokemonViewReducer.fulfilled, (state, action: PayloadAction<PokemonWithProps>)=>{
        console.log(state);
        state.pokemon = action.payload
      })
  }
})

export default pokemonViewSlice;
// export const { setPokemon } = pokemonViewSlice.actions;
