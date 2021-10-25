import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/authentication/authSlice';
import themeReducer from '../features/themeSwitcher/themeSlice';
import { usersApi } from './services/users';
import { authApi } from './services/auth';

import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  theme: themeReducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [usersApi.reducerPath, authApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
