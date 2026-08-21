import { ConverterCard } from './components/ConverterCard/ConverterCard';
import { conversion, filterTags, timeRangeOptions } from './data/converterData';

export const App = () => {
  return <ConverterCard conversion={conversion} filterTags={filterTags} timeRangeOptions={timeRangeOptions} />;
};
