import fs from "fs";
import { getRecipeBySlug } from "./getRecipeBySlug";
import { recipesDirectory } from "./recipeSchema";

export function getRecipeSlugs() {
  const fileNames = fs.readdirSync(recipesDirectory);
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return slugs;
}
export type RecipeParams = {
  title: string;
  subtitle: string;
  image: string;
  priority: number;
  slug: string;
}[];
export async function getRecipeParams() {
  const slugs = getRecipeSlugs();
  const params = await Promise.all(
    slugs.map(async (slug) => {
      const { data } = await getRecipeBySlug(slug);
      return {
        slug: slug,
        ...data,
      };
    })
  );
  return params;
}
