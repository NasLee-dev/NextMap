import { Fragment } from 'react'
import Link from 'next/link'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { VscFeedback } from 'react-icons/vsc'
import styles from '../styles/header.module.scss';
import MapSection from '../../components/home/MapSection'
import Header from '../../components/common/Header'
import { Store } from '@/types/store';

interface Props {
  stores: Store[];
}

export default function Home({ stores }: Props) {
  
  return (
    <Fragment>
      <Header rightElements={[
        <button onClick={() => {
          alert('복사');
        }}
        className={styles.box}
        style={{marginRight: 8}}
        key="button"
        >
          <AiOutlineShareAlt size={20} />
        </button>,
        <Link href="/feedback" className={styles.box} key="link">
          <VscFeedback size={20} />
        </Link>
      ]} />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </Fragment>
  )
};

export async function getStaticProps() {
  const stores = (await import('../../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  }
}
