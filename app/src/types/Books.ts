export type Books = {
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
  url: string;
  tag: string;
};
