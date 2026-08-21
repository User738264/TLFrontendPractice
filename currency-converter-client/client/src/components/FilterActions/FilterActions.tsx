import { Button } from '../Button/Button';

import styles from './FilterActions.module.scss';

export const FilterActions = () => {
  return (
    <div className={styles.actions}>
      <Button variant="primary" icon="+">
        Save filter
      </Button>
      <Button variant="danger">Clear filters</Button>
    </div>
  );
};
