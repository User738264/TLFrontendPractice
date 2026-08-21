import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { CurrencyInfo } from '../../../types/currency';
import { MoreAbout } from '../MoreAbout';

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

const cad: CurrencyInfo = {
  code: 'CAD',
  name: 'Canadian dollar',
  symbol: '$',
  description: 'Official currency of Canada.'
};

describe('MoreAbout', () => {
  it('renders on the page with a toggle labelled after the given currency pair', () => {
    render(<MoreAbout pairLabel="PLN/JPY" currencies={[pln, jpy]} />);

    expect(screen.getByRole('button', { name: 'PLN/JPY: about' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'More about PLN/JPY' })).toBeInTheDocument();
  });

  it('shows the description for each currency in the selected pair', () => {
    render(<MoreAbout pairLabel="PLN/JPY" currencies={[pln, jpy]} />);

    expect(screen.getByRole('heading', { name: 'Polish zloty - PLN - zł' })).toBeInTheDocument();
    expect(screen.getByText('Official currency of Poland.')).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Japanese yen - JPY - ¥' })).toBeInTheDocument();
    expect(screen.getByText('Official currency of Japan.')).toBeInTheDocument();
  });

  it('updates both the toggle label and the descriptions for a different pair', () => {
    render(<MoreAbout pairLabel="PLN/CAD" currencies={[pln, cad]} />);

    expect(screen.getByRole('button', { name: 'PLN/CAD: about' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Canadian dollar - CAD - $' })).toBeInTheDocument();
    expect(screen.getByText('Official currency of Canada.')).toBeInTheDocument();

    expect(screen.queryByRole('heading', { name: 'Japanese yen - JPY - ¥' })).not.toBeInTheDocument();
  });
});
