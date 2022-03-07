import Head from "next/head";
import Layout from "../components/Layout";

export default function Company() {
  return (
    <div>
      <Head>
        <title>自己紹介タイトル</title>
        <meta name="description" content="自己紹介概要" />
      </Head>
      <Layout title="about"></Layout>
    </div>
  );
}
