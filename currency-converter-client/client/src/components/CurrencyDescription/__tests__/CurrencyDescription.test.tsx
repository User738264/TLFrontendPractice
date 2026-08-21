import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { CurrencyInfo } from '../../../types/currency';
import { CurrencyDescription } from '../CurrencyDescription';

const pln: CurrencyInfo = {
  code: 'PLN',
  name: 'Polish zloty',
  symbol: 'zł',
  description: 'Official currency of Poland.'
};

const jpy: CurrencyInfo = {
  code: 'JPY',
  name: 'Japanese yen',
  symbol: '¥',
  description: 'Official currency of Japan.'
};

describe('CurrencyDescription', () => {
  it('renders the currency name, code and symbol as a heading', () => {
    render(<CurrencyDescription currency={pln} />);

    expect(screen.getByRole('heading', { name: 'Polish zloty - PLN - zł' })).toBeInTheDocument();
  });

  it('renders that currency’s own description text', () => {
    render(<CurrencyDescription currency={pln} />);

    expect(screen.getByText('Official currency of Poland.')).toBeInTheDocument();
  });

  it('switches heading and description when given a different currency', () => {
    const { rerender } = render(<CurrencyDescription currency={pln} />);
    expect(screen.getByText('Official currency of Poland.')).toBeInTheDocument();

    rerender(<CurrencyDescription currency={jpy} />);

    expect(screen.getByRole('heading', { name: 'Japanese yen - JPY - ¥' })).toBeInTheDocument();
    expect(screen.getByText('Official currency of Japan.')).toBeInTheDocument();
    expect(screen.queryByText('Official currency of Poland.')).not.toBeInTheDocument();
  });
});
