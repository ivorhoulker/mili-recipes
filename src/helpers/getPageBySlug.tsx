import { pageDirectory, pageSchema } from "./pageSchema";

import { getMarkdown } from "./getMarkdown";

export async function getPageBySlug(slug: string) {
  return getMarkdown(slug, pageDirectory, pageSchema);
}
