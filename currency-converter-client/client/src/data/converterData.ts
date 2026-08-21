import type { ConversionData, CurrencyInfo, FilterTag, TimeRangeOption } from '../types/currency';

export const pln: CurrencyInfo = {
  code: 'PLN',
  name: 'Polish zloty',
  symbol: 'zł',
  description:
    'This is the official currency and legal tender of Poland. It is subdivided into 100 grosz-y (gr). It is the most traded currency in Central and Eastern Europe and ranks 21st most-traded in the foreign exchange market.'
};

export const jpy: CurrencyInfo = {
  code: 'JPY',
  name: 'Japanese yen',
  symbol: '¥',
  description:
    'The yen is the official currency of Japan. It is the third-most traded currency in the foreign exchange market, after the United States dollar and the euro. It is also widely used as a third reserve currency after the US dollar and the euro.'
};

export const cad: CurrencyInfo = {
  code: 'CAD',
  name: 'Canadian dollar',
  symbol: '$',
  description:
    'The Canadian dollar is the official currency of Canada. It is among the world’s major reserve currencies and is commonly traded alongside the US dollar, euro, yen and pound sterling.'
};

const plnToJpyRate = 0.99;

export const conversion: ConversionData = {
  from: { currency: pln, amount: 1 },
  to: { currency: jpy, amount: plnToJpyRate },
  updatedAt: 'Fri, 05 Apr 2026 10:35 UTC'
};

export const filterTags: FilterTag[] = [
  { id: 'pln-cad', label: 'PLN / CAD', active: false },
  { id: 'pln-jpy', label: 'PLN / JPY', active: true }
];

export const timeRangeOptions: TimeRangeOption[] = [
  { id: '1min', label: '1 MIN', active: false },
  { id: '2min', label: '2 MIN', active: false },
  { id: '3min', label: '3 MIN', active: false },
  { id: '4min', label: '4 MIN', active: true },
  { id: '5min', label: '5 MIN', active: false }
];
