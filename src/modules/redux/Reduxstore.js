import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './Darkmode';
import cartReducer from "./Cartredux";
const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    cart: cartReducer, 
  },
});

export default store;
