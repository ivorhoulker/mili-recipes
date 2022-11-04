import client from "@tina/__generated__/client";

export async function getPageBySlug(slug: string) {
  const relativePath = `${slug}.md`;
  const pageData = await client.queries.pages({ relativePath });
  return pageData;
}
