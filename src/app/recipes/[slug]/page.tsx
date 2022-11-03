import Image from "next/image";
import type { InferGenerateStaticParamsType } from "@type/InferGenerateStaticParamsType";
import clsx from "clsx";
import { getRecipeBySlug } from "@src/helpers/getRecipeBySlug";
import { getRecipeParams } from "../../../helpers/getRecipeSlugs";

export const revalidate = 10;
export async function generateStaticParams() {
  const params = await getRecipeParams();
  return params.map((x) => ({ slug: x.slug }));
}

export default async function Recipe({
  params,
}: {
  params: InferGenerateStaticParamsType<typeof generateStaticParams>;
}) {
  const { slug } = params;
  const { data, contentHtml } = await getRecipeBySlug(slug);

  return (
    <main className="z-10 max-w-2xl p-2">
      <span className="sr-only">{data.title}</span>
      <div className="z-10 py-10">
        <h1 className="text-6xl font-extrabold text-blue-400">{data.title}</h1>
        <p className="pt-10 text-xl text-slate-900">{data.subtitle}</p>
      </div>

      <figure className="z-10 aspect-video w-full overflow-hidden rounded-xl bg-slate-300 ring-4 ring-purple-400">
        <Image
          className="block w-full -translate-y-1/4 object-cover"
          alt={data.title}
          src={`/recipe-images/${data.image}`}
          width={3024 / 4}
          height={4032 / 4}
        />
      </figure>
      <div className={clsx("prose prose-slate max-w-2xl")}>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </main>
  );
}
