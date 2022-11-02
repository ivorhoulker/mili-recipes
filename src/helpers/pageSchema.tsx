import { join } from "path";
import type { recipeSchema } from "./recipeSchema";
import { z } from "zod";

export const pageDirectory = join(process.cwd(), "src", "content", "pages");
export const pageSchema = z.object({
  data: z.object({
    title: z.string(),
  }),
  content: z.string(),
});
export type PageData = z.infer<typeof recipeSchema>;
