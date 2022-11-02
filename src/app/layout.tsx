import "./globals.css";

import { getPageBySlug } from "../helpers/getPageBySlug";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await getPageBySlug("index");
  return (
    <html lang="en">
      <head>
        <title>{data.title}</title>
        <meta name="description" content={data.subtitle} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
