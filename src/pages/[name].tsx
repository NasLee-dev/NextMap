import { Store } from "@/types/store";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  store: Store;
};

const StoreDetail: NextPage<Props> = ({ store }) => {
  const router = useRouter();
  return <div>{store.name}</div>
};

export default StoreDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../../public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../../public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);
  
  if(!store) {
    return {
      notFound: true
    };
  };
  
  return { props: { store } };
};
