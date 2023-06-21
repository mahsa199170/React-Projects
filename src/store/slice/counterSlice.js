import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    // actions
    ADD: (state) => {
      state.count += 1;
    },
    ADD_BY_5: (state, action) => {
      state.count += action.payload;
    },
    SUBTRACT: (state) => {
      state.count -= 1;
    },
    RESET: (state) => {
      state.count = 0;
    },
  },
});

export const { ADD, ADD_BY_5, SUBTRACT, RESET } = counterSlice.actions;
export default counterSlice.reducer;
