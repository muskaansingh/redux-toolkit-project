import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const addTocart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // This is our action
    addItem: (state) => {
      state.value += 1;
    },
    removeItem: (state) => {
      state.value ? (state.value -= 1) : null;
    },
    removeAllItem: (state) => {
      state.value = 0;
    },
  },
});

export const { addItem, removeItem, removeAllItem } = addTocart.actions;
export default addTocart.reducer; // we have to patch this reducer in store.js
