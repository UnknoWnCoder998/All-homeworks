// convertToDollars.ts
import { useSelector } from 'react-redux';
import { RootState } from './store';

export function convertToDollars(amountInRubles: number): string {
  const exchangeRate = useSelector((state: RootState) => state.currency.exchangeRate);
  const amountInDollars = amountInRubles / exchangeRate;
  return `${amountInDollars.toFixed(2)} USD`;
}
