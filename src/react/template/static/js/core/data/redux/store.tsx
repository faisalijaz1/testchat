import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './commonSlice.tsx';

const store = configureStore({
  reducer: commonSlice,
});

export default store;
