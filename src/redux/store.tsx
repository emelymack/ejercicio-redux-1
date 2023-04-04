import { configureStore } from '@reduxjs/toolkit';
import inputSlice from './inputSlice';
import pokemonSlice from './pokemonsSlice';
import pokemonViewSlice from './pokemonViewSlice';

export const store = configureStore({
  reducer: {
    pokemons : pokemonSlice.reducer,
    input: inputSlice.reducer,
    pokemonView: pokemonViewSlice.reducer
  }
})

/* para tipar los objetos de estado y dispatch */ 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch