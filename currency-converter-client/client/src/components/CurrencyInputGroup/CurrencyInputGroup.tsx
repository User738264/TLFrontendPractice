import type { ConversionData } from '../../types/currency';
import { CurrencySelectInput } from '../CurrencySelectInput/CurrencySelectInput';

import styles from './CurrencyInputGroup.module.scss';

interface CurrencyInputGroupProps {
  data: ConversionData;
}

export const CurrencyInputGroup = ({ data }: CurrencyInputGroupProps) => {
  return (
    <div className={styles.group}>
      <CurrencySelectInput value={data.from} />
      <CurrencySelectInput value={data.to} />
    </div>
  );
};
