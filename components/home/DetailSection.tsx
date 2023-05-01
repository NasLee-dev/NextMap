import { Store } from '@/types/store';
import { CURRENT_STORE_KEY } from '../../hooks/useCurrentStore';
import styles from '../../src/styles/detail.module.scss';
import {IoIosArrowUp} from 'react-icons/io';
import useSWR from 'swr';
import { useState } from 'react';
import DetailContent from './DetailContent';

export default function DetailSection() {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  return(
    <>
      <div className={`${styles.detailSection} ${currentStore ? 'selected' : ''} ${
        expanded ? styles.expanded : ''
      }`}>
        <div className={styles.header}>
          <button 
            className={`${styles.arrowButton} ${expanded ? styles.expanded : ''}`} 
            onClick={() => setExpanded(!expanded)}
            disabled={!currentStore}
          >
            <IoIosArrowUp size={20} color='#666666' />
          </button>
          {!currentStore && <p className={styles.title}>매장을 선택해주세요.</p>}
          {currentStore && <p className={styles.title}>{currentStore.name}</p>}
        </div>
        <DetailContent currentStore={currentStore} expanded={expanded} />
      </div>
    </>
  );
};