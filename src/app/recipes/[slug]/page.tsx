import { getPostBySlug } from "@content/generate";

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
  const test = getPostBySlug(slug);
  return (
    <div>
      <main>
        <div>{JSON.stringify(test, null, 2)}</div>
      </main>
    </div>
  );
}
