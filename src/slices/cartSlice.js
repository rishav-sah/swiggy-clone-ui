import { createSlice } from "@reduxjs/toolkit";

// a function which takes a configuration
const cartSlice = createSlice({
  name: "Cart", // first configuration: name
  // second configuration: state - initialState
  initialState: {
    items: []
  },
  // third configuration: reducers function which modifies the state
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    }
  }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
