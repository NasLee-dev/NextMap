import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Links() {
  const router = useRouter();           //  CSR 방식으로 라우팅(Link 대체 가능)
  useEffect(() => {
    router.prefetch('/section1/getStaticProps');
  }, [router]);
  return (
    <main>
      <h1>Links</h1>
      {/* {<div style={{height: '200vh'}} /> } */}
      {/* {eslint-disable-next-line @next/next/no-html-link-for-pages} */}
      {/* {<a href="/section1/getStaticProps">/getStaticProps</a>} */}
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        /getStaticProps
      </button>
      {/* <Link href="/section1/getStaticProps">/getStaticProps</Link> */}
    </main>
  );
}