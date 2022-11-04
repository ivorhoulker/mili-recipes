import "./globals.css";

import BG from "../components/BG";
import LinksMenu from "./app.module.menu";
import { getPageBySlug } from "../helpers/getPageBySlug";
import { getRecipeParams } from "../helpers/getRecipeParams";

export const revalidate = 600;
export const dynamic = "error";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await getPageBySlug("index");
  const recipeParams = await getRecipeParams();

  return (
    <html lang="zh-Hant" className="min-h-full min-w-full">
      <head>
        <title>{data.pages.title}</title>
        <meta name="description" content={data.pages.title} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="z-10 min-h-full min-w-full">
        <BG />
        <aside className="max-h-view fixed top-0 z-10 flex h-full w-1/5 flex-col items-end justify-center pr-8 text-right lg:w-1/3 lg:pr-20">
          <LinksMenu recipeParams={recipeParams} />
        </aside>
        <div className="fixed right-0 top-0 h-full w-4/5 overflow-y-auto lg:w-2/3">
          {children}
        </div>
      </body>
    </html>
  );
}
