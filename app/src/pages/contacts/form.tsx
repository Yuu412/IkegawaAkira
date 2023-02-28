import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import PageTitle from "../../components/common/PageTitle";
import FormInput from "@/src/components/common/Form";
import PageTopLogo from "@/src/components/common/PageTopLogo";
import Seo from "@/src/components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        pageTitle={"お問い合わせ"}
        pageDescription={
          "こちらのページにて池川明へのお問い合わせをいただけます。"
        }
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <PageTopLogo />
      <div className="w-full h-screen fixed -z-20 bg-background top-0"></div>
      <main className="relative z-10 overflow-x-hidden mb-32 container mx-auto md:bg-white md:flex md:mt-10">
        <div>
          <div className="md:w-5/6 md:mx-auto">
            <PageTitle title="CONTACT" subtitle="お問い合わせ" />
          </div>
          <div className="w-5/6 mx-auto">
            <p className="-mt-8 text-sm text-gray leading-6">
              講演会・池川クリニックの診療・その他のご質問・ご相談は、こちらのフォームよりお送りください。
              <br />
              メールにてご連絡させていただきます。
            </p>
            <div className="border border-orange rounded-md py-2 px-3 my-8">
              <p className="text-orange font-bold tracking-widest text-sm my-1 mx-auto">
                よくあるお問い合わせ
              </p>
              <ul className="text-[0.8rem] my-2 list-disc w-5/6 mx-auto">
                <li className="my-1">○○なシーンでの講演を依頼できるか？</li>
                <li className="my-1">過去にどんな講演をしたか知りたい</li>
                <li className="my-1">講演会・診療の料金を知りたい</li>
                <li className="my-1">メルマガの内容を知りたい</li>
                <li className="my-1">〇〇に悩む方へのおすすめ書籍を知りたい</li>
              </ul>
            </div>
          </div>
        </div>

        {/*  Section: フォーム  ===========================================================  */}
        <form
          method="post"
          action="https://hyperform.jp/api/qON2lL5W"
          className="bg-white rounded-md w-5/6 py-5 mx-auto md:w-2/3"
          target="_blank"
        >
          <h2 className="text-center font-bold my-4 md:text-white md:my-4">
            お問い合わせフォーム
          </h2>
          <div className="w-[90%] mx-auto my-8 md:w-3/5 md:my-10">
            <div className="flex items-center my-2">
              <div className="bg-orange rounded-full mr-1 md:mr-3 px-3 py-[2px] text-xs md:text-sm text-white">
                必須
              </div>
              <div className="text-sm font-bold text-gray">氏名</div>
            </div>
            <div className="flex my-3">
              <div className="flex flex-col">
                <label className="text-xs md:text-sm text-pale_gray my-1">
                  姓
                </label>
                <input
                  type="text"
                  name="姓"
                  className="bg-pale_yellow w-11/12 h-8 px-2 text-sm md:h-10 md:px-4"
                  placeholder="池川"
                  required
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="text-xs md:text-sm text-pale_gray my-1">
                  名
                </label>
                <input
                  type="text"
                  name="名"
                  className="bg-pale_yellow w-11/12 h-8 px-2 text-sm md:h-10 md:px-4"
                  placeholder="明"
                  required
                ></input>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto my-8 md:w-3/5 md:my-10">
            <div className="flex items-center my-2">
              <div className="bg-orange rounded-full mr-1 md:mr-3 px-3 py-[2px] text-xs md:text-sm text-white">
                必須
              </div>
              <div className="text-sm font-bold text-gray">
                氏名（フリガナ）
              </div>
            </div>
            <div className="flex my-3">
              <div className="flex flex-col">
                <label className="text-xs md:text-sm text-pale_gray my-1">
                  セイ
                </label>
                <input
                  type="text"
                  name="セイ"
                  className="bg-pale_yellow w-11/12 h-8 px-2 text-sm md:h-10 md:px-4"
                  placeholder="イケガワ"
                  required
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="text-xs md:text-sm text-pale_gray my-1">
                  メイ
                </label>
                <input
                  type="text"
                  name="メイ"
                  className="bg-pale_yellow w-11/12 h-8 px-2 text-sm md:h-10 md:px-4"
                  placeholder="アキラ"
                  required
                ></input>
              </div>
            </div>
          </div>
          <>
            <FormInput
              label="メールアドレス"
              required={true}
              type="email"
              name="email"
              placeholder="例：akira-ikegawa@ikegawa.co.jp"
            />
          </>
          <>
            <FormInput
              label="電話番号"
              required={true}
              type="tel"
              name="電話番号"
              placeholder="例：08012345678"
            />
          </>
          <>
            <FormInput
              label="会社名・組織名"
              required={false}
              type="text"
              name="会社名・組織名"
              placeholder=""
            />
          </>
          <>
            <FormInput
              label="部署"
              required={false}
              type="text"
              name="部署"
              placeholder=""
            />
          </>
          <>
            <FormInput
              label="役職"
              required={false}
              type="text"
              name="役職"
              placeholder=""
            />
          </>
          <>
            <FormInput
              label="お問い合わせのタイトル"
              required={true}
              type="text"
              name="お問い合わせのタイトル"
              placeholder="例：講演会の料金について"
            />
          </>
          <div className="w-[90%] mx-auto my-8 md:w-3/5 md:my-10">
            <div className="flex items-center my-4">
              <div className="bg-orange rounded-full mr-1 md:mr-3 px-3 py-[2px] text-xs md:text-sm text-white">
                必須
              </div>

              <div className="text-sm font-bold text-gray">
                お問い合わせ内容
              </div>
            </div>

            <textarea
              name="お問い合わせ内容"
              className="bg-pale_yellow w-full px-2 h-52 text-sm py-4 md:px-4"
              placeholder="例：〇〇を目的とした社内研修にて講演会を実施いただく場合、料金はいくらほどになりますでしょうか。時間は２時間、人数は30人~50人で、場所は東京都23区内を想定しております。"
              required
            ></textarea>
          </div>

          <div className="w-full text-center md:my-4">
            <button
              type="submit"
              className="bg-orange rounded-md px-5 py-1 text-white md:px-16 md:py-2"
            >
              送信する
            </button>
          </div>
        </form>
      </main>
      <div className="inherit z-0 -ml-1 mb-3 md:mb-12">
        <Image
          className={"w-screen"}
          src="/assets/image/common/footer-upper.svg"
          alt="background-upper"
          width={390}
          height={53}
        />
      </div>
    </>
  );
}
