import { join } from "path";
import { z } from "zod";

export const recipeSchema = z.object({
  data: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    priority: z.number(),
  }),
  content: z.string(),
});
export type RecipeData = z.infer<typeof recipeSchema>;

export const recipesDirectory = join(
  process.cwd(),
  "src",
  "content",
  "recipes"
);
