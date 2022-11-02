import { Schema } from "zod";
import fs from "fs";
import html from "remark-html";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";

export async function getMarkdown(
  slug: string,
  directory: string,
  schema: Schema
) {
  const fullPath = join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(fileContents);
  const { content, data } = schema.parse(parsed);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return { content, contentHtml, data };
}
