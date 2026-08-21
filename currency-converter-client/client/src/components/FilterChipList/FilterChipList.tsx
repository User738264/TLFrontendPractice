import type { FilterTag } from '../../types/currency';

import styles from './FilterChipList.module.scss';

interface FilterChipListProps {
  tags: FilterTag[];
}

export const FilterChipList = ({ tags }: FilterChipListProps) => {
  return (
    <ul className={styles.list}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <span className={`${styles.chip} ${tag.active ? styles.active : ''}`}>{tag.label}</span>
        </li>
      ))}
    </ul>
  );
};
