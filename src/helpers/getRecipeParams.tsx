import client from "@tina/__generated__/client";

export async function getRecipeParams() {
  const recipeData = await client.queries.recipesConnection();
  const params = recipeData?.data?.recipesConnection?.edges?.map((recipe) => ({
    slug: recipe?.node?._sys.filename,
    ...recipe?.node,
  }));
  return params?.sort((a, b) => (a.priority || 0) - (b.priority || 0));
}
