import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "src", "content", "recipes");

export function getPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  const slugs = fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ""),
  }));
  return slugs;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // const items = {};

  // Ensure only the minimal needed data is exposed

  const t = fields.reduce((items, field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
    return items;
  }, {} as Record<string, string>);

  return { data, content };
}

// export function getAllPosts(fields: string[] = []) {
//   const slugs = getPostSlugs();
//   const posts = slugs.map((slug) => getPostBySlug(slug, fields));
//   // sort posts by date in descending order
//   // .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
//   return posts;
// }
