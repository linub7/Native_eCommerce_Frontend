import { createSlice } from '@reduxjs/toolkit';

const token = async () => {
  try {
    const token = await AsyncStorage.getItem('@token');
    return token != null ? JSON.parse(token) : null;
  } catch (error) {
    return null;
  }
};

const userData = async () => {
  try {
    const userData = await AsyncStorage.getItem('@userData');
    return userData != null ? JSON.parse(userData) : null;
  } catch (error) {
    return null;
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token,
    userData,
  },
  reducers: {
    authenticate: (state, action) => {
      const {
        payload: { token, userData },
      } = action;
      state.token = token;
      state.userData = userData;
    },
    logout: (state, action) => {
      state.token = null;
      state.userData = null;
    },
  },
});

export const {
  actions: { authenticate, logout },
} = authSlice;

export default authSlice.reducer;
