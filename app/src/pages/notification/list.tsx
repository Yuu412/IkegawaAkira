import { useEffect, useState } from "react";
import axios from "axios";
import { client } from "@/src/libs/client";

import type { Notification } from "@/src/types/Notification";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import PageTitle from "../../components/common/PageTitle";
import PageTopLogo from "@/src/components/common/PageTopLogo";
import Seo from "@/src/components/Seo";
import { useRouter } from "next/router";
import Loading from "@/src/components/common/Loading";

export default function Home() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [notifications, setBooks] = useState<Array<Notification>>([]);
  const [composing, setComposition] = useState(false);
  const [loading, setLoading] = useState(true);

  const startComposition = () => setComposition(true);
  const endComposition = () => setComposition(false);

  const onKeydown = (key: string) => {
    switch (key) {
      case "Enter":
        if (!composing) searchNotifications();
        break;
      default:
        break;
    }
  };

  const searchNotifications = async () => {
    setLoading(true);
    // 検索APIにリクエストを送信
    const res = await axios.get("/api/notifications/search", {
      params: {
        keyword,
      },
    });

    // 検索結果をセット
    setBooks(res.data.contents);
    setLoading(false);
  };

  useEffect(() => {
    searchNotifications();
  }, []);

  return (
    <>
      <Seo
        pageTitle={"お知らせ一覧"}
        pageDescription={"池川明からのお知らせの一覧ページです。"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <PageTopLogo />
      <main className="overflow-x-hidden container mx-auto">
        <>
          <PageTitle title="NOTIFICATION" subtitle="お知らせ" />
        </>
        <div className="w-5/6 my-5 mx-auto border border-naby py-2 rounded-full flex md:w-2/5 md:ml-0">
          <>
            <Image
              className={"w-[25px] lg:w-[35px] mx-3"}
              src="/assets/image/icon/common/loupe_naby.svg"
              alt="loupe"
              width={23}
              height={22}
            />
          </>
          <input
            value={keyword}
            placeholder="キーワードを入力してください"
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => onKeydown(e.key)}
            onCompositionStart={startComposition}
            onCompositionEnd={endComposition}
            className="w-5/6 border-none outline-none"
          />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="w-11/12 mt-16 mb-48 mx-auto grid grid-cols-2 md:grid-cols-4 md:w-full md:mb-64">
            {notifications.map((notification) => {
              const publishedDate =
                new Date(notification.publishedAt).getFullYear() +
                "." +
                new Date(notification.publishedAt)
                  .toLocaleString("ja-JP-u-ca-japanese", {
                    month: "2-digit",
                    day: "2-digit",
                  })
                  .toString()
                  .replace("/", ".");

              return (
                <div className="w-[95%] my-3 md:my-9">
                  <Link href={`./${notification.id}`}>
                    <div className="bg-pale_orange">
                      <img
                        src={notification.cover.url}
                        className="mx-auto h-[100px] object-contain md:h-44"
                        alt="表紙画像"
                      />
                    </div>
                    <p className="text-xs text-pale_gray my-2 md:text-sm">
                      {publishedDate}
                    </p>
                    <p className="text-sm text-gray line-clamp-2 md:text-base">
                      {notification.title}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
        ;
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
