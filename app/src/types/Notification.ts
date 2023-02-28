export type Notification = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  cover: {
    url: string;
    width: string;
    height: string;
  };
};
