import { configureStore } from '@reduxjs/toolkit';
import cartCountReducer from '../slices/createSlices';
import restaurantReducer from "../slices/resturantSlice";
const store = configureStore({
  reducer: {
    cartCount: cartCountReducer,
    restaurant: restaurantReducer,
  },
});

export default store;


