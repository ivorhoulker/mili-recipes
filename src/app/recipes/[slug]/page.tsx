import { Display } from "./Display";
import type { InferGenerateStaticParamsType } from "@type/InferGenerateStaticParamsType";
import client from "../../../../.tina/__generated__/client";
import { getRecipeBySlug } from "@src/helpers/getRecipeBySlug";
import { getRecipeParams } from "../../../helpers/getRecipeSlugs";
import { useTina } from "tinacms/dist/react";

export async function generateStaticParams() {
  const postsListData = await client.queries.recipesConnection();
  console.log({ postsListData });
  const output = postsListData?.data?.recipesConnection?.edges?.map(
    (recipe) => {
      console.log(recipe?.node);
      return {
        slug: recipe?.node?._sys.filename,
      };
    }
  );
  return output || [{ slug: "test" }];
}

export default async function Recipe({
  params,
}: {
  params: InferGenerateStaticParamsType<typeof generateStaticParams>;
}) {
  console.log({ params });
  const res = await client.queries.recipes({
    relativePath: `${params.slug}.md`,
  });

  // const { slug } = params;
  // const { data, contentHtml } = await getRecipeBySlug(slug);

  return (
    <main className="z-10 max-w-2xl p-2">
      <Display res={res} />
      {/* <span className="sr-only">{res.data.recipes.title}</span> */}
    </main>
  );
}
