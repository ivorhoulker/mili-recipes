import fs from "fs";
import { pageDirectory } from "./pageSchema";

export function getPageSlugs() {
  const fileNames = fs.readdirSync(pageDirectory);
  const slugs = fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
  return slugs;
}
