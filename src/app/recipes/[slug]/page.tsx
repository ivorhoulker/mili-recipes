import Image from "next/image";
import { getRecipeBySlug } from "@src/helpers/getRecipeBySlug";

export async function generateStaticParams() {
  return [{ slug: "test" }].map((post) => ({
    slug: post.slug,
  }));
}

type GSP<T extends () => Promise<unknown[]>> = Awaited<ReturnType<T>>[number];

export default async function Recipe({
  params,
}: {
  params: GSP<typeof generateStaticParams>;
}) {
  const { slug } = params;
  const { data, contentHtml } = await getRecipeBySlug(slug);

  return (
    <div className="flex justify-center">
      <main className="prose p-10 lg:prose-xl">
        <h1>{data.title}</h1>
        <figure className="aspect-video w-full overflow-hidden rounded-xl">
          <Image
            className="block -translate-y-1/4 object-cover"
            alt={data.title}
            src={`/recipe-images/${data.image}`}
            width={3024 / 4}
            height={4032 / 4}
          />
        </figure>
        <div>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </main>
    </div>
  );
}
