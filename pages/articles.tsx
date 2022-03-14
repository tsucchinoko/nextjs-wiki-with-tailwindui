import Image from "next/image";
import Link from "next/link";
import { client } from "../lib/client";
import type { Article } from "../types/article";
import Layout from "../components/Layout";

type Props = {
  articles: Array<Article>;
};

export default function About({ articles }: Props) {
  return (
    <div>
      <Layout title="記事一覧"></Layout>
      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900 py-4">
              {"記事一覧"}
            </h1>
            {articles.map((article) => (
              <div
                className="rounded overflow-hidden shadow-lg"
                key={article.id}
              >
                <Image
                  className="w-full"
                  src={article.eye_catch.url}
                  alt="記事サムネイル"
                  width={300}
                  height={300}
                />
                <div className="px-6 py-4">
                  <Link href={`/articles/${article.id}`} passHref>
                    <a>{article.title}</a>
                  </Link>
                </div>
                <div className="px-4">
                  {article.tag && (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{article.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "articles" });

  return {
    props: {
      articles: data.contents,
    },
  };
};
