"use client";

import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import clsx from "clsx";
import type { getRecipeBySlug } from "@src/helpers/getRecipeBySlug";
import { useTina } from "tinacms/dist/react";

interface Props {
  recipeData: Awaited<ReturnType<typeof getRecipeBySlug>>;
}

export const RecipeDisplay = ({ recipeData }: Props) => {
  const { data } = useTina({
    query: recipeData.query,
    variables: recipeData.variables,
    data: recipeData.data,
  });
  return (
    <>
      <div className="z-10 py-10">
        <h1 className="text-6xl font-extrabold text-blue-400">
          {data.recipes.title}
        </h1>
        <p className="pt-10 text-xl text-slate-900">{data.recipes.subtitle}</p>
      </div>

      <figure className="z-10 aspect-video w-full overflow-hidden rounded-xl bg-slate-300 ring-4 ring-purple-400">
        <Image
          className="block w-full -translate-y-1/4 object-cover"
          alt={data.recipes.title}
          src={`/recipe-images/${data.recipes.image}`}
          width={3024 / 4}
          height={4032 / 4}
        />
      </figure>
      <div className={clsx("prose prose-slate max-w-2xl pt-10")}>
        <TinaMarkdown content={data.recipes.body} />
      </div>
    </>
  );
};
