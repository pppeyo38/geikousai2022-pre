import type { NextPage } from "next";
import Head from "next/head";

import { TopLayout } from "@/components/templates/TopLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>芸工祭2022</title>
      </Head>

      <TopLayout />
    </>
  );
};

export default Home;
