import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./Darkmode";  // Import the darkMode slice
import cartReducer from "./Cartredux";  // Keep your existing reducers

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,  // Add darkMode to the store
    cart: cartReducer,          // Keep your cart reducer
  },
});

export default store;
