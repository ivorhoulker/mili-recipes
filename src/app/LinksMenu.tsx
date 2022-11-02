"use client";

import Link from "../components/Link";
import type { RecipeParams } from "../helpers/getRecipeSlugs";
import { usePathname } from "next/navigation";

const LinksMenu = ({ recipeParams }: { recipeParams: RecipeParams }) => {
  const path = usePathname();
  return (
    <>
      <div className="flex flex-col gap-2">
        <div>
          <Link href={`/`} active={path === "/"}>
            Home
          </Link>
        </div>
        {recipeParams.map((params) => {
          return (
            <div key={params.slug}>
              <Link
                active={path === `/recipes/${params.slug}`}
                href={`/recipes/${params.slug}`}
              >
                {params.title}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LinksMenu;
