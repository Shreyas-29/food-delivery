import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.restaurant = action?.payload;
    },
  },
});
export const { setResturant } = restaurantSlice?.actions;

export const selectRestaurant = (state) => state?.restaurant?.restaurant;

export default restaurantSlice;
