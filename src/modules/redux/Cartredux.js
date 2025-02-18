import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // Store cart items here
  wishlist: [], // Store wishlist items here
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    saveForLater: (state, action) => {
      const item = action.payload;
      // Remove from cart and add to wishlist
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== item.id);
      state.wishlist.push(item);
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, saveForLater, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
