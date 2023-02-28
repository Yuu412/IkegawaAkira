import { Url } from "url";

export type News = {
  url: Url;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  publishedDate: string;
  revisedAt: string;
  title: string;
  body: string;
  cover: {
    url: string;
    width: string;
    height: string;
  };
};
