import { client } from "../../../libs/client";
import type { NextApiRequest, NextApiResponse } from "next";

export const getSearchBooks = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // 検索したいキーワードをqueryから取得
  const keyword = req.query.keyword;
  // 検索キーワードを設定した状態でmicroCMSにリクエストを送信。
  const response = await client.get({
    endpoint: "books",
    queries: {
      q: decodeURI(keyword as string),
      limit: 100,
    },
  });

  return res.status(200).json(response);
};

export default getSearchBooks;
