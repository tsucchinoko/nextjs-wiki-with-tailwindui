import { GetServerSideProps } from "next";
import Image from "next/image";
import type { Article } from "../../types/article";
import { client } from "../../lib/client";
import Layout from "../../components/Layout";

type Props = {
  article: Article;
};

export default function Article({ article }: Props) {
  return (
    <div>
      <Layout title="記事詳細"></Layout>
      <div className="bg-gray-50">
        <div className="px-10 py-6 mx-auto">
          <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
            <Image
              className="object-cover w-full shadow-sm h-full"
              alt="記事詳細サムネイル"
              src={article.eye_catch.url}
              width={500}
              height={500}
            />
            <div className="mt-2">
              <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-500">
                {article.title}
              </div>
            </div>
            {article.tag && (
              <div className="flex items-center justify-start mt-4 mb-4">
                <div className="px-2 py-1 font-bold bg-blue-500 text-white rounded-lg">
                  #{article.tag}
                </div>
              </div>
            )}
            <div className="mt-2">
              <div className="text-2xl text-gray-700 mt-4 rounded ">
                {article.body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: "articles",
    contentId: idExceptArray,
  });

  return {
    props: {
      article: data,
    },
  };
};
