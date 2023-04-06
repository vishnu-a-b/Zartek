import { createSlice } from '@reduxjs/toolkit';

const cartCountSlice = createSlice({
  name: 'cartCount',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = cartCountSlice.actions;

export default cartCountSlice.reducer;