//SSG
import type { News } from "../../types/News";
import { client } from "@/src/libs/client";
import Link from "next/link";
import Image from "next/image";
import PageTopLogo from "@/src/components/common/PageTopLogo";
import Seo from "@/src/components/Seo";

type Props = {
  article: News;
  news: Array<News>;
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });
  const dataNews = await client.get({
    endpoint: "news",
    queries: { limit: 4 },
  });

  return {
    props: {
      article: data,
      news: dataNews.contents,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });
  const paths = data.contents.map((content: News) => `/news/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export default function newsId({ article, news }: Props) {
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
        pageTitle={`${article.title}`}
        pageDescription={`${article.title}についてのお知らせをご覧いただけます。`}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <PageTopLogo />
      <main className="w-[90%] mx-auto container">
        <h1 className="text-naby mt-24 mb-2 font-bold lg:w-2/3 md:text-2xl">
          {article.title}
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div className="md:w-2/3">
            <p className="my-2 text-xs text-pale_gray md:text-sm md:my-4">
              {publishedDate}
            </p>
            <div className="max-w-full">
              <img
                src={article.cover.url}
                className="object-contain"
                alt="表紙画像"
              />
            </div>
            <div
              className="prose mt-8 mb-40"
              dangerouslySetInnerHTML={{ __html: `${article.body}` }}
            ></div>
          </div>
          <div className="md:w-1/3 md:mx-8">
            <h2 className="text-naby font-bold w-11/12 mx-auto text-xl my-5">
              NEW ARTICLES
            </h2>
            <div className="flex flex-col">
              {news.map((n) => {
                const publishedDate =
                  new Date(n.publishedAt).getFullYear() +
                  "." +
                  new Date(n.publishedAt)
                    .toLocaleString("ja-JP-u-ca-japanese", {
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .toString()
                    .replace("/", ".");

                return (
                  <div className="my-4 w-5/6 snap-center flex-shrink-0 mx-4 md:w-3/5">
                    <Link href={`${n.id}`}>
                      <>
                        <div className="w-80 h-44 relative mx-auto my-2 md:w-full md:h-auto">
                          <img
                            src={n.cover.url}
                            className="h-full mx-auto rounded-lg"
                            alt="表紙画像"
                          />
                        </div>
                        <p className="text-pale_gray text-xs md:text-sm">
                          {publishedDate}
                        </p>

                        <div className="my-2 line-clamp-2">{n.title}</div>
                      </>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
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
