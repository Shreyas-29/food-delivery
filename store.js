import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./src/slices/cart";
import { restaurantSlice } from "./src/slices/restaurant";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, // Ensure cart reducer is defined before restaurant reducer
    restaurant: restaurantSlice.reducer,
  },
});
