import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: "",
  reducers: {
    setRestaurantName: (state, action) => {
      return action.payload;
    },
  },
});

export const { setRestaurantName } = restaurantSlice.actions;

export default restaurantSlice.reducer;
