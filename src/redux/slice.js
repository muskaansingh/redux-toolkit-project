import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   value: 0,
  items: [],
};

const addTocart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // This is our action
    addItem: (state, action) => {
      //   state.value += 1;
      console.log(action.payload, "action");
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      //   state.value ? (state.value -= 1) : null;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeAllItem: (state) => {
      state.value = 0;
    },
  },
});

console.log("initialState", initialState);

export const { addItem, removeItem, removeAllItem } = addTocart.actions;
export default addTocart.reducer; // we have to patch this reducer in store.js
