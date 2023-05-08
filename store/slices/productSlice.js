import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: {},
    inStock: 0,
    outOfStock: 0,
  },
  reducers: {
    getAllAdminProductsAction: (state, action) => {
      const {
        payload: { products, inStock, outOfStock },
      } = action;
      state.products = products;
      state.inStock = inStock;
      state.outOfStock = outOfStock;
    },
    getAllProductsAction: (state, action) => {
      const {
        payload: { products },
      } = action;
      state.products = products;
    },
    getProductDetailsAction: (state, action) => {
      const {
        payload: { product },
      } = action;
      state.product = product;
    },
  },
});

export const {
  actions: {
    getAllAdminProductsAction,
    getAllProductsAction,
    getProductDetailsAction,
  },
} = productSlice;

export default productSlice.reducer;
