import client from "@tina/__generated__/client";

export async function getRecipeBySlug(slug: string) {
  const relativePath = `${slug}.md`;
  const recipeData = await client.queries.recipes({ relativePath });
  return recipeData;
}
