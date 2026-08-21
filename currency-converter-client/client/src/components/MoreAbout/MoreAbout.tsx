import type { CurrencyInfo } from '../../types/currency';
import { CurrencyDescription } from '../CurrencyDescription/CurrencyDescription';

import styles from './MoreAbout.module.scss';

interface MoreAboutProps {
  pairLabel: string;
  currencies: CurrencyInfo[];
}

export const MoreAbout = ({ pairLabel, currencies }: MoreAboutProps) => {
  return (
    <section className={styles.section} aria-label={`More about ${pairLabel}`}>
      <button type="button" className={styles.toggle}>
        <span>{pairLabel}: about</span>
        <svg className={styles.chevron} width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path
            d="M1 7L6 2L11 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <hr className={styles.divider} />
      <div className={styles.content}>
        {currencies.map((currency) => (
          <CurrencyDescription key={currency.code} currency={currency} />
        ))}
      </div>
    </section>
  );
};
