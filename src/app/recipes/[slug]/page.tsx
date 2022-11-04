import type { InferGenerateStaticParamsType } from "@type/InferGenerateStaticParamsType";
import { RecipeDisplay } from "./page.module.display";
import client from "@tina/__generated__/client";
import { getRecipeBySlug } from "@src/helpers/getRecipeBySlug";

export async function generateStaticParams() {
  const postsListData = await client.queries.recipesConnection();
  const output = postsListData?.data?.recipesConnection?.edges?.map(
    (recipe) => {
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
  const recipeData = await getRecipeBySlug(params.slug || "test");

  return (
    <main className="z-10 max-w-2xl p-2">
      <RecipeDisplay recipeData={recipeData} />
    </main>
  );
}
