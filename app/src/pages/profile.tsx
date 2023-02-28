import { client } from "../libs/client";

import type { Books } from "../types/Books";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "../components/common/SectionTitle";
import PageTopLogo from "../components/common/PageTopLogo";
import Seo from "../components/Seo";

type Props = {
  books: Array<Books>;
};

export default function Home({ books }: Props) {
  return (
    <>
      <Seo
        pageTitle={"ごあいさつ"}
        pageDescription={
          "池川明のプロフィール紹介ページです。「胎内記憶」領域の第一人者として、これまで数々の研究論文・書籍の執筆や、新聞・映画等のメディアへの出演を続けてきた池川明の経歴・想いをご覧ください。"
        }
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <PageTopLogo />
      <main className="overflow-x-hidden">
        {/*  Section: ファーストビュー  ===========================================================  */}
        <div className="w-screen container mx-auto">
          <div className="relative">
            <div className="absolute left-6 mt-12 z-40">
              <Image
                className={"w-[15px] lg:w-[20px]"}
                src="/assets/image/profile/profile-gidance.svg"
                alt="profile gidance"
                width={125}
                height={700}
                priority={true}
              />
            </div>
            <div className="md:flex md:items-start">
              <div className="md:w-2/5 lg:ml-10">
                <div className="w-full right-0 z-0">
                  <Image
                    src="/assets/image/profile/ikegawa_sp.png"
                    alt="profile image"
                    width={1000}
                    height={1200}
                    priority={true}
                  />
                </div>

                <div className="absolute right-0 -z-10 -mt-60">
                  <Image
                    className={"w-[150px] lg:w-[300px]"}
                    src="/assets/image/Home/dot_pale_orange.png"
                    alt="dot"
                    width={200}
                    height={300}
                    priority={true}
                  />
                </div>
              </div>
              <div className="lg:my-10 md:mx-28">
                <div className="text-naby hidden md:block md:m-5">
                  <p>産婦人科医</p>
                  <p>医師・医学博士</p>
                </div>
                <div className="text-naby mx-5 relative z-30 flex items-end justify-center">
                  <h1 className="text-[2rem] tracking-[.35em] font-mincho font-medium lg:text-[4rem]">
                    池川明
                  </h1>
                  <h2 className="text-xs tracking-[.3em] my-3 font-light lg:text-base">
                    AKIRA IKEGAWA
                  </h2>
                </div>
                <div className="hidden md:block lg:block md:m-5 text-naby">
                  <div className="flex items-end">
                    <h2 className="text-2xl md:mt-12 md:font-bold mr-6">
                      経歴
                    </h2>
                    <div className="w-4/5 border-t-2 h-4"></div>
                  </div>
                  <div className="flex justify-start my-4 gap-8">
                    <div className="flex flex-col gap-2">
                      <div>1999年</div>
                      <div>1999年</div>
                      <div>1999年</div>
                      <div>1999年</div>
                      <div>1999年</div>
                      <div>1999年</div>
                      <div>1999年</div>
                      <div>1999年</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div>帝京大学医学部卒業</div>
                      <div>〇〇大学大学院 〇〇過程修了</div>
                      <div>〇〇病院 〇〇科</div>
                      <div>〇〇病院 〇〇科</div>
                      <div>池川クリニック開業 院長</div>
                      <div>池川クリニック開業</div>
                      <div>池川クリニック</div>
                      <div>〇〇大学大学院 〇〇過程修了</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Section: NEWS  ===========================================================  */}
        <>
          <SectionTitle
            title="プロフィール"
            subtitle="PROFILE"
            complementaryColor={false}
          />
        </>

        <div className="w-5/6 mx-auto text-sm leading-7 md:w-3/5 md:text-lg md:leading-10">
          1954年生まれ。「胎内記憶」領域の第一人者として、これまで数々の研究論文・書籍の執筆や、新聞・映画等のメディアへの出演を続けてきた。2014年から上映されている「かみさまとのやくそく」では主演を務め、現在までの観客動員数は31万人にのぼる。1989年に横浜市に産婦人科
          池川クリニックを開設し、2016年までの28年間で約2700年の出産を扱った。現在では出産の扱いをやめ、胎内記憶を世界に広める活動に専念している。
        </div>

        {/*  Section: BIOGRAPHT  ===========================================================  */}
        <div className="md:hidden">
          <SectionTitle
            title="略歴"
            subtitle="BIOGRAPHT"
            complementaryColor={false}
          />
        </div>

        <div className="border border-orange rounded-3xl w-5/6 mx-auto pt-14 -mt-14 md:hidden">
          <div className="w-1/4 h-8 bg-white mx-auto -mt-[75px]"></div>
          <div className="flex justify-evenly text-naby text-sm my-12">
            <div className="flex flex-col gap-2">
              <div>1999年</div>
              <div>1999年</div>
              <div>1999年</div>
              <div>1999年</div>
              <div>1999年</div>
              <div>1999年</div>
              <div>1999年</div>
              <div>1999年</div>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div>帝京大学医学部卒業</div>
              <div>〇〇大学大学院 〇〇過程修了</div>
              <div>〇〇病院 〇〇科</div>
              <div>〇〇病院 〇〇科</div>
              <div>池川クリニック開業 院長</div>
              <div>池川クリニック開業</div>
              <div>池川クリニック</div>
              <div>〇〇大学大学院 〇〇過程修了</div>
            </div>
          </div>
        </div>

        {/*  Section: BIOGRAPHT  ===========================================================  */}
        <>
          <SectionTitle
            title="池川明の想い"
            subtitle="BIOGRAPHT"
            complementaryColor={false}
          />
        </>

        <div className="w-5/6 mx-auto text-sm leading-7 flex flex-col gap-4 md:w-3/5 md:text-lg md:leading-10">
          <p>
            もともと池川クリニックのお産の原点は、妊娠中のお母さんの気持ちが赤ちゃんのその後の発育に影響する、お産を安産にしたい、育児を楽にしたい、しかも育ったお子さんが立派な大人になるようにしたい、というものでした。
          </p>
          <p>
            現在ではエピジェネティクスとして語られるようになった、こどもの発育・発達は母親の胎内の環境に大きく影響する、という理論です。そのために心の安定を図るには胎内記憶というアイディアが効果があるため、これを広めようとして、その結果として胎内記憶教育協会の設立に結びつきます。
          </p>
          <p>
            赤ちゃんを迎える出産にあたっては、お母さんの不安、恐怖などのネガティブな状況が活性酸素を作り出し、遺伝子の振る舞いを乱れさせる、陣痛が弱くなる、難産になりやすい、というところから、不安の解消に努めました。また食事や栄養の偏りが同様の状況を引き出すことがあり、さらには胎盤の状況に葉酸、ビタミンＢ群が必要であるばかりではなく微量なミネラルが必須であるために、食事の内容に注意する、サプリメントを使う、などの方法を試みました。
          </p>
          <p>
            ところが活性酸素の予防、栄養状態、をそれぞれ別にやっても、なかなか効果が出にくいという現実もあります。これらを全部一括してケアする必要が感じられたのです。そこで、胎内記憶教育協会では、胎内記憶を伝えることにより妊娠時の不安、恐怖の解消を図るとともに、活性酸素の除去を効率的に行えるサプリメントを探していました。{" "}
          </p>
        </div>

        {/*  Section: BIOGRAPHT  ===========================================================  */}
        <>
          <SectionTitle
            title="池川明の著書"
            subtitle="BOOKS"
            complementaryColor={false}
          />
        </>

        <div className="w-11/12 mx-auto my-10 container">
          <div className="my-5 mx-5/6 text-sm leading-6 mx-auto md:w-3/5 md:text-lg md:leading-10">
            上記の「池川明の想い」の内容は、池川明の想いの一部に過ぎません。本ページだけでは語ることのできない想い・考えについては、著書をご一読ください。
          </div>
          <div className="flex snap-x snap-mandatory overflow-scroll">
            {books.map((book) => {
              console.log();
              return (
                <div className="w-2/5 snap-center flex-shrink-0 mr-5 lg:w-1/6">
                  <Link href={`books/${book.id}`}>
                    <div className="relative rounded-lg mx-auto my-2">
                      <Image
                        src={book.cover.url}
                        alt="表紙画像"
                        width={500}
                        height={500}
                      />

                      <p className="text-xs my-2 line-clamp-2 md:text-base">
                        {book.title}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex align-baseline justify-end my-2">
            <div className="text-orange tracking-widest text-sm mx-2">
              VIEW MORE
            </div>
            <>
              <Image
                className={"w-16 lg:w-24"}
                src="/assets/image/Home/arrow-bellow-right.svg"
                alt="→"
                width={400}
                height={50}
              />
            </>
          </div>
        </div>

        <div className="inherit z-0  -ml-1 mt-20">
          <Image
            className={"w-screen"}
            src="/assets/image/common/contact-upper.svg"
            alt="background-upper"
            width={1275}
            height={261}
          />
        </div>
        <div className="inherit z-20 bg-orange text-white text-center -mt-4 pb-6 lg:-mt-28">
          <h2 className="font-bold text-xl md:text-4xl">
            お気軽にお問い合わせください。
          </h2>
          <p className="text-sm my-8 md:text-lg md:my-12">
            講演会について、診療について、池川明について など
            <br />
            どんなことでも構わないので、
            <br />
            お気軽にお問い合わせください！
          </p>
          <Link href="/contacts/form">
            <div className="relative bg-white rounded-full w-10/12 flex mx-auto py-3 justify-center mt-5 items-center md:w-1/3 md:py-4">
              <div className="text-naby text-lg font-bold">
                お問い合わせはこちら！
              </div>

              <Image
                className={"w-10 absolute right-2 "}
                src="/assets/image/Home/arrow-right-orange.png"
                alt=">"
                width={100}
                height={100}
              />
            </div>
          </Link>
        </div>
        <div className="inherit z-0 -mt-2 -ml-1">
          <Image
            className={"w-screen"}
            src="/assets/image/common/contact-under.svg"
            alt="background-upper"
            width={1275}
            height={176}
          />
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const dataBooks = await client.get({ endpoint: "books" });

  console.log(dataBooks.contents[0].cover.width);

  return {
    props: {
      books: dataBooks.contents,
    },
  };
};
