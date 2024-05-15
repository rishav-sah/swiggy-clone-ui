import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";

// store of our react application which comes from reduxjs/toolkit
const appStore = configureStore({
  reducer: {
    cart: cartReducer
  },
});

export default appStore;