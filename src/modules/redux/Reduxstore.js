import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartredux";
const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});

export default store;
