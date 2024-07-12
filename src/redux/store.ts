import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import cartReducer from "./features/cart/cartSlice"
import {persistReducer,persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], 
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        
        [baseApi.reducerPath]: baseApi.reducer,
        allCart:persistedReducer
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch 

export const persistor = persistStore(store)