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
                  src="/assets/image/home/dot_pale_orange.png"
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
                  <h2 className="text-2xl md:mt-12 md:font-bold mr-6">経歴</h2>
                  <div className="w-4/5 border-t-2 h-4"></div>
                </div>
                <div className="flex justify-start my-4 gap-8">
                  <div className="flex flex-col gap-2">
                    <div>1954年</div>
                    <div>1979年</div>
                    <div>1986年</div>
                    <div>1986年</div>
                    <div>1987年</div>
                    <div>1989年</div>
                    <div>1998年</div>
                    <div>2005年</div>
                    <div>2011年</div>
                    <div>2011年</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>東京都生まれ</div>
                    <div>帝京大学医学部卒業</div>
                    <div>帝京大学大学院修了　医学博士</div>
                    <div>帝京大学医学部産婦人科医局長</div>
                    <div>上尾中央総合病院産科婦人科部長</div>
                    <div>池川クリニック開設</div>
                    <div>一般社団法人金沢区三師会理事</div>
                    <div>神奈川県医師会理事</div>
                    <div>横浜市金沢区医師会会長</div>
                    <div>横浜市医師会理事</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
