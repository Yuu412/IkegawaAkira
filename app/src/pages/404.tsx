import { client } from "../libs/client";

import type { Books } from "../types/Books";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "../components/common/SectionTitle";
import PageTopLogo from "../components/common/PageTopLogo";
import Seo from "../components/Seo";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/",
      permanent: true,
    },
  };
};

export default getStaticProps;
