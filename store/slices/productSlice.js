import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: {},
    updateAbleProduct: {},
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
    getProductDetailsFromStoreAction: (state, action) => {
      const {
        payload: { productId },
      } = action;
      const existedProduct = state.products.find(
        (prod) => prod._id.toString() === productId?.toString()
      );
      if (existedProduct) state.updateAbleProduct = existedProduct;
    },
    addProductAction: (state, action) => {
      const {
        payload: { product },
      } = action;

      state.products.push(product);
    },
    deleteProductAction: (state, action) => {
      const {
        payload: { productId },
      } = action;
      const idx = state.products.findIndex(
        (prod) => prod._id.toString() === productId?.toString()
      );
      if (idx !== -1) state.products.splice(idx, 1);
    },
    updateProductAction: (state, action) => {
      const {
        payload: { productId, product },
      } = action;
      const isAlreadyExist = state.products.find(
        (prod) => prod._id.toString() === productId?.toString()
      );
      if (isAlreadyExist) {
        const idx = state.products.findIndex(
          (prod) => prod._id.toString() === productId?.toString()
        );
        state.products[idx] = product;
      }
    },
    resetUpdateAbleProductAction: (state, _action) => {
      state.updateAbleProduct = {};
    },
  },
});

export const {
  actions: {
    getAllAdminProductsAction,
    getAllProductsAction,
    getProductDetailsAction,
    addProductAction,
    deleteProductAction,
    updateProductAction,
    getProductDetailsFromStoreAction,
    resetUpdateAbleProductAction,
  },
} = productSlice;

export default productSlice.reducer;
