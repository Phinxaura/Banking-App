import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const selectBank = (state: RootState) => state.bank;

export const selectBalance = createSelector(
  [selectBank],
  (bank) => bank.balance
);
