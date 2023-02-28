import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export default function ({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="font-basic">{children}</div>
      <Footer />
    </>
  );
}
