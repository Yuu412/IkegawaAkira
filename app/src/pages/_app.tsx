import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import * as gtag from "src/libs/gtag";
import { GetServerSideProps } from "next";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  {
    /* Google Analytics */
  }
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setPageLoading(true);
    const handleComplete = () => setPageLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  // TODO 正式なローディングコンポーネントにする
  const loadingComponent = (
    <div className="fixed w-full h-full z-[999] overflow-hidden bg-white top-0 items-center flex">
      <div className="w-screen mx-auto">
        <Image
          className={"mx-auto w-12 duration-1000"}
          src="/assets/image/common/loading.gif"
          alt="loading"
          width={128}
          height={128}
        />
      </div>
    </div>
  );
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${gtag.GA_MEASUREMENT_ID}');
           `,
        }}
      />

      <Layout>
        <div>
          {pageLoading && loadingComponent}
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}
