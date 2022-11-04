"use client";

import type { FC } from "react";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { getPageBySlug } from "@src/helpers/getPageBySlug";
import { useTina } from "tinacms/dist/react";
interface Props {
  pageData: Awaited<ReturnType<typeof getPageBySlug>>;
}
const PageDisplay: FC<Props> = ({ pageData }) => {
  const { data } = useTina({
    query: pageData.query,
    variables: pageData.variables,
    data: pageData.data,
  });
  return (
    <>
      <span className="sr-only">{data.pages.title}</span>
      <div className="z-10 flex w-full flex-grow flex-row items-end justify-between py-10 text-blue-400">
        <figure className="z-10 w-3/4 pt-10">
          <Image
            className="block w-full object-cover"
            alt={data.pages.title}
            src={"/title.png"}
            width={1400}
            height={270}
          />
        </figure>
        <p className="text-lg text-slate-600">{data.pages.subtitle}</p>
      </div>

      <div className="prose prose-slate max-w-2xl">
        <hr className="mb-12 mt-2 border-0 border-b-4 border-purple-400 opacity-50" />
        <TinaMarkdown content={data.pages.body} />
      </div>
    </>
  );
};

export default PageDisplay;
