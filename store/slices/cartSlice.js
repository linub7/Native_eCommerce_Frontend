import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCartAction: (state, action) => {
      const {
        payload: { item },
      } = action;

      const isAlreadyExist = state.cartItems.find(
        (el) => el.product === item?.product
      );

      if (isAlreadyExist) {
        const idx = state.cartItems.findIndex(
          (el) => el.product === item.product
        );
        state.cartItems[idx] = item;
      } else {
        state.cartItems.push(item);
      }
    },
    removeFromCartAction: (state, action) => {
      const {
        payload: { product },
      } = action;
      const idx = state.cartItems.findIndex((el) => el?.product === product);
      state.cartItems.splice(idx, 1);
    },
    clearCartAction: (state, _action) => {
      state.cartItems = [];
    },
  },
});

export const {
  actions: { addToCartAction, removeFromCartAction, clearCartAction },
} = cartSlice;

export default cartSlice.reducer;
