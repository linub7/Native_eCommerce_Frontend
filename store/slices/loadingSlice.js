import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loading: false,
    localLoading: false,
  },
  reducers: {
    loadingStatus: (state, action) => {
      const {
        payload: { status },
      } = action;
      state.loading = status;
    },
    localLoadingStatus: (state, action) => {
      const {
        payload: { status },
      } = action;
      state.localLoading = status;
    },
  },
});

export const {
  actions: { loadingStatus, localLoadingStatus },
} = loadingSlice;

export default loadingSlice.reducer;
