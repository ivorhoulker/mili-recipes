import client from "@tina/__generated__/client";

export async function getRecipeSlugs() {
  const recipeData = await client.queries.recipesConnection();
  const slugs = recipeData?.data?.recipesConnection?.edges?.map(
    (recipe) => recipe?.node?._sys.filename
  );
  return slugs;
}
