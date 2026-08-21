import type { ConversionData } from '../../types/currency';

import styles from './ConversionSummary.module.scss';

interface ConversionSummaryProps {
  data: ConversionData;
}

export const ConversionSummary = ({ data }: ConversionSummaryProps) => {
  const { from, to, updatedAt } = data;

  return (
    <div className={styles.summary}>
      <p className={styles.eyebrow}>
        {from.amount} {from.currency.name} is
      </p>
      <p className={styles.headline}>
        {to.amount} {to.currency.name}
      </p>
      <p className={styles.timestamp}>{updatedAt}</p>
    </div>
  );
};
