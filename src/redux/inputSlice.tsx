import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputState {
  input: string
}
const initialState: InputState = {
  input: ''
}

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload
    }
  }
})

export default inputSlice;