// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import bankReducer from '../features/bank/bankSlice';
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
