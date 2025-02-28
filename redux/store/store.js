import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import productReducer from '../features/products/productSlice';
import cartReducer from '../features/carts/cartSlice';

// Persist configuration
const persistConfig = {
  key: 'root', // key for the localStorage key
  storage, // storage engine (localStorage by default)
};

// Combine your reducers into a single root reducer
const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create a persistor object
export const persistor = persistStore(store);
