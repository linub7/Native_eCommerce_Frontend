import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import loading from './slices/loadingSlice';
import auth from './slices/authSlice';

const reducers = combineReducers({ loading, auth });

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = persistReducer(config, reducers);

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
