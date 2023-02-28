import { client } from "../../../libs/client";
import type { NextApiRequest, NextApiResponse } from "next";

export const getSearchNews = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // 検索したいキーワードをqueryから取得
  const keyword = req.query.keyword;
  // 検索キーワードを設定した状態でmicroCMSにリクエストを送信。
  const response = await client.get({
    endpoint: "news",
    queries: {
      q: decodeURI(keyword as string),
    },
  });

  return res.status(200).json(response);
};

export default getSearchNews;
