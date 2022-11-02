import { pageDirectory, pageSchema } from "./pageSchema";

import fs from "fs";
import html from "remark-html";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";

export async function getPageBySlug(slug: string) {
  const fullPath = join(pageDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(fileContents);
  const { content, data } = pageSchema.parse(parsed);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return { content, contentHtml, data };
}
