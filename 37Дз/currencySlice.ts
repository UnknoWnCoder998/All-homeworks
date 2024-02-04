
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  exchangeRate: number;
}

const initialState: CurrencyState = {
  exchangeRate: 75, // начальное значение курса валют
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setExchangeRate: (state, action: PayloadAction<number>) => {
      state.exchangeRate = action.payload;
    },
  },
});

export const { setExchangeRate } = currencySlice.actions;

export default currencySlice.reducer;