import Image from "next/image";
import PageDisplay from "@src/app/app.module.display";
import { getPageBySlug } from "@src/helpers/getPageBySlug";

export default async function Home() {
  const indexData = await getPageBySlug("index");
  return (
    <>
      <main className="z-10 max-w-2xl  p-2">
        <PageDisplay pageData={indexData}></PageDisplay>
      </main>
    </>
  );
}
