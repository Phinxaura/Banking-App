import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BankState {
  balance: number;
}

const initialState: BankState = {
  balance: 0,
};

const roundToTwo = (value: number) => parseFloat(value.toFixed(2));

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    deposit: (state, action: PayloadAction<number>) => {
      state.balance = roundToTwo(state.balance + action.payload);
    },
    withdraw: (state, action: PayloadAction<number>) => {
      if (action.payload <= state.balance) {
        state.balance = roundToTwo(state.balance - action.payload);
      }
    },
  },
});

export const { deposit, withdraw } = bankSlice.actions;
export default bankSlice.reducer;
