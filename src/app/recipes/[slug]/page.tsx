"use client";

import Image from "next/image";
import type { InferGenerateStaticParamsType } from "@type/InferGenerateStaticParamsType";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../../.tina/__generated__/client";
import clsx from "clsx";
import { getRecipeBySlug } from "@src/helpers/getRecipeBySlug";
import { getRecipeParams } from "../../../helpers/getRecipeSlugs";
import { useTina } from "tinacms/dist/react";

export const revalidate = 10;
export async function generateStaticParams() {
  const postsListData = await client.queries.recipesConnection();
  const output = postsListData?.data?.recipesConnection?.edges?.map(
    (recipe) => ({
      slug: recipe?.node?._sys.filename,
    })
  );
  return output || [{ slug: "test" }];
}

export default async function Recipe({
  params,
}: {
  params: InferGenerateStaticParamsType<typeof generateStaticParams>;
}) {
  const res = await client.queries.recipes({
    relativePath: `${params.slug}.md`,
  });
  const { data } = useTina({
    query: res.query,
    variables: res.variables,
    data: res.data,
  });

  const { slug } = params;
  // const { data, contentHtml } = await getRecipeBySlug(slug);

  return (
    <main className="z-10 max-w-2xl p-2">
      <span className="sr-only">{data.recipe.title}</span>
      <div className="z-10 py-10">
        <h1 className="text-6xl font-extrabold text-blue-400">
          {data.recipe.title}
        </h1>
        <p className="pt-10 text-xl text-slate-900">{data.recipe.subtitle}</p>
      </div>

      <figure className="z-10 aspect-video w-full overflow-hidden rounded-xl bg-slate-300 ring-4 ring-purple-400">
        <Image
          className="block w-full -translate-y-1/4 object-cover"
          alt={data.recipe.title}
          src={`/recipe-images/${data.recipe.image}`}
          width={3024 / 4}
          height={4032 / 4}
        />
      </figure>
      <div className={clsx("prose prose-slate max-w-2xl")}>
        <TinaMarkdown content={data.recipe.body} />
      </div>
    </main>
  );
}
