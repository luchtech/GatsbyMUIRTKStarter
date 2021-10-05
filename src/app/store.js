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
import { usersApi } from '../services/users';
import { registerApi } from '../services/register';
import { loginApi } from '../services/login';

import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  counter: counterReducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
  [loginApi.reducerPath]: loginApi.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [
    usersApi.reducerPath,
    registerApi.reducerPath,
    loginApi.reducerPath,
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersApi.middleware, registerApi.middleware, loginApi.middleware),
});

setupListeners(store.dispatch);
