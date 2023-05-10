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
    addCategoryAction: (state, action) => {
      const {
        payload: { category },
      } = action;
      state.categories.push(category);
    },
    deleteCategoryAction: (state, action) => {
      const {
        payload: { _id },
      } = action;
      const idx = state.categories.findIndex(
        (el) => el._id.toString() === _id.toString()
      );
      if (idx !== -1) state.categories.splice(idx, 1);
    },
  },
});

export const {
  actions: {
    getAllCategoriesAction,
    getCategoryDetailsAction,
    addCategoryAction,
    deleteCategoryAction,
  },
} = categorySlice;

export default categorySlice.reducer;
