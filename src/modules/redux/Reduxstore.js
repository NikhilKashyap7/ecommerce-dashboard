import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./Darkmode";
import cartReducer from "./Cartredux";
import authReducer from "./Authredux"; 

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    cart: cartReducer,
    auth: authReducer, 
  },
});

export default store;
