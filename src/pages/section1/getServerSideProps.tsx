import type { GetServerSideProps, NextPage  } from "next";

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getServerSideProps Page</h1>
      <p>값 : {data}</p>
    </main>
  );
};

export default Example;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=10'
  );

  const delayInSeconds = 2;
  const data = await new Promise((resolve) => 
    setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
  );
  
  return {
    props: {data},
  };
}