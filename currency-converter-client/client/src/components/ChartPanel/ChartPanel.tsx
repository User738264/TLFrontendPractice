import chartImage from '../../assets/images/rate-chart.png';
import type { TimeRangeOption } from '../../types/currency';
import { TimeRangeTabs } from '../TimeRangeTabs/TimeRangeTabs';

import styles from './ChartPanel.module.scss';

interface ChartPanelProps {
  timeRangeOptions: TimeRangeOption[];
}

export const ChartPanel = ({ timeRangeOptions }: ChartPanelProps) => {
  return (
    <div className={styles.panel}>
      <TimeRangeTabs options={timeRangeOptions} />
      <img className={styles.chart} src={chartImage} alt="Exchange rate history chart" />
    </div>
  );
};
