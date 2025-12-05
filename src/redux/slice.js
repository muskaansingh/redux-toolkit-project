import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   value: 0,
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
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
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      //   state.value ? (state.value -= 1) : null;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeAllItem: (state) => {
      //   state.value = 0;
      state.items = [];
    },
  },
});

console.log("initialState", initialState);

export const { addItem, removeItem, removeAllItem } = addTocart.actions;
export default addTocart.reducer; // we have to patch this reducer in store.js
