import fs from "fs";
import { recipesDirectory } from "./recipeSchema";

export function getRecipeSlugs() {
  const fileNames = fs.readdirSync(recipesDirectory);
  const slugs = fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
  return slugs;
}
