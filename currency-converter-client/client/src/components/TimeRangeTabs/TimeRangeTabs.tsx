import type { TimeRangeOption } from '../../types/currency';

import styles from './TimeRangeTabs.module.scss';

interface TimeRangeTabsProps {
  options: TimeRangeOption[];
}

export const TimeRangeTabs = ({ options }: TimeRangeTabsProps) => {
  return (
    <div className={styles.tabs} role="tablist" aria-label="Chart time range">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="tab"
          aria-selected={option.active}
          className={`${styles.tab} ${option.active ? styles.active : ''}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
