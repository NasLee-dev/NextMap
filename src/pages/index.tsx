import { Fragment, useEffect } from 'react'
import MapSection from '../../components/home/MapSection'
import { Store } from '@/types/store';
import useStores from '../../hooks/useStore';
import HomeHeader from '../../components/home/Headers';
import DetailSection from '../../components/home/DetailSection';
import { NextSeo } from 'next-seo';

interface Props {
  stores: Store[];
}

export default function Home({ stores }: Props) {


  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <NextSeo
        title='Next 매장지도'
        description='매장지도'
      />
      <HomeHeader />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
        <DetailSection />
      </main>
    </Fragment>
  )
};

export async function getStaticProps() {
  const stores = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`).then((response) => response.json())

  return {
    props: { stores },
    revalidate: 60 * 60,
  }
};