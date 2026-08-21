import type { CurrencyAmount } from '../../types/currency';

import styles from './CurrencySelectInput.module.scss';

interface CurrencySelectInputProps {
  value: CurrencyAmount;
}

export const CurrencySelectInput = ({ value }: CurrencySelectInputProps) => {
  return (
    <div className={styles.row}>
      <span className={styles.amount}>{value.amount}</span>
      <span className={styles.divider} aria-hidden="true" />
      <button type="button" className={styles.currencyButton}>
        <span>{value.currency.code}</span>
        <svg className={styles.chevron} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};
