import Image from "next/image";
import { getPageBySlug } from "@src/helpers/getPageBySlug";

export default async function Home() {
  const { data, contentHtml } = await getPageBySlug("index");
  return (
    <>
      <main className="z-10 max-w-2xl  p-2">
        <span className="sr-only">{data.title}</span>
        <div className="z-10 flex w-full flex-grow flex-row items-end justify-between py-10 text-blue-400">
          <figure className="z-10 w-3/4 pt-10">
            <Image
              className="block w-full object-cover"
              alt={data.title}
              src={"/title.png"}
              width={1400}
              height={270}
            />
          </figure>
          <p className="text-lg text-slate-600">李婉晶——著</p>
        </div>

        <div className="prose prose-slate max-w-2xl">
          <hr className="mb-12 mt-2 border-0 border-b-4 border-purple-400 opacity-50" />
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </main>
    </>
  );
}
