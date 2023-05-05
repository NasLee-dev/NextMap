import { Store } from '@/types/store';
import { CURRENT_STORE_KEY } from '../../hooks/useCurrentStore';
import styles from '../../src/styles/detail.module.scss';
import useSWR from 'swr';
import { useState } from 'react';
import DetailContent from './DetailContent';
import DetailHeader from './DetailHeader';

export default function DetailSection() {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.detailSection} ${expanded ? styles.expanded : ''} ${
        currentStore ? styles.selected : ''
      }`}
    >
      <DetailHeader
        currentStore={currentStore}
        expanded={expanded}
        onClickArrow={() => setExpanded(!expanded)}
      />
      <DetailContent currentStore={currentStore} expanded={expanded} />
    </div>
  );
};