import { recipeSchema, recipesDirectory } from "./recipeSchema";

import { getMarkdown } from "./getMarkdown";

export async function getRecipeBySlug(slug: string) {
  return getMarkdown(slug, recipesDirectory, recipeSchema);
}
