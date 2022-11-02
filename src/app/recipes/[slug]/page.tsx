import Image from "next/image";
import type { InferGenerateStaticParamsType } from "@type/InferGenerateStaticParamsType";
import clsx from "clsx";
import { getRecipeBySlug } from "@src/helpers/getRecipeBySlug";
import { getRecipeParams } from "../../../helpers/getRecipeSlugs";

export async function generateStaticParams() {
  const params = await getRecipeParams();
  return params;
}

export default async function Recipe({
  params,
}: {
  params: InferGenerateStaticParamsType<typeof generateStaticParams>;
}) {
  const { slug } = params;
  const { data, contentHtml } = await getRecipeBySlug(slug);

  return (
    <main className="z-10 max-w-2xl p-10">
      <span className="sr-only">{data.title}</span>
      <div className="z-10 py-10">
        <h1 className="text-6xl font-extrabold text-blue-400">{data.title}</h1>
        <p className="pt-10 text-xl text-slate-900">{data.subtitle}</p>
      </div>

      <figure className="z-10 aspect-video w-full overflow-hidden rounded-xl ring-4 ring-purple-400">
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
    // <div className="relative flex justify-center">
    //   <BG />
    //   <main className="z-0">
    //     <div className="z-10 flex w-full flex-grow flex-row items-end justify-between py-10 text-8xl font-extrabold text-blue-400">
    //       <h1>{data.title}</h1>
    //       <p className="text-2xl text-slate-900">{data.subtitle}</p>
    //     </div>

    //     <figure className="z-10 aspect-video w-full overflow-hidden rounded-xl shadow-inner ring-8 ring-blue-400">
    //       <Image
    //         className="block w-full -translate-y-1/4 object-cover"
    //         alt={data.title}
    //         src={`/recipe-images/${data.image}`}
    //         width={3024 / 4}
    //         height={4032 / 4}
    //       />
    //     </figure>

    //     <div
    //       className={clsx(
    //         "prose prose-slate z-10 rounded-full p-10 lg:prose-xl",
    //         "prose-li:relative prose-li:translate-x-2 prose-li:marker:z-10 prose-li:marker:text-slate-900 prose-li:marker:before:-z-10",
    //         "prose-li:marker:before:w-10 prose-li:marker:before:rounded-full",
    //         "prose-li:marker:before:h-10 prose-li:marker:before:-translate-x-1",
    //         "prose-li:marker:before:content-{' '} prose-li:marker:before:absolute prose-li:marker:before:top-0 prose-li:marker:before:-left-8 prose-li:marker:before:bg-purple-400"
    //       )}
    //       dangerouslySetInnerHTML={{ __html: contentHtml }}
    //     />
    //   </main>
    // </div>
  );
}
