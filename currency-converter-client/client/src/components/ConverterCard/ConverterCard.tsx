import type { ConversionData, FilterTag, TimeRangeOption } from '../../types/currency';
import { ChartPanel } from '../ChartPanel/ChartPanel';
import { ConversionSummary } from '../ConversionSummary/ConversionSummary';
import { CurrencyInputGroup } from '../CurrencyInputGroup/CurrencyInputGroup';
import { FilterActions } from '../FilterActions/FilterActions';
import { FilterChipList } from '../FilterChipList/FilterChipList';
import { MoreAbout } from '../MoreAbout/MoreAbout';

import styles from './ConverterCard.module.scss';

interface ConverterCardProps {
  conversion: ConversionData;
  filterTags: FilterTag[];
  timeRangeOptions: TimeRangeOption[];
}

export const ConverterCard = ({ conversion, filterTags, timeRangeOptions }: ConverterCardProps) => {
  const pairLabel = `${conversion.from.currency.code}/${conversion.to.currency.code}`;

  return (
    <section className={styles.card}>
      <div className={styles.leftColumn}>
        <ConversionSummary data={conversion} />
        <CurrencyInputGroup data={conversion} />
        <FilterActions />
        <FilterChipList tags={filterTags} />
        <MoreAbout pairLabel={pairLabel} currencies={[conversion.from.currency, conversion.to.currency]} />
      </div>
      <div className={styles.rightColumn}>
        <ChartPanel timeRangeOptions={timeRangeOptions} />
      </div>
    </section>
  );
};
