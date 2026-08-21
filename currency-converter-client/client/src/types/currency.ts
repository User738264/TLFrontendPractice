export interface CurrencyInfo {
  code: string;
  name: string;
  symbol: string;
  description: string;
}

export interface CurrencyAmount {
  currency: CurrencyInfo;
  amount: number;
}

export interface ConversionData {
  from: CurrencyAmount;
  to: CurrencyAmount;
  updatedAt: string;
}

export interface FilterTag {
  id: string;
  label: string;
  active: boolean;
}

export interface TimeRangeOption {
  id: string;
  label: string;
  active: boolean;
}
