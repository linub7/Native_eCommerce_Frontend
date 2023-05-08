import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    category: {},
  },
  reducers: {
    getAllCategoriesAction: (state, action) => {
      const {
        payload: { categories },
      } = action;
      state.categories = categories;
    },
    getCategoryDetailsAction: (state, action) => {
      const {
        payload: { category },
      } = action;
      state.category = category;
    },
  },
});

export const {
  actions: { getAllCategoriesAction, getCategoryDetailsAction },
} = categorySlice;

export default categorySlice.reducer;
