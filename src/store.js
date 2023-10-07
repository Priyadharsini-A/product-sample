import { configureStore } from '@reduxjs/toolkit';
import SearchSlice from './slices/SearchSlice';
import ProductSlice from './slices/ProductSlice';

const store = configureStore({
  reducer: {
    products: ProductSlice,
    search: SearchSlice,
  },
});

export default store;
