import { client } from "../libs/client";

import type { Books } from "../types/Books";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../components/common/SectionTitle";
import PageTopLogo from "../components/common/PageTopLogo";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        pageTitle={"ページが見つかりませんでした。"}
        pageDescription={
          "ご指定のページにアクセスできませんでした。アドレスが変更されているか、ページが削除されている可能性があります。お手数ですがホームに戻って、ご希望のページをお探しください。"
        }
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <PageTopLogo />

      <main>
        {/*  Section: NEWS  ===========================================================  */}
        <>
          <SectionTitle
            title="ページが見つかりません。"
            subtitle="NOT FOUND"
            complementaryColor={false}
          />
        </>

        <div className="text-center leading-7 lg:-mt-10 w-11/12 mx-auto">
          <p>誠に申し訳ございません。</p>
          <p>ご指定のページにアクセスできませんでした。</p>
          <p>
            アドレスが変更されているか、ページが削除されている可能性があります。
          </p>
          <p>お手数ですが、以下のページからご希望のページをお探しください。</p>
        </div>
        <div className="mb-40 md:mb-80 mx-auto mt-10">
          <Link href="/">
            <div className="bg-naby rounded-full w-3/5 md:w-1/4 flex mx-auto py-2 md:py-3 justify-center mt-5">
              <>
                <Image
                  className={"w-[25px] mr-3"}
                  src="/assets/image/icon/common/send.svg"
                  alt="arrow_right"
                  width={23}
                  height={22}
                />
              </>
              <div className="text-white text-lg">ホームに戻る</div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
