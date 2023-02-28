//SSG
import type { News } from "../../types/News";
import { eventClient } from "@/src/libs/client";
import Link from "next/link";
import Image from "next/image";
import PageTopLogo from "@/src/components/common/PageTopLogo";
import Seo from "@/src/components/Seo";

type Props = {
  article: News;
  events: Array<News>;
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await eventClient.get({ endpoint: "events", contentId: id });
  const dataNews = await eventClient.get({
    endpoint: "events",
    queries: { limit: 4 },
  });

  return {
    props: {
      article: data,
      events: dataNews.contents,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await eventClient.get({ endpoint: "events" });
  const paths = data.contents.map((content: News) => `/events/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export default function eventsId({ article, events }: Props) {
  const publishedDate =
    new Date(article.publishedAt).getFullYear() +
    "." +
    new Date(article.publishedAt)
      .toLocaleString("ja-JP-u-ca-japanese", {
        month: "2-digit",
        day: "2-digit",
      })
      .toString()
      .replace("/", ".");
  return (
    <>
      <Seo
        pageTitle={`${article.name}`}
        pageDescription={`${article.name}についてのお知らせをご覧いただけます。`}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <PageTopLogo />
      <main className="w-[90%] mx-auto container">
        <h1 className="text-naby mt-24 mb-2 font-bold md:text-2xl">
          {article.name}
        </h1>
        <div className="">
          <p className="my-2 text-xs text-pale_gray md:text-sm md:my-4">
            {publishedDate}
          </p>
          <div
            className="prose mt-8 mb-20"
            dangerouslySetInnerHTML={{ __html: `${article.body}` }}
          ></div>
          <>
            <Link
              href={article.url}
              className="w-2/3 px-4 md:w-[20vw] mx-auto md:mr-auto md:ml-0 bg-white border-2 border-naby rounded-full flex justify-around items-center"
            >
              <div className="py-3">
                <div className="snap-center flex-shrink-0 mx-4">
                  <p className="font-bold text-sm md:text-lg line-clamp-1">
                    詳細はこちら
                  </p>
                </div>
              </div>
              <>
                <Image
                  className={"w-[30px]"}
                  src="/assets/image/Home/arrow_right.svg"
                  alt="arrow_right"
                  width={30}
                  height={30}
                />
              </>
            </Link>
          </>
        </div>
      </main>
      <div className="inherit z-0 -ml-1 mb-6 md:mb-12 mt-16">
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
