import { configureStore } from '@reduxjs/toolkit'
import amazonReducer from '../Redux/amazonSlice';
export const store = configureStore({
  reducer: {amazonReducer},
})