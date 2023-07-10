import { Fragment } from "react";
import Header from "../../components/common/Header";
import { NextSeo } from "next-seo";


export default function Feedback() {
  return (
    <>
      <Fragment>
        <NextSeo 
          title="피드백"
          description="매장 지도 서비스에 대한 피드백"
          canonical='https://next-map-tau.vercel.app'
          openGraph={{
            url: 'https://next-map-tau.vercel.app'
          }}
        />
        <Header />
        <main></main>
      </Fragment>
    </>
  )
};