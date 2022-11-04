import client from "@tina/__generated__/client";

export async function getPageSlugs() {
  const postsListData = await client.queries.recipesConnection();
  const slugs = postsListData?.data?.recipesConnection?.edges?.map(
    (recipe) => recipe?.node?._sys.filename
  );
  return slugs;
}
