import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slices/newsSlice';
import filterReducer from './slices/filterSlice';
import flatSlice from './slices/flatSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    filter: filterReducer,
    flats: flatSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
