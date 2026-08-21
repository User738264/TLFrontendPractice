import type { CurrencyInfo } from '../../types/currency';

import styles from './CurrencyDescription.module.scss';

interface CurrencyDescriptionProps {
  currency: CurrencyInfo;
}

export const CurrencyDescription = ({ currency }: CurrencyDescriptionProps) => {
  return (
    <article className={styles.description}>
      <h3 className={styles.heading}>
        {currency.name} - {currency.code} - {currency.symbol}
      </h3>
      <p className={styles.text}>{currency.description}</p>
    </article>
  );
};
