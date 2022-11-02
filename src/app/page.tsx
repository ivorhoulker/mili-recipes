import { getPageBySlug } from "@src/helpers/getPageBySlug";

export default async function Home() {
  const { data, contentHtml } = await getPageBySlug("index");

  return (
    <div className="flex justify-center">
      <main className="prose p-10 lg:prose-xl">
        <h1>{data.title}</h1>

        <div>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </main>
    </div>
  );
}
